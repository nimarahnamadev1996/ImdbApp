import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';



import MenuItem from './MenuItem'
import DarkModeSwitch from './DarkModeSwitch'




const Header = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto p-3 flex justify-between items-center'>

        <div className='flex gap-4'>
          <MenuItem title='home' address='/' Icon={AiFillHome} />
          <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
        </div>

        <div className='flex items-center gap-4'>
            <DarkModeSwitch/>

            <Link href='/' className='flex gap-1 items-center'>
             <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>Imdb</span>
             <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Header