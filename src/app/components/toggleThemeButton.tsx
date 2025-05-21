"use client";
import {useEffect, useState}from 'react'
import { cn } from '../utils/cn'
import { useTheme } from 'next-themes';


export default function ToggleThemeButton() {
    const {resolvedTheme, setTheme} =  useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true);
    }, []);
    const toggleTheme = () => {
        if (resolvedTheme == 'light') setTheme('dark');
        if (resolvedTheme == 'dark') setTheme('light');
      }
    if (!mounted) return null;
    return (
    <button 
      className={cn("flex h-5 w-10 z-0 items-center rounded-full cursor-pointer p-1",
      {'bg-Light-Toggle': resolvedTheme=="light"},
      {"bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]" : resolvedTheme=="dark"})}
      onClick={toggleTheme}>
      <div 
        className={cn("h-4 w-4 rounded-full z-0 bg-White transition-all dark:bg-Very-Dark-Blue",
        {'translate-x-0': resolvedTheme=="light"},
        {'translate-x-full' : resolvedTheme=="dark"})}
      />  
    </button>
  )
}