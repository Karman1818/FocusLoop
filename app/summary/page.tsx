'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentLoop, saveLoop, clearCurrentLoop, Loop } from '@/lib/storage';
import { useLanguage } from '@/components/LanguageProvider';

export default function SummaryPage() {
    const router = useRouter();
    const { t } = useLanguage();
    const [summary, setSummary] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [taskName, setTaskName] = useState('');

    useEffect(() => {
        const loop = getCurrentLoop();
        if (!loop) {
            router.push('/');
            return;
        }
        setTaskName(loop.task);
        setIsLoaded(true);
    }, [router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!summary.trim()) return;

        const currentLoop = getCurrentLoop();
        if (currentLoop) {
            const duration = Math.floor((Date.now() - currentLoop.startTime) / 1000);

            const newLoop: Loop = {
                id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
                task: currentLoop.task,
                duration: duration,
                summary: summary,
                date: new Date().toISOString(),
            };

            saveLoop(newLoop);
            clearCurrentLoop();
            router.push('/history');
        }
    };

    if (!isLoaded) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)] max-w-2xl mx-auto w-full">
            <div className="w-full text-center mb-8">
                <h2 className="text-xl text-gray-500 mb-2">{t.summary.finished}</h2>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{taskName}</h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700 dark:text-gray-300">
                        {t.summary.whatAccomplished} <span className="text-gray-400 font-normal">{t.summary.whatAccomplishedHint}</span>
                    </label>
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        placeholder={t.summary.textAreaPlaceholder}
                        rows={4}
                        className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 focus:border-green-500 dark:focus:border-green-500 outline-none transition resize-none text-lg"
                        autoFocus
                    />
                </div>

                <button
                    type="submit"
                    disabled={!summary.trim()}
                    className="w-full p-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-[0.98]"
                >
                    {t.summary.saveButton}
                </button>
            </form>
        </div>
    );
}
