'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { i18n } from '@/i18n.config'

export default function LocaleSwitcher({classname}) {
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const search = searchParams.toString()
    const segments = pathName.split('/')
    segments[1] = locale
    const newsegment = segments.join('/')
    let newUrl
    if (search) {
      newUrl = newsegment + "?" + search
    }else {
      newUrl = newsegment
    }
    return newUrl
  }

  return (
    <ul className={`${classname} flex gap-x-2 pl-2`}>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className='rounded-full bg-slate-200 text-black text-sm px-2 py-1.5 shadow-sm hover:scale-110 ease-in-out duration-300'
            >
              {locale}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

