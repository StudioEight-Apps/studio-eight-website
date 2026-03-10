import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BasedPrivacy = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="px-6 md:px-12 lg:px-24 py-6">
        <Link
          to="/based"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Based
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-24 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-white/70">
          <p className="text-sm">Last updated: March 2026</p>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Introduction</h2>
            <p>
              Based ("we," "our," or "us"), operated by Studio Eight, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meal photos you capture or upload for nutrient analysis</li>
              <li>Account information such as your email address</li>
              <li>Onboarding profile data (age, sex, height, weight, dietary preferences, health goals)</li>
              <li>Daily nutrient scores, meal logs, and streak data</li>
              <li>Coach chat messages and interactions</li>
              <li>Usage data, device information, and identifiers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyze meal photos to identify nutrients using AI</li>
              <li>Provide personalized nutrition coaching and recommendations</li>
              <li>Track your daily nutrient intake and calculate scores</li>
              <li>Maintain and improve the Based app experience</li>
              <li>Process subscriptions and manage your account</li>
              <li>Send you technical notices and support messages</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">AI Processing</h2>
            <p>
              Based uses AI services to analyze meal photos and provide nutrition coaching. Your meal photos are sent to our secure servers for processing and are not stored after analysis is complete. Coach chat conversations are processed by AI to provide personalized advice based on your nutrient data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. Your data is encrypted in transit and at rest. Meal photos are processed securely and not shared with third parties. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting us. Upon account deletion, all associated data including meal logs, scores, and chat history will be permanently removed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Apple and Google for authentication</li>
              <li>RevenueCat for subscription management</li>
              <li>Supabase for secure data storage</li>
              <li>AI providers for meal analysis and coaching</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Your Rights</h2>
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
            <h2 className="text-xl font-medium text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@studioeight.co" className="text-white underline">
                support@studioeight.co
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BasedPrivacy;
