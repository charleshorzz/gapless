"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // <div className={`flex space-x-2 h-8 items-center justify-center text-sm ${className}`}>  <--- original css
    <div className={`flex items-center justify-start gap-2  group/sidebar text-sm ${className}`}>
      <label htmlFor="theme-toggle" className={`swap swap-rotate ${!isDarkMode ? "swap-active" : ""}`}>
        <SunIcon className="swap-on h-5 w-5" />
        <MoonIcon className="swap-off h-5 w-5" />
      </label>
      <input
        id="theme-toggle"
        type="checkbox"
        className="toggle toggle-md border-neutral-700 bg-neutral-700 checked:bg-neutral-200 checked:border-none"
        onChange={handleToggle}
        checked={isDarkMode}
      />
    </div>
  );
};
