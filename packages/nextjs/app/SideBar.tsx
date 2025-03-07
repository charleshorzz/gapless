"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/navbar";
import { cn } from "../utils/scaffold-eth/utils";
import {
  IconBrandGoogleHome,
  IconCurrencyEthereum,
  IconMessageChatbotFilled,
  IconSquareRoundedPlus,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

export function SideBar({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "Discover",
      href: "/",
      icon: <IconBrandGoogleHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Chats",
      href: "/chats",
      icon: <IconMessageChatbotFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Posts",
      href: "/posts",
      icon: <IconSquareRoundedPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-1">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col justify-center gap-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <SwitchTheme />
            </div>
          </div>
          <RainbowKitCustomConnectButton />
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link href="/" className="font-normal flex space-x-2 items-center text-xl text-black py-1 relative z-20">
      <IconCurrencyEthereum className="text-neutral-700 dark:text-[#607ae3] h-6 w-6 flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" text-black dark:text-[#607ae3] font-extrabold whitespace-pre"
      >
        Gapless
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <IconCurrencyEthereum className="text-neutral-700 dark:text-[#607ae3] h-6 w-6 flex-shrink-0" />
    </Link>
  );
};
