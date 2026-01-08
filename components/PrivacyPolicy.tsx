import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <article className="pt-32 pb-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-light dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-muted-light dark:text-muted-dark">Last updated: February 26, 2025</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-text-light dark:text-gray-300 leading-relaxed">
            At Pearl Gold Hub, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
          </p>

          <section>
            <h3 className="text-2xl font-bold text-text-light dark:text-white mt-8 mb-4">1. Information We Collect</h3>
            <p className="text-text-light dark:text-gray-300 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light dark:text-gray-300 mb-6">
              <li>Fill out our contact forms.</li>
              <li>Subscribe to our newsletter.</li>
              <li>Request a quote for gold purchase or logistics services.</li>
              <li>Communicate with us via email or WhatsApp.</li>
            </ul>
            <p className="text-text-light dark:text-gray-300 leading-relaxed">
              This information may include your name, email address, phone number, company name, and the content of your messages.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-text-light dark:text-white mt-8 mb-4">2. How We Use Your Information</h3>
            <p className="text-text-light dark:text-gray-300 leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light dark:text-gray-300 mb-6">
              <li>To provide and maintain our services.</li>
              <li>To notify you about changes to our services.</li>
              <li>To provide customer support.</li>
              <li>To monitor the usage of our service.</li>
              <li>To detect, prevent and address technical issues.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-text-light dark:text-white mt-8 mb-4">3. Data Security</h3>
            <p className="text-text-light dark:text-gray-300 leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-text-light dark:text-white mt-8 mb-4">4. Third-Party Disclosure</h3>
            <p className="text-text-light dark:text-gray-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-text-light dark:text-white mt-8 mb-4">5. Contact Us</h3>
            <p className="text-text-light dark:text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <address className="not-italic text-text-light dark:text-gray-300 mt-4">
              <strong>By email:</strong> info@pearlgoldhub.com<br/>
              <strong>By phone:</strong> +256 772 653 789
            </address>
          </section>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPolicy;