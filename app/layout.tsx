// Root layout — minimal shell. html/body/fonts/providers live in app/[locale]/layout.tsx.
// Blog and resource pages (English-only) fall back here — they get a plain wrapper.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
