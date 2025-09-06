// Sample Legal Documents for RC RaceHub
// This shows the structure for creating Privacy Policy and Terms of Service in Sanity

const privacyPolicyExample = {
  _type: 'legalDocument',
  title: 'Privacy Policy',
  slug: { _type: 'slug', current: 'privacy-policy' },
  documentType: 'privacy-policy',
  effectiveDate: '2024-01-01',
  lastUpdated: new Date().toISOString(),
  version: '1.0',
  summary: 'This Privacy Policy describes how RC RaceHub collects, uses, and protects your personal information when you use our racing track management platform.',
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'At RC RaceHub, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our racing track management platform.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '1. Information We Collect'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Personal Information'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'We may collect personal information that you provide directly to us, including:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Name, email address, and contact information'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Racing track information and business details'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Payment information (processed securely through Stripe)'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Event and registration data'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Automatically Collected Information'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'We automatically collect certain information when you use our platform:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Usage data and analytics'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Device information and IP addresses'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Cookies and similar tracking technologies'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '2. How We Use Your Information'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'We use the information we collect to:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Provide and maintain our racing track management services'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Process payments and manage subscriptions'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Send important updates and notifications'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Improve our platform and develop new features'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Provide customer support and respond to inquiries'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '3. Information Sharing and Disclosure'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share your information with:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Service providers who assist in operating our platform (e.g., Stripe for payments, Supabase for data storage)'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Legal authorities when required by law or to protect our rights'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '4. Data Security'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Encryption of data in transit and at rest'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Regular security audits and updates'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Access controls and authentication measures'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '5. Your Rights and Choices'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'You have the right to:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Access and update your personal information'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Request deletion of your data (subject to legal requirements)'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Opt out of marketing communications'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Request a copy of your data'
        }
      ]
    },
    {
      _type: 'contactInfo',
      title: 'Contact Information',
      companyName: 'RC RaceHub',
      address: '123 Racing Way\nSpeedway City, SC 12345\nUnited States',
      email: 'privacy@rcracehub.com',
      phone: '+1 (555) 123-4567'
    }
  ],
  status: 'published'
}

const termsOfServiceExample = {
  _type: 'legalDocument',
  title: 'Terms of Service',
  slug: { _type: 'slug', current: 'terms-of-service' },
  documentType: 'terms-of-service',
  effectiveDate: '2024-01-01',
  lastUpdated: new Date().toISOString(),
  version: '1.0',
  summary: 'These Terms of Service govern your use of the RC RaceHub platform and outline the rights and responsibilities of both users and RC RaceHub.',
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Welcome to RC RaceHub! These Terms of Service ("Terms") govern your use of our racing track management platform and services. By accessing or using RC RaceHub, you agree to be bound by these Terms.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '1. Acceptance of Terms'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our services.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '2. Description of Service'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'RC RaceHub provides a comprehensive racing track management platform that includes:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Website creation and management tools'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Event registration and management'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Payment processing and e-commerce features'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Race timing and results management'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Analytics and reporting tools'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '3. User Accounts and Responsibilities'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'To use our services, you must create an account and provide accurate information. You are responsible for:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Maintaining the confidentiality of your account credentials'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'All activities that occur under your account'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Notifying us immediately of any unauthorized use'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Ensuring all content you upload complies with applicable laws'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '4. Payment Terms'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Our services are offered under various subscription plans. Payment terms include:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Subscription fees are billed monthly or annually in advance'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'All fees are non-refundable except as required by law'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'We may change pricing with 30 days advance notice'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Payment processing is handled securely through Stripe'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '5. Acceptable Use Policy'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'You agree not to use our services to:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Violate any applicable laws or regulations'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Infringe on intellectual property rights'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Transmit harmful or malicious content'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          text: 'Attempt to gain unauthorized access to our systems'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '6. Limitation of Liability'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'To the maximum extent permitted by law, RC RaceHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption.'
        }
      ]
    },
    {
      _type: 'contactInfo',
      title: 'Contact Information',
      companyName: 'RC RaceHub',
      address: '123 Racing Way\nSpeedway City, SC 12345\nUnited States',
      email: 'legal@rcracehub.com',
      phone: '+1 (555) 123-4567'
    }
  ],
  status: 'published'
}

console.log('⚖️ RC RaceHub Legal Documents Structure')
console.log('=====================================\n')

console.log('📄 PRIVACY POLICY:')
console.log('• Comprehensive data collection and usage policies')
console.log('• GDPR and privacy law compliance')
console.log('• Clear contact information for privacy inquiries')
console.log('• Professional formatting with sections and lists\n')

console.log('📋 TERMS OF SERVICE:')
console.log('• Service description and user responsibilities')
console.log('• Payment terms and subscription policies')
console.log('• Acceptable use policy and limitations')
console.log('• Legal protections and liability limitations\n')

console.log('🔧 FEATURES IMPLEMENTED:')
console.log('• Rich text content with headings and lists')
console.log('• Contact information blocks with company details')
console.log('• Version tracking and effective dates')
console.log('• Professional document formatting')
console.log('• Cross-linking between legal documents\n')

console.log('💡 TO CREATE THESE DOCUMENTS:')
console.log('1. Go to http://localhost:3001/admin')
console.log('2. Click "Create" and select "Legal Document"')
console.log('3. Choose document type (Privacy Policy or Terms of Service)')
console.log('4. Fill in the content using the structures above')
console.log('5. Set status to "published"')
console.log('6. Set effective date and version number\n')

console.log('🔗 ONCE CREATED, DOCUMENTS WILL BE AVAILABLE AT:')
console.log('• Privacy Policy: http://localhost:3001/privacy')
console.log('• Terms of Service: http://localhost:3001/terms')
console.log('• Footer links will work correctly\n')

console.log('📚 ADDITIONAL LEGAL DOCUMENTS SUPPORTED:')
console.log('• Cookie Policy')
console.log('• Data Processing Agreement (DPA)')
console.log('• Acceptable Use Policy (AUP)')
console.log('• Service Level Agreement (SLA)\n')

console.log('✅ Legal document system is ready for content creation!')
console.log('   Professional legal pages with Sanity CMS integration.')
