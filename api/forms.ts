import { Resend } from 'resend';

type FormRequest = {
  type?: 'contact' | 'donation';
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: Record<string, string>) => void;
};

type ApiRequest = {
  method?: string;
  body?: FormRequest;
};

const maxLength = 2000;

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = request.body || {};
  const type = body.type;
  const fullName = clean(body.fullName);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const subject = clean(body.subject);
  const message = clean(body.message);

  if (!type || !['contact', 'donation'].includes(type)) {
    return response.status(400).json({ error: 'Invalid form type.' });
  }

  if (!fullName || !email || !message || (type === 'donation' && !phone)) {
    return response.status(400).json({ error: 'Please complete all required fields.' });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return response.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = type === 'donation'
    ? process.env.DONATION_FORM_FROM_EMAIL || process.env.FORM_FROM_EMAIL
    : process.env.CONTACT_FORM_FROM_EMAIL || process.env.FORM_FROM_EMAIL;
  const to = process.env.FOUNDATION_EMAIL;
  const cc = (process.env.FOUNDATION_TEAM_CC || '')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);

  const missingConfig = [
    !resendApiKey && 'RESEND_API_KEY',
    !from && (type === 'donation' ? 'DONATION_FORM_FROM_EMAIL' : 'CONTACT_FORM_FROM_EMAIL'),
    !to && 'FOUNDATION_EMAIL',
  ].filter(Boolean);

  if (!resendApiKey || !from || !to) {
    return response.status(500).json({
      error: `Email service is not configured. Missing: ${missingConfig.join(', ')}.`,
    });
  }

  const formName = type === 'donation' ? 'Donation Interest' : 'Contact Form';
  const heading = type === 'donation' ? 'New Donation Interest' : 'New Contact Request';
  const detailHeading = type === 'donation' ? 'Donor Details' : 'Contact Details';
  const emailSubject = subject
    ? `[${formName}] ${subject}`
    : `[${formName}] New submission from ${fullName}`;

  const html = `
    <div style="margin:0;background:#f5f7fa;padding:32px 16px;font-family:Arial,sans-serif;color:#25313c">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e1e5e9">
        <div style="background:#0d1b2a;padding:24px 20px">
          <div style="color:#d6a64c;font-size:18px;font-weight:700">Silent Salute Foundation</div>
          <div style="margin-top:8px;color:#ffffff;font-size:14px">${escapeHtml(heading)}</div>
        </div>
        <div style="padding:28px 20px">
          <p style="margin:0 0 24px;color:#4b5563;font-size:14px;line-height:1.6">
            A new message has been submitted through the Silent Salute Foundation website.
          </p>
          <div style="border-top:1px solid #d8dde2;padding-top:16px">
            <h2 style="margin:0 0 16px;font-size:16px;color:#25313c">${escapeHtml(detailHeading)}</h2>
            <p style="margin:10px 0;font-size:14px"><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
            <p style="margin:10px 0;font-size:14px"><strong>Email Address:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#2563eb">${escapeHtml(email)}</a></p>
            <p style="margin:10px 0;font-size:14px"><strong>Contact Number:</strong> ${escapeHtml(phone || 'Not provided')}</p>
            <p style="margin:10px 0;font-size:14px"><strong>Subject:</strong> ${escapeHtml(subject || 'Not provided')}</p>
          </div>
          <h2 style="margin:24px 0 12px;font-size:16px;color:#25313c">Message</h2>
          <div style="background:#f5f5f5;padding:18px 16px;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      </div>
    </div>
  `;

  const resend = new Resend(resendApiKey);
  const result = await resend.emails.send({
    from,
    to,
    cc: cc.length ? cc : undefined,
    replyTo: email,
    subject: emailSubject,
    html,
    text: [
      `${formName} submission`,
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Subject: ${subject || 'Not provided'}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  });

  if (result.error) {
    return response.status(502).json({ error: 'Email delivery failed. Please try again.' });
  }

  return response.status(200).json({ message: 'Form submitted successfully.' });
}
