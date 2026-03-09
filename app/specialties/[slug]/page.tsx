import type { Metadata } from 'next'
import specialties10 from '@/data/specialties-10-value-first'
import specialties20 from '@/data/specialties-20-value-first'
import painManagementPillar from '@/data/pain-management-pillar.json'
import spineSurgeryPillar from '@/data/spine-surgery-pillar.json'
import neurologyPillar from '@/data/neurology-pillar.json'
import addictionMedicinePillar from '@/data/addiction-medicine-pillar.json'
import urgentCarePillar from '@/data/urgent-care-pillar.json'
import psychiatryPillar from '@/data/psychiatry-pillar.json'
import orthopedicSurgeryPillar from '@/data/orthopedic-surgery-pillar.json'
import dermatologyPillar from '@/data/dermatology-pillar.json'
import cardiologyPillar from '@/data/cardiology-pillar.json'
import primaryCarePillar from '@/data/primary-care-pillar.json'
import pulmonologyPillar from '@/data/pulmonology-pillar.json'
import gastroenterologyPillar from '@/data/gastroenterology-pillar.json'
import endocrinologyPillar from '@/data/endocrinology-pillar.json'
import nephrologyPillar from '@/data/nephrology-pillar.json'
import oncologyPillar from '@/data/oncology-pillar.json'
import obgynPillar from '@/data/obgyn-pillar.json'
import pediatricsPillar from '@/data/pediatrics-pillar.json'
import entPillar from '@/data/ent-pillar.json'
import ophthalmologyPillar from '@/data/ophthalmology-pillar.json'
import podiatryPillar from '@/data/podiatry-pillar.json'
import oralSurgeryPillar from '@/data/oral-surgery-pillar.json'
import infusionCentersPillar from '@/data/infusion-centers-pillar.json'
import allergyPillar from '@/data/allergy-pillar.json'
import neurosurgeryPillar from '@/data/neurosurgery-pillar.json'
import sportsMedicinePillar from '@/data/sports-medicine-pillar.json'
import physicalTherapyPillar from '@/data/physical-therapy-pillar.json'
import plasticSurgeryPillar from '@/data/plastic-surgery-pillar.json'
import rheumatologyPillar from '@/data/rheumatology-pillar.json'
import vascularSurgeryPillar from '@/data/vascular-surgery-pillar.json'
import woundCarePillar from '@/data/wound-care-pillar.json'
import generalSurgeryPillar from '@/data/general-surgery-pillar.json'
import chiropracticPillar from '@/data/chiropractic-pillar.json'
import behavioralHealthPillar from '@/data/behavioral-health-pillar.json'
import allergyImmunologyPillar from '@/data/allergy-immunology-pillar.json'
import { getSpecialtyPageData, getAllSpecialtyParams } from '@/lib/feature-specialty-data'
import JsonSpecialtyPage from '@/components/templates/JsonSpecialtyPage'
import PillarSpecialtyPage, { type PillarData } from '@/components/templates/PillarSpecialtyPage'
import SpecialtyPage from '@/components/templates/SpecialtyPage'

// Pillar pages keyed by slug — checked before JSON specialties.
// Each JSON is cast to PillarData so varying schema shapes don't cause type errors.
const pillarPages: Record<string, PillarData> = {
  'pain-management': painManagementPillar as unknown as PillarData,
  'spine-surgery': spineSurgeryPillar as unknown as PillarData,
  'neurology': neurologyPillar as unknown as PillarData,
  'addiction-medicine': addictionMedicinePillar as unknown as PillarData,
  'urgent-care': urgentCarePillar as unknown as PillarData,
  'psychiatry': psychiatryPillar as unknown as PillarData,
  'orthopedic-surgery': orthopedicSurgeryPillar as unknown as PillarData,
  'dermatology': dermatologyPillar as unknown as PillarData,
  'cardiology': cardiologyPillar as unknown as PillarData,
  'primary-care': primaryCarePillar as unknown as PillarData,
  'pulmonology': pulmonologyPillar as unknown as PillarData,
  'gastroenterology': gastroenterologyPillar as unknown as PillarData,
  'endocrinology': endocrinologyPillar as unknown as PillarData,
  'nephrology': nephrologyPillar as unknown as PillarData,
  'oncology': oncologyPillar as unknown as PillarData,
  'ob-gyn': obgynPillar as unknown as PillarData,
  'pediatrics': pediatricsPillar as unknown as PillarData,
  'ent': entPillar as unknown as PillarData,
  'ophthalmology': ophthalmologyPillar as unknown as PillarData,
  'podiatry': podiatryPillar as unknown as PillarData,
  'oral-surgery': oralSurgeryPillar as unknown as PillarData,
  'infusion-centers': infusionCentersPillar as unknown as PillarData,
  'allergy': allergyPillar as unknown as PillarData,
  'neurosurgery': neurosurgeryPillar as unknown as PillarData,
  'sports-medicine': sportsMedicinePillar as unknown as PillarData,
  'physical-therapy': physicalTherapyPillar as unknown as PillarData,
  'plastic-surgery': plasticSurgeryPillar as unknown as PillarData,
  'rheumatology': rheumatologyPillar as unknown as PillarData,
  'vascular-surgery': vascularSurgeryPillar as unknown as PillarData,
  'wound-care': woundCarePillar as unknown as PillarData,
  'general-surgery': generalSurgeryPillar as unknown as PillarData,
  'chiropractic': chiropracticPillar as unknown as PillarData,
  'behavioral-health': behavioralHealthPillar as unknown as PillarData,
  'allergy-immunology': allergyImmunologyPillar as unknown as PillarData,
}

// Filter out slugs handled by pillar pages to avoid duplicate routing
const specialtiesData = [...specialties10, ...specialties20].filter(
  (s) => !(s.slug in pillarPages)
)
type JsonSpecialty = (typeof specialtiesData)[number]

export function generateStaticParams() {
  const pillarSlugs = Object.keys(pillarPages)
  const jsonSlugs = new Set<string>([...pillarSlugs, ...specialtiesData.map((s) => s.slug)])
  const generatedSlugs = getAllSpecialtyParams()
    .map((p) => p.specialtySlug)
    .filter((slug) => !jsonSlugs.has(slug))
  return [
    ...pillarSlugs.map((slug) => ({ slug })),
    ...specialtiesData.map((s) => ({ slug: s.slug })),
    ...generatedSlugs.map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const pillar = pillarPages[params.slug]
  if (pillar) {
    const pillarWithDate = pillar as unknown as { publishDate?: string }
    return {
      title: pillar.meta.title,
      description: pillar.meta.description,
      keywords: pillar.meta.keywords ? [...pillar.meta.keywords] : undefined,
      openGraph: {
        title: pillar.meta.title,
        description: pillar.meta.description,
        type: 'article',
        ...(pillarWithDate.publishDate
          ? { publishedTime: pillarWithDate.publishDate }
          : {}),
      },
    }
  }
  const jsonData = specialtiesData.find((s) => s.slug === params.slug) as JsonSpecialty | undefined
  if (jsonData) {
    return {
      title: jsonData.meta.title,
      description: jsonData.meta.description,
      openGraph: {
        title: jsonData.meta.title,
        description: jsonData.meta.description,
        type: 'website',
      },
    }
  }
  const generated = getSpecialtyPageData(params.slug)
  if (generated) {
    return {
      title: generated.metaTitle,
      description: generated.metaDescription,
      openGraph: {
        title: generated.metaTitle,
        description: generated.metaDescription,
        type: 'website',
      },
    }
  }
  return {}
}

export default function SpecialtySlugPage({ params }: { params: { slug: string } }) {
  const pillar = pillarPages[params.slug]
  if (pillar) {
    return <PillarSpecialtyPage data={pillar} />
  }
  const jsonData = specialtiesData.find((s) => s.slug === params.slug) as JsonSpecialty | undefined
  if (jsonData) {
    return <JsonSpecialtyPage data={jsonData} />
  }
  const generated = getSpecialtyPageData(params.slug)
  if (!generated) return null
  return <SpecialtyPage data={generated} />
}
