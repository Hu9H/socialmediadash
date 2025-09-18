import { cn } from "../utils/cn";

import ToggleThemeButton from "./toggleThemeButton";

type Props = {
    className?: string;
};

export default function Header({className}: Props) {
    return(
    
    <nav className={cn("flex flex-col w-full justify-between mb-2 gab-3 transition-all md:flex-row z-0",className)}>
    <div className="font-semibold">
        <h1 className="text-2xl text-Very-Dark-Blue-text dark:text-White-text md:text-3xl">Social Media Dashboard</h1>
        <p className="text-sm text-Dark-Desaturated-Blue  dark:text-Dark-Grayish-Blue ">Total Followers: 23,004</p>
    </div>
    <div className="flex w-full items-center justify-between gap-4 md:w-auto">
        <p className="font-semibold text-Dark-Desaturated-Blue  dark:text-Dark-Grayish-Blue">Dark Mode</p>
    <ToggleThemeButton/>
    </div>
  

    </nav>)
}