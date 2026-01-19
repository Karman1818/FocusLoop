'use client';

import { Loop } from '@/lib/storage';
import { useLanguage } from './LanguageProvider';

interface LoopCardProps {
    loop: Loop;
}

export default function LoopCard({ loop }: LoopCardProps) {
    const { language } = useLanguage();
    const date = new Date(loop.date);

    // Map 'en' to 'en-US', 'pl' to 'pl-PL' for date formatting
    const locale = language === 'en' ? 'en-US' : 'pl-PL';

    const formattedDate = date.toLocaleDateString(locale, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const minutes = Math.floor(loop.duration / 60);

    return (
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight">
                    {loop.task}
                </h3>
                <span className="text-xs font-mono text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-md ml-3 whitespace-nowrap">
                    {formattedDate}
                </span>
            </div>

            <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {loop.summary}
                </p>
            </div>

            <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {minutes} min
            </div>
        </div>
    );
}
