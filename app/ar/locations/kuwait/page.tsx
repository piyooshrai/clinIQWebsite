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
  title: 'برنامج إدارة العيادات في الكويت | clinIQ',
  description:
    'نظام إدارة العيادات الخاصة في الكويت. يدعم التوثيق المزدوج عربي وإنجليزي، ومتطلبات وزارة الصحة الكويتية، وشبكة شركات التأمين المحلية.',
  alternates: {
    canonical: '/ar/locations/kuwait',
    languages: { en: '/locations/kuwait' },
  },
}

const points: ContextPoint[] = [
  {
    title: 'التوثيق المزدوج والامتثال التنظيمي',
    body: 'يتطلب نظام الترخيص الطبي الكويتي توثيقاً دقيقاً للخدمات المقدمة وفق معايير وزارة الصحة. يتيح clinIQ قوالب موثقة قابلة للتخصيص حسب التخصص، مما يقلل من وقت الإدخال اليدوي ويضمن اتساق السجلات.',
  },
  {
    title: 'شبكة التأمين الصحي المتوسعة',
    body: 'تتوسع منظومة التأمين الصحي الخاص في الكويت بشكل ملحوظ. تعامل العيادات مع شركات متعددة — كل منها بنماذج موافقات مختلفة — يمثل عبئاً إدارياً حقيقياً. يوحّد clinIQ هذه العمليات في نظام واحد.',
  },
  {
    title: 'قاعدة المرضى من المواطنين والمقيمين',
    body: 'تتميز قاعدة مرضى العيادات الكويتية بتنوع فريد يجمع المواطنين والجاليات العربية والأجنبية. يوفر clinIQ مرونة في إعداد مسارات تسجيل ومتابعة مخصصة لكل فئة، مع دعم كامل للغة العربية.',
  },
  {
    title: 'الضغط على الطاقة الاستيعابية في أوقات الذروة',
    body: 'تعاني كثير من العيادات الكويتية من ازدحام في ساعات الذروة بعد الظهر والمساء. تعمل أدوات إدارة تدفق المرضى في clinIQ على توزيع الحمل بشكل أفضل وتقليل فترات الانتظار دون الحاجة إلى موارد إضافية.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'scheduling', 'pre-auth', 'check-in']

export default function KuwaitArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="الكويت"
          title="العيادات الخاصة في الكويت تتنافس بشكل أعمق. الكفاءة التشغيلية هي ميزتك."
          subtitle="طاقم إداري محدود، توقعات مرضى عالية، متطلبات امتثال متزايدة. clinIQ يتولى التعقيد حتى يركز فريقك على ما يهم."
        />
        <LocationContext
          heading="تحديات العيادات الخاصة في السوق الكويتي"
          intro="يشهد قطاع الرعاية الصحية الخاصة في الكويت نمواً متسارعاً مع تزايد الطلب على الخدمات التخصصية. العيادات التي تمتلك أنظمة تشغيلية قوية تتصدر المشهد."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="تواصل معنا للعيادات الكويتية"
          description="جلسة استعراضية مدتها 15 دقيقة. سنوضح كيف يُحسّن clinIQ تدفق المرضى في بيئة عملك الكويتية تحديداً."
        />
      </main>
      <FooterInner />
    </>
  )
}
