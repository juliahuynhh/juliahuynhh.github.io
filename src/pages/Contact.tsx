import { FormEvent, useState } from 'react'
import './Contact.css'

const CONTACT_EMAIL = 'juliamaihuynh@utexas.edu'
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (honeypot) {
      setStatus('success')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          _subject: 'Portfolio contact form',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send')
      }

      setStatus('success')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-container contact-page">
      <h1 className="contact-heading">want to talk to me?</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-field">
          <span className="contact-label">your email</span>
          <input
            className="contact-input"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label className="contact-field">
          <span className="contact-label">message</span>
          <textarea
            className="contact-textarea"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={6}
            required
          />
        </label>

        <input
          className="contact-honeypot"
          type="text"
          name="_gotcha"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <button className="contact-submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'sending...' : 'send'}
        </button>

        <p className="contact-status" role="status" aria-live="polite">
          {status === 'success' ? "message sent. i'll get back to you soon!" : null}
          {status === 'error'
            ? "couldn't send that. try again, or email me directly below."
            : null}
        </p>
      </form>

      <p className="contact-line">
        <span>
          or email me at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
            {CONTACT_EMAIL}
          </a>
        </span>
        <a
          href="https://www.linkedin.com/in/juliamaihuynh"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          contact me on linkedin!
        </a>
      </p>
    </div>
  )
}
