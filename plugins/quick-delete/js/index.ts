import { getModules } from '@valenced/modules/finders'
import { withProps } from '@valenced/modules/finders/filters'
import { instead } from '@valenced/patcher'

let unpatch: (() => void) | undefined

export default plugin({
	start({ cleanup }) {
		// Find the Popup module that handles show/openLazy
		cleanup(
			getModules(
				withProps('show', 'openLazy'),
				(PopupModule: { show: unknown; openLazy: unknown }) => {
					// Find the i18n module that has Messages
					getModules(
						withProps('Messages'),
						(i18nModule: { Messages: Record<string, string> }) => {
							try {
								const DELETE_MESSAGE_KEY = 'DELETE_MESSAGE'
								const deleteMessageTitle = i18nModule.Messages?.[DELETE_MESSAGE_KEY]

								if (!deleteMessageTitle) return

								unpatch = instead(
									PopupModule,
									'show',
									(args: unknown[], orig: (...args: unknown[]) => unknown) => {
										const popupArgs = args?.[0] as { title?: string; onConfirm?: () => void } | undefined

										if (popupArgs?.title === deleteMessageTitle) {
											// Auto-confirm delete without showing the dialog
											popupArgs.onConfirm?.()
										} else {
											// Show the normal dialog for anything else
											return orig(...args)
										}
									},
								)
							} catch (e) {
								console.error('QuickDelete: failed to patch', e)
							}
						},
						{ max: 1 },
					)
				},
				{ max: 1 },
			),
		)
	},
	stop() {
		unpatch?.()
	},
})