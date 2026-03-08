import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Oncology Clinics | Cancer Center Patient Arrival | clinIQ',
  description: 'Oncology patients arrive exhausted. clinIQ reduces check-in to a single tap — insurance verified at scheduling, ID on file, arrival confirmed in seconds.',
}

export default function CheckInOncologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="oncology"
      specialtyName="Oncology"
      h1="Patients already exhausted. Check-in that doesn't add burden."
      problemStatement="Oncology patients arrive for treatment already depleted by their disease and their treatment side effects. A lengthy check-in process — paperwork, ID verification, insurance confirmation — adds burden to patients who have none to spare. It's the wrong first experience for a cancer center."
      solutionStatement="clinIQ check-in is one tap on a tablet or phone. Patient identity is on file. Insurance was verified at scheduling. The patient confirms their arrival and sits down. Done in under 15 seconds. The energy they have goes toward treatment, not paperwork."
    />
  )
}
