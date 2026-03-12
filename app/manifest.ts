import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'clinIQ - Clinic Operations Platform',
    short_name: 'clinIQ',
    description: 'Patient check-in, RTM billing, patient flow, and pre-authorization for specialty clinics.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0d0c',
    theme_color: '#0d9488',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
