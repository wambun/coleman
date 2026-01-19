import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors
let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Map service value to readable name
    const serviceNames: Record<string, string> = {
      bookkeeping: 'Bookkeeping & Accounting',
      tax: 'Tax Services',
      cfo: 'Fractional CFO',
      hr: 'People Operations',
      other: 'Other',
    };

    const serviceName = body.service ? serviceNames[body.service] || body.service : 'Not specified';

    const resendClient = getResendClient();

    // Send email notification to Jay Coleman
    await resendClient.emails.send({
      from: 'Jay Coleman Consulting <notifications@jcolemanconsulting.com>',
      to: ['info@jcolemanconsulting.com'],
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.firstName} ${body.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d1c29 0%, #132030 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #0d1c29; font-size: 18px; margin-top: 0;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #666; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #0d1c29; font-weight: 500;">${body.firstName} ${body.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #666;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #0d1c29; font-weight: 500;">
                  <a href="mailto:${body.email}" style="color: #3498db;">${body.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #666;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #0d1c29; font-weight: 500;">${body.company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #666;">Service Interest</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8eded; color: #0d1c29; font-weight: 500;">${serviceName}</td>
              </tr>
            </table>

            ${body.message ? `
              <h2 style="color: #0d1c29; font-size: 18px; margin-top: 30px;">Message</h2>
              <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e8eded;">
                <p style="color: #0d1c29; margin: 0; line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
              </div>
            ` : ''}

            <div style="margin-top: 30px; padding: 20px; background-color: #fff8f0; border-radius: 8px; border-left: 4px solid #f68212;">
              <p style="color: #0d1c29; margin: 0; font-size: 14px;">
                <strong>Quick Action:</strong> Reply directly to this email to respond to ${body.firstName}.
              </p>
            </div>
          </div>

          <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the contact form at jcolemanconsulting.com</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await resendClient.emails.send({
      from: 'Jay Coleman Consulting <notifications@jcolemanconsulting.com>',
      to: [body.email],
      subject: 'Thank you for contacting Jay Coleman Consulting',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d1c29 0%, #132030 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You, ${body.firstName}!</h1>
          </div>

          <div style="padding: 30px; background-color: #f8fafc;">
            <p style="color: #0d1c29; font-size: 16px; line-height: 1.6; margin-top: 0;">
              We've received your message and appreciate you reaching out to Jay Coleman Consulting.
            </p>

            <p style="color: #0d1c29; font-size: 16px; line-height: 1.6;">
              Our team will review your inquiry and get back to you within <strong>24 hours</strong> on business days.
            </p>

            <div style="margin: 30px 0; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e8eded;">
              <h3 style="color: #0d1c29; margin-top: 0; font-size: 16px;">What you submitted:</h3>
              <p style="color: #666; margin: 5px 0;"><strong>Service Interest:</strong> ${serviceName}</p>
              ${body.message ? `<p style="color: #666; margin: 5px 0;"><strong>Message:</strong> ${body.message.substring(0, 200)}${body.message.length > 200 ? '...' : ''}</p>` : ''}
            </div>

            <p style="color: #0d1c29; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to explore our services:
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://jcolemanconsulting.com/services" style="display: inline-block; background-color: #f68212; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: 600;">
                Explore Our Services
              </a>
            </div>

            <p style="color: #666; font-size: 14px; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: #0d1c29;">The Jay Coleman Consulting Team</strong>
            </p>
          </div>

          <div style="padding: 20px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #e8eded;">
            <p style="margin: 0 0 10px 0;">Jay Coleman Consulting</p>
            <p style="margin: 0;">1636 Roadrunner Dr, Roseville, CA 95747</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
