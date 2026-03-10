import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BasedTerms = () => {
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
          Terms of Service
        </h1>

        <div className="space-y-6 text-white/70">
          <p className="text-sm">Last updated: March 2026</p>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Agreement to Terms</h2>
            <p>
              By accessing or using Based ("the App"), operated by Studio Eight, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Description of Service</h2>
            <p>
              Based is a nutrition tracking application that uses AI to analyze meal photos, track nutrient intake across 18 essential vitamins and minerals, and provide personalized coaching. The App requires a paid subscription to access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Subscriptions and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Based offers weekly and annual subscription plans</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
              <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
              <li>You can manage and cancel subscriptions in your Apple ID account settings</li>
              <li>Free trial periods, if offered, automatically convert to paid subscriptions unless cancelled</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Not Medical Advice</h2>
            <p>
              Based is a nutrition tracking tool and does not provide medical advice, diagnosis, or treatment. The nutrient analysis, scores, and coaching provided are estimates for informational purposes only. Always consult a qualified healthcare professional before making significant dietary changes. Do not disregard professional medical advice based on information from the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">AI-Generated Content</h2>
            <p>
              The App uses artificial intelligence to analyze meals and provide coaching. AI-generated nutrient estimates may not be perfectly accurate. Results vary based on photo quality, portion size estimation, and food identification. You should not rely solely on the App for dietary decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse engineer or extract source code from the App</li>
              <li>Interfere with or disrupt the App's infrastructure</li>
              <li>Share your account credentials with others</li>
              <li>Upload content that is harmful, offensive, or violates any law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Intellectual Property</h2>
            <p>
              The App, including its design, features, content, and underlying technology, is owned by Studio Eight. You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes subject to these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Studio Eight shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Termination</h2>
            <p>
              We may terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or us. Upon termination, your right to use the App ceases immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify you of material changes through the App or by email. Continued use of the App after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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

export default BasedTerms;
