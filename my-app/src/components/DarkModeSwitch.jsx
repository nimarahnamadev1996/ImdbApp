'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';



const DarkModeSwitch = () => {

  const { theme, setTheme, systemTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === 'system' ? systemTheme : theme


  useEffect(() => {
    setMounted(true)
  },[])

  return (
    <>
     <div>
       {
        currentTheme === 'dark' ? (
          <MdLightMode
           className='text-xl cursor-pointer hover:text-amber-500'
           onClick={() => setTheme('light')}/>
        ) : (
          <MdDarkMode
           className='text-xl cursor-pointer hover:text-amber-500'
           onClick={() => setTheme('dark')}/>
        )
       }
     </div>
    </>
  )
}

export default DarkModeSwitch