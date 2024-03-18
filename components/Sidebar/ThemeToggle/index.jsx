"use client";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import {useState} from "react";

const themes = {
  winter: "winter",
  dracula: "dracula"
}

const ThemeToggle = () => {
  const [ theme, setTheme ] = useState(themes.winter);

  const toggleTheme = () => {
    const theNextTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute('data-theme', theNextTheme);
    setTheme(theNextTheme);
  }

  return (
    <button onClick={toggleTheme} className="btn btn-outline btn-sm">
      { theme === themes.winter ? <BsMoonFill className="h-4 w-4" /> :  <BsSunFill className="h-4 w-4" />}
    </button>
  )
}
export default ThemeToggle
