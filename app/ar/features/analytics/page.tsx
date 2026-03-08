import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'تحليلات العمليات للعيادات | clinIQ',
  description:
    'تحليلات فورية تكشف عن الاختناقات وفجوات الإيرادات وأنماط عدم حضور المرضى. قرارات مبنية على البيانات.',
  alternates: {
    canonical: '/ar/features/analytics',
    languages: { en: '/features/analytics' },
  },
}

export default function AnalyticsArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="التحليلات التشغيلية"
          title={<>بيانات <em>تتحدث بوضوح.</em></>}
          subtitle="لا خمن. لا انتظر لنهاية الشهر. clinIQ يمنحك صورة واضحة لعمليات عيادتك في الوقت الفعلي."
        />
        <FeatureCTA
          title={<>اكتشف <em>ما يخفيه نظامك الحالي.</em></>}
          description="عرض توضيحي يكشف الاختناقات وفرص الإيرادات الضائعة في عيادتك."
        />
      </main>
      <FooterInner />
    </>
  )
}
