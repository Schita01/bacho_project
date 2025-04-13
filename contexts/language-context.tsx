"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import { type Language, translations, type TranslationKey } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  dir: () => "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")

  // Set language direction based on selected language
  useEffect(() => {
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr"

    // Store language preference
    localStorage.setItem("language", language)
  }, [language])

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && ["EN", "RU", "AR", "GE"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations["EN"][key] || key
  }

  // Direction helper
  const dir = (): "ltr" | "rtl" => {
    return language === "AR" ? "rtl" : "ltr"
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
