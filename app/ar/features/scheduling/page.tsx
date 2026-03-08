import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'نظام الجدولة والمواعيد للعيادات | clinIQ',
  description:
    'نظام جدولة ذكي يقلل من حالات الغياب، ويملأ الفجوات في المواعيد، ويدير جداول عدة أطباء في آنٍ واحد.',
  alternates: {
    canonical: '/ar/features/scheduling',
    languages: { en: '/features/scheduling' },
  },
}

export default function SchedulingArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="الجدولة والمواعيد"
          title={<>جداول مواعيد <em>بلا فوضى.</em></>}
          subtitle="نظام جدولة مصمم خصيصاً للعيادات — يقلل الغياب، ويملأ الفجوات، ويتعامل مع تعقيدات مواعيد الرعاية الصحية."
        />
        <FeatureCTA
          title={<>ابدأ <em>اليوم.</em></>}
          description="احجز عرضاً توضيحياً مدته 15 دقيقة ونرى كيف يحسّن clinIQ جدولة عيادتك."
        />
      </main>
      <FooterInner />
    </>
  )
}
