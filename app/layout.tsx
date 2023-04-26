import '@/styles/base/global.css';
import '@/styles/theme/colors.css';
import '@/styles/theme/fonts.css';
export const metadata = {
  title: 'CodeNet.io',
  description: 'social network for programmers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
