// English (and other locale) URLs are served through this route; reuse the main page so the two never drift.
import FeatureSpecialtyPage, {
  generateMetadata as baseGenerateMetadata,
  generateStaticParams as baseGenerateStaticParams,
} from '@/app/features/[featureSlug]/[specialtySlug]/page'

type Params = { params: { featureSlug: string; specialtySlug: string } }

export function generateStaticParams() {
  return baseGenerateStaticParams()
}

export function generateMetadata(props: Params) {
  return baseGenerateMetadata(props)
}

export default function LocaleFeatureSpecialtyPage(props: Params) {
  return <FeatureSpecialtyPage {...props} />
}
