/// <reference types="@valenced/themes-api" />

// Solar iconpack - big iconpack from mudrhiod/discord-iconpacks
// Icons hosted at: https://github.com/mudrhiod/discord-iconpacks/tree/main/plus/solar
// 267 icons total

const BASE_URL = "https://raw.githubusercontent.com/mudrhiod/discord-iconpacks/main/plus/solar/design/components/Icon/native/redesign/generated/images"

// Common icon names - mapping will work for any icons present
const iconNames = [
	"AccessibilityIcon", "ActivitiesIcon", "AnalyticsIcon", "AnnouncementsIcon",
	"AnnouncementsLockIcon", "AnnouncementsWarningIcon", "AppsIcon", "ArrowAngleLeftUpIcon",
	"ArrowAngleRightUpIcon", "ArrowLargeDownIcon", "ArrowLargeLeftIcon", "ArrowLargeRightIcon",
	"ArrowSmallDownIcon", "ArrowSmallLeftIcon", "ArrowSmallRightIcon", "ArrowSmallUpIcon",
	"ArrowsUpDownIcon", "AtIcon", "AttachmentIcon", "BackspaceIcon", "BeakerIcon",
	"BellIcon", "BellSlashIcon", "BookmarkIcon", "BookmarkOutlineIcon", "CalendarIcon",
	"CalendarMinusIcon", "CalendarPlusIcon", "CalendarXIcon", "CameraIcon", "CameraSwapIcon",
	"ChannelListIcon", "ChannelListMagnifyingGlassIcon", "ChannelNotificationIcon",
	"ChannelsFollowedIcon", "ChannelsTextIcon", "ChannelsTextLockedIcon", "ChannelsTextWarningIcon",
	"ChannelsVoiceIcon", "ChannelsVoiceLockedIcon", "ChannelsVoiceNormalIcon",
	"ChannelsVoiceWarningIcon", "ChannelsVoiceXIcon", "ChatIcon", "ChatAlertIcon",
	"ChatArrowRightIcon", "ChatCheckIcon", "ChatMarkUnreadIcon", "ChatPlusIcon",
	"ChatSmileIcon", "ChatWarningIcon", "ChatXIcon", "CheckmarkLargeBoldIcon",
	"CheckmarkLargeIcon", "CheckmarkSmallBoldIcon", "CheckmarkSmallIcon",
	"CircleCheckIcon", "CircleExclamationPointIcon", "CircleInformationIcon",
	"CircleMinusIcon", "CirclePlusIcon", "CircleQuestionIcon", "CircleWarningIcon",
	"CircleXIcon", "ClockIcon", "CloseIcon", "CloudIcon", "CodeIcon", "ColorPaletteIcon",
	"CommandIcon", "ContactIcon", "CopyIcon", "CreditCardIcon", "CrownIcon",
	"CurrentVoiceIcon", "CursorIcon", "DashboardIcon", "DecorationsIcon",
	"DeviceMobileIcon", "DeviceRouterIcon", "DiamondIcon", "DisconnectIcon",
	"DiscordIcon", "DmArrowIcon", "DoNotDisturbIcon", "DownloadIcon", "DragHandleBarsIcon",
	"EditIcon", "EmailIcon", "EmojiIcon", "ExitIcon", "ExpandIcon", "ExternalLinkIcon",
	"EyeIcon", "FaceIcon", "FastForwardIcon", "FileIcon", "FileZipIcon", "FilterIcon",
	"FlagIcon", "FlowIcon", "FolderIcon", "ForumIcon", "GamepadIcon", "GearIcon",
	"GlobeIcon", "GoalIcon", "GridIcon", "GroupIcon", "GuildIcon", "HammerIcon",
	"HandLeftIcon", "HandRightIcon", "HashtagIcon", "HeadphonesIcon", "HeartIcon",
	"HomeIcon", "HubIcon", "ImageIcon", "InboxIcon", "InfoIcon", "KeyIcon",
	"KeyboardIcon", "LanguageIcon", "LevitateIcon", "LightningIcon", "LinkIcon",
	"ListIcon", "LocationIcon", "LockIcon", "LurkerIcon", "MegaphoneIcon", "MentionsIcon",
	"MicIcon", "MinimizeIcon", "MoonIcon", "MoreIcon", "MutingIcon", "NearbyIcon",
	"NewsChannelIcon", "NitroIcon", "NotificationBellIcon", "NumberedListIcon",
	"OfflineIcon", "OnboardingIcon", "OptionsIcon", "PaintbrushIcon", "PaperPlaneIcon",
	"PauseIcon", "PencilIcon", "PeopleIcon", "PersonAddIcon", "PersonIcon", "PhoneIcon",
	"PinIcon", "PlayIcon", "PlayGameIcon", "PodcastIcon", "PollsIcon", "PopoutIcon",
	"PowerIcon", "PresenceDndIcon", "PresenceOnlineIcon", "ProfileIcon",
	"PublicIcon", "PulseIcon", "PuzzlePieceIcon", "QuoteIcon", "RadarIcon", "RadioIcon",
	"RankIcon", "ReactionIcon", "RecordIcon", "RefreshIcon", "RepeatIcon", "ReplyIcon",
	"ReportIcon", "RetryIcon", "RewindIcon", "RocketIcon", "RssIcon", "RunningIcon",
	"SatelliteIcon", "SaveIcon", "ScreenShareIcon", "SearchIcon", "SettingsIcon",
	"ShareIcon", "ShieldIcon", "ShowMoreIcon", "ShuffleIcon", "SidebarIcon",
	"SkipBackIcon", "SkipForwardIcon", "SlowModeIcon", "SmallArrowDownIcon",
	"SmallArrowLeftIcon", "SmallArrowRightIcon", "SmallArrowUpIcon", "SmileIcon",
	"SoundOnIcon", "SparkleIcon", "StarIcon", "StatusOnlineIcon", "StopIcon",
	"StoreIcon", "SunIcon", "SuperSpeedIcon", "SupplyRunIcon", "SwitchIcon",
	"TableIcon", "TargetArrowIcon", "TelephoneIcon", "TestTubeIcon", "ThreadChannelIcon",
	"TicketIcon", "TimerIcon", "Tool", "ToolsIcon", "TrashIcon", "TrophyIcon",
	"TruckIcon", "UnderlineIcon", "UnsortedIcon", "UploadIcon", "UserCommentIcon",
	"UserPersonIcon", "UserSettingsIcon", "UsersIcon", "VideoIcon", "VideoNoneIcon",
	"VolumeIcon", "WandIcon", "WebhookIcon", "WidgetsIcon", "WifiIcon", "ZapIcon",
	"ZoomInIcon", "ZoomOutIcon",
]

const icons: Record<string, string> = {}
for (const name of iconNames) {
	icons[name] = `${BASE_URL}/${name}.png`
}

export default plugin({
	preInit({ themes }) {
		themes.registerGroup('dead1nsane', {
			name: 'DEAD1nsane',
			description: 'Iconpacks from Rosiecord & ThemesPlus',
		})

		themes.registerIconPack('dead1nsane', 'solar', {
			name: 'Solar',
			description: 'A giant iconpack, as big as the solar system!',
			icons,
		})
	},
})