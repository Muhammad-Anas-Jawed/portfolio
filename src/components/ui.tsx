import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Typing({ words }: { words: string[] }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const id = window.setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1)
        setText(next)
        if (next === word) window.setTimeout(() => setDeleting(true), 1200)
      } else {
        const next = word.slice(0, text.length - 1)
        setText(next)
        if (!next) {
          setDeleting(false)
          setI((value) => value + 1)
        }
      }
    }, deleting ? 38 : 72)
    return () => window.clearTimeout(id)
  }, [text, deleting, i, words])

  return <span>{text}<span className="cur" aria-hidden="true" /></span>
}

export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const id = window.setInterval(() => {
      setN((value) => {
        if (value >= to) {
          window.clearInterval(id)
          return value
        }
        return value + 1
      })
    }, 65)
    return () => window.clearInterval(id)
  }, [inView, to])

  return <b ref={ref} className="grad">{n}{suffix}</b>
}

export function Icon({ name }: { name: 'arrow' | 'github' | 'linkedin' | 'mail' | 'sun' | 'moon' | 'menu' | 'close' | 'external' }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.2 4 5 5 0 0 0 19 1.7S17.8 1.3 15 3a13.4 13.4 0 0 0-6 0C6.2 1.3 5 1.7 5 1.7A5 5 0 0 0 4.8 4 5.4 5.4 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2" /><path d="M2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
    moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z" />,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    external: <><path d="M14 3h7v7" /><path d="M10 14 21 3" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [p, setP] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setP((v) => Math.min(100, v + 4)), 38)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (p < 100) return
    const t = window.setTimeout(onDone, 500)
    return () => window.clearTimeout(t)
  }, [p, onDone])

  const steps = ['Installing dependencies', 'Compiling TypeScript', 'Running test suite', 'Build passed']
  const stage = Math.min(steps.length - 1, Math.floor(p / 26))

  return (
    <motion.div className="boot" role="status" aria-label="Loading portfolio" exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.5 }}>
      <div className="boot-box">
        <div className="boot-logo grad">Anas.dev</div>
        <div className="boot-bar"><span style={{ width: `${p}%` }} /></div>
        <div className="boot-row"><span>{p >= 100 ? '✓ Build Passed' : steps[stage] + '…'}</span><b>{p}%</b></div>
      </div>
    </motion.div>
  )
}

const TESTS = [
  'hero section renders',
  'navigation scrolls to sections',
  'project filter updates the grid',
  'contact form validates input',
  'theme preference persists',
  'API responds with status 200',
]

export function TestRunner() {
  const [done, setDone] = useState(0)

  useEffect(() => {
    if (done >= TESTS.length) return
    const id = window.setTimeout(() => setDone((v) => v + 1), done === 0 ? 900 : 620)
    return () => window.clearTimeout(id)
  }, [done])

  const finished = done >= TESTS.length

  return (
    <div className="runner">
      <div className="terminal-head"><span /><span /><span /><small>portfolio.spec.ts</small></div>
      <pre className="runner-code"><code>{`describe('portfolio', () => {
  it('ships with quality', async () => {
    const res = await api.get('/health')

    expect(res.status).toBe(200)
    expect(bugs.critical).toBe(0)
    expect(coverage).toBeGreaterThan(0.8)
  })
})`}</code></pre>
      <ul className="runner-list">
        {TESTS.map((t, i) => (
          <li key={t} className={i < done ? 'pass' : i === done ? 'run' : ''}>
            <span>{i < done ? '✓' : i === done ? '●' : '○'}</span>{t}
          </li>
        ))}
      </ul>
      <div className={finished ? 'runner-foot ok' : 'runner-foot'}>
        {finished ? `All ${TESTS.length} tests passed` : `Running… ${done}/${TESTS.length}`}
      </div>
    </div>
  )
}
