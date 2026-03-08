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
  title: 'برنامج إدارة العيادات في المملكة العربية السعودية | clinIQ',
  description:
    'نظام إدارة العيادات الخاصة في الرياض وجدة والدمام. متوافق مع وزارة الصحة ونظام نفاذ، يدعم رؤية 2030 لتطوير القطاع الصحي.',
  alternates: {
    canonical: '/ar/locations/saudi-arabia',
    languages: { en: '/locations/saudi-arabia' },
  },
}

const points: ContextPoint[] = [
  {
    title: 'التوافق مع نظام نفاذ ومنصة صحتي',
    body: 'تشترط وزارة الصحة السعودية تكامل منظومة التسجيل والمواعيد مع المنصات الوطنية. يضمن clinIQ استيفاء هذه المتطلبات تلقائياً دون إثقال كاهل الطاقم الإداري بعمل يدوي مضاعف.',
  },
  {
    title: 'التحول الرقمي في إطار رؤية 2030',
    body: 'تستهدف رؤية 2030 رفع نسبة مشاركة القطاع الخاص في تقديم الخدمات الصحية. العيادات التي تعتمد حلولاً رقمية فعّالة تحتل موقعاً تنافسياً أفضل في استقطاب الكوادر والمرضى وعقود الشراكة مع شركات التأمين.',
  },
  {
    title: 'شبكة شركات التأمين الطبي',
    body: 'يتطلب العمل مع شركات التأمين الرائدة كبوبا العربية وتوكيل ومدغاردز توثيقاً دقيقاً وموافقات مسبقة آلية. يجمع clinIQ بين إدارة الموافقات المسبقة وتتبع الطلبات المرفوضة في منصة واحدة.',
  },
  {
    title: 'تنظيمات الهيئة السعودية للتخصصات الصحية',
    body: 'تحكم الهيئة السعودية للتخصصات الصحية معايير جودة الرعاية وتوثيق الخدمات. يدعم clinIQ التوثيق المنهجي لكل تفاعل مع المريض بما يضمن الاستعداد الدائم لعمليات التفتيش والاعتماد.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'pre-auth', 'scheduling', 'analytics']

export default function SaudiArabiaArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="المملكة العربية السعودية"
          title="قطاع الرعاية الصحية السعودي ينمو بسرعة. عيادتك بحاجة إلى بنية تحتية تشغيلية تواكب هذا النمو."
          subtitle="متطلبات التأمين الطبي، التحول الرقمي، توقعات مرضى الجيل الجديد. clinIQ مصمم للعيادات الخاصة التي تأخذ التميز التشغيلي بجدية."
        />
        <LocationContext
          heading="الواقع التشغيلي للعيادات الخاصة في السعودية"
          intro="تشهد العيادات الخاصة في المملكة ضغطاً متزايداً من التوقعات التنظيمية ومتطلبات التأمين وتزايد أعداد المرضى. النجاح يتطلب أنظمة لا تعيق — بل تمكّن."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="تواصل معنا للعيادات السعودية"
          description="جلسة استعراضية مدتها 15 دقيقة مصممة خصيصاً لمتطلبات السوق السعودية. سنبدأ من واقع عيادتك."
        />
      </main>
      <FooterInner />
    </>
  )
}
