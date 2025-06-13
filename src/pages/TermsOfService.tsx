
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="container-padding py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <span className="text-xl font-semibold">Nexmize</span>
            </Link>
            <Link to="/" className="text-neutral-600 hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <p className="text-neutral-600 mb-8">Last updated: December 13, 2024</p>

            <div className="prose prose-neutral max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-600 mb-4">
                  By accessing and using Nexmize's services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Services Description</h2>
                <p className="text-neutral-600 mb-4">
                  Nexmize provides software development services including web applications, mobile 
                  applications, business websites, and UI/UX design services. We reserve the right 
                  to modify or discontinue our services at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-neutral-600 mb-4">Users are responsible for:</p>
                <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of account credentials</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Respecting intellectual property rights</li>
                  <li>Not engaging in any harmful or malicious activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-neutral-600 mb-4">
                  Payment terms will be specified in individual project agreements. All fees are 
                  non-refundable unless otherwise specified in writing. Late payments may incur 
                  additional charges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-neutral-600 mb-4">
                  Upon full payment, clients will own the intellectual property rights to custom 
                  development work created specifically for them. Nexmize retains rights to 
                  proprietary tools, frameworks, and general methodologies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-neutral-600 mb-4">
                  Nexmize shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
                <p className="text-neutral-600 mb-4">
                  Either party may terminate services with written notice. Upon termination, all 
                  outstanding fees become immediately due and payable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
                <p className="text-neutral-600">
                  For questions regarding these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-neutral-600">
                  <p>Email: legal@nexmize.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
