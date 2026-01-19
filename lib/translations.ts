export type Language = 'en' | 'pl';

interface Translation {
  common: {
    appName: string;
    tagline: string;
  };
  home: {
    inputLabel: string;
    inputPlaceholder: string;
    startButton: string;
    historyLink: string;
    emptyHistory: string;
    startFirst: string;
  };
  timer: {
    workingOn: string;
    finishEarly: string;
    finish: string;
    timeUp: string;
    loading: string;
  };
  summary: {
    finished: string;
    whatAccomplished: string;
    whatAccomplishedHint: string;
    textAreaPlaceholder: string;
    saveButton: string;
  };
  history: {
    title: string;
    newLoop: string;
    empty: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    common: {
      appName: 'FocusLoop',
      tagline: 'Work in short loops. Achieve real results.',
    },
    home: {
      inputLabel: 'What are you working on?',
      inputPlaceholder: 'E.g. Write Timer component...',
      startButton: 'Start Focus Loop',
      historyLink: 'My History',
      emptyHistory: 'No completed loops yet.',
      startFirst: 'Start your first loop!',
    },
    timer: {
      workingOn: 'WORKING ON',
      finishEarly: 'Finish Early',
      finish: 'Summarize Work',
      timeUp: 'Time is up! Great job.',
      loading: 'Loading...',
    },
    summary: {
      finished: 'Loop Finished!',
      whatAccomplished: 'What did you get done?',
      whatAccomplishedHint: '(1-2 sentences)',
      textAreaPlaceholder: 'Be specific, e.g. "Created file structure and configured Tailwind"...',
      saveButton: 'Save & View History',
    },
    history: {
      title: 'Your History',
      newLoop: 'New Loop',
      empty: 'No loops recorded yet.',
    },
  },
  pl: {
    common: {
      appName: 'FocusLoop',
      tagline: 'Pracuj w krótkich pętlach. Osiągaj realne efekty.',
    },
    home: {
      inputLabel: 'Twój cel na teraz',
      inputPlaceholder: 'Np. Napisać komponent Timer...',
      startButton: 'Rozpocznij pętlę',
      historyLink: 'Moja Historia',
      emptyHistory: 'Nie masz jeszcze żadnych zakończonych pętli.',
      startFirst: 'Rozpocznij pierwszą!',
    },
    timer: {
      workingOn: 'PRACUJESZ NAD',
      finishEarly: 'Zakończ wcześniej',
      finish: 'Podsumuj pracę',
      timeUp: 'Czas minął! Dobra robota.',
      loading: 'Ładowanie...',
    },
    summary: {
      finished: 'Zakończyłeś pętlę!',
      whatAccomplished: 'Co udało Ci się zrobić?',
      whatAccomplishedHint: '(1-2 zdania)',
      textAreaPlaceholder: 'Napisz konkretnie, np. "Stworzyłem strukturę plików i skonfigurowałem Tailwind"...',
      saveButton: 'Zapisz i zobacz historię',
    },
    history: {
      title: 'Twoja Historia',
      newLoop: 'Nowa Pętla',
      empty: 'Nie masz jeszcze żadnych zakończonych pętli.',
    },
  },
};
