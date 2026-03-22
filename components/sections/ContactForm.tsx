'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface Field { value: string; error: string }
interface FormState {
  name: Field
  email: Field
  phone: Field
  subject: Field
  message: Field
}

const initial: FormState = {
  name:    { value: '', error: '' },
  email:   { value: '', error: '' },
  phone:   { value: '', error: '' },
  subject: { value: '', error: '' },
  message: { value: '', error: '' },
}

function validate(form: FormState): FormState {
  const next = { ...form }
  if (!next.name.value.trim())        next.name.error = 'Your name is required'
  else next.name.error = ''
  if (!next.email.value.trim())       next.email.error = 'Email is required'
  else if (!/\S+@\S+\.\S+/.test(next.email.value)) next.email.error = 'Enter a valid email address'
  else next.email.error = ''
  if (!next.message.value.trim())     next.message.error = 'Please write your message'
  else if (next.message.value.length < 20) next.message.error = 'Message must be at least 20 characters'
  else next.message.error = ''
  return next
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<Status>('idle')

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [key]: { value: e.target.value, error: '' } }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validated = validate(form)
    const hasError = Object.values(validated).some((f) => f.error)
    setForm(validated)
    if (hasError) return

    setStatus('loading')
    // Simulate API call — replace with your form endpoint
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('success')
  }

  const inputClass = (err: string) => cn(
    'w-full h-11 px-4 rounded-lg bg-bg-tertiary text-text text-sm',
    'border transition-all duration-200 placeholder:text-subtle',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    err
      ? 'border-error focus:border-error focus:ring-error/20'
      : 'border-border hover:border-[var(--color-border-hover)] focus:border-primary focus:ring-primary/20'
  )

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-glass rounded-2xl p-12 text-center"
      >
        <CheckCircle className="w-14 h-14 text-success mx-auto mb-5" />
        <h3 className="font-display text-2xl text-text mb-3">Message Sent!</h3>
        <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto mb-6">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours. In the meantime, follow us on Instagram for daily coffee content.
        </p>
        <button
          onClick={() => { setForm(initial); setStatus('idle') }}
          className="text-primary text-sm hover:text-accent transition-colors font-medium"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="card-glass rounded-2xl p-8 space-y-5">
      <h2 className="font-display text-2xl text-text mb-6">Send a Message</h2>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-muted uppercase tracking-wider">
            Name <span className="text-error">*</span>
          </label>
          <input
            id="name" type="text" placeholder="Rahul Sharma"
            value={form.name.value} onChange={set('name')}
            className={inputClass(form.name.error)}
            aria-describedby={form.name.error ? 'name-error' : undefined}
          />
          {form.name.error && <p id="name-error" className="text-xs text-error">⚠ {form.name.error}</p>}
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-muted uppercase tracking-wider">
            Email <span className="text-error">*</span>
          </label>
          <input
            id="email" type="email" placeholder="you@example.com"
            value={form.email.value} onChange={set('email')}
            className={inputClass(form.email.error)}
            aria-describedby={form.email.error ? 'email-error' : undefined}
          />
          {form.email.error && <p id="email-error" className="text-xs text-error">⚠ {form.email.error}</p>}
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-medium text-muted uppercase tracking-wider">Phone</label>
          <input
            id="phone" type="tel" placeholder="+91 98765 43210"
            value={form.phone.value} onChange={set('phone')}
            className={inputClass('')}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-medium text-muted uppercase tracking-wider">Subject</label>
          <select
            id="subject"
            value={form.subject.value} onChange={set('subject')}
            className={cn(inputClass(''), 'cursor-pointer')}
          >
            <option value="">Select a topic</option>
            <option value="subscription">Subscription Plans</option>
            <option value="corporate">Corporate Coffee Supply</option>
            <option value="custom">Custom Blend</option>
            <option value="delivery">Delivery Query</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-muted uppercase tracking-wider">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message" rows={5}
          placeholder="Tell us how we can help..."
          value={form.message.value} onChange={set('message')}
          aria-describedby={form.message.error ? 'message-error' : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-bg-tertiary text-text text-sm resize-none',
            'border transition-all duration-200 placeholder:text-subtle',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            form.message.error
              ? 'border-error focus:border-error focus:ring-error/20'
              : 'border-border hover:border-[var(--color-border-hover)] focus:border-primary focus:ring-primary/20'
          )}
        />
        {form.message.error && <p id="message-error" className="text-xs text-error">⚠ {form.message.error}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-error text-sm p-3 rounded-lg bg-error/10 border border-error/20">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full h-12 rounded-full bg-primary hover:bg-[var(--color-primary-hover)] text-bg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>

      <p className="text-xs text-subtle text-center">
        We typically respond within 24 hours · Mon–Sat
      </p>
    </form>
  )
}
