// src/app/api/og-image/route.ts
import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const targetUrl = searchParams.get('url')

  if (!targetUrl) {
    return NextResponse.json({ error: 'url 필요함' }, { status: 400 })
  }

  try {
    // 뉴스 URL의 HTML 가져오기
    const res = await fetch(targetUrl)
    const html = await res.text()

    // cheerio로 og:image 파싱
    const $ = cheerio.load(html)
    const ogImage = $('meta[property="og:image"]').attr('content')

    if (ogImage) {
      // 실제 이미지를 가져와서 프록시
      const imageRes = await fetch(ogImage)

      if (imageRes.ok) {
        const imageBuffer = await imageRes.arrayBuffer()

        return new Response(imageBuffer, {
          headers: {
            'Content-Type':
              imageRes.headers.get('Content-Type') || 'image/jpeg',
            'Cache-Control': 'public, max-age=3600'
          }
        })
      }
    }
    throw new Error('이미지 가져오기 실패')
  } catch {
    throw new Error('이미지 가져오기 실패')
  }
}
