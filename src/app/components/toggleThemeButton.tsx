"use client";
import React from 'react'
import { cn } from '../utils/cn'
import { useTheme } from 'next-themes';
type Props = {}

export default function ToggleThemeButton({}: Props) {
    const {theme, setTheme} =  useTheme()
    const restheme = theme
    const toggleTheme = () => {
        if (restheme == 'light') setTheme('dark');
        if (restheme == 'dark') setTheme('light');
      }
  
    return (
    <button 
      className={cn("flex h-5 w-10 z-0 items-center rounded-full cursor-pointer p-1",
      {'bg-Bright-Red': restheme=="light"},
      {"bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]" : restheme=="dark"})}
      onClick={toggleTheme}>
      <div 
        className={cn("h-4 w-4 rounded-full z-0 bg-White transition-all dark:bg-Very-Dark-Blue",
        {'translate-x-0': restheme=="light"},
        {'translate-x-full' : restheme=="dark"})}
      />  
    </button>
  )
}