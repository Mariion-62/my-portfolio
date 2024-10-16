import { DictionaryKeys } from ".";
import { Routes } from "./routes";

interface NavElements {
  label: DictionaryKeys;
  link?: string;
  subMenu?: NavElements[];
}

export const navElements: NavElements[] = [
  { label: "navigation.home", link: Routes.HOME },
  {
    label: "navigation.careers",
    link: Routes.CAREERS,
  },
  { label: "navigation.project", link: Routes.PROJECTS },
];
