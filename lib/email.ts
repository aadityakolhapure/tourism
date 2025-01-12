import { TripPlan } from "@/types/index";
import nodemailer from "nodemailer";

const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #2d3748;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background-color: #2563eb;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .content {
      padding: 20px;
      background-color: #f8fafc;
      border-radius: 0 0 8px 8px;
    }
    .section {
      margin: 20px 0;
      padding: 15px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #2563eb;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      color: #718096;
      margin-top: 20px;
      font-size: 0.875rem;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Your Satara Trip Plan is Ready!</h1>
  </div>
  <div class="content">
    <div class="section">
      <h2>Dear Traveler,</h2>
      <p>Thank you for choosing Satara Tourism for your upcoming trip to {{placeToVisit}}. We've prepared a comprehensive guide to help make your journey memorable.</p>
    </div>
    
    <div class="section">
      <h3>Trip Details:</h3>
      <ul>
        <li>Destination: {{placeToVisit}}</li>
        <li>Trip Type: {{tripType}}</li>
        <li>Transportation: {{transportation}}</li>
      </ul>
    </div>
    
    <div class="section">
      <h3>What's in your guide:</h3>
      <ul>
        <li>Detailed route information</li>
        <li>Must-visit spots</li>
        <li>Transportation options</li>
        <li>Travel tips and recommendations</li>
        <li>Important timings and fees</li>
      </ul>
    </div>
    
    <p>We've attached a detailed PDF guide to this email. Download and keep it handy during your trip!</p>
    
    <div class="footer">
      <p>Have a great trip!</p>
      <p>Best regards,<br>Satara Tourism Team</p>
    </div>
  </div>
</body>
</html>
`;

export function generateEmailHTML(tripPlan: TripPlan): string {
  return emailTemplate
    .replace("{{placeToVisit}}", tripPlan.placeToVisit)
    .replace("{{tripType}}", tripPlan.tripType)
    .replace("{{transportation}}", tripPlan.transportation);
}

export async function sendTripPlanEmail({
  to,
  tripPlan,
  pdfBuffer,
}: {
  to: string;
  tripPlan: TripPlan;
  pdfBuffer: Buffer;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Your Satara Trip Plan",
    html: generateEmailHTML(tripPlan),
    attachments: [
      {
        filename: "trip-plan.pdf",
        content: pdfBuffer,
      },
    ],
  });
}
