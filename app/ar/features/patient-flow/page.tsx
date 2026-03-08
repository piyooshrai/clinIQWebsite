import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'إدارة تدفق المرضى | clinIQ',
  description:
    'رؤية فورية لكل مريض في عيادتك — من لحظة الوصول حتى المغادرة. قلّل أوقات الانتظار، وأوقف الفوضى في مكتب الاستقبال، وحسّن تجربة المريض.',
  alternates: {
    canonical: '/ar/features/patient-flow',
    languages: { en: '/features/patient-flow' },
  },
}

export default function PatientFlowArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="تدفق المرضى"
          title={<>رؤية لحظية لكل مريض.<br />من الوصول حتى المغادرة.</>}
          subtitle="اعرف أين يقف كل مريض في أي لحظة — دون مكالمات هاتفية، دون أسئلة متكررة، دون فوضى. طاقمك يعمل. مرضاك لا ينتظرون في الظلام."
        />
        <FeatureCTA
          title={<>جاهز لترتيب تدفق مرضاك؟</>}
          description="جلسة استعراضية مدتها 15 دقيقة. سنعرض عليك كيف تعمل لوحة تدفق المرضى في بيئة مشابهة لعيادتك."
        />
      </main>
      <FooterInner />
    </>
  )
}
