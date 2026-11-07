/// <reference types="@valenced/themes-api" />

// Rosiecord Plumpy iconpack - references remote URLs from Rairof/discord-iconpacks
// Icons hosted at: https://github.com/Rairof/discord-iconpacks/tree/main/Packs/Plumpy

const BASE_URL = "https://raw.githubusercontent.com/Rairof/discord-iconpacks/main/Packs/Plumpy/design/components/Icon/native/redesign/generated/images"

const icons: Record<string, string> = {}
const iconNames = [
	"AccessibilityIcon", "ActivitiesIcon", "AddSuperReactionIcon", "AnalyticsIcon",
	"AnnouncementsIcon", "AnnouncementsLockIcon", "AnnouncementsWarningIcon",
	"AppsIcon", "ArrowAngleLeftUpIcon", "ArrowAngleRightUpIcon", "ArrowLargeDownIcon",
	"ArrowLargeLeftIcon", "ArrowLargeRightIcon", "ArrowSmallDownIcon", "ArrowSmallLeftIcon",
	"ArrowSmallRightIcon", "ArrowSmallUpIcon", "ArrowsUpDownIcon", "AtIcon",
	"AttachmentIcon", "AuthorizedAppsIcon", "BackspaceIcon", "BadgeIcon", "BeakerIcon",
	"Bell", "BellIcon", "BellSlashIcon", "BellZIcon", "BicycleIcon", "BillIcon",
	"BookCheckIcon", "BookmarkIcon", "BookmarkOutlineIcon", "BoostTier1Icon",
	"BoostTier2Icon", "BoostTier3Icon", "BugIcon", "BurgerIcon", "CalendarIcon",
	"CalendarMinusIcon", "CalendarPlusIcon", "CalendarXIcon", "CallIcon", "CameraIcon",
	"CameraSwapIcon", "CaretLeftIcon", "CaretRightIcon", "CarIcon", "CastIcon",
	"ChannelListIcon", "ChannelListMagnifyingGlassIcon", "ChannelNotificationIcon",
	"ChannelsFollowedIcon", "ChannelsTextIcon", "ChannelsTextLockedIcon",
	"ChannelsTextWarningIcon", "ChannelsVoiceIcon", "ChannelsVoiceLockedIcon",
	"ChannelsVoiceNormalIcon", "ChannelsVoiceWarningIcon", "ChannelsVoiceXIcon",
	"Chat", "ChatAlertIcon", "ChatArrowRightIcon", "ChatCheckIcon", "ChatIcon",
	"ChatMarkUnreadIcon", "ChatPlusIcon", "ChatSmileIcon", "ChatWarningIcon", "ChatXIcon",
	"Checkmark", "CheckmarkLargeBoldIcon", "CheckmarkLargeIcon", "CheckmarkSmallBoldIcon",
	"CheckmarkSmallIcon", "ChevronLargeDownIcon", "ChevronLargeLeftIcon",
	"ChevronLargeRightIcon", "ChevronLargeUpIcon", "ChevronSmallDownIcon",
	"ChevronSmallLeftIcon", "ChevronSmallRightIcon", "ChevronSmallUpIcon",
	"CircleCheckIcon", "CircleCheckIcon-primary", "CircleCheckIcon-secondary",
	"CircleExclamationPointIcon", "CircleExclamationPointIcon-primary",
	"CircleExclamationPointIcon-secondary", "CircleInformationIcon",
	"CircleInformationIcon-primary", "CircleInformationIcon-secondary",
	"CircleMinusIcon", "CircleMinusIcon-primary", "CircleMinusIcon-secondary",
	"CirclePlayIcon", "CirclePlayIcon-primary", "CirclePlayIcon-secondary",
	"CirclePlusIcon", "CirclePlusIcon-", "CirclePlusIcon-primary", "CirclePlusIcon-secondary",
	"CircleQuestionIcon", "CircleQuestionIcon-primary", "CircleQuestionIcon-secondary",
	"CircleWarningIcon", "CircleWarningIcon-primary", "CircleWarningIcon-secondary",
	"CircleXIcon", "CircleXIcon-primary", "CircleXIcon-secondary", "ClearIcon",
	"ClockIcon", "ClockWarningIcon", "CloseIcon", "CloudIcon", "CodeIcon",
	"ColorPaletteIcon", "CommandIcon", "CompassIcon", "ContactIcon",
	"CopyIcon", "CreditCardIcon", "CrownIcon", "CurrentVoiceIcon", "CursorIcon",
	"CustomStatusIcon", "DangerIcon", "DashboardIcon", "DecorationsIcon",
	"DeviceMobileIcon", "DeviceRouterIcon", "DiamondIcon", "DisconnectIcon",
	"DiscordIcon", "DmArrowIcon", "DoNotDisturbIcon", "DownloadIcon",
	"DragHandleBarsIcon", "EditIcon", "EmailIcon", "EmojiIcon", "ExitIcon",
	"ExpandIcon", "ExternalLinkIcon", "EyeIcon", "FaceIcon", "FastForwardIcon",
	"FileIcon", "FileZipIcon", "FilterIcon", "FlagIcon", "FlowIcon", "FolderIcon",
	"ForumIcon", "ForwardIcon", "GamepadIcon", "GearIcon", "GiftIcon", "GitHubIcon",
	"GlobeIcon", "GoalIcon", "GridIcon", "GroupIcon", "GuildBadgeDiscordIcon",
	"GuildBadgeHypesquadBalance", "GuildBadgeHypesquadBravery", "GuildBadgeHypesquadBrilliance",
	"GuildBadgeHypesquadEvents", "GuildBadgePremiumEarlySupporter", "GuildBadgeVerifiedBot",
	"GuildBadgeVerifiedDeveloper", "GuildIcon", "GuildSettingsIcon", "HammerIcon",
	"HandLeftIcon", "HandRightIcon", "HandshakeIcon", "HashtagIcon", "HeadphonesIcon",
	"HeartIcon", "HideIcon", "HomeIcon", "HubIcon", "IDeviceIcon", "ImageIcon",
	"InboxIcon", "InfoIcon", "InstagramIcon", "ItalicIcon", "KeyIcon", "KeyboardIcon",
	"LanguageIcon", "LevelUpCrownIcon", "LevitateIcon", "LightningIcon", "LinkIcon",
	"ListIcon", "LocationIcon", "LockIcon", "LurkerIcon", "MegaphoneIcon", "MentionsIcon",
	"MicIcon", "MICOffIcon", "MinimizeIcon", "ModBadgeIcon", "MoonIcon", "MoreIcon",
	"MutingIcon", "NearbyIcon", "NewsChannelIcon", "NitroIcon", "NotificationBellIcon",
	"NotificationCenterIcon", "NumberedListIcon", "OdysseyIcon", "OfflineIcon",
	"OnboardingIcon", "OptionsIcon", "OrbIcon", "PaintbrushIcon", "PaperPlaneIcon",
	"PaperplaneIcon", "PauseIcon", "PencilIcon", "PeopleIcon", "PersonAddIcon",
	"PersonIcon", "PhoneIcon", "PinIcon", "PlayIcon", "PlayGameIcon", "PodcastIcon",
	"PollsIcon", "PopoutIcon", "PortlandIcon", "PowerIcon", "PresenceBusyIcon",
	"PresenceDndIcon", "PresenceOfflineIcon", "PresenceOnlineIcon", "PresenceStreamingIcon",
	"PresenceUnknownIcon", "PreviewChannelIcon", "ProfileIcon", "PromotedIcon",
	"PublicIcon", "PulseIcon", "PuzzlePieceIcon", "QuestionsChannelsIcon", "QuoteIcon",
	"RadarIcon", "RadioIcon", "RaindropIcon", "RankIcon", "ReactionIcon",
	"RecordIcon", "RedditIcon", "RefreshIcon", "RepeatIcon", "ReplyIcon", "ReportIcon",
	"RetryIcon", "RewindIcon", "RocketIcon", "RssIcon", "RunningIcon", "SatelliteIcon",
	"SaveIcon", "ScreenaudioIcon", "ScreenShareIcon", "SearchIcon", "SettingsIcon",
	"ShareIcon", "ShieldIcon", "ShowMoreIcon", "ShuffleIcon", "SidebarIcon",
	"SkipBackIcon", "SkipForwardIcon", "SlackIcon", "SlowModeIcon", "SmallArrowDownIcon",
	"SmallArrowLeftIcon", "SmallArrowRightIcon", "SmallArrowUpIcon", "SmileIcon",
	"SnapchatIcon", "SoundOnIcon", "SparkleIcon", "StageChannelIcon", "StarFilledIcon",
	"StarIcon", "StatusOnlineIcon", "StopIcon", "StoreIcon", "StrikethroughIcon",
	"SunIcon", "SuperSpeedIcon", "SupplyRunIcon", "SwapIcon", "SwitchIcon", "SyncedIcon",
	"TableIcon", "TakeTheWheelIcon", "TargetArrowIcon", "TelegramIcon", "TelephoneIcon",
	"TerminatedMemberIcon", "TestTubeIcon", "TextAlignCenterIcon", "TextAlignLeftIcon",
	"TextAlignRightIcon", "ThemeIcon", "ThermometerIcon", "ThreadChannelIcon",
	"TicketIcon", "TidalIcon", "TimerIcon", "ToggleRightIcon", "ToiletPaperIcon",
	"Tool", "ToolsIcon", "TrashIcon", "TrophyIcon", "TruckIcon", "TwitterIcon",
	"UnavailibleMemberIcon", "UnderlineIcon", "UnsortedIcon", "UploadIcon",
	"UserCommentIcon", "UserCrownIcon", "UserFocusIcon", "UserGFXIcon",
	"UserPersonIcon", "UserSettingsIcon", "UserTypingIcon", "UsersIcon", "VideoIcon",
	"VideoNoneIcon", "UserVoiceIcon", "ViewChannelIcon", "VipMemberIcon", "VoiceChannelIcon",
	"VolumeIcon", "WandIcon", "WebhookIcon", "WidgetsIcon", "WifiIcon", "XBoxIcon",
	"ZapIcon", "ZoomInIcon", "ZoomOutIcon",
]

for (const name of iconNames) {
	icons[name] = `${BASE_URL}/${name}.png`
}

export default plugin({
	preInit({ themes }) {
		themes.registerGroup('dead1nsane', {
			name: 'DEAD1nsane',
			description: 'Iconpacks from Rosiecord & ThemesPlus',
		})

		themes.registerIconPack('dead1nsane', 'rosiecord-plumpy', {
			name: 'Rosiecord Plumpy',
			description: 'Popular Rosiecord iconpack with cute plumpy icons from Icons8.',
			icons,
		})
	},
})