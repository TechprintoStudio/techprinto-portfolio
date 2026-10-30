import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, MotionConfig, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown, Smartphone, Globe, Code2, Boxes, Users, ShoppingBag, Search, Palette, Server, TrendingUp, Apple, Play, Check, X, MapPin, Mail, Github, Linkedin, Sparkles, FlaskConical, Menu, Phone, Bot, Workflow, Plug } from "lucide-react";
import portrait from "@/assets/vasantharaj.png";
import logo from "@/assets/techprinto-logo.png";
import { Button } from "@/components/ui/button";
import { Reveal, Lift, spring } from "@/components/PortfolioMotion";
import { ProductVisual } from "@/components/ProductVisual";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Techprinto Pvt Ltd — Software, AI Agents & Automation, Coimbatore" },
    { name: "description", content: "Techprinto Pvt Ltd builds websites, ERP/CRM, SaaS, mobile apps, AI agents, MCP integrations and n8n automations for businesses." },
    { property: "og:title", content: "Techprinto — Turning Ideas Into Technology" },
    { property: "og:description", content: "Software development, AI agents, MCP servers and workflow automation from Coimbatore, India." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});
const host = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");
function SectionHead({ tag, title, sub }: { tag: string; title: ReactNode; sub?: string }) {
  return <Reveal className="mb-12 max-w-3xl"><span className="section-tag">{tag}</span><h2 className="mt-5 text-4xl font-medium leading-tight md:text-5xl">{title}</h2>{sub && <p className="mt-4 max-w-xl text-muted-foreground">{sub}</p>}</Reveal>;
}
function Hero() {
  const reduced = useReducedMotion();
  const featured = [
    { I: Globe, name: 'Websites', sub: 'Your business, online', tone: 'text-info' },
    { I: Boxes, name: 'ERP & CRM', sub: 'Connected operations', tone: 'text-secondary' },
    { I: Smartphone, name: 'Mobile apps', sub: 'Android & iOS', tone: 'text-primary' },
    { I: Code2, name: 'SaaS platforms', sub: 'Built to scale', tone: 'text-info' },
    { I: ShoppingBag, name: 'E-Commerce', sub: 'Better shopping', tone: 'text-accent-foreground' },
    { I: Bot, name: 'AI agents & MCP', sub: 'Automation that works', tone: 'text-secondary' },
  ];
  return <section className="hero-section">
    <div className="page-width">
      <div className="hero-intro">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-sm font-medium text-muted-foreground">TECHPRINTO PVT LTD · SOFTWARE · AI · AUTOMATION</motion.p>
        <h1 className="hero-title"><span className="block text-foreground">Turning ideas into</span><span className="hero-offer">technology.</span></h1>
        <motion.div initial={{ opacity: 0, y: reduced ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.2 }}>
          <span className="hero-rule" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">We design, build and maintain websites, enterprise software, mobile apps, AI agents and business automations for growing organisations.</p>
          <p className="mt-3 text-sm text-muted-foreground">40+ projects delivered across education, finance, retail, publishing and government.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4"><motion.div whileHover={{ scale: reduced ? 1 : 1.03 }} transition={spring}><Button asChild size="lg" className="h-12 rounded-sm px-7 text-xs uppercase"><a href="#contact">Start a project <ArrowRight /></a></Button></motion.div><Button asChild variant="link" className="text-info"><a href="#work">View our portfolio <ArrowRight /></a></Button></div>
        </motion.div>
      </div>
      <Reveal className="featured-capabilities"><p className="mb-7 text-center text-xs font-semibold uppercase text-muted-foreground">Software for every part of your business</p><div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">{featured.map(({ I, name, sub, tone }) => <a key={name} href="#services" className="flex items-start gap-3 transition hover:-translate-y-1"><I className={`mt-1 h-7 w-7 shrink-0 ${tone}`} strokeWidth={1.5} /><div><h2 className="text-base font-semibold">{name}</h2><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{sub}</p></div></a>)}</div></Reveal>
      <Reveal className="hero-bottom flex flex-wrap items-center justify-between gap-4 border-t border-border py-5"><div className="flex items-center gap-3"><img src={portrait} alt="Vasantharaj Balamurugan" className="h-10 w-10 rounded-full object-cover" /><div><p className="text-sm font-semibold">Vasantharaj Balamurugan</p><p className="text-xs text-muted-foreground">Founder & Managing Director</p></div></div><span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="status-dot" /> Available for new projects</span></Reveal>
    </div>
  </section>;
}
function Marquee() {
 const reduced = useReducedMotion();
 const items = ['REACT', 'FLUTTER', 'NEXT.JS', 'NODE.JS', 'SAAS', 'IOS & ANDROID', 'AI AGENTS', 'MCP SERVERS', 'N8N AUTOMATION'];
 return <div className="overflow-hidden border-y border-border bg-background py-5 text-muted-foreground"><motion.div className="flex w-max gap-12 font-mono text-sm" animate={reduced ? {} : { x: ['0%', '-50%'] }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}>{[...items, ...items].map((item, i) => <span key={i} className="flex items-center gap-12">{item}<Sparkles className="h-4 w-4 text-accent" /></span>)}</motion.div></div>;
}
const stages = [
 { n: '01', t: 'Discovery & scope', d: 'Requirement analysis, scope definition and technical feasibility before development begins.', I: Search, pts: ['Vision workshops', 'User metrics', 'Feasibility study'] },
 { n: '02', t: 'UI/UX design system', d: 'User journeys, wireframes, prototypes and consistent design systems.', I: Palette, pts: ['User journeys', 'Interactive prototypes', 'Design systems'] },
 { n: '03', t: 'Engineering', d: 'Resilient Next.js, Flutter and Node.js architectures built to be fast, secure and maintainable.', I: Server, pts: ['Next.js & React', 'Flutter mobile', 'Node.js APIs'] },
 { n: '04', t: 'Scale & evolution', d: 'Deployment, monitoring, maintenance and performance optimisation as your business grows.', I: TrendingUp, pts: ['Telemetry', 'Performance tuning', 'Infra scaling'] },
];
function Lifecycle() {
 const [active, setActive] = useState(0); const stage = stages[active] ?? stages[0]; if (!stage) return null;
 return <section id="process" className="page-width section-space"><SectionHead tag="01 / The approach" title={<>A structured delivery process, <span className="font-display text-foreground">from requirement to support.</span></>} />
 <div className="grid gap-10 md:grid-cols-2"><div className="flex flex-col">{stages.map((s, i) => <Button key={s.n} variant="ghost" onClick={() => setActive(i)} aria-pressed={active === i} className="relative h-20 justify-start gap-6 rounded-none border-b border-border px-0 text-left hover:bg-transparent"><span className={active === i ? 'text-primary' : 'text-muted-foreground'}>{s.n}</span><span className="font-display text-xl">{s.t}</span>{active === i && <motion.span layoutId="process-arrow" className="ml-auto text-primary"><ArrowUpRight /></motion.span>}</Button>)}</div>
 <AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={spring} className="py-5 md:pl-8"><stage.I className="h-10 w-10 text-primary" /><h3 className="mt-6 text-3xl">{stage.t}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{stage.d}</p><ul className="mt-8 space-y-3">{stage.pts.map(pt => <li key={pt} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-secondary" />{pt}</li>)}</ul><div className="mt-8 flex gap-2">{stages.map((s, i) => <motion.div key={s.n} className={`h-1 flex-1 ${i <= active ? 'bg-primary' : 'bg-border'}`} layout />)}</div></motion.div></AnimatePresence></div></section>;
}
const capabilities = [
 { label: 'Web & Enterprise', intro: 'Built for the way your business works.', items: [{ I: Globe, t: 'Website Development', d: 'Corporate sites, landing pages and custom UI/UX.' }, { I: Boxes, t: 'ERP Software', d: 'Inventory, finance, HR and procurement.' }, { I: Users, t: 'CRM Software', d: 'Lead management, sales pipelines and reporting.' }, { I: ShoppingBag, t: 'E-Commerce', d: 'Storefronts, secure payments and order management.' }] },
 { label: 'Cross-Platform Mobile', intro: 'One vision. Every screen.', items: [{ I: Smartphone, t: 'Android Applications', d: 'Thoughtful mobile experiences for Android.' }, { I: Apple, t: 'iOS Applications', d: 'Polished apps for the Apple ecosystem.' }, { I: Code2, t: 'Flutter Development', d: 'A shared codebase, a native-feeling experience.' }] },
 { label: 'SaaS & Custom Software', intro: 'Platforms tailored to your operations.', items: [{ I: Code2, t: 'Custom Software', d: 'Workflow, billing, HRMS and management systems.' }, { I: Server, t: 'SaaS Platforms', d: 'Multi-tenant products with secure, scalable architecture.' }, { I: Boxes, t: 'Cloud & DevOps', d: 'Hosting, deployment pipelines and monitoring.' }] },
 { label: 'AI Agents & Automation', intro: 'Intelligent systems that reduce manual work.', items: [{ I: Bot, t: 'AI Agents', d: 'Chat, voice and task agents for sales, support and operations.' }, { I: Plug, t: 'MCP Servers & Integrations', d: 'Model Context Protocol servers that connect AI assistants to your data and tools.' }, { I: Workflow, t: 'n8n Workflow Automation', d: 'Automated lead capture, reporting, notifications and system sync.' }, { I: Sparkles, t: 'AI Integration', d: 'LLM-powered search, document processing and analytics in existing software.' }] },
];
function SlidingTabs({ labels, active, onChange, id }: { labels: string[]; active: number; onChange: (i: number) => void; id: string }) {
 return <div role="tablist" aria-label={id} className="tab-track">{labels.map((label, i) => <Button key={label} role="tab" aria-selected={active === i} aria-controls={`${id}-panel`} variant="ghost" onClick={() => onChange(i)} className={`relative z-0 h-auto min-h-11 whitespace-normal rounded-sm px-5 py-3 text-xs hover:bg-transparent ${active === i ? 'text-info hover:text-info' : 'text-muted-foreground'}`}>{active === i && <motion.span className="absolute inset-0 -z-10 rounded-sm bg-info/10 border-b-2 border-info" layoutId={`${id}-pill`} transition={spring} />}{label}</Button>)}</div>;
}
function Services() {
 const [active, setActive] = useState(0); const capability = capabilities[active] ?? capabilities[0]; if (!capability) return null;
 return <section id="services" className="border-y border-border bg-muted/50"><div className="page-width section-space"><SectionHead tag="02 / Capabilities" title={<>End-to-end services <span className="font-display text-foreground">for digital businesses.</span></>} /><SlidingTabs labels={capabilities.map(c => c.label)} active={active} onChange={setActive} id="capabilities" /><AnimatePresence mode="wait"><motion.div key={active} id="capabilities-panel" role="tabpanel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={spring}><p className="mb-8 mt-10 font-display text-xl">{capability.intro}</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{capability.items.map((s, i) => <Reveal key={s.t} delay={i * 70}><Lift className="service-card h-full p-7"><s.I className={`h-8 w-8 ${["text-info", "text-secondary", "text-primary", "text-accent-foreground"][i % 4]}`} strokeWidth={1.5} /><h3 className="mt-8 text-xl">{s.t}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p></Lift></Reveal>)}</div></motion.div></AnimatePresence></div></section>;
}
type Item = { name: string; url: string; note?: string };
const sites: Item[] = ([
  ["Neoera Infotech", "https://neoerainfotech.com/"], ["Success Groups", "https://successgroups.in/"], ["KRGG & Associates", "https://krggassociates.com/"],
  ["Unidhan", "https://unidhan.com/"], ["Aegis Stars", "https://aegisstars.africa/"], ["Integrity Finserve", "https://integrityfinserve.com/"],
  ["Voice of Jagadguru Portal", "https://voiceofjagadguru.com/"], ["PrivyDirect", "https://privydirect.in/"], ["Priyam Publications", "https://priyampublications.com/"],
  ["Shinemax Publications", "https://shinemaxpublications.com/"], ["Atna Technologies", "https://atnatechnologies.com/"], ["Hostinger Client Showcase", "https://lawngreen-goldfinch-377072.hostingersite.com/index.html"],
] as [string, string][]).map(([name, url]) => ({ name, url }));
const saas: Item[] = [
  { name: "Rupnidhi", note: "Billing Software", url: "https://rupnidhi.com/" },
  { name: "Workack", note: "HRMS", url: "https://workack.com/" },
  { name: "DivDC", note: "Digital Card", url: "https://divdc.com/" },
  { name: "E‑Book Agent", note: "Publishing AI", url: "https://e-bookagent.divasprik.in/" },
  { name: "LMS Portal", note: "Learning platform", url: "https://lms.divasprik.in/" },
  { name: "MahaStride", note: "Maharashtra NIRF Tool", url: "https://mahastride.com/" },
  { name: "GARVI", note: "Gujarat NIRF Tool", url: "https://garvi.divasprik.in/" },
  { name: "eBhojan", note: "Delivery Engine", url: "https://ebhojan.in/" },
  { name: "eBhojan Restaurants", note: "Partner console", url: "https://restaurants.ebhojan.in/" },
  { name: "NSCSTI", note: "Analyst Tool", url: "https://nscsti.in/" },
];
const shops: Item[] = [
  { name: "Anicham Boutique", note: "Fashion", url: "https://anichamboutique.com/" },
  { name: "Savithri Photo House", note: "Photography", url: "https://www.savithriphotohouse.com/" },
  { name: "Lakshmi Vasthralaya", note: "Textiles", url: "https://lakshmivasthralaya.com/" },
  { name: "Naya Diamonds", note: "Jewellery", url: "https://neoerainfotech-it.github.io/nayadiamonds.com/" },
];
const apps = [
  { name: "Abhayam", android: "https://play.google.com/store/apps/details?id=com.divasprik.abhayam&pcampaignid=web_share" },
  { name: "Voice of Jagadguru", android: "https://play.google.com/store/apps/details?id=com.neoerainfotech.voj&pcampaignid=web_share", ios: "https://apps.apple.com/in/app/voice-of-jagadguru/id6762127887" },
  { name: "Covai E‑Auction", android: "https://play.google.com/store/apps/details?id=com.covaieauction.app&pcampaignid=web_share", ios: "https://apps.apple.com/in/app/covai-e-auction/id6762042283" },
  { name: "Workack Attendance", android: "https://play.google.com/store/apps/details?id=com.workack.attendance&pcampaignid=web_share", ios: "https://apps.apple.com/in/app/workack-attendance/id6772995966" },
  { name: "TTJ Wardrobe", android: "https://play.google.com/store/apps/details?id=com.neoerainfotech.ttjapp&pcampaignid=web_share", ios: "https://apps.apple.com/in/app/ttj-wardrobe/id6796603638" },
];


function LinkCard({ it, i }: { it: Item; i: number }) {
 return <Reveal delay={i % 4 * 70}><motion.a href={it.url} target="_blank" rel="noreferrer" className="project-card group flex h-full flex-col overflow-hidden" whileHover={{ y: -7 }} transition={spring}><ProductVisual name={it.name} /><div className="flex flex-1 flex-col p-6"><div className="flex items-start justify-between gap-3"><h3 className="text-lg">{it.name}</h3><ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-primary" /></div>{it.note && <p className="mt-1 text-xs text-primary">{it.note}</p>}<p className="mt-auto break-all pt-6 font-mono text-[11px] text-muted-foreground">{host(it.url)}</p></div></motion.a></Reveal>;
}
function Work() {
 const [tab, setTab] = useState(0);
  return <section id="work" className="page-width section-space"><SectionHead tag="03 / Selected work" title={<>Our <span className="font-display text-foreground">portfolio.</span></>} sub="Websites, SaaS platforms, government tools, mobile apps and online stores delivered for our clients." /><SlidingTabs labels={['Client Websites', 'SaaS & Gov Tools', 'Mobile Apps', 'E-Commerce']} active={tab} onChange={setTab} id="work" /><AnimatePresence mode="wait"><motion.div key={tab} id="work-panel" role="tabpanel" className="mt-10" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={spring}>{tab === 2 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{apps.map((app, i) => <Reveal key={app.name} delay={i * 60}><Lift className="project-card h-full p-6"><ProductVisual name={app.name} app /><h3 className="mt-6 text-xl">{app.name}</h3><div className="mt-6 flex flex-wrap gap-2"><motion.div whileHover={{ scale: 1.05 }}><Button asChild className="rounded-full bg-ink text-ink-foreground" size="sm"><a href={app.android} target="_blank" rel="noreferrer"><Play /> Google Play</a></Button></motion.div>{app.ios ? <motion.div whileHover={{ scale: 1.05 }}><Button asChild variant="outline" size="sm" className="rounded-full"><a href={app.ios} target="_blank" rel="noreferrer"><Apple /> App Store</a></Button></motion.div> : <span className="flex items-center gap-1 text-xs text-muted-foreground"><Apple className="h-4 w-4" /> iOS in development</span>}</div></Lift></Reveal>)}</div> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{(tab === 0 ? sites : tab === 1 ? saas : shops).map((it, i) => <LinkCard key={it.url} it={it} i={i} />)}</div>}</motion.div></AnimatePresence></section>;
}
const lab = ['AI Calling Voice Agent', 'Meta Ads Analytics Agent', 'Hotel Management AI Agent', 'MCP Server for Business Data', 'n8n Lead & CRM Automation', 'Point of Sale ERP & Billing', 'Attendance & Payroll Management', 'School CRM & Management', 'WhatsApp Automation Workflows'];
function Lab() {
 return <section id="lab" className="bg-accent/15 border-y border-border"><div className="page-width section-space"><div className="flex flex-wrap items-start justify-between gap-6"><SectionHead tag="04 / Products in development" title={<>In-house products,<br /><span className="font-display text-foreground">AI and automation.</span></>} /><FlaskConical className="mt-8 h-16 w-16 text-secondary" /></div><div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">{lab.map((item, i) => <Reveal key={item} delay={i * 70}><Lift className="flex min-h-28 items-center justify-between gap-4 border-t border-secondary/25 py-6"><h3 className="text-lg">{item}</h3><span className="shrink-0 font-mono text-[10px] uppercase text-secondary">In development</span></Lift></Reveal>)}</div></div></section>;
}
const rows = [['Source code ownership', '100% yours, always', 'Locked or licensed'], ['Communication', 'Direct access to the project lead', 'Via account managers'], ['Architecture', 'Custom-built and scalable', 'Template-based'], ['AI & automation', 'AI agents, MCP and n8n built in', 'Separate vendors'], ['Delivery', 'Fixed sprint milestones', 'Open-ended timelines']];
function Compare() {
 return <section className="page-width section-space"><SectionHead tag="05 / The difference" title={<>Why choose<span className="font-display text-foreground"> Techprinto.</span></>} /><Reveal><div className="comparison-row pb-5 font-mono text-xs"><span /><span className="text-primary">TECHPRINTO</span><span className="text-muted-foreground">TYPICAL AGENCY</span></div>{rows.map(([label, a, b]) => <div key={label} className="comparison-row border-t border-border py-6 text-sm"><span className="font-medium">{label}</span><span className="flex items-start gap-2"><Check className="h-4 w-4 shrink-0 text-secondary" />{a}</span><span className="text-muted-foreground">{b}</span></div>)}</Reveal></section>;
}
function LocalTime() {
 const [time, setTime] = useState('COIMBATORE, INDIA');
 useEffect(() => { const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()) + ' IST · COIMBATORE, INDIA'); update(); const interval = setInterval(update, 60000); return () => clearInterval(interval); }, []);
 return <span className="flex items-center gap-2 font-mono text-[10px]"><span className="status-dot" />{time}</span>;
}
function Footer() {
 return <footer id="contact" className="bg-muted text-foreground"><div className="page-width py-16 md:py-24"><Reveal><span className="section-tag text-accent">06 / Contact us</span><h2 className="mt-8 max-w-4xl text-4xl leading-tight md:text-5xl">Have a project in mind?<br /><span className="font-display text-foreground">Let's discuss your requirements.</span></h2><div className="mt-10 flex flex-wrap items-center gap-6"><motion.div whileHover={{ scale: 1.05 }} transition={spring}><Button asChild size="lg" className="h-12 rounded-sm"><a href="mailto:techprintopvtltd@gmail.com"><Mail /> techprintopvtltd@gmail.com <ArrowUpRight /></a></Button></motion.div><Button asChild size="lg" variant="outline" className="h-12 rounded-sm"><a href="tel:+919789501854"><Phone /> +91 97895 01854</a></Button><div className="flex gap-3">{[{ I: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/' }, { I: Github, name: 'GitHub', url: 'https://github.com/' }].map(({ I, name, url }) => <motion.div key={name} whileHover={{ y: -5 }}><Button asChild variant="outline" size="icon" className="social-link h-12 w-12 rounded-full border-border bg-background text-foreground"><a href={url} aria-label={name} target="_blank" rel="noreferrer"><I /></a></Button></motion.div>)}</div></div></Reveal><Reveal className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-7"><a href="#"><img src={logo} alt="Techprinto" className="h-14 w-auto mix-blend-multiply" /></a><LocalTime /><span className="text-xs text-muted-foreground">© 2026 Techprinto Pvt Ltd</span></Reveal></div></footer>;
}
function Nav() {
 const [open, setOpen] = useState(false);
 return <motion.header initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"><nav className="page-width flex h-20 items-center justify-between gap-4"><a href="#" aria-label="Techprinto home"><img src={logo} alt="Techprinto — Turning Ideas Into Technology" className="h-11 w-auto mix-blend-multiply" /></a><div className="hidden items-center gap-8 text-xs md:flex">{[['Process', '#process'], ['Capabilities', '#services'], ['Work', '#work'], ['Products', '#lab'], ['Contact', '#contact']].map(([name, url]) => <a key={url} href={url} className="transition hover:text-primary">{name}</a>)}</div><div className="flex items-center gap-2"><Button asChild variant="outline" className="rounded-sm border-primary px-5 text-primary hover:bg-primary hover:text-primary-foreground"><a href="#contact">Let's talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X /> : <Menu />}</Button></div></nav><AnimatePresence>{open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden md:hidden"><div className="page-width flex flex-wrap gap-6 pb-6 text-sm">{[['Process', '#process'], ['Capabilities', '#services'], ['Work', '#work'], ['Products', '#lab'], ['Contact', '#contact']].map(([name, url]) => <a key={url} href={url} onClick={() => setOpen(false)}>{name}</a>)}</div></motion.div>}</AnimatePresence></motion.header>;
}
function Index() {
 const { scrollYProgress } = useScroll(); const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
 return <MotionConfig reducedMotion="user"><motion.div className="scroll-progress" style={{ scaleX: progress }} /><main className="min-h-screen overflow-x-clip"><Nav /><Hero /><Marquee /><Lifecycle /><Services /><Work /><Lab /><Compare /><Footer /></main></MotionConfig>;
}
