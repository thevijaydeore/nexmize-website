
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-neutral-600 mb-8">Last updated: December 13, 2024</p>

            <div className="prose prose-neutral max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-neutral-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  fill out a form, or contact us for support. This may include your name, email address, 
                  phone number, and any other information you choose to provide.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-neutral-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and events</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-neutral-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy. We may share your 
                  information in certain limited circumstances, such as with service providers who assist 
                  us in operating our website and conducting our business.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-neutral-600 mb-4">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
                <p className="text-neutral-600 mb-4">
                  You have the right to access, update, or delete your personal information. You may also 
                  have the right to restrict or object to certain processing of your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-neutral-600">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 text-neutral-600">
                  <p>Email: privacy@nexmize.com</p>
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

export default PrivacyPolicy;
