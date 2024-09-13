import { IconUser, IconSettings, IconEye } from "@tabler/icons-react";
import { Team, Match } from "../app/types";
import wfp from "@/img/wfp.png";
import unops from "@/img/unops.svg";
import unicef from "@/img/unicef.svg";
import undp from "@/img/undp.png";
import unfpa from "@/img/unfpa.png";
import iom from "@/img/iom.svg";

export const teams: Team[] = [
  {
    name: "UNOPS",
    team: ["Team A", "Team B"],
    logo: `${unops.src}`,
  },
  {
    name: "WHO UNICEF",
    team: ["Team A"],
    logo: `${unicef.src}`,
  },
  {
    name: "UNDP",
    team: ["Team A", "Team B"],
    logo: `${undp.src}`,
  },
  {
    name: "UNFPA",
    team: ["Team A"],
    logo: `${unfpa.src}`,
  },
  {
    name: "IOM",
    team: ["Team A", "Team B"],
    logo: `${iom.src}`,
  },
  {
    name: "WFP",
    team: ["Team A", "Team B"],
    logo: `${wfp.src}`,
  },
  {
    name: "ADB",
    team: ["Team A"],
    logo: "images/adb.svg",
  },
  {
    name: "RCO FAO DSS",
    team: ["Team A"],
    logo: "images/rco.svg",
  },
];

export const match: Match[] = [
  {
    name: "MS",
    values: [1, 2, 3],
    playerCount: 1,
  },
  {
    name: "WS",
    values: [1, 2],
    playerCount: 1,
  },
  {
    name: "MD",
    values: [1, 2],
    playerCount: 2,
  },
  {
    name: "WD",
    values: [1],
    playerCount: 2,
  },
  {
    name: "XD",
    values: [1, 2],
    playerCount: 2,
  },
  {
    name: "MX",
    values: [1, 2, 3],
    playerCount: 2,
  },
];

export const buttonData = [
  {
    name: "UMPIRE",
    icon: IconUser,
    before: "https://i.ibb.co/QXRTqh7/shuttle.jpg",
    after:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTRtOHAwYWFnczEwMmxuMXJ4M3Vha2dsb2xnZzQ4bzQ3Mmpxc3QyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JI5Na0rpieV8bSuKgO/giphy.gif",
  },
  {
    name: "OPERATOR",
    icon: IconSettings,
    before: "https://i.ibb.co/W59YC9G/console.jpg",
    after:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2xiemw0OG8xdXgzdTRjN2RwazBjejM1cWoyd2pmb2c5ZGk5ZXo2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriNLx3dUqFgVi86I/giphy.gif",
  },
  {
    name: "AUDIENCE",
    icon: IconEye,
    before: "https://i.ibb.co/zSDZwnB/crowd.jpg",
    after:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG5qYmRnYW5seGxuaWd6eWk0NDJ5cWNzNTNvZ2dwempocTlxeTE1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FxCOdhlvEQXbeH6/giphy.gif",
  },
];
