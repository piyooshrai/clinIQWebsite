/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      // ── Core pages ──────────────────────────────────────────────────────────
      { source: '/about-us',            destination: '/about',              permanent: true },
      { source: '/privacy-policy',      destination: '/privacy',            permanent: true },
      { source: '/terms-and-conditions',destination: '/terms',              permanent: true },

      // ── Old feature pages → new /features/[slug] ────────────────────────────
      { source: '/ai-patient-flow-management',              destination: '/features/patient-flow',          permanent: true },
      { source: '/appointment-scheduling-reminders',        destination: '/features/scheduling',            permanent: true },
      { source: '/automated-patient-checkin-intake',        destination: '/features/check-in',              permanent: true },
      { source: '/automated-patient-check-in-intake-solutions', destination: '/features/check-in',         permanent: true },
      { source: '/best-rtm-solution',                       destination: '/features/rtm',                   permanent: true },
      { source: '/best-rtm-solution-1',                     destination: '/features/rtm',                   permanent: true },
      { source: '/blockchain-security-healthcare',          destination: '/features/secure-file-exchange',  permanent: true },
      { source: '/hipaa-compliance',                        destination: '/features/secure-messaging',      permanent: true },
      { source: '/mobile-app-capabilities',                 destination: '/features/patient-app',           permanent: true },
      { source: '/nlp-decision-support',                    destination: '/features/analytics',             permanent: true },
      { source: '/patient-feedback-reporting',              destination: '/features/patient-satisfaction',  permanent: true },
      { source: '/patient-portal',                          destination: '/features/patient-app',           permanent: true },
      { source: '/real-time-business-intelligence',         destination: '/features/analytics',             permanent: true },
      { source: '/remote-therapeutic-monitoring',           destination: '/features/rtm',                   permanent: true },
      { source: '/remote-therapeutic-monitoring/:path*',    destination: '/features/rtm',                   permanent: true },
      { source: '/secure-messaging',                        destination: '/features/secure-messaging',      permanent: true },
      { source: '/telemedicine-support-clinics',            destination: '/features/telehealth',            permanent: true },
      { source: '/wearable-device-integration',             destination: '/features/wearable-integration',  permanent: true },

      // ── Old specialty/solution pages → new /specialties/[slug] ─────────────
      { source: '/family-medicine-solutions',       destination: '/specialties/primary-care',       permanent: true },
      { source: '/mental-health-counseling-solutions', destination: '/specialties/behavioral-health', permanent: true },
      { source: '/pediatric-care-solutions',        destination: '/specialties/pediatrics',         permanent: true },
      { source: '/primary-care-solutions',          destination: '/specialties/primary-care',       permanent: true },

      // ── Old blog post URLs → nearest new /blog/ page ────────────────────────
      // RTM & billing posts
      { source: '/post/rtm-cpt-codes-in-2026-explained-detailed-guide',                     destination: '/blog/rtm-cpt-codes-explained',       permanent: true },
      { source: '/post/rtm-vs-rpm-the-2026-definitive-comparison-codes-revenue-eligibility',destination: '/blog/rtm-vs-rpm-comparison',          permanent: true },
      { source: '/post/rtm-for-physical-therapy-clinics-2026-billing-guide-implementation-roadmap', destination: '/blog/rtm-physical-therapy',    permanent: true },
      { source: '/post/how-rtm-doubled-patient-engagement-for-physical-therapy-clinics',    destination: '/blog/rtm-physical-therapy',           permanent: true },
      { source: '/post/what-is-rtm-in-healthcare-a-plain-english-guide-for-clinic-owners-in-2026', destination: '/blog/rtm-cpt-codes-explained', permanent: true },
      { source: '/post/what-is-remote-therapeutic-monitoring-complete-guide-to-rtm-in-modern-healthcare', destination: '/blog/rtm-cpt-codes-explained', permanent: true },
      { source: '/post/remote-therapeutic-monitoring-rtm-revolutionizing-healthcare-with-technology', destination: '/blog/rtm-cpt-codes-explained', permanent: true },
      { source: '/post/remote-therapeutic-monitoring-the-hidden-500m-revenue-stream-for-clinics-in-2026', destination: '/blog/rtm-revenue-guide',  permanent: true },
      { source: '/post/2026-rtm-cpt-codes-the-complete-guide-to-98975-98979-98985-all-new-codes', destination: '/blog/rtm-cpt-codes-explained',   permanent: true },
      { source: '/post/rtm-billing-guidelines-2026-how-to-document-submit-get-fully-reimbursed', destination: '/blog/rtm-billing-pain-management-cpt-codes', permanent: true },
      { source: '/post/cpt-code-98985-the-msk-monitoring-code-that-changes-everything-in-2026', destination: '/blog/rtm-cpt-codes-explained',     permanent: true },
      { source: '/post/ehr-integrated-rtm-vs-standalone-rtm-why-your-clinic-needs-native-integration-in-2026', destination: '/blog/rtm-vs-rpm-comparison', permanent: true },
      { source: '/post/7-best-practices-for-implementing-remote-therapeutic-monitoring-rtm-in-2026', destination: '/blog/rtm-enrollment-participation', permanent: true },
      { source: '/post/case-study-how-a-5-location-pt-group-generated-127k-in-year-1-with-rtm', destination: '/blog/rtm-revenue-guide',           permanent: true },
      { source: '/post/how-3-clinic-networks-scaled-to-50-locations-using-integrated-rtm',   destination: '/blog/rtm-revenue-guide',              permanent: true },
      { source: '/post/gaps-in-care-how-rtm-turns-patient-monitoring-into-clinical-intelligence', destination: '/blog/rtm-documentation-requirements', permanent: true },
      { source: '/post/how-to-calculate-the-true-roi-of-rtm-a-data-driven-framework-for-clinic-leaders', destination: '/blog/rtm-roi-calculator', permanent: true },
      { source: '/post/rtm-healthcare-access-how-clinic-integrated-monitoring-serves-rural-populations', destination: '/blog/rtm-revenue-guide',   permanent: true },
      { source: '/post/the-psychology-of-rtm-why-continuous-monitoring-drives-better-patient-outcomes', destination: '/blog/rtm-enrollment-participation', permanent: true },
      { source: '/post/therapeutic-management-vs-remote-therapeutic-monitoring-complete-comparison-guide', destination: '/blog/rtm-vs-rpm-comparison', permanent: true },
      { source: '/post/multi-location-clinics-how-integrated-rtm-solves-the-impossible-scaling-problem', destination: '/blog/rtm-revenue-guide',   permanent: true },

      // Patient flow posts
      { source: '/post/what-is-patient-flow-management',                                    destination: '/blog/patient-flow-bottlenecks',       permanent: true },
      { source: '/post/ai-driven-patient-flow-prediction-what-clinics-can-actually-do-in-2026', destination: '/blog/wait-time-analytics',        permanent: true },
      { source: '/post/modern-patient-flow-management-optimizing-volume-for-smarter-compassionate-care', destination: '/blog/patient-flow-multi-provider-practices', permanent: true },
      { source: '/post/how-to-reduce-patient-waiting-time-in-hospitals-a-comprehensive-2026-guide', destination: '/blog/reducing-wait-times-data-driven', permanent: true },
      { source: '/post/ai-patient-flow-management-the-complete-guide-to-reducing-wait-times-by-30-in-2026', destination: '/blog/wait-time-analytics', permanent: true },
      { source: '/post/patient-flow-optimization-in-small-clinics-7-strategies-that-actually-work-in-2026', destination: '/blog/patient-flow-bottlenecks', permanent: true },
      { source: '/post/how-to-manage-patient-flow-and-volume-strategies-for-healthcare-excellence', destination: '/blog/patient-flow-multi-provider-practices', permanent: true },
      { source: '/post/patient-flow-in-healthcare-strategies-solutions-for-modern-clinics', destination: '/blog/patient-flow-bottlenecks',        permanent: true },
      { source: '/post/hospital-patient-flow-management-best-practices-digital-tools-for-2026', destination: '/blog/patient-flow-multi-provider-practices', permanent: true },
      { source: '/post/hospital-patient-flow-management-system-wide-solutions-for-large-healthcare-organizations', destination: '/blog/multi-department-clinic-flow', permanent: true },
      { source: '/post/patient-flow-software-the-10-best-solutions-compared-for-2026',      destination: '/blog/patient-flow-bottlenecks',       permanent: true },
      { source: '/post/how-to-calculate-patient-waiting-time-and-reduce-it-in-modern-healthcare', destination: '/blog/reducing-wait-times-data-driven', permanent: true },
      { source: '/post/the-future-of-patient-flow-ai-driven-predictions-and-intelligent-optimization', destination: '/blog/wait-time-analytics',  permanent: true },
      { source: '/post/how-ai-and-machine-learning-are-revolutionizing-patient-flow-management', destination: '/blog/wait-time-analytics',         permanent: true },

      // Check-in & scheduling posts
      { source: '/post/patient-check-in-kiosk-software-modern-solutions-for-clinics-hospitals', destination: '/blog/phone-vs-kiosk-check-in',    permanent: true },
      { source: '/post/how-ai-appointment-scheduling-is-transforming-healthcare',            destination: '/blog/no-show-reduction-scheduling',   permanent: true },
      { source: '/post/how-online-appointment-scheduling-software-helps-healthcare-practices', destination: '/blog/no-show-reduction-scheduling', permanent: true },
      { source: '/post/automated-appointment-scheduling-the-technology-that-reduces-no-shows-by-30', destination: '/blog/no-show-reduction-scheduling', permanent: true },
      { source: '/post/patient-intake-solutions-automating-the-first-touchpoint-that-makes-or-breaks-your-clinic', destination: '/blog/check-in-completion-rates', permanent: true },

      // Operations & analytics posts
      { source: '/post/clinic-workflow-automation-12-processes-to-automate-for-immediate-efficiency-gains', destination: '/blog/staff-shortage-workflow', permanent: true },
      { source: '/post/how-data-analytics-software-powers-healthcare',                      destination: '/blog/wait-time-analytics',             permanent: true },
      { source: '/post/how-revenue-cycle-management-rcm-directly-impacts-patient-satisfaction', destination: '/blog/provider-productivity-metrics', permanent: true },
      { source: '/post/how-automation-is-revolutionizing-healthcare-practice-management',   destination: '/blog/staff-shortage-workflow',         permanent: true },
      { source: '/post/practice-management-programs-essential-tools-for-modern-healthcare-organizations', destination: '/blog/provider-productivity-metrics', permanent: true },
      { source: '/post/2026-clinic-operations-forecast-7-trends-clinic-leaders-must-know', destination: '/blog/provider-productivity-metrics',    permanent: true },
      { source: '/post/december-clinic-operations-review-your-90-day-q1-2026-action-plan', destination: '/blog/provider-productivity-metrics',    permanent: true },
      { source: '/post/post-holiday-clinic-recovery-getting-back-to-peak-operations-in-january', destination: '/blog/staff-shortage-workflow',    permanent: true },
      { source: '/post/clinic-compliance-in-2026-the-updated-requirements-every-healthcare-leader-must-know', destination: '/blog/prior-auth-denial-prevention-guide', permanent: true },
      { source: '/post/a-practical-breakdown-of-new-revised-and-deleted-cpt-codes-2026-for-clinics', destination: '/blog/rtm-cpt-codes-explained', permanent: true },
      { source: '/post/healthcare-claims-management-software-the-ultimate-guide-to-optimizing-revenue-and-compliance-in-20', destination: '/blog/prior-auth-denial-prevention-guide', permanent: true },

      // General health IT & EHR posts → blog index (no close match)
      { source: '/post/telemedicine-vs-in-person-care-can-digital-health-replace-traditional-visits', destination: '/blog',                        permanent: true },
      { source: '/post/digital-health-revolution-how-ehrs-telemedicine-and-mobile-devices-are-transforming-healthcare', destination: '/blog',      permanent: true },
      { source: '/post/what-is-electronic-medical-records-emr',                              destination: '/blog',                                 permanent: true },
      { source: '/post/electronic-health-record-management-complete-guide-for-modern-healthcare', destination: '/blog',                            permanent: true },
      { source: '/post/patient-record-management-system-the-digital-backbone-of-healthcare-data', destination: '/blog',                            permanent: true },
      { source: '/post/what-is-a-patient-record-management-system-prms-the-complete-2025-guide', destination: '/blog',                             permanent: true },
      { source: '/post/ehr-vs-practice-management-software-what-s-the-difference-and-why-it-matters-for-healthcare-provid', destination: '/blog',  permanent: true },
      { source: '/post/5-different-types-of-software-used-in-the-healthcare-industry-in-2026', destination: '/blog',                               permanent: true },
      { source: '/post/how-to-increase-patient-flow-in-your-dental-clinic-7-proven-strategies-for-2026', destination: '/blog',                    permanent: true },
      { source: '/post/how-to-increase-patient-flow-in-a-dental-clinic-complete-guide-for-2025', destination: '/blog',                             permanent: true },
      { source: '/post/a-comprehensive-overview-of-clinical-notes-definition-types-and-their-role-in-modern-healthcare', destination: '/blog',     permanent: true },
      { source: '/post/hipaa-blockchain-compliance-securing-patient-data-in-healthcare-it-systems', destination: '/blog',                          permanent: true },
      { source: '/post/secure-patient-communication-hipaa-compliant-messaging-for-modern-healthcare', destination: '/features/secure-messaging',   permanent: true },
      { source: '/post/real-time-health-monitoring-enabled-via-seamless-wearable-integration', destination: '/features/wearable-integration',      permanent: true },
      { source: '/post/why-security-is-critical-in-healthcare-protecting-patient-trust-in-a-digital-era', destination: '/blog',                   permanent: true },
      { source: '/post/the-self-pay-surge-how-to-turn-uninsured-patients-into-consistent-revenue', destination: '/blog',                           permanent: true },

      // Catch-all: any remaining /post/ URLs not mapped above → blog index
      { source: '/post/:slug',           destination: '/blog',              permanent: true },

      // ── Old blog category / tag archives → blog index ────────────────────────
      { source: '/blog/categories/:path*', destination: '/blog',           permanent: true },
      { source: '/blog/tags/:path*',       destination: '/blog',           permanent: true },
    ]
  },
}

module.exports = nextConfig
