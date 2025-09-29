'use server'

import { redirect } from 'next/navigation'
import { SocialProvider } from './type'

const BASEURL = process.env.API_URL
export async function redirectToOAuth(provider: SocialProvider) {
  redirect(`${BASEURL}/oauth2/authorization/${provider}`)
}
