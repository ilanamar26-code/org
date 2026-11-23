import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { z } from 'zod'
import { notifyLead } from '@/lib/notify'
import { supabase } from '../supabase'

const t = initTRPC.context().create({
  transformer: superjson,
})

export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  submitQualification: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        company: z.string().optional(),
        role: z.string().optional(),
        phone: z.string().optional(),
        projectLocation: z.string().optional(),
        assetType: z.string().optional(),
        gdvRange: z.string().optional(),
        timeline: z.string().optional(),
        message: z.string().optional(),
        userType: z.enum([
          'developer',
          'investor',
          'partner',
          'press',
          'broker',
          'landowner',
          'buyer',
          'other',
        ]),
        honeypot: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      if (input.honeypot) {
        throw new Error('Spam detected')
      }

      const labels: Record<string, string> = { buyer: 'Orlinski Bay buyer', developer: 'Developer', investor: 'Investor', partner: 'Partner', press: 'Press', broker: 'Broker', landowner: 'Landowner', other: 'Other' }
      const emailed = await notifyLead({
        Interest: labels[input.userType] || input.userType,
        Name: input.name,
        Email: input.email,
        Phone: input.phone,
        Company: input.company,
        Role: input.role,
        Project: input.projectLocation,
        'Asset type': input.assetType,
        'GDV range': input.gdvRange,
        Timeline: input.timeline,
        Message: input.message,
      })

      let stored = false
      if (supabase) {
        const { error } = await supabase.from('qualification_submissions').insert({
          name: input.name,
          email: input.email,
          company: input.company,
          role: input.role,
          phone: input.phone,
          project_location: input.projectLocation,
          asset_type: input.assetType,
          gdv_range: input.gdvRange,
          timeline: input.timeline,
          message: input.message,
          user_type: input.userType,
        })
        stored = !error
        if (error) console.error('Supabase insert failed', error.message)
      }

      if (!emailed && !stored) {
        throw new Error('We could not send your request. Please e-mail ilan@orlinskirealtygroup.com.')
      }
      return { success: true, emailed, stored }
    }),
})

export type AppRouter = typeof appRouter
