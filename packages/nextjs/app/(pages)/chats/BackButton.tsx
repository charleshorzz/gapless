'use client'
import { IconChevronLeft } from '@tabler/icons-react'
import React from 'react'
import { useOpenStore } from "~~/app/store";

const BackButton = () => {
    const {toggleOpen} = useOpenStore()
  return (
    <div className="block lg:hidden cursor-pointer hover:text-neutral-500 dark:hover:text-neutral-400" onClick={toggleOpen}><IconChevronLeft/></div>
  )
}

export default BackButton