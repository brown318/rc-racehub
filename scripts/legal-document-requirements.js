// Legal Document Requirements for RC RaceHub
// This shows exactly what fields are required for the legal pages to work

console.log('⚖️ LEGAL DOCUMENT REQUIREMENTS')
console.log('==============================\n')

console.log('🔍 QUERY ANALYSIS:')
console.log('The legal pages query documents based on these criteria:\n')

console.log('📄 PRIVACY POLICY PAGE (/privacy):')
console.log('   Query: *[_type == "legalDocument" && documentType == "privacy-policy" && status == "published"]')
console.log('   Required Fields:')
console.log('   ✅ _type: "legalDocument" (automatic)')
console.log('   ✅ documentType: "privacy-policy" (MUST be exactly this)')
console.log('   ✅ status: "published" (MUST be exactly this)')
console.log('   📝 slug: Not required for functionality, but recommended for SEO\n')

console.log('📋 TERMS OF SERVICE PAGE (/terms):')
console.log('   Query: *[_type == "legalDocument" && documentType == "terms-of-service" && status == "published"]')
console.log('   Required Fields:')
console.log('   ✅ _type: "legalDocument" (automatic)')
console.log('   ✅ documentType: "terms-of-service" (MUST be exactly this)')
console.log('   ✅ status: "published" (MUST be exactly this)')
console.log('   📝 slug: Not required for functionality, but recommended for SEO\n')

console.log('🎯 CRITICAL SETTINGS:')
console.log('1. Document Type MUST match exactly:')
console.log('   • Privacy Policy → "privacy-policy"')
console.log('   • Terms of Service → "terms-of-service"')
console.log('2. Status MUST be "published" (not "draft", "review", or "archived")')
console.log('3. The query orders by effectiveDate desc, so newest document is used\n')

console.log('📝 RECOMMENDED SLUGS (for SEO):')
console.log('• Privacy Policy: "privacy-policy"')
console.log('• Terms of Service: "terms-of-service"')
console.log('• Cookie Policy: "cookie-policy"')
console.log('• Data Processing Agreement: "data-processing-agreement"\n')

console.log('⚠️ COMMON MISTAKES:')
console.log('❌ Setting documentType to "Privacy Policy" (with spaces/capitals)')
console.log('❌ Leaving status as "draft" instead of "published"')
console.log('❌ Creating multiple published documents (only newest is used)')
console.log('❌ Forgetting to set effectiveDate (used for ordering)\n')

console.log('✅ CORRECT SETUP EXAMPLE:')
const examplePrivacyPolicy = {
  _type: 'legalDocument',
  title: 'Privacy Policy',
  slug: { _type: 'slug', current: 'privacy-policy' },
  documentType: 'privacy-policy', // CRITICAL: exact match
  status: 'published', // CRITICAL: must be published
  effectiveDate: '2024-01-01',
  version: '1.0',
  content: [/* rich content blocks */]
}

const exampleTermsOfService = {
  _type: 'legalDocument', 
  title: 'Terms of Service',
  slug: { _type: 'slug', current: 'terms-of-service' },
  documentType: 'terms-of-service', // CRITICAL: exact match
  status: 'published', // CRITICAL: must be published
  effectiveDate: '2024-01-01',
  version: '1.0',
  content: [/* rich content blocks */]
}

console.log('\nPrivacy Policy Document:')
console.log(JSON.stringify(examplePrivacyPolicy, null, 2))

console.log('\nTerms of Service Document:')
console.log(JSON.stringify(exampleTermsOfService, null, 2))

console.log('\n🔧 TESTING YOUR SETUP:')
console.log('1. Create documents with correct documentType and status')
console.log('2. Visit http://localhost:3001/privacy')
console.log('3. Visit http://localhost:3001/terms')
console.log('4. If you see "Not Available" message, check:')
console.log('   • Document Type matches exactly')
console.log('   • Status is "published"')
console.log('   • Document exists in Sanity\n')

console.log('🎯 AVAILABLE DOCUMENT TYPES:')
const availableTypes = [
  'privacy-policy',
  'terms-of-service', 
  'cookie-policy',
  'dpa',
  'aup',
  'sla'
]

availableTypes.forEach(type => {
  console.log(`   • ${type}`)
})

console.log('\n✅ Once set up correctly, your legal pages will display rich content!')
console.log('   The slug field is for SEO and future individual document pages.')
