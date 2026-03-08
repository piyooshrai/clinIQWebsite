import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'شاشة عرض قاعة الانتظار للمرضى | clinIQ',
  description:
    'شاشة تُظهر للمرضى موقعهم في قائمة الانتظار ووقت الانتظار المتوقع. قلل القلق وخفف الانسحابات.',
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
          title={<>مرضاك <em>يستحقون الوضوح.</em></>}
          subtitle="الانتظار دون معلومات هو أسوأ تجربة في العيادة. LobbyView يُعلم مريضك بموقعه في الطابور ووقت الانتظار المتوقع."
        />
        <FeatureCTA
          title={<>احوِّل قاعة الانتظار إلى <em>تجربة إيجابية.</em></>}
          description="شاهد LobbyView وهو يعمل في عيادتك — إعداد يستغرق ساعات لا أسابيع."
        />
      </main>
      <FooterInner />
    </>
  )
}
