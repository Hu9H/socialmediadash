"use client";

import { ThemeProvider } from "next-themes";

import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function ThemeContainer(props: Props) {
  return (
    <ThemeProvider attribute="class">{props.children}</ThemeProvider>
  )
}