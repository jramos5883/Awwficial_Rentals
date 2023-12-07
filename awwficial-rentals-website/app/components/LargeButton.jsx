import Link from 'next/link'
import {lato} from '../ui/fonts.jsx';
export default function LargeButton ({name, href}) {
  return (
    <Link href={href}>
      <button className='flex px-[18px] py-3.5 rounded-lg	bg-primary text-white' style={{ fontFamily: lato }}>
        {name}
      </button>
    </Link>
  )
}