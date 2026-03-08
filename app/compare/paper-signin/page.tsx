import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ComparisonHero from '@/components/ComparisonHero'
import ComparisonTable from '@/components/ComparisonTable'
import ComparisonDifferences from '@/components/ComparisonDifferences'
import ComparisonCTA from '@/components/ComparisonCTA'
import type { TableRow } from '@/components/ComparisonTable'
import type { Difference } from '@/components/ComparisonDifferences'

export const metadata: Metadata = {
  title: 'Replace Paper Sign-In Sheets | Digital Patient Check-In',
  description:
    "Paper sign-in sheets expose patient names to other patients. They're slow. They lose data. clinIQ's digital check-in is faster, compliant, and automatic.",
  keywords: [
    'digital patient sign in',
    'replace paper sign in sheet',
    'HIPAA compliant check-in',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'HIPAA compliance',
    cliniq: 'Role-based digital records — no PHI visible to other patients',
    competitor: 'Patient names visible to everyone who signs in after them',
  },
  {
    feature: 'Data accuracy',
    cliniq: 'Structured digital fields — no illegible handwriting or missed fields',
    competitor: 'Handwritten — prone to illegibility, errors, and missing information',
  },
  {
    feature: 'Check-in speed',
    cliniq: 'Self-service digital check-in on tablet or personal device in under 2 minutes',
    competitor: 'Manual handwriting, staff transcription, and clipboard retrieval',
  },
  {
    feature: 'Insurance verification',
    cliniq: 'Insurance eligibility verified automatically at check-in',
    competitor: 'Separate manual insurance verification step required',
  },
  {
    feature: 'Queue integration',
    cliniq: 'Patient automatically added to live queue on check-in completion',
    competitor: 'Staff must manually pull the sheet and enter patient into system',
  },
  {
    feature: 'Patient experience',
    cliniq: 'Modern, private, self-service — no exposure to others\' information',
    competitor: 'Dated, slow, and uncomfortable for privacy-conscious patients',
  },
]

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const UserCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
)

const ZapOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="12.41 6.75 13 2 10.57 4.92" />
    <polyline points="18.57 12.91 21 10 15.66 10" />
    <polyline points="8 8 3 14 12 14 11 22 16 16" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <FileTextIcon />,
    title: 'HIPAA-safe check-in — no PHI exposure',
    body: "When Patient #3 signs in after Patient #2, they can read every name above them on the sheet — a textbook HIPAA violation that most clinics don't address until a complaint is filed. clinIQ replaces the sheet with a private, device-based check-in flow where no patient ever sees another patient's name, appointment time, or reason for visit.",
  },
  {
    icon: <UserCheckIcon />,
    title: 'Automatic queue assignment — no staff transcription',
    body: "With a paper sign-in sheet, a staff member has to pick up the clipboard, read the patient's name, and manually enter them into your system before they appear in any queue. clinIQ's digital check-in automatically places the patient in the live queue the moment they complete the process — no transcription, no delay, no risk of being lost in the shuffle.",
  },
  {
    icon: <ZapOffIcon />,
    title: 'Insurance verification at check-in, not after',
    body: "Paper sign-in tells you a patient arrived. It tells you nothing about their insurance status. clinIQ verifies insurance eligibility automatically during the digital check-in flow — so your front desk discovers coverage issues before the patient reaches the provider, not during checkout when there's nothing left to do about it.",
  },
]

export default function PaperSignInPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Paper Sign-In"
          title="clinIQ vs Paper Sign-In"
          subtitle="Paper sign-in sheets: HIPAA violation waiting to happen."
        />
        <ComparisonTable
          competitorName="Paper Sign-In"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="Replace your sign-in sheet today" />
      </main>
      <FooterInner />
    </>
  )
}
