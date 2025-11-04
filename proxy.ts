import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

const authRoutes = ['/auth', '/auth/success', '/auth/error'] as const

export async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl
	const session = await auth.api.getSession({ headers: await headers() })

	if (session && authRoutes.includes(pathname as any)) {
		return NextResponse.redirect(new URL('/dashboard', request.url))
	}

	if (!session && pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth/:path*', '/auth', '/dashboard/:path*', '/dashboard'],
}