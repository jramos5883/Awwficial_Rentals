import Link from 'next/link'

export default function LargeButton ({name, href}) {
  return (
    <Link href={href}>
      <button className='flex px-[18px] py-3.5 rounded-lg	bg-primary text-white'>
        {name}
      </button>
    </Link>
  )
}