import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

interface IMenu {
  icon: string;
  name: string;
  categoryNumber: number;
}

export const MENU: IMenu[] = [
  {
    icon: home,
    name: "Home",
    categoryNumber: 0,
  },
  {
    icon: game_icon,
    name: "Gaming",
    categoryNumber: 20,
  },
  {
    icon: automobiles,
    name: "Automobiles",
    categoryNumber: 2,
  },
  {
    icon: sports,
    name: "Sports",
    categoryNumber: 17,
  },
  {
    icon: entertainment,
    name: "Entertainment",
    categoryNumber: 24,
  },
  {
    icon: tech,
    name: "Tecnology",
    categoryNumber: 28,
  },
  {
    icon: music,
    name: "Music",
    categoryNumber: 10,
  },
  {
    icon: blogs,
    name: "Blogs",
    categoryNumber: 22,
  },
  {
    icon: news,
    name: "News",
    categoryNumber: 25,
  },
];

interface MenuChannels {
  name: string;
  channel: string;
}

export const Channel: MenuChannels[] = [
  {
    name: jack,
    channel: "PewDiePie",
  },
  {
    name: simon,
    channel: "MrBeast",
  },
  {
    name: tom,
    channel: "Justin Bieber",
  },
  {
    name: megan,
    channel: "5-Minute Crafts",
  },
  {
    name: cameron,
    channel: "Nas Daily",
  },
];
