import { MdBrightness4 } from "react-icons/md";
import { TiAdjustBrightness } from "react-icons/ti";
import MattyusLogo from "../MattyusLogo";
import { FaAnchor } from "react-icons/fa";

export const calcThemes = [
  {
    name: "dark",
    primary: "#F61067",
    secondary: "#656FCD",
    tertiary: "#27CECE",
    quaternary: "#0B1532",
    screen: "#0B1532",
    screenText: "#fff",
    textOne: "#fff",
    textTwo: "#fff",
    gradientOne: "#0B1532",
    gradientTwo: "#060C1C",
    Icon: MdBrightness4,
  },
  {
    name: "light",
    primary: "#F61067",
    secondary: "#656FCD",
    tertiary: "#27CECE",
    quaternary: "#fff",
    screen: "#fff",
    screenText: "#2F2F2F",
    textOne: "#fff",
    textTwo: "#2F2F2F",
    gradientOne: "#fff",
    gradientTwo: "#E2E2E2",
    Icon: TiAdjustBrightness,
  },
  {
    name: "mattyus",
    primary: "#ad19ab",
    secondary: "#2a60dd",
    tertiary: "#1a1360",
    quaternary: "#03022b",
    screen: "#03022b",
    screenText: "#fff",
    textOne: "#fff",
    textTwo: "#fff",
    gradientOne: "#1c0e57",
    gradientTwo: "#020222",
    Icon: MattyusLogo,
  },
  {
    name: "aqua",
    primary: "#2a60dd",
    secondary: "#2a60dd",
    tertiary: "#0d2e68",
    quaternary: "#03022b",
    screen: "#03022b",
    screenText: "#fff",
    textOne: "#fff",
    textTwo: "#fff",
    gradientOne: "#1c0e4b",
    gradientTwo: "#020222",
    Icon: FaAnchor,
  },
];
