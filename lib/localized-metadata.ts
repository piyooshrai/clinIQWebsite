import type { Metadata } from 'next'

const BASE_URL = 'https://www.cliniqhealthcare.com'

const SPANISH_METADATA = {
  '/': {
    title: 'Software de flujo de pacientes para clínicas',
    description:
      '¿Problemas con el flujo de pacientes y la facturación perdida? clinIQ es el software de operaciones clínicas que automatiza el registro, la facturación de RTM y las preautorizaciones.',
    ogDescription:
      'Gestión de filas de pacientes en tiempo real, registro digital, facturación de RTM y automatización de preautorizaciones, todo sobre su EHR actual.',
  },
  '/about': {
    title: 'Acerca de clinIQ: el sistema operativo de las clínicas modernas',
    description:
      'clinIQ es la capa operativa entre su EHR y las operaciones diarias de la clínica. Flujo de pacientes, registro, facturación de RTM, preautorización, programación, mensajería y analítica en un solo lugar.',
  },
  '/contact': {
    title: 'Contacto con clinIQ',
    description:
      'Comuníquese con clinIQ para preguntas generales, ventas, soporte o alianzas. info@cliniqhealthcare.com | sales@cliniqhealthcare.com | support@cliniqhealthcare.com',
    ogDescription: 'Comuníquese con clinIQ para preguntas generales, ventas, soporte o alianzas.',
  },
  '/demo': {
    title: 'Solicite una demo de la plataforma de operaciones clínicas clinIQ',
    description:
      'Vea clinIQ en 15 minutos. Lo configuramos para su especialidad. Flujo de pacientes, facturación de RTM, preautorización y registro digital, en su propio flujo de trabajo.',
  },
  '/pricing': {
    title: 'Precios de clinIQ',
    description:
      'Precios transparentes de clinIQ. Starter $449/mes, Professional $999/mes por ubicación, Enterprise personalizado. RTM $15 por paciente activo, autorización previa $8 por autorización.',
  },
  '/solutions': {
    title: 'A quién servimos: clinIQ',
    description:
      'clinIQ se adapta a la realidad operativa de FQHC, clínicas rurales, consultas concierge, centros quirúrgicos y más de 30 especialidades clínicas. Encuentre su tipo de consulta.',
  },
} as const

export type LocalizedPath = keyof typeof SPANISH_METADATA

export function localizeMetadata(base: Metadata, locale: string, path: LocalizedPath): Metadata {
  const englishUrl = path === '/' ? BASE_URL : `${BASE_URL}${path}`
  const spanishUrl = path === '/' ? `${BASE_URL}/es` : `${BASE_URL}/es${path}`
  const languages = { en: englishUrl, es: spanishUrl, 'x-default': englishUrl }

  if (locale === 'en') {
    return { ...base, alternates: { ...base.alternates, languages } }
  }
  if (locale !== 'es') return base

  const copy: { title: string; description: string; ogDescription?: string } = SPANISH_METADATA[path]
  return {
    ...base,
    title: copy.title,
    description: copy.description,
    keywords: undefined,
    alternates: { canonical: spanishUrl, languages },
    openGraph: {
      ...base.openGraph,
      title: copy.title,
      description: copy.ogDescription ?? copy.description,
      url: spanishUrl,
      locale: 'es_US',
    },
  }
}
