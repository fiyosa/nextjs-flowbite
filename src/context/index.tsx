'use client'

import { ReactNode, createContext, useState } from 'react'
import themeCtx from './themeCtx'

export const SetupContext = createContext({
  themeCtx,
})

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(themeCtx.get)

  const value = {
    themeCtx: { get: theme, set: setTheme, init: () => setTheme(themeCtx.get) },
  }

  return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>
}
