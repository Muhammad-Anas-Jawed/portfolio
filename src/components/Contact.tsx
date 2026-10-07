import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../utils/supabase'
import { PROFILE } from '../data'
import { Icon, Reveal } from './ui'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (website) return
    if (name.trim().length < 2) return setError('Please enter your name.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Please enter a valid email address.')
    if (message.trim().length < 10) return setError('Please write at least 10 characters in your message.')

    if (!supabase) {
      window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Portfolio message from ' + name.trim())}&body=${encodeURIComponent(message.trim() + '\n\nReply to: ' + email.trim())}`
      return
    }

    setStatus('sending')
    const { error: dbError } = await supabase.from('messages').insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    })

    if (dbError) {
      setStatus('error')
      setError('Message could not be sent right now. Please use email or LinkedIn instead.')
      return
    }

    setStatus('ok')
    setName(''); setEmail(''); setMessage('')
  }

  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-grid">
        <Reveal>
          <div>
            <span className="eyebrow">LET'S BUILD SOMETHING</span>
            <h2>Let’s <span className="grad">connect.</span></h2>
            <p className="lead">Open to full-stack, frontend and SQA automation opportunities. If you have a role, project or collaboration in mind, send me a message.</p>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${PROFILE.email}`}><span><Icon name="mail" /></span>{PROFILE.email}</a>
              <a className="contact-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><span><Icon name="linkedin" /></span>LinkedIn profile</a>
              <a className="contact-link" href={PROFILE.githubProfile} target="_blank" rel="noreferrer"><span><Icon name="github" /></span>GitHub profile</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form className="contact-card" onSubmit={send} noValidate>
            <div className="form-row">
              <label>Name<input aria-label="Your name" placeholder="Your name" value={name} maxLength={100} onChange={(e) => setName(e.target.value)} /></label>
              <label>Email<input aria-label="Your email" type="email" placeholder="you@example.com" value={email} maxLength={200} onChange={(e) => setEmail(e.target.value)} /></label>
            </div>
            <label>Message<textarea aria-label="Your message" rows={6} placeholder="Tell me about the role or project..." value={message} maxLength={2000} onChange={(e) => setMessage(e.target.value)} /><small className="counter">{message.length}/2000</small></label>
            <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
            <button className="btn p wide" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'} <Icon name="arrow" /></button>
            {error && <p className="form-message err" role="alert">{error}</p>}
            {status === 'ok' && <p className="form-message ok" role="status">Thanks! Your message was sent successfully.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
