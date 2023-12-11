import Link from 'next/link'
import {lato} from '../ui/fonts.jsx';
export default function BorderlessButton ({name, href}) {
  return (
    <Link href={href}>
      <button className='h-auto w-auto flex flex-col px-[18px] py-3.5 items-center text-primary border hover:border-primary-hover rounded text-xl leading-7 font-semibold	not-italic ' style={{fontFamily: lato}}>{name}</button>
    </Link>
  )
}