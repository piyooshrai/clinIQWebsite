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
  title: 'برنامج إدارة العيادات في قطر | clinIQ',
  description:
    'نظام إدارة العيادات الخاصة في الدوحة. متوافق مع وزارة الصحة العامة القطرية، يدعم مزيج المرضى متعدد الجنسيات ومتطلبات التأمين الصحي الإلزامي.',
  alternates: {
    canonical: '/ar/locations/qatar',
    languages: { en: '/locations/qatar' },
  },
}

const points: ContextPoint[] = [
  {
    title: 'التأمين الصحي الإلزامي في قطر',
    body: 'يُلزم نظام الضمان الصحي الوطني في قطر جميع المقيمين بتأمين صحي. هذا يعني أن العيادات الخاصة تعمل مع شبكة متنوعة من مزودي التأمين، كل منها بمتطلبات موافقات مسبقة مختلفة. clinIQ يبسط هذا التعقيد.',
  },
  {
    title: 'كثافة العمالة الوافدة',
    body: 'تُشكّل الجالية الوافدة الغالبية العظمى من سكان قطر، مما يخلق قاعدة مرضى متنوعة لغوياً وثقافياً. تدعم واجهة clinIQ الثنائية اللغة التواصل السلس بين الطاقم والمرضى في كل مراحل الزيارة.',
  },
  {
    title: 'اشتراطات وزارة الصحة العامة',
    body: 'تشترط وزارة الصحة العامة القطرية معايير صارمة في توثيق الخدمات الطبية وتقارير الجودة. تعمل تقارير clinIQ التلقائية على تقليل العبء الإداري مع ضمان الامتثال الكامل للمتطلبات.',
  },
  {
    title: 'الطلب المتنامي على الرعاية التخصصية',
    body: 'تستثمر قطر بشكل كبير في رفع مستوى الخدمات الصحية التخصصية. العيادات التي تُقدّم تجربة مريض سلسة ومحترفة — من التسجيل حتى المتابعة — تحتل مكانة متميزة في هذا السوق المتنامي.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'pre-auth', 'analytics']

export default function QatarArabicPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="قطر"
          title="قطاع الرعاية الصحية في قطر يشهد نمواً استثنائياً. هل عيادتك مستعدة؟"
          subtitle="تأمين إلزامي لكل مقيم، قاعدة مرضى متعددي الجنسيات، توقعات عالية. clinIQ يمنح عيادتك الأدوات التشغيلية للتميز."
        />
        <LocationContext
          heading="بيئة العمل في قطاع العيادات الخاصة بقطر"
          intro="تجمع بيئة الرعاية الصحية في قطر بين متطلبات تنظيمية متطورة وقاعدة مرضى متنوعة وتوقعات عالية للخدمة. المنافسة تشتد، والكفاءة التشغيلية هي الفارق."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="تواصل معنا للعيادات القطرية"
          description="جلسة استعراضية مدتها 15 دقيقة مصممة لواقع السوق القطري. نبدأ بأكبر تحدياتك التشغيلية."
        />
      </main>
      <FooterInner />
    </>
  )
}
