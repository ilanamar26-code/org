'use client'

import { useState } from 'react'
import { trpc } from '@/lib/trpc/client'
import { CTAButton } from './CTAButton'

export function QualificationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    projectLocation: '',
    assetType: '',
    gdvRange: '',
    timeline: '',
    message: '',
    userType: 'developer' as
      | 'developer'
      | 'investor'
      | 'partner'
      | 'press'
      | 'broker'
      | 'landowner'
      | 'other',
    honeypot: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutation = trpc.submitQualification.useMutation({
    onSuccess: () => {
      setSubmitted(true)
    },
    onError: (err) => {
      setError(err.message)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    mutation.mutate(formData)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/10 bg-offwhite/80 p-8 text-center space-y-4 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
        <h2 className="font-heading text-2xl font-bold text-black">Thank You</h2>
        <p className="text-graphite">
          We&apos;ve received your inquiry and will be in touch shortly. All communications are
          confidential.
        </p>
      </div>
    )
  }

  const userTypes = [
    { value: 'developer', label: 'Developer' },
    { value: 'investor', label: 'Investor' },
    { value: 'partner', label: 'Partner' },
    { value: 'press', label: 'Press' },
    { value: 'broker', label: 'Broker' },
    { value: 'landowner', label: 'Landowner' },
    { value: 'other', label: 'Other' },
  ] as const

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-800 text-sm">
          {error}
        </div>
      )}

      <div className="rounded-2xl border border-black/10 bg-offwhite/60 p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-semibold text-black">
            1
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Contact Details</p>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-graphite mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-graphite mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-offwhite/60 p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-semibold text-black">
            2
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Professional</p>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-graphite mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-graphite mb-2">
              Role
            </label>
            <input
              type="text"
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-graphite mb-2">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-offwhite text-xs font-semibold text-black">
            3
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">I am a</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {userTypes.map((type) => {
            const isActive = formData.userType === type.value
            return (
              <button
                key={type.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFormData({ ...formData, userType: type.value })}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition-colors ${
                  isActive
                    ? 'border-black bg-black text-offwhite'
                    : 'border-black/10 bg-offwhite text-black hover:border-black/30'
                }`}
              >
                {type.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-offwhite/60 p-6 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-semibold text-black">
            4
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Message</p>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="block text-sm font-medium text-graphite mb-2">
            Tell us how we can help
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Example: press request, partnership idea, investment interest, or project overview."
            className="w-full px-4 py-3 border border-black/10 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
      </div>

      <input type="hidden" value={formData.projectLocation} readOnly />
      <input type="hidden" value={formData.assetType} readOnly />
      <input type="hidden" value={formData.gdvRange} readOnly />
      <input type="hidden" value={formData.timeline} readOnly />

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={mutation.isLoading}
        className="w-full px-8 py-4 bg-black text-offwhite rounded-2xl font-medium hover:bg-graphite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {mutation.isLoading ? 'Submitting...' : 'Submit Inquiry'}
      </button>

      <p className="text-graphite text-xs text-center">
        All submissions are confidential and handled with discretion.
      </p>
    </form>
  )
}
