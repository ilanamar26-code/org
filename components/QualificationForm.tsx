'use client'

import { useState } from 'react'
import { trpc } from '@/lib/trpc/client'

const field =
  'w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-base text-black placeholder:text-muted focus:border-bronze focus:outline-none focus:ring-0'

type UserType = 'developer' | 'investor' | 'partner' | 'press' | 'broker' | 'landowner' | 'buyer' | 'other'

const userTypes: { value: UserType; label: string }[] = [
  { value: 'developer', label: 'Developer' },
  { value: 'landowner', label: 'Landowner' },
  { value: 'investor', label: 'Investor' },
  { value: 'buyer', label: 'Buyer' },
  { value: 'partner', label: 'Partner' },
  { value: 'press', label: 'Press' },
  { value: 'other', label: 'Other' },
]

const withProject: UserType[] = ['developer', 'landowner', 'investor', 'partner']

export function QualificationForm() {
  const [form, setForm] = useState({
    userType: 'developer' as UserType,
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    projectLocation: '',
    message: '',
    honeypot: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutation = trpc.submitQualification.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: (err) => setError(err.message),
  })

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    mutation.mutate({
      userType: form.userType,
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      company: form.company || undefined,
      role: form.role || undefined,
      projectLocation: withProject.includes(form.userType) ? form.projectLocation || undefined : undefined,
      message: form.message || undefined,
      honeypot: form.honeypot,
    })
  }

  if (submitted) {
    return (
      <div className="space-y-3 py-10">
        <p className="eyebrow">Thank you</p>
        <p className="font-heading text-4xl font-light text-black">Your message is with us.</p>
        <p className="text-graphite">We will come back to you personally, with discretion.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <fieldset>
        <legend className="eyebrow mb-5">I am</legend>
        <div className="flex flex-wrap gap-2">
          {userTypes.map((t) => {
            const active = form.userType === t.value
            return (
              <button
                key={t.value}
                type="button"
                aria-pressed={active}
                onClick={() => setForm({ ...form, userType: t.value })}
                className={`border px-4 py-2.5 text-[10px] uppercase tracking-[0.28em] transition-colors ${
                  active ? 'border-black bg-black text-offwhite' : 'border-black/20 text-black hover:border-black/60'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <input required placeholder="Full name *" value={form.name} onChange={update('name')} className={field} />
        <input required type="email" placeholder="Email *" value={form.email} onChange={update('email')} className={field} />
        <input placeholder="Phone" value={form.phone} onChange={update('phone')} className={field} />
        <input placeholder="Company" value={form.company} onChange={update('company')} className={field} />
        <input placeholder="Role" value={form.role} onChange={update('role')} className={field} />
        {withProject.includes(form.userType) ? (
          <input placeholder="Project location" value={form.projectLocation} onChange={update('projectLocation')} className={field} />
        ) : (
          <span className="hidden md:block" />
        )}
      </div>
      <textarea
        rows={4}
        placeholder="Your message"
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
        <p className="max-w-sm text-xs text-muted">Every enquiry is read personally and handled in confidence.</p>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="bg-black px-10 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-offwhite transition-colors hover:bg-bronze disabled:opacity-60"
        >
          {mutation.isLoading ? 'Sending…' : 'Send'}
        </button>
      </div>
    </form>
  )
}
