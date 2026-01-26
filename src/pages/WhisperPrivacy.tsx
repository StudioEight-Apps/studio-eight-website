import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WhisperPrivacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="px-6 md:px-12 lg:px-24 py-6">
        <Link 
          to="/whisper" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Whisper
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-24 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: January 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Introduction</h2>
            <p>
              Whisper ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Journal entries and personal reflections you create within the app</li>
              <li>Account information such as your email address</li>
              <li>Usage data and app preferences</li>
              <li>Device information and identifiers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Whisper app</li>
              <li>Personalize your experience and deliver tailored insights</li>
              <li>Process and respond to your requests and inquiries</li>
              <li>Send you technical notices and support messages</li>
              <li>Analyze usage patterns to improve our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. Your journal entries are encrypted and stored securely. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, cloud storage, and AI processing. These services have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Children's Privacy</h2>
            <p>
              Whisper is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@whisper.io" className="text-foreground underline">
                support@whisper.io
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default WhisperPrivacy;
