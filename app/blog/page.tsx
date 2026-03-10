import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogIndex from '@/components/BlogIndex'
import type { BlogPost } from '@/components/BlogIndex'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog — clinIQ Operational Insights',
  description:
    'Operational insights for clinics that refuse to accept chaos. LWBS, RTM billing, front desk burnout, patient flow — written for practice operators.',
}

const posts: BlogPost[] = [
  {
    slug: 'ophthalmology-diagnostic-testing-workflow',
    category: 'Operations',
    title: 'Ophthalmology Diagnostic Testing Workflow',
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      'At 40-80 patients per day, every bottleneck in OCT, visual fields, or biometry directly delays the provider exam lane — protocol-driven pre-testing eliminates the guesswork.',
  },
  {
    slug: 'sports-medicine-patient-flow',
    category: 'Operations',
    title: 'Sports Medicine Practice Patient Flow',
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      'Sports medicine patient flow spans injury evaluation, imaging coordination, injection procedures, PT co-management, and return-to-sport clearance — each requiring different visit templates and dist...',
  },
  {
    slug: 'high-volume-chiropractic-patient-flow',
    category: 'Operations',
    title: 'High-Volume Chiropractic Patient Flow',
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      'Chiropractors seeing 40–80 patients per day need engineered workflows — adjustment room turnover, X-ray routing, new patient processing, and documentation speed — not improvisation.',
  },
  {
    slug: 'infusion-center-patient-flow',
    category: 'Operations',
    title: 'Infusion Center Patient Flow Management',
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      'Reduce arrival-to-chair time from 45 minutes to under 20, balance nurse workloads in real time, and build the reaction readiness protocols that keep patients and staff safe.',
  },
  {
    slug: 'neurology-patient-flow',
    category: 'Operations',
    title: 'Neurology Practice Patient Flow',
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      'Neurology\'s 90-minute new evals, multi-modal diagnostics, and urgent seizure presentations make standard 30-minute templates inadequate — here\'s how to build flow that actually works.',
  },
  {
    slug: 'sports-medicine-prior-auth-imaging-procedures',
    category: 'Prior Authorization',
    title: 'Sports Medicine Prior Auth: Imaging and Procedures',
    date: 'February 2026',
    readTime: '8 min',
    excerpt:
      'Sports medicine prior authorization hinges on the acute-vs.-chronic distinction for MRI and the conservative trial requirement for arthroscopic surgery — knowing each payer\'s exact criteria prevent...',
  },
  {
    slug: 'neurology-prior-auth-imaging-biologics',
    category: 'Prior Authorization',
    title: 'Neurology Prior Auth: Imaging and Biologics',
    date: 'February 2026',
    readTime: '8 min',
    excerpt:
      'Neurology prior authorization spans the most expensive imaging in medicine and some of the most costly biologic therapies — and the documentation requirements are more specific and more consequenti...',
  },
  {
    slug: 'ophthalmology-prior-auth-cataract-injections',
    category: 'Prior Authorization',
    title: 'Ophthalmology Prior Auth: Cataract Surgery and Injections',
    date: 'February 2026',
    readTime: '8 min',
    excerpt:
      'Visual acuity thresholds, functional impairment documentation, and anti-VEGF renewal criteria — the complete prior authorization guide for high-volume ophthalmology practices.',
  },
  {
    slug: 'infusion-prior-auth-biologics-specialty-drugs',
    category: 'Prior Authorization',
    title: 'Infusion Prior Auth: Biologics and Specialty Drugs',
    date: 'February 2026',
    readTime: '8 min',
    excerpt:
      'Master dose-specific authorization, step therapy documentation, and site-of-care exceptions for the full infusion center drug portfolio — from IVIG to rituximab to iron.',
  },
  {
    slug: 'chiropractic-visit-cap-tracking',
    category: 'Prior Authorization',
    title: 'Visit Cap Tracking: Preventing Denied Chiropractic Visits',
    date: 'February 2026',
    readTime: '8 min',
    excerpt:
      'Chiropractic visit caps and Medicare\'s AT modifier create billing pitfalls that cost practices thousands monthly — systematic tracking prevents denials before they happen.',
  },
  {
    slug: 'sports-medicine-rtm-injury-recovery',
    category: 'RTM Billing',
    title: 'Sports Medicine RTM: Injury Recovery Monitoring',
    date: 'January 2026',
    readTime: '8 min',
    excerpt:
      'RTM codes 98975–98981 let sports medicine practices monitor ACL recovery milestones, shoulder and ankle injury progression, and return-to-play readiness between clinic visits — generating $6,000–$8...',
  },
  {
    slug: 'neurology-rtm-migraine-ms-seizure',
    category: 'RTM Billing',
    title: 'Neurology RTM: Migraine, MS, and Seizure Monitoring',
    date: 'January 2026',
    readTime: '8 min',
    excerpt:
      'The most burdensome neurological conditions — migraine, multiple sclerosis, and epilepsy — share a common characteristic: their most clinically important events happen between office visits, and RT...',
  },
  {
    slug: 'ophthalmology-patient-flow-high-volume',
    category: 'Operations',
    title: 'Ophthalmology Patient Flow: High-Volume Efficiency',
    date: 'January 2026',
    readTime: '8 min',
    excerpt:
      'Running 40–80 patients per day in an ophthalmology practice requires more than a full schedule — it demands dilation queues, tech-driven pre-testing, and injection suite protocols that keep the phy...',
  },
  {
    slug: 'infusion-center-scheduling-chair-utilization',
    category: 'Operations',
    title: 'Infusion Center Scheduling: Chair Utilization Optimization',
    date: 'January 2026',
    readTime: '8 min',
    excerpt:
      'Calculate your true chair-hour capacity, identify the gaps costing you thousands per week, and implement dynamic scheduling to close them systematically.',
  },
  {
    slug: 'chiropractic-rtm-billing-guide',
    category: 'RTM Billing',
    title: 'Chiropractic RTM Billing: Complete Guide',
    date: 'January 2026',
    readTime: '8 min',
    excerpt:
      'CPT 98977 is one of the most underutilized revenue opportunities in chiropractic — this complete guide covers every requirement so your practice captures between-visit monitoring revenue starting i...',
  },
  {
    slug: 'pediatric-same-day-access',
    category: 'Operations',
    title: 'Pediatric Same-Day Access Strategies',
    date: 'December 2025',
    readTime: '8 min',
    excerpt:
      'Every sick child who cannot get a same-day appointment in your practice and goes to urgent care instead represents $150–$300 in immediate revenue loss and a long-term loyalty risk — here is how to ...',
  },
  {
    slug: 'no-show-analytics-patterns',
    category: 'Analytics',
    title: 'No-Show Analytics: Understanding the Patterns',
    date: 'December 2025',
    readTime: '8 min',
    excerpt:
      'No-shows are not random — they follow predictable patterns by day, time, appointment type, and booking lead time that your scheduling data already contains, waiting to be analyzed.',
  },
  {
    slug: 'pulmonology-patient-flow-management',
    category: 'Operations',
    title: 'Pulmonology Patient Flow Management',
    date: 'December 2025',
    readTime: '8 min',
    excerpt:
      'Pulmonology clinic flow is shaped by the unique mix of complex new consultations, PFT-integrated follow-ups, bronchoscopy coordination, and the growing sleep medicine population — each requiring di...',
  },
  {
    slug: 'ent-audiology-integration-scheduling',
    category: 'Operations',
    title: 'ENT Audiology Integration and Scheduling',
    date: 'December 2025',
    readTime: '8 min',
    excerpt:
      'The ENT practices that maximize audiology\'s clinical and financial value are the ones with scheduling systems that treat audiology as an upstream prerequisite to ENT care — not an afterthought.',
  },
  {
    slug: 'oncology-patient-flow-infusion-clinic',
    category: 'Operations',
    title: 'Oncology Patient Flow: Balancing Infusion and Clinic',
    date: 'December 2025',
    readTime: '8 min',
    excerpt:
      'Master lab-before-clinic sequencing, infusion slot reservation, and toxicity visit protocols to serve more patients without disrupting your infusion suite.',
  },
  {
    slug: 'high-volume-pt-patient-flow',
    category: 'Operations',
    title: 'High-Volume PT Patient Flow Management',
    date: 'December 2025',
    readTime: '8 min',
    excerpt:
      'Treating 30–50 patients per day in a single PT clinic requires systematic parallel treatment scheduling, aide utilization, and documentation workflows that most practices improvise rather than engi...',
  },
  {
    slug: 'patient-flow-multi-provider-practices',
    category: 'Patient Flow',
    title: 'Patient Flow for Multi-Provider Practices',
    date: 'December 2025',
    readTime: '8 min',
    excerpt:
      'A 4-provider practice is not the same as four solo providers sharing a building — patient flow management at this scale requires coordination infrastructure that single-provider thinking does not p...',
  },
  {
    slug: 'oral-surgery-post-op-monitoring',
    category: 'RTM Billing',
    title: 'Oral Surgery Post-Op Monitoring',
    date: 'November 2025',
    readTime: '8 min',
    excerpt:
      'The highest-risk period for oral surgery complications is the 7-14 days after surgery — RTM lets your team monitor, intervene, and bill for that clinical work.',
  },
  {
    slug: 'pediatric-vaccine-scheduling-tracking',
    category: 'Operations',
    title: 'Pediatric Vaccine Scheduling and Tracking',
    date: 'November 2025',
    readTime: '8 min',
    excerpt:
      'Pediatric immunization management requires ACIP schedule tracking by patient age, VFC program compliance, catch-up schedule management, and systematic contraindication and refusal documentation.',
  },
  {
    slug: 'pulmonary-function-testing-scheduling',
    category: 'Operations',
    title: 'Pulmonary Function Testing Scheduling',
    date: 'November 2025',
    readTime: '8 min',
    excerpt:
      'PFT lab efficiency depends on matching test type to preparation requirements, scheduling tech time realistically, and closing the loop between test results and clinical decision-making.',
  },
  {
    slug: 'ent-prior-auth-sinus-sleep-procedures',
    category: 'Prior Authorization',
    title: 'ENT Prior Auth: Sinus Surgery and Sleep Procedures',
    date: 'November 2025',
    readTime: '8 min',
    excerpt:
      'FESS medical failure documentation, septoplasty functional criteria, CPAP failure for sleep procedures — the clinical evidence that wins ENT surgical authorizations.',
  },
  {
    slug: 'oncology-prior-auth-chemotherapy-imaging',
    category: 'Prior Authorization',
    title: 'Oncology Prior Auth: Chemotherapy and Imaging',
    date: 'November 2025',
    readTime: '8 min',
    excerpt:
      'Eliminate treatment delays by mastering biomarker documentation, line-of-therapy tracking, and restaging imaging authorization for every major oncology payer.',
  },
  {
    slug: 'pt-visit-cap-tracking',
    category: 'Prior Authorization',
    title: 'PT Visit Cap Tracking: Preventing Denied Sessions',
    date: 'November 2025',
    readTime: '8 min',
    excerpt:
      'A single denied PT session due to visit cap exhaustion costs $150–$200 in lost revenue and patient trust — systematic visit cap tracking prevents this with real-time alerts and proactive authorizat...',
  },
  {
    slug: 'peer-to-peer-reviews-winning-appeal',
    category: 'Prior Authorization',
    title: 'Peer-to-Peer Reviews: Winning the Appeal',
    date: 'November 2025',
    readTime: '8 min',
    excerpt:
      'A peer-to-peer call is your highest-conversion appeal tool — but only when requested at the right time, prepared correctly, and conducted with the right clinical and strategic approach.',
  },
  {
    slug: 'pediatric-patient-flow-well-sick-visits',
    category: 'Operations',
    title: 'Pediatric Practice Patient Flow: Well Visits and Sick Visits',
    date: 'October 2025',
    readTime: '8 min',
    excerpt:
      'High-volume pediatric practices need distinct scheduling templates for well-child visits by age, same-day sick access management, and immunization room logistics to deliver quality care without chaos.',
  },
  {
    slug: 'respiratory-rtm-copd-asthma',
    category: 'RTM Billing',
    title: 'Respiratory RTM for Pulmonology: COPD and Asthma',
    date: 'October 2025',
    readTime: '8 min',
    excerpt:
      'COPD and asthma patients have between-visit exacerbations that arrive with warning signs — RTM gives pulmonology practices the ability to detect those signs and intervene before the ER visit.',
  },
  {
    slug: 'ent-patient-flow-clinic-procedure',
    category: 'Operations',
    title: 'ENT Practice Patient Flow: Clinic and Procedure Balance',
    date: 'October 2025',
    readTime: '8 min',
    excerpt:
      'Running otology, rhinology, laryngology, and head/neck clinics under one roof with in-office procedures and audiology requires a scheduling architecture most ENT practices do not have — until now.',
  },
  {
    slug: 'no-show-reduction-scheduling',
    category: 'Scheduling',
    title: 'No-Show Reduction Through Smarter Scheduling',
    date: 'October 2025',
    readTime: '8 min',
    excerpt:
      'Every no-show costs $150-300 in direct revenue — and no-show rates are largely predictable from scheduling patterns, which means they\'re largely preventable.',
  },
  {
    slug: 'oncology-infusion-scheduling-optimization',
    category: 'Operations',
    title: 'Oncology Infusion Scheduling Optimization',
    date: 'October 2025',
    readTime: '8 min',
    excerpt:
      'Eliminate chair idle time, prevent costly drug waste, and manage variable infusion durations with scheduling protocols designed for the complexity of oncology infusion.',
  },
  {
    slug: 'musculoskeletal-rtm-physical-therapy',
    category: 'RTM Billing',
    title: 'Musculoskeletal RTM for Physical Therapy Practices',
    date: 'October 2025',
    readTime: '8 min',
    excerpt:
      'CPT 98977 adds $7,800+ per month to a physical therapy practice\'s revenue by billing for the home exercise program monitoring you\'re already doing — just not getting paid for.',
  },
  {
    slug: 'room-status-visibility',
    category: 'Patient Flow',
    title: 'Room Status Visibility: Eliminating the Guessing Game',
    date: 'October 2025',
    readTime: '8 min',
    excerpt:
      'Every time a staff member walks down the hall to check if a room is ready, they are consuming 3-5 minutes and delaying the next patient — and it happens 40 times a day.',
  },
  {
    slug: 'oral-surgery-or-efficiency',
    category: 'Operations',
    title: 'Oral Surgery OR Efficiency',
    date: 'September 2025',
    readTime: '8 min',
    excerpt:
      'Every wasted OR minute in oral surgery is a billable procedure that did not happen — and the margin on surgical cases is too significant to leave on the table.',
  },
  {
    slug: 'prenatal-visit-scheduling-optimization',
    category: 'Operations',
    title: 'Prenatal Visit Scheduling Optimization',
    date: 'September 2025',
    readTime: '8 min',
    excerpt:
      'Optimizing prenatal visit scheduling requires gestational age-aware templates, differentiated high-risk and low-risk visit types, and ultrasound timing windows built into the scheduling workflow.',
  },
  {
    slug: 'cardiology-practice-workflow-optimization',
    category: 'Operations',
    title: 'Cardiology Practice Workflow Optimization',
    date: 'September 2025',
    readTime: '8 min',
    excerpt:
      'Cardiology is a multi-modality specialty where the scheduling and workflow decisions in the office directly determine the efficiency — and the safety — of care across echo labs, stress labs, device...',
  },
  {
    slug: 'allergy-prior-auth-biologics-asthma',
    category: 'Prior Authorization',
    title: 'Allergy Prior Auth: Biologics for Asthma and Allergies',
    date: 'September 2025',
    readTime: '8 min',
    excerpt:
      'IgE thresholds, eosinophil counts, exacerbation documentation, and step therapy — the complete guide to winning biologic approvals for severe asthma and allergic disease.',
  },
  {
    slug: 'nephrology-prior-auth-dialysis-transplant',
    category: 'Prior Authorization',
    title: 'Nephrology Prior Auth: Dialysis Access and Transplant',
    date: 'September 2025',
    readTime: '8 min',
    excerpt:
      'Master the hemoglobin thresholds, TSAT criteria, and procedural documentation standards that determine approval speed for dialysis access, ESA therapy, and transplant evaluations.',
  },
  {
    slug: 'behavioral-health-no-shows',
    category: 'Operations',
    title: 'Behavioral Health No-Shows: Causes and Solutions',
    date: 'September 2025',
    readTime: '8 min',
    excerpt:
      'At 25–40% no-show rates — three times the primary care benchmark — behavioral health practices lose both revenue and clinical outcomes, but diagnosis-specific reminder strategies and telehealth fle...',
  },
  {
    slug: 'rtm-enrollment-participation',
    category: 'RTM Billing',
    title: 'RTM Enrollment: Getting to 75% Participation',
    date: 'September 2025',
    readTime: '8 min',
    excerpt:
      'Most practices launch RTM and stall at 30-40% enrollment — here is the enrollment framework, staff scripting, and tracking infrastructure that drives participation above 75%.',
  },
  {
    slug: 'obgyn-prior-auth-imaging-surgery',
    category: 'Prior Authorization',
    title: 'OB/GYN Prior Auth: Imaging and Surgery',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'OB/GYN prior authorization denials for hysterectomy, GYN surgery, and advanced imaging are preventable — if you document fibroid burden, menorrhagia severity, and conservative management exactly as...',
  },
  {
    slug: 'provider-productivity-metrics',
    category: 'Analytics',
    title: 'Provider Productivity: Metrics That Matter',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'Patients per hour, wRVUs, revenue per visit, and documentation time each tell a different story about provider performance — measuring only one of them guarantees you are missing the real picture.',
  },
  {
    slug: 'cardiology-prior-auth-imaging-procedures',
    category: 'Prior Authorization',
    title: 'Cardiology Prior Auth: Imaging and Procedures',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'Cardiology prior authorization is among the most administratively complex in medicine — practices that systematize it reduce denial rates by 30-40% and procedure delays by weeks.',
  },
  {
    slug: 'allergy-shot-scheduling-tracking',
    category: 'Operations',
    title: 'Allergy Shot Scheduling and Tracking',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'Safe and effective allergy immunotherapy depends on perfect dose tracking — one missed escalation step or a late maintenance visit without dose reduction can cause harm; here is the system that pre...',
  },
  {
    slug: 'vascular-lab-scheduling-optimization',
    category: 'Operations',
    title: 'Vascular Lab Scheduling Optimization',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'A high-throughput vascular lab is the diagnostic engine of a vascular surgery practice — here is how to optimize it for accuracy, speed, and revenue.',
  },
  {
    slug: 'nephrology-patient-flow-dialysis-coordination',
    category: 'Operations',
    title: 'Nephrology Patient Flow for Dialysis Coordination',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'Build CKD stage-based scheduling, timely vascular access referrals, and integrated transplant tracking into your nephrology clinic\'s daily workflow.',
  },
  {
    slug: 'group-therapy-management-scale',
    category: 'Operations',
    title: 'Group Therapy Management at Scale',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'Running 10 or more group therapy sessions per week requires systematic roster management, per-member attendance tracking, and billing workflows that most practice management systems were not built ...',
  },
  {
    slug: 'reducing-wait-times-data-driven',
    category: 'Patient Flow',
    title: 'Reducing Wait Times: A Data-Driven Approach',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'You cannot fix what you cannot measure — and most practices that report \'wait time\' as a single number are measuring the wrong thing entirely.',
  },
  {
    slug: 'vascular-surgery-post-op-rtm',
    category: 'RTM Billing',
    title: 'Vascular Surgery Post-Op RTM',
    date: 'August 2025',
    readTime: '8 min',
    excerpt:
      'Vascular surgery patients need daily monitoring for limb perfusion, graft function, and wound healing — RTM codes 98975–98981 make that monitoring billable.',
  },
  {
    slug: 'oral-surgery-authorization-extractions-implants',
    category: 'Prior Authorization',
    title: 'Oral Surgery Authorization: Complex Extractions and Implants',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'Oral surgery authorization spans two insurance worlds — medical and dental — and each procedure has its own criteria stack that must be assembled before a case can be scheduled.',
  },
  {
    slug: 'obgyn-patient-flow-prenatal-gyn-procedures',
    category: 'Operations',
    title: 'OB/GYN Patient Flow: Prenatal, GYN, and Procedures',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'OB/GYN practices face a uniquely complex patient flow challenge: mixing variable prenatal visit frequency, GYN procedure patients, and the unpredictable impact of labor and delivery coverage on cli...',
  },
  {
    slug: 'cardiac-rtm-heart-failure-hypertension',
    category: 'RTM Billing',
    title: 'Cardiac RTM: Heart Failure and Hypertension Monitoring',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'Remote therapeutic monitoring gives cardiology practices a billable structure for the between-visit monitoring that heart failure and hypertension patients have always needed — and CMS is paying fo...',
  },
  {
    slug: 'allergy-patient-flow-testing-immunotherapy',
    category: 'Operations',
    title: 'Allergy Practice Patient Flow: Testing and Immunotherapy',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'Allergy practices juggle more visit types per patient than almost any other specialty — here is how to design a flow that handles skin test days, shot build-up visits, food challenges, and maintena...',
  },
  {
    slug: 'vascular-surgery-authorization-complex-procedures',
    category: 'Prior Authorization',
    title: 'Vascular Surgery Authorization: Complex Procedures',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'EVAR, CEA, bypass grafting, and AV access each require distinct authorization frameworks — here is the documentation strategy for each.',
  },
  {
    slug: 'ckd-rtm-chronic-kidney-disease-monitoring',
    category: 'RTM Billing',
    title: 'CKD RTM: Chronic Kidney Disease Monitoring',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'Generate $9,100/month by systematically reviewing daily weight, blood pressure, and symptom data for 70 CKD patients between office visits.',
  },
  {
    slug: 'behavioral-health-rtm-billing-guide',
    category: 'RTM Billing',
    title: 'Behavioral Health RTM Billing: Complete Guide',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'CPT 98978 is the most underutilized billing code in behavioral health — this guide covers every requirement, from FDA device qualification to monthly claim submission, so your practice captures the...',
  },
  {
    slug: 'lomn-best-practices-specialty',
    category: 'Prior Authorization',
    title: 'LOMN Best Practices by Specialty',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'A weak Letter of Medical Necessity is the most common reason a well-documented prior auth request gets denied — here is what strong LOMNs include, with specialty-specific examples your team can use...',
  },
  {
    slug: 'post-op-rtm-general-surgery',
    category: 'RTM Billing',
    title: 'Post-Op RTM for General Surgery',
    date: 'July 2025',
    readTime: '8 min',
    excerpt:
      'General surgery post-op patients have structured, measurable recovery data that qualifies for RTM billing — and most practices are not capturing it.',
  },
  {
    slug: 'plastic-surgery-post-op-monitoring',
    category: 'RTM Billing',
    title: 'Plastic Surgery Post-Op Monitoring',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'RTM codes 98975–98981 create a compliant, revenue-generating framework for plastic surgery post-operative monitoring — turning wound photos, drain logs, and pain tracking into billable clinical ove...',
  },
  {
    slug: 'urgent-care-check-in-kiosk-phone',
    category: 'Operations',
    title: 'Urgent Care Check-In: Kiosk vs Phone-Based',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'The right check-in technology for your urgent care center depends on your patient population, physical space, and EMR integration depth — and the data on completion rates, insurance accuracy, and s...',
  },
  {
    slug: 'dermatology-procedure-room-optimization',
    category: 'Operations',
    title: 'Dermatology Procedure Room Optimization',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'From biopsy tray setup to Mohs stage processing and laser room turnover — the systems that high-volume dermatology practices use to keep procedure rooms generating revenue all day.',
  },
  {
    slug: 'appointment-templates-duration',
    category: 'Scheduling',
    title: 'Appointment Templates: Getting Duration Right',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'The most common cause of providers running behind is not that they are slow — it is that the appointment slots they are given do not match the time the visits actually take.',
  },
  {
    slug: 'or-turnover-optimization-general-surgery',
    category: 'Operations',
    title: 'OR Turnover Optimization for General Surgery',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'General surgery practices that achieve 20–25 minute OR turnovers add one to two additional cases per day — here is the operational blueprint that makes it happen.',
  },
  {
    slug: 'endocrinology-practice-workflow',
    category: 'Operations',
    title: 'Endocrinology Practice Workflow',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'Build structured clinical workflows for diabetes, thyroid, osteoporosis, and adrenal disease that reduce in-room documentation time and increase daily patient capacity.',
  },
  {
    slug: 'group-therapy-scheduling',
    category: 'Operations',
    title: 'Group Therapy Scheduling and Management',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'A well-managed group therapy program generates $1,200–$1,800 per group session hour — three to four times the revenue per provider hour of individual therapy — while delivering better outcomes for ...',
  },
  {
    slug: 'self-service-check-in-elderly-patients',
    category: 'Patient Check-In',
    title: 'Self-Service Check-In for Elderly Patients',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'Patients 65 and older represent the majority of visits in many specialties — digital check-in that works for this population is not optional, it is the primary design requirement.',
  },
  {
    slug: 'general-surgery-authorization-case-approval',
    category: 'Prior Authorization',
    title: 'General Surgery Authorization: Getting Cases Approved',
    date: 'June 2025',
    readTime: '8 min',
    excerpt:
      'From cholecystectomy to bariatric surgery, general surgery prior authorization requires procedure-specific documentation strategies — here is the complete playbook.',
  },
  {
    slug: 'wound-care-center-patient-flow',
    category: 'Operations',
    title: 'Wound Care Center Patient Flow',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'A wound care center managing 40+ patients per day across debridement, HBO, and dressing changes needs a patient flow system that prevents bottlenecks without sacrificing clinical documentation qual...',
  },
  {
    slug: 'plastic-surgery-prior-auth-reconstruction-cosmetic',
    category: 'Prior Authorization',
    title: 'Plastic Surgery Prior Auth: Reconstruction vs Cosmetic',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'The line between cosmetic and reconstructive in prior authorization is defined by payer clinical criteria — knowing exactly what each plan requires for blepharoplasty, reduction mammaplasty, and po...',
  },
  {
    slug: 'urgent-care-wait-time-reduction',
    category: 'Operations',
    title: 'Urgent Care Wait Time Reduction Strategies',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'Systematic wait time reduction in urgent care is not about working faster — it is about eliminating the dead time between clinical steps that constitutes 40-60% of total patient visit length.',
  },
  {
    slug: 'dermatology-patient-flow-medical-cosmetic',
    category: 'Operations',
    title: 'Dermatology Practice Patient Flow: Balancing Medical and Cosmetic',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'The dermatology practices that thrive operationally are the ones that treat medical and cosmetic scheduling as two distinct systems — with separate templates, workflows, and revenue tracking.',
  },
  {
    slug: 'neurosurgery-or-efficiency',
    category: 'Operations',
    title: 'Neurosurgery OR Efficiency',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'Neurosurgery OR time is among the most expensive in any hospital — these are the strategies high-performing neurosurgery programs use to protect every minute of it.',
  },
  {
    slug: 'endocrinology-prior-auth-cgm-medications',
    category: 'Prior Authorization',
    title: 'Endocrinology Prior Auth: CGM and Specialty Medications',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'Reduce approval timelines for CGM devices, GLP-1 agonists, tirzepatide, and growth hormone with documentation strategies built on payer-specific criteria.',
  },
  {
    slug: 'psychiatric-medication-monitoring',
    category: 'Operations',
    title: 'Psychiatric Medication Monitoring Between Visits',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'Systematic lab tracking, AIMS screenings, and between-visit data collection prevent serious medication complications and demonstrate the clinical rigor that distinguishes high-quality psychiatric p...',
  },
  {
    slug: 'rtm-vs-rpm-comparison',
    category: 'RTM Billing',
    title: 'RTM vs RPM: Which Is Right for Your Practice?',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'RTM and RPM serve different clinical populations and carry different billing rules — understanding the distinction is worth thousands of dollars per month in correctly captured revenue.',
  },
  {
    slug: 'post-op-rtm-neurosurgery',
    category: 'RTM Billing',
    title: 'Post-Op RTM for Neurosurgery Patients',
    date: 'May 2025',
    readTime: '8 min',
    excerpt:
      'Neurosurgery patients generate high RTM billing intensity due to complex monitoring needs — here is how to build a compliant, high-revenue program.',
  },
  {
    slug: 'plastic-surgery-consultation-workflow',
    category: 'Operations',
    title: 'Plastic Surgery Consultation Workflow',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'A well-designed plastic surgery consultation workflow differentiates cosmetic from reconstructive cases at intake, protects surgical revenue with deposits, and converts more consults to booked proc...',
  },
  {
    slug: 'wait-time-analytics',
    category: 'Analytics',
    title: 'Wait Time Analytics: What to Measure and Why',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'Total wait time is a lagging indicator that tells you a problem exists but not where to fix it — the four-segment framework reveals exactly which part of your patient flow is breaking down and when.',
  },
  {
    slug: 'urgent-care-patient-flow-volume',
    category: 'Operations',
    title: 'Urgent Care Patient Flow: Managing Unpredictable Volume',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'The urgent care centers holding door-to-provider time under 20 minutes at 120 patients per day are running a real-time operations model, not a static staffing plan.',
  },
  {
    slug: 'dermatology-prior-auth-biologics-psoriasis',
    category: 'Prior Authorization',
    title: 'Dermatology Prior Auth: Biologics for Psoriasis',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'From PASI documentation to phototherapy step therapy and IL-23 vs. IL-17 positioning — the complete guide to winning biologic approvals for your moderate-to-severe psoriasis patients.',
  },
  {
    slug: 'neurosurgery-authorization-complex-cases',
    category: 'Prior Authorization',
    title: 'Neurosurgery Authorization: Complex Case Approval',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'From craniotomy to DBS, neurosurgical authorization requires a documentation strategy that speaks the payer\'s clinical language — here is how to build one.',
  },
  {
    slug: 'diabetes-rtm-glucose-monitoring',
    category: 'RTM Billing',
    title: 'Diabetes RTM: Between-Visit Glucose Monitoring',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'Turn continuous glucose monitor data into billable between-visit care with CPT 98975–98981 — and generate $9,600/month for 80 diabetic patients.',
  },
  {
    slug: 'behavioral-health-rtm-psychiatry',
    category: 'RTM Billing',
    title: 'Behavioral Health RTM for Psychiatry Practices',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'CPT 98978 enables psychiatry practices to bill $130+ per patient per month for structured mood tracking, medication monitoring, and crisis detection between office visits.',
  },
  {
    slug: 'check-in-completion-rates',
    category: 'Patient Check-In',
    title: 'Check-In Completion Rates: How to Get to 85%',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'Most practices that deploy digital check-in see 50-60% completion — closing the gap to 85% requires addressing specific, addressable friction points in the patient experience.',
  },
  {
    slug: 'orthopedic-patient-flow-optimization',
    category: 'Operations',
    title: 'Orthopedic Practice Patient Flow Optimization',
    date: 'April 2025',
    readTime: '8 min',
    excerpt:
      'High-volume orthopedic clinics see 30–50 patients per provider daily — here is how top practices design workflows that maximize throughput without sacrificing care quality.',
  },
  {
    slug: 'wound-care-prior-auth-hbo-dressings',
    category: 'Prior Authorization',
    title: 'Wound Care Prior Auth: HBO and Advanced Dressings',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'Hyperbaric oxygen, bioengineered skin substitutes, and NPWT all require prior authorization — and each has specific clinical criteria that must be documented before submission.',
  },
  {
    slug: 'podiatry-prior-auth-dme-surgery',
    category: 'Prior Authorization',
    title: 'Podiatry Prior Auth: DME and Surgery',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'Podiatry prior authorization denials for diabetic shoes, orthotics, and surgery are almost always preventable with the right documentation strategy — here is exactly what each payer requires.',
  },
  {
    slug: 'primary-care-patient-flow-high-volume',
    category: 'Operations',
    title: 'Primary Care Patient Flow for High-Volume Practices',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'Practices reliably seeing 30+ patients per provider per day have built distinct workflows around rooming efficiency, team documentation, and real-time lab integration — not just faster providers.',
  },
  {
    slug: 'rheumatology-patient-flow',
    category: 'Operations',
    title: 'Rheumatology Practice Patient Flow',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'From 90-minute new consults to infusion suite coordination and weekly lab monitoring — here is how high-performing rheumatology practices build a flow that serves complex patients without burning o...',
  },
  {
    slug: 'post-surgical-rtm-orthopedic',
    category: 'RTM Billing',
    title: 'Post-Surgical RTM for Orthopedic Patients',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'RTM codes 98975–98981 generate $350–$500 in recoverable revenue per post-op orthopedic patient while improving clinical outcomes and reducing readmissions.',
  },
  {
    slug: 'gi-patient-flow-optimization',
    category: 'Operations',
    title: 'GI Practice Patient Flow Optimization',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'Structure your clinic\'s scheduling lanes, results workflows, and infusion coordination to serve more patients without adding providers or rooms.',
  },
  {
    slug: 'no-show-reduction-addiction-medicine',
    category: 'Operations',
    title: 'No-Show Reduction in Addiction Medicine',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'With no-show rates running 30–50%, addiction medicine practices lose $150,000+ annually — but targeted interventions addressing the specific barriers of MAT patients can cut missed appointments by ...',
  },
  {
    slug: 'prior-auth-denial-prevention-guide',
    category: 'Prior Authorization',
    title: 'Prior Auth Denial Prevention: A Complete Guide',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'The average practice loses 15-20% of authorization requests to preventable denials — this framework closes that gap with pre-submission discipline, specialty-specific checklists, and a denial audit...',
  },
  {
    slug: 'orthopedic-prior-auth-joint-replacement',
    category: 'Prior Authorization',
    title: 'Orthopedic Surgery Prior Auth: Joint Replacement & Arthroscopy',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'The documentation frameworks that get TKA, THA, shoulder arthroplasty, and arthroscopic procedures approved on first submission.',
  },
  {
    slug: 'pain-management-prior-auth-denials',
    category: 'Prior Authorization',
    title: 'Pain Management Prior Authorization: Why Procedures Get Denied and How to Prevent It',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'Denial rates on first submission run 15-25% for routine pain procedures and up to 40% for advanced interventions. Most denials are preventable.',
  },
  {
    slug: 'procedure-room-turnover-pain-management',
    category: 'Operations',
    title: 'Procedure Room Turnover in Pain Management: Benchmarks, Bottlenecks, and Solutions',
    date: 'March 2025',
    readTime: '7 min',
    excerpt:
      'Recovering 10 minutes per turnover across 20 procedures adds up to $150,000-200,000 in annual capacity. Here\'s where time gets lost and how to get it back.',
  },
  {
    slug: 'rtm-billing-pain-management-cpt-codes',
    category: 'RTM Billing',
    title: 'RTM Billing for Pain Management: CPT Codes, Revenue Math, and Implementation',
    date: 'March 2025',
    readTime: '8 min',
    excerpt:
      'Remote Therapeutic Monitoring generates $120-150/patient/month for chronic pain practices. Here\'s exactly how to bill it correctly.',
  },
  {
    slug: 'podiatry-procedure-room-efficiency',
    category: 'Operations',
    title: 'Podiatry Procedure Room Efficiency',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'High-volume podiatry practices seeing 30–50 patients per day need systematic procedure room turnover, sterility management, and supply staging to prevent bottlenecks that kill throughput.',
  },
  {
    slug: 'same-day-access-primary-care',
    category: 'Operations',
    title: 'Same-Day Access in Primary Care: Making It Work',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'Practices that solve same-day access retain patients, reduce ER diversion costs, and maintain scheduled visit revenue — but only with the right operational architecture.',
  },
  {
    slug: 'rheumatology-prior-auth-biologics',
    category: 'Prior Authorization',
    title: 'Rheumatology Prior Auth: Biologics Approval',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'Master the step therapy documentation, payer criteria, and appeal strategies that determine biologic approval rates for your RA, lupus, and autoimmune patients.',
  },
  {
    slug: 'same-day-access-scheduling',
    category: 'Scheduling',
    title: 'Same-Day Access: Making It Actually Work',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'Same-day access is one of the most patient-valued attributes of a practice — and one of the most operationally disrupted when implemented without a clear capacity model.',
  },
  {
    slug: 'or-efficiency-spine-surgery',
    category: 'Operations',
    title: 'OR Efficiency for Spine Surgery Practices',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'Every minute of OR time recovered in a spine room is worth $15–$25 — here is how high-performing spine practices optimize turnover, scheduling, and block time.',
  },
  {
    slug: 'gastroenterology-prior-auth-biologics',
    category: 'Prior Authorization',
    title: 'Gastroenterology Prior Auth: Biologics and Procedures',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'Master the step therapy requirements, clinical documentation standards, and payer-specific rules that determine biologic approval speed for your IBD patients.',
  },
  {
    slug: 'mat-patient-monitoring-compliance',
    category: 'Operations',
    title: 'MAT Patient Monitoring and Compliance Tracking',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'Systematic compliance monitoring for buprenorphine and naltrexone patients reduces diversion risk, satisfies SAMHSA requirements, and keeps your DEA registration audit-ready.',
  },
  {
    slug: 'phone-vs-kiosk-check-in',
    category: 'Patient Check-In',
    title: 'Phone vs Kiosk Check-In: Which Is Right for Your Practice?',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'The answer depends on your patient demographics, physical space, and what problem you are actually trying to solve — this guide breaks down both options with real data.',
  },
  {
    slug: 'post-op-rtm-spine-surgery',
    category: 'RTM Billing',
    title: 'Post-Op RTM for Spine Surgery Patients',
    date: 'February 2025',
    readTime: '8 min',
    excerpt:
      'RTM codes 98975–98981 allow spine surgery practices to bill for post-operative monitoring that already happens — turning clinical care into recoverable revenue.',
  },
  {
    slug: 'wound-care-rtm-between-visit-monitoring',
    category: 'RTM Billing',
    title: 'Wound Care RTM: Between-Visit Monitoring',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'Chronic wound patients generate billable data every day they are healing — RTM lets wound care centers capture that revenue without adding clinic visits.',
  },
  {
    slug: 'podiatry-rtm-diabetic-foot-wound-monitoring',
    category: 'RTM Billing',
    title: 'Podiatry RTM: Diabetic Foot and Wound Monitoring',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'RTM codes 98975–98981 let podiatry practices generate $8,000+ monthly by remotely tracking wound healing, Wagner grade progression, and Charcot joint status between office visits.',
  },
  {
    slug: 'ccm-rtm-primary-care-chronic-care-revenue',
    category: 'Billing',
    title: 'CCM + RTM for Primary Care: Maximizing Chronic Care Revenue',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'Most primary care practices bill CCM or RTM — the ones capturing both are generating an additional $180,000+ annually from patients already in their panel.',
  },
  {
    slug: 'rheumatology-rtm-ra-lupus-autoimmune',
    category: 'RTM Billing',
    title: 'Rheumatology RTM: RA, Lupus, and Autoimmune Monitoring',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'Capture disease activity data between visits with RTM — improving outcomes for RA and lupus patients while generating $150–$300 per patient per month in new practice revenue.',
  },
  {
    slug: 'spine-surgery-authorization-complex-cases',
    category: 'Prior Authorization',
    title: 'Spine Surgery Authorization: Getting Complex Cases Approved',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'A systematic documentation and peer-to-peer strategy that reduces denials and shortens approval timelines for ACDF, lumbar fusion, ADR, and SCS cases.',
  },
  {
    slug: 'gi-procedure-scheduling-colonoscopy-egd',
    category: 'Operations',
    title: 'GI Practice Procedure Scheduling: Colonoscopy and EGD',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'Master block scheduling, case stacking, and 15-minute turnover targets to maximize your endoscopy suite\'s daily procedure volume.',
  },
  {
    slug: 'behavioral-health-rtm-addiction-medicine',
    category: 'RTM Billing',
    title: 'Behavioral Health RTM for Addiction Medicine',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'CPT 98978 unlocks $130+ per patient per month for monitoring medication adherence, cravings, and crisis risk in MAT patients — without adding clinical staff.',
  },
  {
    slug: 'rtm-cpt-codes-explained',
    category: 'RTM Billing',
    title: 'RTM CPT Codes Explained: 98975-98981',
    date: 'January 2025',
    readTime: '8 min',
    excerpt:
      'A code-by-code breakdown of every RTM billing code — reimbursement rates, documentation requirements, and payer coverage rules your billing team needs to maximize revenue.',
  },
]

export default function BlogPage() {
  return (
    <>
      <NavInner />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroOrb} />
            <div className={styles.heroGrain} />
          </div>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Blog</h1>
              <p className={styles.heroSubtitle}>
                Operational insights for clinics that refuse to accept chaos.
              </p>
            </div>
          </div>
        </section>
        <BlogIndex posts={posts} />
      </main>
      <FooterInner />
    </>
  )
}
