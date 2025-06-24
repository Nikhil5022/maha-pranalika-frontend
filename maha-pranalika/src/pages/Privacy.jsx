import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 mt-10 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-blue-800 mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Maha Pranalika Pvt Ltd</strong>, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">1. Information We Collect</h2>
      <p className="mb-2">We may collect the following types of personal information from you:</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Full name and contact information (email, phone number, address)</li>
        <li>Business details for firm registration or MSME approvals</li>
        <li>Identification documents for CIBIL score repair or visa consultation</li>
        <li>Usage data and browsing behavior on our website</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="mb-2">We use your personal data to:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Provide and manage consultancy services such as CIBIL repair, firm registration,
          MSME cluster assistance, and visa consultation
        </li>
        {/* Add more usage purposes here if needed */}
      </ul>
    </div>
  );
};

export default Privacy;
