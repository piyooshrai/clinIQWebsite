import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Dialysis Centers | MWF & TTS Shift Scheduling | clinIQ',
  description: 'Monday/Wednesday/Friday, Tuesday/Thursday/Saturday, shift assignments, chair assignments — managed without a spreadsheet. clinIQ handles dialysis scheduling patterns natively.',
}

export default function SchedulingDialysisPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="dialysis"
      specialtyName="Dialysis Centers"
      h1="MWF, TTS, and shift scheduling without the spreadsheet."
      problemStatement="Dialysis scheduling follows rigid patterns: Monday/Wednesday/Friday patients, Tuesday/Thursday/Saturday patients, all assigned to specific shifts and specific chairs. Managing any change — a patient request, a chair malfunction, a staff absence — creates ripple effects that take hours to untangle manually."
      solutionStatement="clinIQ scheduling handles dialysis patterns natively. Chair assignments, shift preferences, and session frequencies are rules built into the system — not manual work done each week. When changes occur, they propagate automatically. What used to take an hour takes minutes."
    />
  )
}
