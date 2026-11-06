# FocusLoop ⚡

> **Work in short loops. Achieve real results.**  
> A minimalist productivity tool built for focus and reflection.

[![Live Demo](https://img.shields.io/badge/Live_Demo-focus--loop--kohl.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://focus-loop-kohl.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

<br />

🚀 **Live Application:** **[https://focus-loop-kohl.vercel.app](https://focus-loop-kohl.vercel.app)**

---

## 💡 Although It's Simple...

Most productivity apps are cluttered with TODO lists, complex trackers, and endless notifications. **FocusLoop** is different. It enforces a simple, powerful ritual:

1.  **Define one task** you want to focus on.
2.  **Work in a closed loop** (e.g., 25 minutes).
3.  **Summarize results** immediately after finishing.

No distractions. Just you and your current loop.

## ✨ Features

- 🎯 **One Goal at a Time**: Prevents multitasking.
- ⏱️ **Focus Timer**: A clean, distraction-free timer interface.
- 📝 **Micro-Summaries**: Reinforce what you accomplished, not just how long you worked.
- 🌍 **Bi-lingual**: Fully localized in **English** (default) and **Polish** (switchable).
- 💾 **Local First**: Your data is stored safely in your browser (LocalStorage). No signup required.
- 🌗 **Dark Mode**: Automatically adapts to your system preferences.

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/Karman1818/FocusLoop.git
cd FocusLoop
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start your first loop.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: React Context (for i18n) + LocalStorage (for data persistence)

## 📂 Project Structure

```bash
/app
 ├── focus/       # Timer page
 ├── history/     # Loop history list
 ├── summary/     # Post-loop summary input
 └── page.tsx     # Homepage (Loop configuration)
/components
 ├── Timer.tsx    # Countdown logic
 ├── LoopCard.tsx # History item display
 └── ...
/lib
 ├── storage.ts   # LocalStorage wrapper
 └── translations.ts # i18n dictionaries
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Karman1818/FocusLoop/issues).

---

Built with ❤️ using **Next.js**.


