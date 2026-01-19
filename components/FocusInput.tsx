'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { startLoop } from '@/lib/storage';
import { useLanguage } from './LanguageProvider';

export default function FocusInput() {
    const [task, setTask] = useState('');
    const router = useRouter();
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!task.trim()) return;
        startLoop(task);
        router.push('/focus');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">
                {t.home.inputLabel}
            </label>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder={t.home.inputPlaceholder}
                className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition text-xl placeholder:text-gray-400"
                autoFocus
            />
            <button
                type="submit"
                disabled={!task.trim()}
                className="p-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-[0.98]"
            >
                {t.home.startButton}
            </button>
        </form>
    );
}
