'use client'

import { useState } from 'react'
import { trpc } from '@/lib/trpc/client'

const field =
  'w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base text-black placeholder:text-muted focus:border-bronze focus:outline-none focus:ring-0'

export function RegisterInterestForm({ project = 'Orlinski Bay, Amoni' }: { project?: string }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    honeypot: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutation = trpc.submitQualification.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: () =>
      setError('Your request could not be sent. Please try again in a moment, or reach us through the Contact page.'),
  })

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    mutation.mutate({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      projectLocation: project,
      assetType: 'Villa',
      message: [form.country && `Country: ${form.country}`, form.message].filter(Boolean).join('\n') || undefined,
      userType: 'buyer',
      honeypot: form.honeypot,
    })
  }

  if (submitted) {
    return (
      <div className="space-y-3 py-6">
        <p className="eyebrow">Thank you</p>
        <p className="font-heading text-3xl text-black">Your interest in {project} is registered.</p>
        <p className="text-graphite">Our team will contact you personally, with discretion.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <input required placeholder="Full name *" value={form.name} onChange={update('name')} className={field} />
        <input required type="email" placeholder="Email *" value={form.email} onChange={update('email')} className={field} />
        <input placeholder="Phone" value={form.phone} onChange={update('phone')} className={field} />
        <input placeholder="Country of residence" value={form.country} onChange={update('country')} className={field} />
      </div>
      <textarea
        rows={3}
        placeholder="Tell us what you are looking for"
        value={form.message}
        onChange={update('message')}
        className={field}
      />
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.honeypot}
        onChange={update('honeypot')}
        className="hidden"
        aria-hidden="true"
      />
      {error && <p className="text-sm text-red-700">{error}</p>}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted max-w-sm">
          Your details are handled confidentially and used only to contact you about {project}.
        </p>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="bg-black px-10 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-offwhite transition-colors hover:bg-bronze disabled:opacity-60"
        >
          {mutation.isLoading ? 'Sending…' : 'Register your interest'}
        </button>
      </div>
    </form>
  )
}
