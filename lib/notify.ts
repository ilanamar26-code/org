// Sends each new enquiry by e-mail through Resend (https://resend.com), using its REST API.
// Vercel env: RESEND_API_KEY (required to send), LEADS_TO (default below),
// LEADS_FROM (default Resend test sender; switch to an @orlinskirealtygroup.com address once the domain is verified in Resend).
const LEADS_TO = process.env.LEADS_TO || 'ilan@orlinskirealtygroup.com'
const LEADS_FROM = process.env.LEADS_FROM || 'Orlinski Realty Group <onboarding@resend.dev>'

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

export async function notifyLead(fields: Record<string, string | undefined>): Promise<boolean> {
  const key = process.env.RESEND_API_KEY
  if (!key) return false
  const rows = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#6e6358;text-transform:uppercase;font-size:11px;letter-spacing:.12em">${esc(k)}</td><td style="padding:6px 0;color:#2e2925">${esc(v!).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')
  const subject = `New enquiry · ${fields['Interest'] || 'Website'} · ${fields['Name'] || ''}`.trim()
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: LEADS_FROM,
        to: LEADS_TO.split(',').map((s) => s.trim()),
        reply_to: fields['Email'],
        subject,
        html: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:14px"><p style="color:#2e2925">New enquiry from orlinskirealtygroup.com</p><table>${rows}</table></div>`,
      }),
    })
    return res.ok
  } catch {
    return false
  }
}
