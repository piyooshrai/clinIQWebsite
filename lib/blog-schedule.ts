import schedule from '@/data/blog-schedule.json'

const publishDates = schedule as Record<string, string>

/** A post is live from the start of its scheduled date, UTC. Unscheduled posts are always live. */
export function isBlogSlugPublished(slug: string, now: Date = new Date()) {
  const date = publishDates[slug]
  return !date || new Date(`${date}T00:00:00Z`) <= now
}

/** Works on any internal href, so related links can hide posts that are not live yet. */
export function isHrefPublished(href: string, now: Date = new Date()) {
  const match = href.match(/^\/blog\/([^/?#]+)/)
  return !match || isBlogSlugPublished(match[1], now)
}
