/**
 * clinIQ Feature × Specialty Page Generator
 * Generates all 840 feature × specialty pages.
 * 
 * Usage: npx ts-node --project tsconfig.scripts.json scripts/generate-feature-specialty-pages.ts
 * 
 * Pages already created manually (80 pages with unique copy) are skipped if they exist.
 */

import * as fs from 'fs/promises'
import * as path from 'path'

interface Feature {
  slug: string
  name: string
}

interface Specialty {
  slug: string
  name: string
}

const features: Feature[] = [
  { slug: 'patient-flow', name: 'Patient Flow' },
  { slug: 'check-in', name: 'Check-In' },
  { slug: 'scheduling', name: 'Scheduling' },
  { slug: 'rtm', name: 'RTM Billing' },
  { slug: 'pre-auth', name: 'Pre-Authorization' },
  { slug: 'analytics', name: 'Analytics' },
  { slug: 'lobbyview', name: 'LobbyView' },
]

const specialties: Specialty[] = [
  // Tier 1 — 10 specialties (hand-written pages exist)
  { slug: 'addiction-medicine', name: 'Addiction Medicine' },
  { slug: 'psychiatry', name: 'Psychiatry' },
  { slug: 'behavioral-health', name: 'Behavioral Health' },
  { slug: 'pain-management', name: 'Pain Management' },
  { slug: 'infusion-centers', name: 'Infusion Centers' },
  { slug: 'urgent-care', name: 'Urgent Care' },
  { slug: 'dialysis', name: 'Dialysis Centers' },
  { slug: 'oncology', name: 'Oncology' },
  { slug: 'orthopedic-surgery', name: 'Orthopedic Surgery' },
  { slug: 'physical-therapy', name: 'Physical Therapy' },
  // Tier 2 — 10 specialties (patient-flow pages exist; others generated)
  { slug: 'occupational-therapy', name: 'Occupational Therapy' },
  { slug: 'cardiology', name: 'Cardiology' },
  { slug: 'pulmonology', name: 'Pulmonology' },
  { slug: 'gastroenterology', name: 'Gastroenterology' },
  { slug: 'neurology', name: 'Neurology' },
  { slug: 'nephrology', name: 'Nephrology' },
  { slug: 'rheumatology', name: 'Rheumatology' },
  { slug: 'endocrinology', name: 'Endocrinology' },
  { slug: 'allergy-immunology', name: 'Allergy & Immunology' },
  { slug: 'primary-care', name: 'Primary Care' },
  // Tier 3 — specialties 21–60
  { slug: 'dermatology', name: 'Dermatology' },
  { slug: 'ob-gyn', name: 'OB/GYN' },
  { slug: 'urology', name: 'Urology' },
  { slug: 'ophthalmology', name: 'Ophthalmology' },
  { slug: 'ent', name: 'ENT' },
  { slug: 'hematology', name: 'Hematology' },
  { slug: 'infectious-disease', name: 'Infectious Disease' },
  { slug: 'geriatrics', name: 'Geriatrics' },
  { slug: 'pediatrics', name: 'Pediatrics' },
  { slug: 'neonatology', name: 'Neonatology' },
  { slug: 'sports-medicine', name: 'Sports Medicine' },
  { slug: 'wound-care', name: 'Wound Care' },
  { slug: 'sleep-medicine', name: 'Sleep Medicine' },
  { slug: 'palliative-care', name: 'Palliative Care' },
  { slug: 'transplant', name: 'Transplant Medicine' },
  { slug: 'vascular-surgery', name: 'Vascular Surgery' },
  { slug: 'colorectal-surgery', name: 'Colorectal Surgery' },
  { slug: 'general-surgery', name: 'General Surgery' },
  { slug: 'plastic-surgery', name: 'Plastic Surgery' },
  { slug: 'radiation-oncology', name: 'Radiation Oncology' },
  { slug: 'interventional-radiology', name: 'Interventional Radiology' },
  { slug: 'nuclear-medicine', name: 'Nuclear Medicine' },
  { slug: 'podiatry', name: 'Podiatry' },
  { slug: 'chiropractic', name: 'Chiropractic' },
  { slug: 'speech-therapy', name: 'Speech Therapy' },
  { slug: 'audiology', name: 'Audiology' },
  { slug: 'optometry', name: 'Optometry' },
  { slug: 'dental', name: 'Dental' },
  { slug: 'oral-surgery', name: 'Oral Surgery' },
  { slug: 'fertility', name: 'Fertility & Reproductive Endocrinology' },
  // Tier 4 — specialties 51–90
  { slug: 'bariatric', name: 'Bariatric Medicine' },
  { slug: 'weight-management', name: 'Weight Management' },
  { slug: 'integrative-medicine', name: 'Integrative Medicine' },
  { slug: 'functional-medicine', name: 'Functional Medicine' },
  { slug: 'concierge-medicine', name: 'Concierge Medicine' },
  { slug: 'telehealth', name: 'Telehealth Practice' },
  { slug: 'urgent-psychiatry', name: 'Urgent Psychiatry' },
  { slug: 'crisis-stabilization', name: 'Crisis Stabilization' },
  { slug: 'detox', name: 'Medical Detox' },
  { slug: 'residential-treatment', name: 'Residential Treatment' },
  { slug: 'iop', name: 'Intensive Outpatient (IOP)' },
  { slug: 'php', name: 'Partial Hospitalization (PHP)' },
  { slug: 'sober-living', name: 'Sober Living Support' },
  { slug: 'methadone-clinic', name: 'Methadone Clinic' },
  { slug: 'vivitrol-clinic', name: 'Vivitrol Clinic' },
  { slug: 'tms-therapy', name: 'TMS Therapy' },
  { slug: 'ketamine-clinic', name: 'Ketamine Clinic' },
  { slug: 'esketamine', name: 'Esketamine (Spravato) Clinic' },
  { slug: 'ect', name: 'Electroconvulsive Therapy (ECT)' },
  { slug: 'neuropsychology', name: 'Neuropsychology' },
  { slug: 'developmental-pediatrics', name: 'Developmental Pediatrics' },
  { slug: 'pediatric-psychiatry', name: 'Pediatric Psychiatry' },
  { slug: 'school-based-health', name: 'School-Based Health' },
  { slug: 'community-health', name: 'Community Health Center' },
  { slug: 'fqhc', name: 'FQHC' },
  { slug: 'rural-health', name: 'Rural Health Clinic' },
  { slug: 'tribal-health', name: 'Tribal Health' },
  { slug: 'va-affiliated', name: 'VA-Affiliated Clinic' },
  { slug: 'military-health', name: 'Military Health' },
  { slug: 'employee-health', name: 'Employee Health' },
  { slug: 'occupational-medicine', name: 'Occupational Medicine' },
  { slug: 'travel-medicine', name: 'Travel Medicine' },
  { slug: 'urgent-care-pediatric', name: 'Pediatric Urgent Care' },
  { slug: 'after-hours-care', name: 'After-Hours Care' },
  { slug: 'telemedicine-urgent', name: 'Telemedicine Urgent Care' },
  { slug: 'medical-spa', name: 'Medical Spa' },
  { slug: 'aesthetics', name: 'Aesthetic Medicine' },
  { slug: 'hair-restoration', name: 'Hair Restoration' },
  { slug: 'hormone-therapy', name: 'Hormone Therapy' },
  { slug: 'low-t-clinic', name: 'Low-T Clinic' },
  // Tier 5 — specialties 91–120
  { slug: 'vision-therapy', name: 'Vision Therapy' },
  { slug: 'vestibular-therapy', name: 'Vestibular Therapy' },
  { slug: 'lymphedema-therapy', name: 'Lymphedema Therapy' },
  { slug: 'hand-therapy', name: 'Hand Therapy' },
  { slug: 'pelvic-floor-pt', name: 'Pelvic Floor Physical Therapy' },
  { slug: 'aquatic-therapy', name: 'Aquatic Therapy' },
  { slug: 'equine-therapy', name: 'Equine-Assisted Therapy' },
  { slug: 'art-therapy', name: 'Art Therapy' },
  { slug: 'music-therapy', name: 'Music Therapy' },
  { slug: 'acupuncture', name: 'Acupuncture' },
  { slug: 'naturopathy', name: 'Naturopathic Medicine' },
  { slug: 'homeopathy', name: 'Homeopathic Medicine' },
  { slug: 'genetic-counseling', name: 'Genetic Counseling' },
  { slug: 'lactation', name: 'Lactation Consulting' },
  { slug: 'nutrition-counseling', name: 'Nutrition Counseling' },
  { slug: 'diabetes-education', name: 'Diabetes Education' },
  { slug: 'cardiac-rehab', name: 'Cardiac Rehabilitation' },
  { slug: 'pulmonary-rehab', name: 'Pulmonary Rehabilitation' },
  { slug: 'oncology-rehab', name: 'Oncology Rehabilitation' },
  { slug: 'stroke-rehab', name: 'Stroke Rehabilitation' },
  { slug: 'brain-injury-rehab', name: 'Brain Injury Rehabilitation' },
  { slug: 'spinal-cord-rehab', name: 'Spinal Cord Injury Rehab' },
  { slug: 'amputee-rehab', name: 'Amputee Rehabilitation' },
  { slug: 'burn-care', name: 'Burn Care' },
  { slug: 'hyperbaric', name: 'Hyperbaric Oxygen Therapy' },
  { slug: 'phototherapy', name: 'Phototherapy' },
  { slug: 'radiology', name: 'Radiology' },
  { slug: 'lab-services', name: 'Laboratory Services' },
  { slug: 'pathology', name: 'Pathology' },
  { slug: 'pharmacy-clinical', name: 'Clinical Pharmacy' },
]

function toPascalCase(str: string): string {
  return str.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
}

function generatePage(feature: Feature, specialty: Specialty): string {
  const componentName = `${toPascalCase(feature.slug)}${toPascalCase(specialty.slug)}Page`
  
  return `import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: '${feature.name} for ${specialty.name} Clinics | clinIQ',
  description: 'See how clinIQ ${feature.name.toLowerCase()} works for ${specialty.name.toLowerCase()} practices. Real-time visibility, less admin, better patient experience.',
}

export default function ${componentName}() {
  return (
    <FeatureSpecialtyPage
      featureSlug="${feature.slug}"
      featureName="${feature.name}"
      specialtySlug="${specialty.slug}"
      specialtyName="${specialty.name}"
      h1="${feature.name} built for ${specialty.name} clinics."
      problemStatement="${specialty.name} practices have operational patterns that generic clinic software ignores. The result is workarounds, manual tracking, and staff doing coordination work that a system should handle."
      solutionStatement="clinIQ ${feature.name.toLowerCase()} is configured for ${specialty.name.toLowerCase()} workflows from day one. Your specific visit types, room requirements, and patient flow patterns are built into the system — not retrofitted after go-live."
    />
  )
}
`
}

async function main() {
  const appDir = path.join(process.cwd(), 'app', 'features')
  let generated = 0
  let skipped = 0

  for (const feature of features) {
    for (const specialty of specialties) {
      const pageDir = path.join(appDir, feature.slug, specialty.slug)
      const pagePath = path.join(pageDir, 'page.tsx')

      try {
        await fs.access(pagePath)
        skipped++
        continue // file exists — skip (manually written)
      } catch {
        // file doesn't exist — generate it
      }

      await fs.mkdir(pageDir, { recursive: true })
      await fs.writeFile(pagePath, generatePage(feature, specialty))
      generated++
      console.log(`Generated: /features/${feature.slug}/${specialty.slug}`)
    }
  }

  const total = features.length * specialties.length
  console.log(`\nDone. ${generated} generated, ${skipped} skipped (manually written). Total: ${total} pages.`)
}

main().catch(console.error)
