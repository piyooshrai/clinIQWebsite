import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'الموافقة المسبقة للتأمين الصحي | clinIQ',
  description:
    'أتمتة سير عمل الموافقة المسبقة. تتبع قرارات شركات التأمين ومتابعة المطالبات لتقليل التأخير والرفض.',
  alternates: {
    canonical: '/ar/features/pre-auth',
    languages: { en: '/features/pre-auth' },
  },
}

export default function PreAuthArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="الموافقة المسبقة"
          title={<>موافقات التأمين <em>بلا انتظار.</em></>}
          subtitle="تأخيرات الموافقة المسبقة تُفقد المريض وتُضيع الوقت. clinIQ يتتبع كل طلب ويُنبهك قبل انتهاء المهلة."
        />
        <FeatureCTA
          title={<>أنهِ <em>معاناة الموافقات.</em></>}
          description="شاهد كيف يدير clinIQ طلبات الموافقة المسبقة لعيادتك في 15 دقيقة فقط."
        />
      </main>
      <FooterInner />
    </>
  )
}
