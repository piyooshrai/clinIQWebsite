import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'المراقبة العلاجية عن بعد | فوترة RTM | clinIQ',
  description:
    'أتمتة فوترة المراقبة العلاجية عن بعد. احصل على الرموز الصحيحة CPT 98975–98981 دون عبء إداري إضافي.',
  alternates: {
    canonical: '/ar/features/rtm',
    languages: { en: '/features/rtm' },
  },
}

export default function RTMArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="المراقبة العلاجية عن بعد"
          title={<>إيرادات RTM <em>تنتظرك.</em></>}
          subtitle="معظم العيادات المؤهلة لا تُفوِّت الفوترة—clinIQ يتولى التتبع والتوثيق والفوترة تلقائياً."
        />
        <FeatureCTA
          title={<>ابدأ في تحصيل <em>إيرادات RTM.</em></>}
          description="عرض توضيحي سريع يوضح كيف نلتقط جميع رموز CPT المؤهلة لعيادتك."
        />
      </main>
      <FooterInner />
    </>
  )
}
