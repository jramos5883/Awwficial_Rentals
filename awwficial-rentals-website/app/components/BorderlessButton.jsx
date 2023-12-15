import Link from 'next/link'
import {lato} from '../ui/fonts.jsx';
export default function BorderlessButton ({name, href}) {
  return (
    <Link href={href}>
      <button className='h-auto w-auto flex flex-col px-[18px] py-3.5 items-center text-primary border-2 border-transparent hover:border-primary-hover rounded-lg text-xl leading-7 font-semibold	not-italic active:border-primary-active active:text-primary-active' style={{fontFamily: lato}}>{name}</button>
    </Link>
  )
}