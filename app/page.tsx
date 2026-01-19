'use client';

import FocusInput from "@/components/FocusInput";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {language === 'en' ? '🇵🇱 PL' : '🇺🇸 EN'}
        </button>
      </div>

      <header className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{t.common.appName}</h1>
        <p className="text-gray-500 text-center max-w-sm">{t.common.tagline}</p>
      </header>

      <main className="flex flex-col gap-8 items-center w-full">
        <FocusInput />
      </main>

      <footer className="absolute bottom-8 text-sm text-gray-400 gap-6 flex">
        <Link href="/history" className="hover:text-gray-900 dark:hover:text-white transition underline underline-offset-4">
          {t.home.historyLink}
        </Link>
      </footer>
    </div>
  );
}
