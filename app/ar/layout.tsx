import '@/app/globals.css'

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
