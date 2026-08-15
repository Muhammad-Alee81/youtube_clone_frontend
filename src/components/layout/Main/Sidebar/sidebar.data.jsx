import {
  CircleUserRound,
  Clock,
  House,
  IdCard,
  ListPlus,
  RotateCcwClock,
  ThumbsUp,
  TvMinimalPlay,
} from "lucide-react";

import user from "/user.png";

const HouseIcon = <House size={10} strokeWidth={1} />;
const channelIcon = <IdCard size={68} strokeWidth={1} />;
const yourVideosIcon = <TvMinimalPlay size={68} strokeWidth={1} />;
const playListIcon = <ListPlus size={68} strokeWidth={1} />;
const HistoryIcon = <RotateCcwClock size={68} strokeWidth={1} />;
const watchLaterIcon = <Clock size={68} strokeWidth={1} />;
const LikeIcon = <ThumbsUp size={68} strokeWidth={1} />;
const personIcon = <CircleUserRound size={68} strokeWidth={1} />;

export const mainMenu = [
  {
    title: "Home",
    icon: HouseIcon,
  },
];

export const guestMenu = [
  {
    title: "Home",
    icon: HouseIcon,
  },

  {
    title: "Subscriptions",
    icon: channelIcon,
  },
  {
    title: "You",
    icon: personIcon,
  },
  {
    title: "History",
    icon: watchLaterIcon,
  },
];

export const subscribedChannels = [
  {
    title: "Chai or code ",
    icon: user,
  },
  {
    title: "Code with Harry",
    icon: user,
  },
  {
    title: "Ducky Reloaded",
    icon: user,
  },
  {
    title: "Kohistani",
    icon: user,
  },
  {
    title: "Alan Walkers",
    icon: user,
  },
  {
    title: "HBO",
    icon: user,
  },
  {
    title: "Chai or code ",
    icon: user,
  },
  {
    title: "Code with Harry",
    icon: user,
  },
  {
    title: "Ducky Reloaded",
    icon: user,
  },
  {
    title: "Kohistani",
    icon: user,
  },
  {
    title: "Alan Walkers",
    icon: user,
  },
  {
    title: "HBO",
    icon: user,
  },
];

export const userMenu = [
  {
    title: "Your Channel",
    icon: channelIcon,
  },
  {
    title: "History",
    icon: HistoryIcon,
  },
  {
    title: "Playlist",
    icon: playListIcon,
  },
  {
    title: "Watch Later",
    icon: watchLaterIcon,
  },
  {
    title: "Liked Videos",
    icon: LikeIcon,
  },
  {
    title: "Your Videos",
    icon: yourVideosIcon,
  },
];
