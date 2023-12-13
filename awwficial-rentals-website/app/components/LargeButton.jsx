import Link from 'next/link'
import {lato} from '../ui/fonts.jsx';
export default function LargeButton ({className, name, href}) {
  return (
    <Link href={href}>
      <button  className={`${className} flex flex-col items-center px-[18px] py-3.5 rounded-lg hover:bg-[#541D59]	bg-primary text-white text-xl leading-7 not-italic active:bg-[#39033D] disabled:bg-[#7E1F8680]`} style={{ fontFamily: lato.className }}>
        {name}
      </button>
    </Link>
  )
}