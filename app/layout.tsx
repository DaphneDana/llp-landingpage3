import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "AEGIS有限責任事業組合 | 地方自治体向けパートナーシップ",
  description: "専門性を以て地域社会に貢献する。AEGIS有限責任事業組合は地方自治体の皆様のパートナーです。",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-noto antialiased">{children}</body>
    </html>
  )
}
