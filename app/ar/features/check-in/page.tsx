import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureCTA from '@/components/FeatureCTA'

export const metadata: Metadata = {
  title: 'تسجيل الوصول الرقمي للمرضى | clinIQ',
  description:
    'تسجيل وصول ذاتي بدون ورق وبدون طوابير. مرضاك يسجلون بياناتهم من هواتفهم أو من شاشة الاستقبال. طاقمك يتفرغ لما يهم.',
  alternates: {
    canonical: '/ar/features/check-in',
    languages: { en: '/features/check-in' },
  },
}

export default function CheckInArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="تسجيل الوصول الرقمي"
          title={<>تسجيل الوصول بدون ورق.<br />بدون طوابير. بدون أخطاء.</>}
          subtitle="دع مرضاك يُسجّلون بياناتهم قبل الوصول أو عند الدخول مباشرة. النماذج تُملأ تلقائياً، المعلومات تصل فورياً للطاقم، وموظفو الاستقبال يتحررون من الإدخال اليدوي المتكرر."
        />
        <FeatureCTA
          title={<>هل أنت مستعد للتخلص من النماذج الورقية؟</>}
          description="جلسة استعراضية مدتها 15 دقيقة. سنريك كيف يبدو تسجيل الوصول الرقمي في عيادة بحجم عيادتك."
        />
      </main>
      <FooterInner />
    </>
  )
}
