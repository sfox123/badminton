import { IconUser, IconSettings, IconEye } from "@tabler/icons-react";
import { Team, Match, Umpire } from "../app/types";

import umpire from "@/img/umpire.jpg";
import ops from "@/img/ops.jpg";

import wfp from "@/img/wfp.png";
import unops from "@/img/unops.png";
import unicef from "@/img/unicef.png";
import undp from "@/img/undp.png";
import unfpa from "@/img/unfpa.png";
import iom from "@/img/iom.png";
import adb from "@/img/adb.png";
import un from "@/img/un.png";

export const teams: Team[] = [
  {
    name: "UNOPS",
    logo: `${unops.src}`,
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "Chamith B Fernando" },
          { FullName: "Charles Callanan" },
          { FullName: "Doloswala Thiyambarawatte Toshan Mahesh" },
          { FullName: "Eranga Perera" },
          { FullName: "Himath Weraduwa" },
          { FullName: "Jaime Alarma Olmos" },
        ],
        femalePlayers: [
          { FullName: "Amenthi Tarika Jasinghe" },
          { FullName: "Edirisinghe Mudiyanselage Sithmi Nimashi" },
          { FullName: "Yasodhara Kariyawasam" },
          { FullName: "Amarasingha Pathirannehelage Don Rashmi" },
          { FullName: "Sakunthala Kumari Amarasingha" },
        ],
      },
      {
        teamName: "Team 2",
        malePlayers: [
          { FullName: "Priyanga W. Jayasekara" },
          { FullName: "R.H.M.Imasha Bhagya Lakshmiwewa" },
          { FullName: "Richerd Amos Rajaratnam" },
          { FullName: "Sivalingam Sivashankar" },
          { FullName: "Sivananthavadivel Sivashangar" },
          { FullName: "Thushan Duminda Jayaratne" },
        ],
        femalePlayers: [
          { FullName: "Vijayapala Sinnathamby" },
          { FullName: "Yasasi Gayara Rathnabarana" },
          { FullName: "Subashini Kaneshwaren" },
          { FullName: "Gamage Anjalee Pitadeniya" },
          { FullName: "Kalyani Sivanathan" },
          { FullName: "Sripalee Ayanthi De Silva Gardiya Manawaduge" },
          { FullName: "Eunhye Cathy Lee" },
        ],
      },
    ],
  },
  {
    name: "WHO UNICEF",
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "Sapumal Dhanapala" },
          { FullName: "Sameera Hewage" },
          { FullName: "Noyal Rajkumar" },
          { FullName: "Ranjan Suriyabandara" },
          { FullName: "Naleen De Silva" },
          { FullName: "Shane Ferdinands" },
          { FullName: "Sanjeewa Warusawitharana" },
          { FullName: "Abner Daniel" },
        ],
        femalePlayers: [
          { FullName: "Geethani Dissanayake" },
          { FullName: "Kumudini Ragel" },
          { FullName: "Iresha Peiris" },
          { FullName: "Shashini Kulanayake " },
          { FullName: "Mithuni Jayawardana" },
        ],
      },
    ],
    logo: `${unicef.src}`,
  },
  {
    name: "UNDP",
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "Kasun Jayathilake" },
          { FullName: "Ravindu Jayasundara" },
          { FullName: "Sachithra Jayasundara" },
          { FullName: "Tharindu Jayasundara" },
          { FullName: "Tharindu Jayathilake" },
          { FullName: "Tharindu Jayathilake" },
          { FullName: "Tharindu Jayathilake" },
          { FullName: "Tharindu Jayathilake" },
        ],
        femalePlayers: [
          { FullName: "Kasuni Jayathilake" },
          { FullName: "Ravindi Jayasundara" },
          { FullName: "Sachithri Jayasundara" },
          { FullName: "Tharindi Jayasundara" },
          { FullName: "Tharindi Jayathilake" },
          { FullName: "Tharindi Jayathilake" },
          { FullName: "Tharindi Jayathilake" },
          { FullName: "Tharindi Jayathilake" },
        ],
      },
      {
        teamName: "Team 2",
        malePlayers: [
          { FullName: "Kasun Jayathilake" },
          { FullName: "Ravindu Jayasundara" },
          { FullName: "Sachithra Jayasundara" },
          { FullName: "Tharindu Jayasundara" },
          { FullName: "Tharindu Jayathilake" },
          { FullName: "Tharindu Jayathilake" },
          { FullName: "Tharindu Jayathilake" },
          { FullName: "Tharindu Jayathilake" },
        ],
        femalePlayers: [
          { FullName: "Kasuni Jayathilake" },
          { FullName: "Ravindi Jayasundara" },
          { FullName: "Sachithri Jayasundara" },
          { FullName: "Tharindi Jayasundara" },
          { FullName: "Tharindi Jayathilake" },
          { FullName: "Tharindi Jayathilake" },
          { FullName: "Tharindi Jayathilake" },
          { FullName: "Tharindi Jayathilake" },
        ],
      },
    ],
    logo: `${undp.src}`,
  },
  {
    name: "UNFPA",
    logo: `${unfpa.src}`,
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "John Doe" },
          { FullName: "Michael Smith" },
          { FullName: "Robert Johnson" },
        ],
        femalePlayers: [
          { FullName: "Emily Davis" },
          { FullName: "Jessica Garcia" },
          { FullName: "Sarah Miller" },
        ],
      },
    ],
  },
  {
    name: "IOM",
    logo: `${iom.src}`,
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "William Brown" },
          { FullName: "David Jones" },
          { FullName: "Richard Wilson" },
        ],
        femalePlayers: [
          { FullName: "Ashley Taylor" },
          { FullName: "Stephanie Anderson" },
          { FullName: "Laura Thomas" },
        ],
      },
      {
        teamName: "Team 2",
        malePlayers: [
          { FullName: "Charles Moore" },
          { FullName: "Joseph Martin" },
          { FullName: "Thomas Lee" },
        ],
        femalePlayers: [
          { FullName: "Karen Perez" },
          { FullName: "Nancy Thompson" },
          { FullName: "Betty White" },
        ],
      },
    ],
  },
  {
    name: "WFP",
    logo: `${wfp.src}`,
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "Christopher Harris" },
          { FullName: "Daniel Clark" },
          { FullName: "Matthew Lewis" },
        ],
        femalePlayers: [
          { FullName: "Michelle Robinson" },
          { FullName: "Amanda Walker" },
          { FullName: "Melissa Hall" },
        ],
      },
      {
        teamName: "Team 2",
        malePlayers: [
          { FullName: "Anthony Allen" },
          { FullName: "Mark Young" },
          { FullName: "Steven Hernandez" },
        ],
        femalePlayers: [
          { FullName: "Kimberly King" },
          { FullName: "Donna Wright" },
          { FullName: "Carol Lopez" },
        ],
      },
    ],
  },
  {
    name: "ADB",
    logo: `${adb.src}`,
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "Paul Hill" },
          { FullName: "Kevin Scott" },
          { FullName: "Brian Green" },
        ],
        femalePlayers: [
          { FullName: "Sandra Adams" },
          { FullName: "Jennifer Baker" },
          { FullName: "Lisa Gonzalez" },
        ],
      },
    ],
  },
  {
    name: "RCO FAO DSS",
    logo: `${un.src}`,
    teams: [
      {
        teamName: "Team 1",
        malePlayers: [
          { FullName: "George Nelson" },
          { FullName: "Edward Carter" },
          { FullName: "Ronald Mitchell" },
        ],
        femalePlayers: [
          { FullName: "Susan Perez" },
          { FullName: "Deborah Roberts" },
          { FullName: "Jessica Turner" },
        ],
      },
    ],
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
];

export const buttonData = [
  {
    name: "UMPIRE",
    icon: IconUser,
    before: `${umpire.src}`,
    after: `${umpire.src}`,
  },
  {
    name: "OPERATOR",
    icon: IconSettings,
    before: `${ops.src}`,
    after: `${ops.src}`,
  },
  {
    name: "AUDIENCE",
    icon: IconEye,
    before: "https://i.ibb.co/zSDZwnB/crowd.jpg",
    after:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG5qYmRnYW5seGxuaWd6eWk0NDJ5cWNzNTNvZ2dwempocTlxeTE1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FxCOdhlvEQXbeH6/giphy.gif",
  },
];

export const UmpireData: Umpire[] = [
  {
    name: "UMPIRE 1",
    pin: "1234",
  },
  {
    name: "UMPIRE 2",
    pin: "2222",
  },
  {
    name: "UMPIRE 3",
    pin: "3333",
  },
  {
    name: "UMPIRE 4",
    pin: "4444",
  },
];
