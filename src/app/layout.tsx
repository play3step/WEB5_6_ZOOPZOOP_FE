import type { Metadata } from 'next'
import './globals.css'
import { QueryProvider } from '@/app/_providers'
import Navbar from '@/shared/ui/navbar/Navbar'
import { GlobalModal } from '@/shared/ui/modal'
import AuthProvider from '@/app/_providers/auth-provider'

export const metadata: Metadata = {
  title: {
    default: 'ZoopZoop',
    template: '%s | ZoopZoop'
  },
  description: '마음에 드는 정보를 줍s',
  keywords: ['news', 'information'],
  authors: [{ name: 'ZoopZoop Team' }],
  creator: 'ZoopZoop',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '미정', // TODO: 도메인 변경후 수정
    siteName: 'ZoopZoop'
  },
  icons: {
    icon: '/image.png', // TODO: ico으로 변경
    apple: '/apple-touch-icon.png'
  }
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko-KR">
      <body className="antialiased flex ">
        <Navbar />
        <main className="flex-1">
          <QueryProvider>
            <AuthProvider>
              {children}
              <GlobalModal />
            </AuthProvider>
          </QueryProvider>
        </main>
      </body>
    </html>
  )
}
