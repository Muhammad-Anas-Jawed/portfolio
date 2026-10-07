import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EXP_TAGS, NAV_ITEMS, PROFILE, PROJECTS, QA, EXPERIENCE, SKILLS, SKILL_BARS, type Project } from './data'
import { BootScreen, Counter, Icon, Reveal, TestRunner, Typing } from './components/ui'
import Contact from './components/Contact'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (e: PointerEvent) => {
      const el = ref.current
      if (!el) return
      el.style.transform = `translate3d(${e.clientX - 180}px, ${e.clientY - 180}px, 0)`
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}

function Nav() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', ...NAV_ITEMS].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const links = NAV_ITEMS
  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <nav>
        <div className="wrap nav-inner">
          <a href="#home" className="logo grad" onClick={() => setOpen(false)}>Anas.dev</a>
          <div className={`links ${open ? 'open' : ''}`}>
            {links.map((s) => <a className={active === s ? 'active' : ''} key={s} href={`#${s}`} onClick={() => setOpen(false)}>{s === 'qa' ? 'QA' : s[0].toUpperCase() + s.slice(1)}</a>)}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Toggle color theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button>
            <button className="icon-btn menu-btn" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
          </div>
        </div>
      </nav>
    </>
  )
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = heroRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      el.style.setProperty('--mx', `${x * 14}px`)
      el.style.setProperty('--my', `${y * 10}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
  return (
    <div ref={heroRef} className="hero-motion">
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" /><div className="hero-stars" aria-hidden="true" /><div className="hero-spotlight" aria-hidden="true" />
      <div className="blob b1" /><div className="blob b2" />
      <div className="wrap hero-layout">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="status"><span /> Open to opportunities</div>
          <p className="eyebrow">SOFTWARE ENGINEER · SQA · FULL STACK</p>
          <h1>Muhammad Anas <span className="grad">Jawed</span></h1>
          <div className="type"><Typing words={PROFILE.roles} /></div>
          <p className="lead hero-copy">I build reliable web experiences with React, TypeScript and backend APIs — backed by a QA mindset shaped by manual, API and automation testing.</p>
          <div className="btns">
            <motion.a className="btn p magnetic" href="#projects" whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>Explore Projects <Icon name="arrow" /></motion.a>
            <motion.a className="btn magnetic" href="#contact" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>Hire / Contact Me</motion.a>
            <motion.a className="btn ghost magnetic" href={PROFILE.github} target="_blank" rel="noreferrer" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}><Icon name="github" /> GitHub</motion.a>
          </div>
          <div className="hero-meta"><span>Karachi, Pakistan</span><span>React · TypeScript · QA</span><span>Available for roles</span></div>
        </motion.div>
        <motion.div className="hero-card tilt-card" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} whileHover={{ y: -8, rotateX: -2, rotateY: 2 }}><TestRunner /></motion.div>
      </div>
    </section>
    </div>
  )
}

function About() {
  return <section id="about"><div className="wrap">
    <Reveal><span className="eyebrow">PROFILE</span><h2>Developer who <span className="grad">thinks in quality.</span></h2><p className="sub">Full-stack development + software quality engineering</p></Reveal>
    <div className="about-grid">
      <Reveal delay={80}><p className="lead about-copy">I hold a Bachelor’s in Software Engineering (SSUET, 2020–2024). My background started in SQA, where I worked across web/mobile applications, APIs and databases. I now build full-stack products with React, Supabase and MongoDB — bringing testability and reliability into the development process from the start.</p></Reveal>
      <Reveal delay={140}><div className="principles"><div><b>Build</b><span>Clean, responsive interfaces</span></div><div><b>Test</b><span>Functional, API & data validation</span></div><div><b>Ship</b><span>Maintainable, production-minded code</span></div></div></Reveal>
    </div>
    <Reveal delay={180}><div className="stats"><div><Counter to={2} suffix="+" /><small>Years in QA</small></div><div><Counter to={5} /><small>Companies / internships</small></div><div><Counter to={10} suffix="+" /><small>Projects built</small></div></div></Reveal>
  </div></section>
}

function SkillBars() {
  const [tab, setTab] = useState(0)
  const group = SKILL_BARS[tab]
  return <div className="bars-wrap">
    <div className="filters" role="tablist" aria-label="Skill groups">{SKILL_BARS.map((g, i) => <button key={g.title} role="tab" aria-selected={tab === i} className={tab === i ? 'filter active' : 'filter'} onClick={() => setTab(i)}>{g.title}</button>)}</div>
    <div className="bars" key={group.title}>{group.items.map((s, i) => <div className="bar-item" key={s.name}>
      <div className="bar-top"><b>{s.name}</b><span>{s.level}%</span></div>
      <div className="bar-track"><motion.span initial={{ width: 0 }} animate={{ width: `${s.level}%` }} transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} /></div>
      <small>{s.note}</small>
    </div>)}</div>
  </div>
}

function Skills() {
  return <section id="skills" className="soft-section"><div className="wrap">
    <Reveal><span className="eyebrow">TECH STACK</span><h2>Tools I use to <span className="grad">solve problems.</span></h2><p className="sub">Focused on practical engineering rather than a long list of buzzwords.</p></Reveal>
    <SkillBars />
    <div className="grid skill-grid">{SKILLS.map((s, i) => <Reveal key={s.title} delay={i * 70}><motion.div className="card skill-card" whileHover={{ y: -6 }}><div className="card-index">0{i + 1}</div><h3>{s.title}</h3><p className="muted">{s.description}</p><div className="chips">{s.items.map((x) => <span className="chip" key={x}>{x}</span>)}</div></motion.div></Reveal>)}</div>
  </div></section>
}

function QASection() {
  return <section id="qa"><div className="wrap">
    <Reveal><span className="eyebrow">QUALITY ENGINEERING</span><h2>Not just code. <span className="grad">Confidence.</span></h2><p className="sub">I bring the tester mindset into the development lifecycle.</p></Reveal>
    <div className="grid qa-grid">{QA.map((q, i) => <Reveal key={q.title} delay={i * 90}><motion.div className="card qa-card" whileHover={{ y: -6 }}><span className="number-badge">{q.icon}</span><h3>{q.title}</h3><ul className="list">{q.points.map((p) => <li key={p}>{p}</li>)}</ul></motion.div></Reveal>)}</div>
    <Reveal delay={180}><div className="quality-flow"><span>Requirement</span><i>→</i><span>Implement</span><i>→</i><span>Test</span><i>→</i><span>Fix</span><i>→</i><span>Release</span></div></Reveal>
  </div></section>
}

function Experience() {
  return <section id="experience" className="soft-section"><div className="wrap">
    <Reveal><span className="eyebrow">EXPERIENCE</span><h2>My <span className="grad">journey.</span></h2><p className="sub">Experience, training and practical exposure</p></Reveal>
    <div className="timeline">{EXPERIENCE.map((e, i) => <Reveal key={e.role} delay={i * 70}><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-top"><div><h3>{e.role}</h3><strong>{e.org}</strong></div>{e.period && <time>{e.period}</time>}</div><ul className="list">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>{EXP_TAGS[e.org] && <div className="chips">{EXP_TAGS[e.org].map((t) => <span className="chip" key={t}>{t}</span>)}</div>}</article></Reveal>)}</div>
  </div></section>
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  return <AnimatePresence><motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}><motion.div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-title" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18 }} onMouseDown={(e) => e.stopPropagation()}><button className="modal-close icon-btn" aria-label="Close project details" onClick={onClose}><Icon name="close" /></button><span className="eyebrow">{project.category}</span><h2 id="project-title">{project.title}</h2><p className="lead">{project.desc}</p><div className="modal-focus"><span>Engineering focus</span><b>{project.focus}</b></div><h3>Highlights</h3><ul className="list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul><div className="chips">{project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div></motion.div></motion.div></AnimatePresence>
}

function Projects() {
  const [filter, setFilter] = useState<'All' | Project['category']>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const filters = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))] as const, [])
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return <section id="projects"><div className="wrap">
    <Reveal><span className="eyebrow">SELECTED WORK</span><h2>Projects with <span className="grad">purpose.</span></h2><p className="sub">Click any project to see the engineering focus behind it.</p></Reveal>
    <Reveal delay={80}><div className="filters" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)}>{item} <small>{item === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === item).length}</small></button>)}</div></Reveal>
    <div className="grid project-grid">{visible.map((p, i) => <Reveal key={p.title} delay={i * 60}><motion.button className="card project-card" onClick={() => setSelected(p)} whileHover={{ y: -7 }}><div className="project-top"><span className="project-category">{p.category}</span><Icon name="arrow" /></div><h3>{p.title}</h3><p className="muted">{p.desc}</p><div className="chips">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div><span className="project-more">View case study <Icon name="external" /></span></motion.button></Reveal>)}</div>
    <Reveal delay={160}><div className="github-banner"><div><span className="eyebrow">MORE CODE</span><h3>See the rest of my work on GitHub.</h3></div><a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">Open GitHub <Icon name="github" /></a></div></Reveal>
    {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
  </div></section>
}

function CommandPalette() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen((value) => !value) }
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])
  if (!open) return null
  const actions = [{ label: 'Home', id: 'home' }, ...NAV_ITEMS.map((id) => ({ label: id === 'qa' ? 'QA' : id[0].toUpperCase() + id.slice(1), id }))]
  return <div className="modal-backdrop command-backdrop" onMouseDown={() => setOpen(false)}><div className="command" role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={(e) => e.stopPropagation()}><div className="command-head">Quick navigation <kbd>ESC</kbd></div>{actions.map((action) => <button key={action.id} onClick={() => { setOpen(false); scrollToId(action.id) }}>{action.label}<Icon name="arrow" /></button>)}</div></div>
}

export default function App() {
  const [booting, setBooting] = useState(() => sessionStorage.getItem('booted') !== '1')
  const finishBoot = useCallback(() => { sessionStorage.setItem('booted', '1'); setBooting(false) }, [])
  return <>
    <AnimatePresence>{booting && <BootScreen key="boot" onDone={finishBoot} />}</AnimatePresence>
    <CursorGlow /><Nav /><CommandPalette /><Hero /><About /><Skills /><QASection /><Experience /><Projects /><Contact />
    <footer><div className="wrap"><div><strong className="grad">Anas.dev</strong><span> · Built with React + TypeScript</span></div><button className="footer-top" onClick={() => scrollToId('home')}>Back to top ↑</button></div></footer>
  </>
}
