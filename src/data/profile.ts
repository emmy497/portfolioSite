export const PROFILE = {
  name: 'Emmanuel Israel',
  role: 'Software Engineer',
  email: 'emmanuelisrael497@gmail.com',
  github: 'https://github.com/emmy497',
  linkedin: 'https://www.linkedin.com/in/israel-emmanuel-3884bb241',
  resume: '/Emmanuel-Israel-CV.pdf',
  education: {
    degree: 'B.Sc. (Hons) Computer Science',
    school: 'University of Lagos',
  },
  summary:
    'Full-stack Software Engineer who designs and ships complete web products, from MongoDB data models and secure, tested Node.js/Express APIs to fast, responsive React and TypeScript front ends. I have built production-style platforms end to end with JWT and Google OAuth authentication, role-based access control, geospatial search, file uploads, transactional email and automated API tests, deployed on Vercel and Render. I care about clean architecture, security and performance as much as the UI. Alongside shipping products, I teach and mentor developers, running code reviews, live workshops, and portfolio sessions that help people land their first tech roles.',
}

export const SKILLS = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TanStack Query', 'Redux', 'React Router', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'REST APIs', 'JWT', 'OAuth 2.0', 'Zod'],
  database: ['MongoDB', 'Mongoose', 'MySQL', 'Geospatial queries', 'Indexing'],
  devops: ['Vitest', 'Supertest', 'Git', 'GitHub', 'Vercel', 'Render', 'Cloudinary', 'Agile'],
}

export type Project = {
  slug: string
  title: string
  /** One-liner shown on the home page card. */
  description: string
  /** Longer intro for the project details page. */
  overview: string
  highlights: string[]
  stack: string[]
  role: string
  context: string
  period?: string
  url?: string
  frame: string
  /** Optional deep-dive sections for the project details page. */
  stats?: { value: string; label: string }[]
  architecture?: { layer: string; items: string[] }[]
  skills?: { title: string; body: string; tags: string[] }[]
  decisions?: { title: string; body: string }[]
  repos?: { label: string; url: string }[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'estatery',
    title: 'Estatery',
    description:
      'Full-stack real estate platform: map-based geo search, JWT auth with email OTP verification, tour booking, and admin dashboards. React + TypeScript front end on a tested Node/Express/MongoDB API.',
    overview:
      'Estatery is a production-style real estate platform I designed and built end to end, from the MongoDB data model and a secured, fully tested REST API to a responsive React front end with interactive map search. Renters and buyers can search by price, bedrooms, state or straight from the map, save favourites and book property tours, while admins manage listings, users and incoming requests from dedicated dashboards.',
    highlights: [
      'Listing search with filters, sorting and pagination, plus a “search this area” map backed by MongoDB geospatial queries.',
      'Complete auth system: sign-up with email OTP verification, login, forgot/reset password, email change with re-verification and account deletion.',
      'Property tour booking and listing requests, with branded transactional emails sent to users.',
      'Admin dashboards to create, edit, unlist and re-image properties (Cloudinary uploads) and to manage users, tours and listing requests.',
      'Saved properties, similar-property suggestions, skeleton loading states and fully responsive layouts.',
      'Deployed as two services: the React app on Vercel and the Express API on Render.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    role: 'Full-Stack Engineer — designed & built front end and back end',
    context: 'Personal project · end to end',
    url: 'https://estatery-front-cr4p.vercel.app/',
    frame: '/images/RectangleBlue.png',
    stats: [
      { value: '30', label: 'REST API endpoints' },
      { value: '60', label: 'automated API tests' },
      { value: '54', label: 'React components' },
      { value: '18', label: 'app pages & dashboards' },
    ],
    architecture: [
      {
        layer: 'Front end',
        items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'TanStack Query', 'React Router', 'Leaflet maps', 'Axios'],
      },
      {
        layer: 'API',
        items: ['Node.js', 'Express 5', 'TypeScript', 'Zod', 'JWT + bcrypt', 'Helmet', 'Rate limiting', 'Multer'],
      },
      {
        layer: 'Data & services',
        items: ['MongoDB + Mongoose', '2dsphere geo index', 'Cloudinary', 'Brevo / Nodemailer', 'OpenStreetMap geocoding'],
      },
      {
        layer: 'Quality & delivery',
        items: ['Vitest', 'Supertest', 'mongodb-memory-server', 'Vercel', 'Render'],
      },
    ],
    skills: [
      {
        title: 'Geospatial search',
        body: 'Listings carry a GeoJSON point with a sparse 2dsphere index. The API answers radius searches ($centerSphere) and “search this area” map queries (bounding box), combined with price, category, bedroom and state filters.',
        tags: ['MongoDB', 'GeoJSON', 'Leaflet'],
      },
      {
        title: 'Security-first authentication',
        body: 'JWT sessions with bcrypt-hashed passwords. Email OTPs are generated with crypto.randomInt, stored only as SHA-256 hashes, expire automatically and are compared in constant time. Auth routes are rate limited to slow down brute-force and OTP guessing.',
        tags: ['JWT', 'bcrypt', 'crypto', 'Rate limiting'],
      },
      {
        title: 'Hardened, validated API',
        body: 'Every request body and query string is parsed with Zod, which blocks NoSQL operator injection like { "$ne": null }. Search text is regex-escaped to prevent ReDoS, alongside Helmet, a CORS allow-list, a 1 MB body limit and an error handler that never leaks stack traces.',
        tags: ['Zod', 'Helmet', 'OWASP'],
      },
      {
        title: 'Integration-tested back end',
        body: '60 Vitest + Supertest tests run the real Express app against an in-memory MongoDB, covering auth, access control, pagination, tour-date rules and HTML escaping in emails. Email sending is mocked so tests read OTPs directly.',
        tags: ['Vitest', 'Supertest', 'Testing'],
      },
      {
        title: 'Server state & performance',
        body: 'TanStack Query caches results and keeps the current page on screen while the next one loads. On the server, compound indexes match the real query patterns, and results and totals are fetched in parallel with lean queries.',
        tags: ['TanStack Query', 'Indexing', 'Pagination'],
      },
      {
        title: 'Role-based access control',
        body: 'Users and admins get different dashboards, guarded on the client by protected routes and enforced on the server by middleware. A role can never be set from a request body; admins are created through a seed script.',
        tags: ['RBAC', 'Middleware', 'Protected routes'],
      },
    ],
    decisions: [
      {
        title: 'The URL is the source of truth',
        body: 'Filters, sort order, page and map area all live in the query string, so any search can be shared, bookmarked, refreshed or revisited with the back button without losing state.',
      },
      {
        title: 'Respond first, geocode later',
        body: 'New listings are saved and returned immediately; turning the address into coordinates happens in the background, so admins never wait on a third-party geocoding API.',
      },
      {
        title: '$geoWithin over $near',
        body: '$near forces results into distance order and can’t be counted, which breaks paginated, price-sorted results. $geoWithin keeps my own sort order and works with countDocuments.',
      },
      {
        title: 'Never trust a token alone',
        body: 'The auth middleware re-checks the user on every request, so a deactivated account, deleted user or changed role takes effect immediately instead of when the JWT expires.',
      },
      {
        title: 'Timezone-correct bookings',
        body: 'Tour dates are validated in Lagos time rather than the server’s UTC clock, so “today” means the same thing to users and the API. Impossible dates like 31 February are rejected.',
      },
      {
        title: 'Backwards-compatible API',
        body: 'Without ?page the API returns the original array; with it, a paginated object. The front end can also filter client-side against the older API, so the two services deploy independently.',
      },
      {
        title: 'No account enumeration',
        body: 'Password-reset and OTP flows give the same response whether or not an email is registered, and login uses one error for both cases, so attackers can’t discover who has an account.',
      },
      {
        title: 'One pin per location',
        body: 'Listings geocoded to the same point are grouped into a single map pin instead of a stack of overlapping markers.',
      },
    ],
    repos: [
      { label: 'Front-end code', url: 'https://github.com/emmy497/estateryFront' },
      { label: 'Back-end code', url: 'https://github.com/emmy497/estateryBackn' },
    ],
  },
  {
    slug: 'worknest',
    title: 'WorkNest',
    description:
      'Full-stack job board and hiring platform: Google sign-in, multi-step applications with CV upload, and a recruiter pipeline with scorecards, analytics and automatic candidate updates.',
    overview:
      'WorkNest is a full-stack recruitment platform I designed and built end to end, from the MongoDB data model and a role-based Express API to the React front end. Candidates browse and filter jobs, build a profile, save roles and apply in a guided multi-step flow, even as a guest. Recruiters and admins manage clients and job posts, move applicants through a six-stage hiring pipeline, score them, and track everything from a live analytics dashboard.',
    highlights: [
      'Job search with filters for work arrangement, job type, experience level and career path, all kept in the URL.',
      'Multi-step application flow with CV upload, per-job screening questions and validation at every step; guests can apply without an account.',
      'Candidate accounts with email OTP verification, Google sign-in, password reset, saved jobs and a profile-completion tracker.',
      'Recruiter pipeline that moves applicants through submitted → review → shortlisted → interview → offer → hired, with 4-criteria scorecards and private notes.',
      'Automatic in-app notifications and emails whenever an application’s status changes, plus “closing soon” and job-match alerts.',
      'Admin dashboard with week-over-week stats, applications by status, most-applied roles and jobs closing soon, along with client (company) and candidate management.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    role: 'Full-Stack Engineer — designed & built front end and back end',
    context: 'Personal project · end to end',
    url: 'https://work-nest-front.vercel.app/',
    frame: '/images/RectRed.png',
    stats: [
      { value: '40', label: 'REST API endpoints' },
      { value: '6', label: 'stage hiring pipeline' },
      { value: '3', label: 'user roles with RBAC' },
      { value: '34', label: 'pages & dashboard views' },
    ],
    architecture: [
      {
        layer: 'Front end',
        items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'React Router', 'Context API', 'Google OAuth', 'Axios'],
      },
      {
        layer: 'API',
        items: ['Node.js', 'Express 5', 'TypeScript', 'JWT', 'bcrypt', 'Multer', 'Role-based middleware'],
      },
      {
        layer: 'Data & services',
        items: ['MongoDB + Mongoose', 'Compound & partial indexes', 'Cloudinary (CVs & logos)', 'Brevo email'],
      },
      {
        layer: 'Delivery',
        items: ['Vercel', 'Environment-based config', 'Seed & migration scripts'],
      },
    ],
    skills: [
      {
        title: 'Secure auth, two ways',
        body: 'Email sign-up with 6-digit OTPs from crypto.randomInt, stored only as bcrypt hashes, valid for 10 minutes and locked after 5 wrong guesses. Google sign-in is verified on the server: the token’s audience and verified email are checked with Google before an account is created or linked.',
        tags: ['JWT', 'OAuth 2.0', 'bcrypt', 'OTP'],
      },
      {
        title: 'Role-based access control',
        body: 'Three roles: candidate, recruiter and admin. Every admin route sits behind authorize() middleware on the server, matched by role-aware protected routes in React, and reviewer-only data like scorecards and internal notes is never sent to candidates.',
        tags: ['RBAC', 'Middleware', 'Protected routes'],
      },
      {
        title: 'Workflow & state modelling',
        body: 'Applications follow an ordered six-stage pipeline, with “rejected” modelled as a separate terminal state rather than a fake extra stage. Every move is recorded in a status history the candidate can see.',
        tags: ['Domain modelling', 'Mongoose', 'TypeScript'],
      },
      {
        title: 'Event-driven notifications',
        body: 'A status change creates an in-app notification and emails the candidate in the same action. “Closing soon” and job-match alerts are generated on demand, with a unique dedupe key so each one is only ever created once.',
        tags: ['Notifications', 'Brevo', 'Idempotency'],
      },
      {
        title: 'Analytics API design',
        body: 'The admin overview is served by one endpoint that runs its queries in parallel with Promise.all, computing week-over-week changes (with divide-by-zero guards), status breakdowns, top roles and closing deadlines.',
        tags: ['Promise.all', 'Parallel queries', 'API design'],
      },
      {
        title: 'Safe file uploads',
        body: 'CVs (PDF/DOC/DOCX, 5 MB max) and company logos (2 MB max) are checked by MIME type, held in memory just long enough to stream to Cloudinary, and never written to the server’s disk.',
        tags: ['Multer', 'Cloudinary', 'Validation'],
      },
    ],
    decisions: [
      {
        title: 'Snapshot what was sent',
        body: 'Applications copy the candidate’s details and the screening questions at the moment of applying, so a recruiter always sees exactly what was submitted, even if the profile or job is edited later.',
      },
      {
        title: 'A smarter unique index',
        body: 'A compound unique index stops anyone applying to the same job twice, and a partial filter scopes it to signed-in users so guest applications aren’t all treated as the same duplicate.',
      },
      {
        title: 'Store the deadline, not the countdown',
        body: 'Jobs store a closing date, never “closes in 6 days”, which would be wrong tomorrow. A serializer converts it to whatever the UI needs, so the database and the front end can evolve independently.',
      },
      {
        title: 'One source of truth for types',
        body: 'Job types, work arrangements and levels are defined once as const arrays that power both the Mongoose enum validation and the TypeScript types, so database rules and code can never drift apart.',
      },
      {
        title: 'Purpose-scoped codes',
        body: 'Each OTP records what it was issued for, so a password-reset code can never be used to verify an email (or the reverse), and every new code resets the attempt counter.',
      },
      {
        title: 'Don’t fail sign-up on email',
        body: 'If the email provider is down, the account is still created and the user can simply resend the code, so an outside service can’t block registration.',
      },
      {
        title: 'Lazy alerts without a cron job',
        body: 'Instead of running a scheduler, deadline and job-match alerts are created the moment a candidate opens their notifications, which keeps the infrastructure simple and the alerts always current.',
      },
      {
        title: 'One request per dashboard',
        body: 'All eight overview panels load from a single API call, so the dashboard appears complete at once instead of eight spinners finishing at different moments.',
      },
    ],
    repos: [
      { label: 'Front-end code', url: 'https://github.com/emmy497/WorkNestFront' },
      { label: 'Back-end code', url: 'https://github.com/emmy497/WorkNestBack' },
    ],
  },
  {
    slug: 'icsl-self-service-portal',
    title: 'ICSL Self-Service Portal',
    description:
      'Front-end redesign of a customer self-service portal with real-time billing and usage analytics dashboards, improving mobile responsiveness and satisfaction by 45%.',
    overview:
      'During my internship at ICSL (Information Connectivity Solutions Limited), I led the front-end redesign of the company’s customer self-service portal, where customers check their billing and usage. This is internal client work, so there is no public demo.',
    highlights: [
      'Led the front-end redesign, increasing mobile responsiveness and user satisfaction by 45%.',
      'Interactive analytics dashboards for real-time billing and usage visualisation with React and Chart.js.',
      'Modular front-end architecture that reduced maintenance issues and bug frequency by 20%.',
      'Worked cross-functionally with backend engineers and UI designers to improve the overall experience.',
    ],
    stack: ['React', 'JavaScript', 'Chart.js'],
    role: 'Software Engineer Intern',
    context: 'ICSL',
    period: 'Jun 2022 — Aug 2023',
    frame: '/images/RectYellow.png',
  },
  {
    slug: 'owoile',
    title: 'Owoile',
    description:
      'Full-stack rent escrow and payout platform built on a double-entry ledger, with atomic transactions, idempotent payments and signed webhooks that survive duplicates and out-of-order delivery.',
    overview:
      'Owoile (owó + ilé, “money” + “house”) is a full-stack demo platform for a rent escrow and payout system, which I designed and built end to end. It models how a property-rental business can safely collect rent, hold it in escrow, release funds when a tenancy is confirmed, refund tenants when needed, and pay landlords without double-spending or accounting drift. It goes far beyond a standard CRUD app, combining a double-entry accounting ledger, transactional money movement, idempotent payment processing, webhook reliability handling and a realistic payment-provider simulation.',
    highlights: [
      'A double-entry ledger where every journal entry’s debits equal its credits, checked in code before writing and again by the database schema.',
      'Rent escrow lifecycle (pending → funded → released / refunded), with a dedicated escrow account per tenancy and instalment payments.',
      'Landlord payouts protected by an Idempotency-Key header, and a 2.5% platform fee split that always balances to the kobo.',
      'MockPay, a simulated payment provider with a checkout page and calm, chaotic and hostile modes that send duplicate, late and out-of-order webhooks.',
      'A live webhook inbox showing every delivery count and outcome (applied, duplicate, stale or rejected), plus a button that replays one payment 20 times.',
      'A real-time journal and integrity check that recomputes every balance from the ledger to prove nothing has drifted.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    role: 'Full-Stack Engineer — designed & built front end and back end',
    context: 'Personal project · end to end',
    url: 'https://owoile-p4gn.vercel.app/',
    frame: '/images/RectGreen.png',
    stats: [
      { value: '22×', label: 'duplicate webhook, credited once' },
      { value: '0', label: 'floating-point maths on money' },
      { value: '4', label: 'ledger-backed money flows' },
      { value: '44+', label: 'automated tests' },
    ],
    architecture: [
      {
        layer: 'Console',
        items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Live journal view', 'Webhook inbox'],
      },
      {
        layer: 'Escrow API',
        items: ['Node.js', 'Express 5', 'TypeScript', 'Zod', 'Idempotency keys', 'Typed domain errors'],
      },
      {
        layer: 'Ledger & data',
        items: ['MongoDB replica set', 'Multi-document transactions', 'Mongoose', 'Optimistic locking', 'Append-only journal'],
      },
      {
        layer: 'Payments & quality',
        items: ['MockPay provider', 'Signed webhooks', 'Vitest', 'Supertest', 'In-memory replica set'],
      },
    ],
    skills: [
      {
        title: 'Double-entry accounting',
        body: 'Every money movement is a journal entry of two or more lines whose debits equal its credits. The journal is append-only: entries can’t be edited or deleted, mistakes are corrected with reversals, and each entry can be reversed at most once.',
        tags: ['Ledger design', 'Accounting', 'Domain modelling'],
      },
      {
        title: 'Transactional money movement',
        body: 'A journal entry, every balance it changes and the tenancy’s new status all commit in one MongoDB multi-document transaction, so a tenancy can never be marked released without the money actually moving.',
        tags: ['MongoDB transactions', 'ACID', 'Consistency'],
      },
      {
        title: 'Idempotent payment processing',
        body: 'Each entry has a unique idempotency key and a fingerprint of its money fields. The same request returns the original result, the same key with a different payload is rejected, and concurrent duplicates post exactly one entry.',
        tags: ['Idempotency', 'Exactly-once', 'Fingerprinting'],
      },
      {
        title: 'Webhook reliability',
        body: 'Payment notifications reach the API only through signed webhooks. Each one is signature-checked, stored once by event ID and matched against the payment’s current status, so duplicates and out-of-order events can never credit a tenancy twice.',
        tags: ['Webhooks', 'Signatures', 'Event handling'],
      },
      {
        title: 'Concurrency control',
        body: 'Balance and tenancy writes use optimistic locking on a version field, with automatic retries for conflicts. Escrow can’t go negative under concurrent payouts, and a racing release and refund can never both win.',
        tags: ['Optimistic locking', 'Race conditions', 'Retries'],
      },
      {
        title: 'Testing the hard cases',
        body: 'Vitest and Supertest run against an in-memory MongoDB replica set so real transactions are exercised. Tests cover concurrent payouts, racing refunds, idempotency conflicts, forged webhooks and a worker crashing mid-payment.',
        tags: ['Vitest', 'Supertest', 'Concurrency tests'],
      },
    ],
    decisions: [
      {
        title: 'Integers only, never floats',
        body: 'Money is stored as whole kobo, every sum is checked against Number.MAX_SAFE_INTEGER, and naira strings are parsed without parseFloat. The API rejects numeric amounts outright, so a float never enters the system.',
      },
      {
        title: 'One escrow account per tenancy',
        body: 'Every tenancy gets its own escrow account and every landlord their own payable account, so each balance is traceable and one tenancy’s money can never leak into another’s.',
      },
      {
        title: 'Fee rounds down, landlord gets the rest',
        body: 'The 2.5% fee is rounded down to the kobo and the landlord receives the exact remainder, so the split always sums to the rent with no stray kobo.',
      },
      {
        title: 'Corrections are reversals, not edits',
        body: 'Like a real accounting system, nothing in the journal is ever changed after the fact. A wrong entry is cancelled by a reversing entry, which keeps a complete, auditable history.',
      },
      {
        title: 'Trust the ledger, then verify it',
        body: 'An integrity check rebuilds the trial balance, each entry’s balance and every account balance from the journal and reports any drift, the foundation for nightly reconciliation against the provider.',
      },
      {
        title: 'A provider designed to misbehave',
        body: 'Instead of testing against a perfect API, MockPay can deliberately send duplicate, late and out-of-order webhooks, so the system is proven against the failures real payment providers actually produce.',
      },
      {
        title: 'A state machine for tenancies',
        body: 'Tenancies move only through allowed transitions (pending → funded → released, or → refunded). Invalid moves return a clear INVALID_TRANSITION error instead of corrupting state.',
      },
      {
        title: 'Errors with stable codes',
        body: 'Every failure returns { error: { code, message } } with the right status, for example OVERPAYMENT, INSUFFICIENT_FUNDS or IDEMPOTENCY_CONFLICT, so clients can react to each case reliably.',
      },
    ],
    repos: [
      { label: 'Front-end code', url: 'https://github.com/emmy497/Owoile' },
      { label: 'Back-end code', url: 'https://github.com/emmy497/OwoIleB' },
    ],
  },
]

export type Job = {
  company: string
  role: string
  period: string
  points: string[]
}

export const EXPERIENCE: Job[] = [
  {
    company: 'TechStudio Academy',
    role: 'Full-Stack Developer',
    period: 'Nov 2025 — Present',
    points: [
      'Teach full-stack web development (HTML, CSS, JavaScript, React, Node.js, Git) to cohorts of 20–40 students.',
      'Deliver structured lessons, coding exercises, and real-world projects that improved student comprehension by 70%.',
      'Run weekly code reviews and debugging sessions, and mentor students on portfolios, project architecture, and interview readiness.',
    ],
  },
  {
    company: 'Samiway Educational Consult',
    role: 'Software Engineer',
    period: 'Aug 2024 — Sep 2025',
    points: [
      'Developed and maintained a responsive learning platform used by 500+ students with React, Tailwind CSS, and TypeScript.',
      'Built 12+ reusable UI components (course cards, quizzes, progress bars, video players), cutting development time by 30%.',
      'Implemented role-based dashboards that improved navigation and engagement by 40%, and optimised API data flow to speed up page loads by 25%.',
    ],
  },
  {
    company: 'Lagos Internal Revenue Service (LIRS)',
    role: 'IT Support Technician',
    period: 'Sep 2023 — Oct 2024',
    points: [
      'Supported 150+ staff systems, keeping 99% uptime across the department’s network and infrastructure.',
      'Diagnosed hardware, software, and network issues, improving workflow efficiency by 35%.',
      'Assisted with system upgrades, data backup and recovery, and proactive network security monitoring.',
    ],
  },
  {
    company: 'ICSL (Information Connectivity Solutions Limited)',
    role: 'Software Engineer Intern',
    period: 'Jun 2022 — Aug 2023',
    points: [
      'Led the front-end redesign of the customer self-service portal, raising mobile responsiveness and satisfaction by 45%.',
      'Built interactive real-time billing and usage dashboards with React and Chart.js.',
      'Introduced a modular front-end architecture that cut bug frequency by 20%, and mentored 5+ junior developers.',
    ],
  },
  {
    company: 'Genius Camp',
    role: 'Web Development Mentor',
    period: 'Nov 2021 — Dec 2022',
    points: [
      'Mentored 15+ junior developers on HTML, CSS, JavaScript, React, and Git.',
      'Designed and delivered 5 custom learning modules, boosting mentee project completion by 60%.',
    ],
  },
]

export const CERTIFICATES = [
  'Web Development Certification — CK Digital',
  'React Certification — Maximilian Schwarzmüller (Udemy)',
  'Complete Node.js Developer Course — Maximilian Schwarzmüller (Udemy)',
  'Backend Development Bootcamp — NITHUB',
]

export const VOLUNTEERING = [
  'Google Developer Student Club — Member',
  'Nithub Community — Volunteer',
]
