'use client'

import { SetupContext } from '@/context'
import { useContext, useEffect } from 'react'

export default function App({ children }: { children: React.ReactNode }) {
  const { themeCtx } = useContext(SetupContext)

  useEffect(() => {
    if (themeCtx.get.theme === 'dark') {
      localStorage.setItem('flowbite-theme-mode', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('flowbite-theme-mode', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [themeCtx.get.theme])

  useEffect(() => {
    //
  }, [])

  return <>{children}</>
}
