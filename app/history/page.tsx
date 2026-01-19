'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getLoops, Loop } from '@/lib/storage';
import LoopCard from '@/components/LoopCard';
import { useLanguage } from '@/components/LanguageProvider';

export default function HistoryPage() {
    const { t } = useLanguage();
    const [loops, setLoops] = useState<Loop[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedLoops = getLoops();
        setLoops(savedLoops);
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return null;

    return (
        <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-3xl mx-auto">
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-3xl font-bold">{t.history.title}</h1>
                <Link
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm"
                >
                    {t.history.newLoop}
                </Link>
            </header>

            {loops.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 mb-4">{t.history.empty}</p>
                    <Link href="/" className="text-blue-600 font-bold hover:underline">
                        {t.home.startFirst}
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {loops.map((loop) => (
                        <LoopCard key={loop.id} loop={loop} />
                    ))}
                </div>
            )}
        </div>
    );
}
