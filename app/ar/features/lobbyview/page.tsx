import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'عرض قاعة الانتظار | clinIQ',
  description:
    'شاشة عرض ذكية لقاعة انتظار عيادتك. تُعلم المرضى بموقعهم في الصف وتقدير وقت انتظارهم — فيقل قلقهم وتنخفض الضغوط على موظفي الاستقبال.',
  alternates: {
    canonical: '/ar/features/lobbyview',
    languages: { en: '/features/lobbyview' },
  },
}

export default function LobbyViewArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="عرض قاعة الانتظار"
          title={<>مرضاك يعرفون موقفهم.<br />طاقمك يتنفس.</>}
          subtitle="شاشة عرض في قاعة الانتظار تُظهر للمريض موقعه في الصف وتقدير وقت انتظاره — بلغته. النتيجة: أسئلة أقل لمكتب الاستقبال، مرضى أهدأ، وطاقم يعمل بتركيز أعلى."
        />
        <FeatureCTA
          title={<>هل تريد قاعة انتظار أكثر هدوءاً؟</>}
          description="جلسة استعراضية مدتها 15 دقيقة. سنعرض عليك كيف يعمل LobbyView في عيادات مشابهة لعيادتك."
        />
      </main>
      <FooterInner />
    </>
  )
}
