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
  title: 'برنامج إدارة العيادات في البحرين | clinIQ',
  description:
    'نظام إدارة العيادات الخاصة في المنامة والمنطقة الدبلوماسية. متوافق مع هيئة الصحة البحرينية، يدعم التأمين الصحي الإلزامي ومتطلبات نظام صحة.',
  alternates: {
    canonical: '/ar/locations/bahrain',
    languages: { en: '/locations/bahrain' },
  },
}

const points: ContextPoint[] = [
  {
    title: 'نظام التأمين الصحي الإلزامي "صحتك"',
    body: 'يُلزم نظام التأمين الصحي الإلزامي في البحرين العيادات الخاصة باستيفاء اشتراطات الانضمام إلى الشبكة وإعداد التقارير وفق معايير محددة. يضمن clinIQ انسيابية العمليات مع الامتثال الكامل لمتطلبات هيئة الصحة.',
  },
  {
    title: 'السوق الصحي الخاص الناضج',
    body: 'تمتلك البحرين قطاعاً صحياً خاصاً راسخاً بتاريخ طويل. المنافسة بين العيادات تجعل تجربة المريض الاستثنائية — بدءاً من الحجز وحتى المتابعة — عاملاً حاسماً في الاحتفاظ بالمرضى وكسب ولائهم.',
  },
  {
    title: 'الموقع الاستراتيجي كمركز إقليمي',
    body: 'تستقطب البحرين مرضى من المنطقة الشرقية السعودية بشكل خاص، مما يعني أن بعض العيادات تعمل فعلياً كوجهة طبية إقليمية. يوفر clinIQ أدوات إدارة المرضى من خارج المنطقة بما فيها التواصل الرقمي والمتابعة عن بعد.',
  },
  {
    title: 'التحول الرقمي الصحي الوطني',
    body: 'تسير البحرين بخطى حثيثة نحو التحول الرقمي في القطاع الصحي. العيادات التي تعتمد حلول رقمية متكاملة تكون في وضع أفضل للتكامل مع المبادرات الوطنية وخدمة جيل جديد من المرضى المتمكنين تقنياً.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'scheduling', 'analytics']

export default function BahrainArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="البحرين"
          title="العيادات الخاصة في البحرين تبني ميزة تنافسية حقيقية. البنية التشغيلية هي أساسها."
          subtitle="سوق صحي خاص ناضج، مرضى إقليميون، تأمين إلزامي. clinIQ يمنحك الكفاءة التشغيلية التي تجعل فارقاً حقيقياً."
        />
        <LocationContext
          heading="ديناميكيات السوق الصحي الخاص في البحرين"
          intro="تتميز البحرين بسوق صحي خاص ناضج وواعٍ بالجودة. المرضى لديهم خيارات، والعيادات التي تُقدّم تجربة سلسة ومنظمة تفوز بولائهم على المدى البعيد."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="تواصل معنا للعيادات البحرينية"
          description="جلسة استعراضية مدتها 15 دقيقة. سنستعرض معك كيف يناسب clinIQ بيئة العمل الصحية البحرينية."
        />
      </main>
      <FooterInner />
    </>
  )
}
