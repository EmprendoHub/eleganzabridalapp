import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import {  i18n } from '@/i18n.config'

const protectedPaths = ['/dashboard']

function getProtectedRoutes(protectedPaths, locales) {
  let protectedPathsWithLocale = [...protectedPaths]

  protectedPaths.forEach(route => {
    locales.forEach(
      locale =>
        (protectedPathsWithLocale = [
          ...protectedPathsWithLocale,
          `/${locale}${route}`
        ])
    )
  })

  return protectedPathsWithLocale
}

export function withAuthMiddleware(middleware) {
  return async (request, event) => {
    // Create a response object to pass down the chain
    const response = NextResponse.next()

    const token = await getToken({ req: request })

    // @ts-ignore
    request.nextauth = request.nextauth || {}
    // @ts-ignore
    request.nextauth.token = token
    const pathname = request.nextUrl.pathname

    const protectedPathsWithLocale = getProtectedRoutes(protectedPaths, [
      ...i18n.locales
    ])

    if (!token && protectedPathsWithLocale.includes(pathname)) {
      const signInUrl = new URL('/api/auth/signin', request.url)
      signInUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(signInUrl)
    }

    return middleware(request, event, response)
  }
}