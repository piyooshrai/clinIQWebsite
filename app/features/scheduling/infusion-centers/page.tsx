import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Infusion Centers | Chair & Nurse Ratio Scheduling | clinIQ',
  description: 'Chair availability, infusion duration, and nurse ratios — calculated at the time of booking. clinIQ turns infusion center scheduling into a math problem, not a guessing game.',
}

export default function SchedulingInfusionCentersPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="infusion-centers"
      specialtyName="Infusion Centers"
      h1="Chair availability, infusion duration, nurse ratio — all calculated."
      problemStatement="Infusion center scheduling requires calculating chair availability based on infusion duration, estimating turnaround time between patients, and maintaining safe nurse-to-patient ratios. Manual scheduling almost always fails one of these constraints — and the failure shows up on the floor, not on paper."
      solutionStatement="clinIQ scheduling calculates chair occupancy from scheduled infusion times, flags duration conflicts before they're booked, and alerts you when nurse ratios would fall below threshold. Scheduling becomes a math problem with a visible answer — not a judgment call made under pressure."
    />
  )
}
