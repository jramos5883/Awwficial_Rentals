import Link from 'next/link'
import {lato} from '../ui/fonts.jsx';
export default function BorderlessButton ({name, href}) {
  return (
    <Link href={href}>
      <button className='rounded h-[64px] w-full flex flex-col justify-center items-center text-primary  ' style={{fontFamily: lato}}>{name}</button>
    </Link>
  )
}