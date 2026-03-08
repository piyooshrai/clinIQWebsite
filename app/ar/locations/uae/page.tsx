import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import LocationHero from '@/components/LocationHero'
import LocationContext from '@/components/LocationContext'
import LocationFeatures from '@/components/LocationFeatures'
import LocationCTA from '@/components/LocationCTA'
import type { ContextPoint } from '@/components/LocationContext'
import type { FeatureKey } from '@/components/LocationFeatures'

export const metadata: Metadata = {
  title: 'برنامج إدارة العيادات في الإمارات | clinIQ',
  description:
    'نظام تدفق المرضى وإدارة العيادات في دبي وأبوظبي. متوافق مع نابض ومصفى، واجهة عربية، دعم السياحة الطبية.',
  alternates: {
    canonical: '/ar/locations/uae',
    languages: { en: '/locations/uae' },
  },
}

const points: ContextPoint[] = [
  {
    title: 'الامتثال لنابض ومصفى',
    body: 'تعمل العيادات في الإمارات ضمن إطار تنظيمي صارم يشمل اشتراطات هيئة الصحة في أبوظبي ودائرة الصحة في دبي. يضمن clinIQ توافق عمليات التسجيل وإدارة ملفات المرضى مع متطلبات نابض ومصفى دون تعقيدات إضافية.',
  },
  {
    title: 'السياحة الطبية',
    body: 'تستقبل الإمارات مئات الآلاف من المرضى الدوليين سنوياً. يتيح clinIQ إدارة تدفقات المرضى الوافدين مع ضبط مسارات مخصصة للزيارات الاستشارية القصيرة وتنسيق المتابعة عن بعد بعد مغادرتهم.',
  },
  {
    title: 'المرضى المتعددو الجنسيات',
    body: 'مع وجود أكثر من 200 جنسية في الإمارات، تحتاج العيادة إلى نظام يستوعب تنوع اللغات والتوقعات الثقافية. تدعم واجهة clinIQ العربية والإنجليزية بشكل كامل، مما يسهل التواصل بين الطاقم والمريض.',
  },
  {
    title: 'متطلبات هيئة الصحة بدبي',
    body: 'تفرض هيئة الصحة بدبي معايير دقيقة في توثيق الزيارات والموافقات المسبقة. يوفر clinIQ قوالب موثقة وتنبيهات تلقائية تضمن استيفاء متطلبات الترخيص والاعتماد في كل زيارة.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics', 'scheduling']

export default function UAEArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="الإمارات العربية المتحدة"
          title="الرعاية الصحية في الإمارات تتحرك بسرعة. برنامج عيادتك يجب أن يواكب ذلك."
          subtitle="توقعات السياحة الطبية، الامتثال لنابض، مزيج المرضى المحليين والوافدين. التميز التشغيلي ليس خياراً — بل ضرورة تنافسية."
        />
        <LocationContext
          heading="مشهد العيادات الخاصة في الإمارات"
          intro="تعمل العيادات الخاصة في الإمارات في بيئة عالية الطلب تجمع بين توقعات المرضى الدوليين ومتطلبات الجهات التنظيمية المتعددة. الإجراءات اليدوية لم تعد كافية."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="تواصل معنا للعيادات الإماراتية"
          description="جلسة استعراضية مدتها 15 دقيقة. سنضبط النظام وفق بيئتك التنظيمية وتدفق عملك في الإمارات."
        />
      </main>
      <FooterInner />
    </>
  )
}
