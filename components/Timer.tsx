'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentLoop } from '@/lib/storage';
import { useLanguage } from './LanguageProvider';

const DEFAULT_DURATION = 25 * 60; // 25 minutes in seconds

export default function Timer() {
    const router = useRouter();
    const { t } = useLanguage();
    const [timeLeft, setTimeLeft] = useState(DEFAULT_DURATION);
    const [task, setTask] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const checkLoop = () => {
            const loop = getCurrentLoop();
            if (!loop) {
                router.push('/');
                return;
            }

            setTask(loop.task);
            const elapsed = Math.floor((Date.now() - loop.startTime) / 1000);
            const remaining = DEFAULT_DURATION - elapsed;

            if (remaining <= 0) {
                setTimeLeft(0);
            } else {
                setTimeLeft(remaining);
            }
            setIsLoaded(true);
        };

        checkLoop();
        const interval = setInterval(checkLoop, 1000);

        return () => clearInterval(interval);
    }, [router]);

    const finishLoop = () => {
        router.push('/summary');
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (!isLoaded) return <div className="text-gray-400">{t.timer.loading}</div>;

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
            <div className="mb-8 text-center">
                <span className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{t.timer.workingOn}</span>
                <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white leading-tight">{task}</h1>
            </div>

            <div className="relative mb-12">
                <div className="text-8xl font-mono font-bold tracking-tight text-gray-900 dark:text-white tabular-nums">
                    {formatTime(timeLeft)}
                </div>
                {timeLeft === 0 && (
                    <div className="absolute -bottom-8 left-0 right-0 text-center text-green-600 font-bold animate-bounce">
                        {t.timer.timeUp}
                    </div>
                )}
            </div>

            <button
                onClick={finishLoop}
                className={`
           px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105
           ${timeLeft === 0
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500/30'
                        : 'bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700'}
         `}
            >
                {timeLeft === 0 ? t.timer.finish : t.timer.finishEarly}
            </button>
        </div>
    );
}
