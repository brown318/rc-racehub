// Create NTAR Tenant Events in Sanity
// This script shows the structure for creating the three events shown on the NTAR home page

const ntarEvents = [
  {
    _type: 'event',
    title: 'Winter Championship Series - Round 1',
    slug: { _type: 'slug', current: 'winter-championship-series-round-1' },
    eventDate: '2024-12-14',
    eventTime: '9:00 AM',
    location: 'NTAR Main Track',
    description: 'Join us for the first round of our Winter Championship Series! Multiple classes available for all skill levels.',
    entryFee: 25, // Base fee, varies by class
    maxParticipants: 60,
    currentParticipants: 0,
    categories: ['Stock 13.5T', 'Modified 2WD', 'Modified 4WD'],
    status: 'published',
    featured: true,
    registrationOpen: true,
    tenant: {
      _type: 'reference',
      _ref: 'ntar-tenant-id' // This would be the actual NTAR tenant ID from Sanity
    },
    // Additional event details
    classDetails: [
      {
        className: 'Stock 13.5T',
        entryFee: 25,
        description: 'Stock motor class with 13.5T limit'
      },
      {
        className: 'Modified 2WD',
        entryFee: 30,
        description: 'Open modified 2WD buggy class'
      },
      {
        className: 'Modified 4WD',
        entryFee: 30,
        description: 'Open modified 4WD buggy class'
      }
    ]
  },
  {
    _type: 'event',
    title: 'New Year Bash Race',
    slug: { _type: 'slug', current: 'new-year-bash-race' },
    eventDate: '2025-01-04',
    eventTime: '10:00 AM',
    location: 'NTAR Main Track',
    description: 'Start the new year with exciting RC racing! Perfect event for beginners and experts alike.',
    entryFee: 20, // Base fee for novice
    maxParticipants: 50,
    currentParticipants: 0,
    categories: ['Novice Stock', 'Expert Stock', 'Open Modified'],
    status: 'published',
    featured: false,
    registrationOpen: true,
    tenant: {
      _type: 'reference',
      _ref: 'ntar-tenant-id'
    },
    classDetails: [
      {
        className: 'Novice Stock',
        entryFee: 20,
        description: 'Perfect for beginners and new racers'
      },
      {
        className: 'Expert Stock',
        entryFee: 25,
        description: 'Advanced stock motor racing'
      },
      {
        className: 'Open Modified',
        entryFee: 35,
        description: 'No limits - bring your fastest setup'
      }
    ]
  },
  {
    _type: 'event',
    title: 'Spring Kickoff Classic',
    slug: { _type: 'slug', current: 'spring-kickoff-classic' },
    eventDate: '2025-03-15',
    eventTime: '9:00 AM',
    location: 'NTAR Main Track',
    description: 'Kick off the spring racing season with our classic touring car event. Multiple touring classes available.',
    entryFee: 25, // Base fee
    maxParticipants: 55,
    currentParticipants: 0,
    categories: ['Stock Touring', 'Modified Touring', 'Formula 1'],
    status: 'published',
    featured: false,
    registrationOpen: true,
    tenant: {
      _type: 'reference',
      _ref: 'ntar-tenant-id'
    },
    classDetails: [
      {
        className: 'Stock Touring',
        entryFee: 25,
        description: 'Stock touring car racing'
      },
      {
        className: 'Modified Touring',
        entryFee: 30,
        description: 'Modified touring car class'
      },
      {
        className: 'Formula 1',
        entryFee: 35,
        description: 'Open wheel F1 style racing'
      }
    ]
  }
];

console.log('🏁 NTAR TENANT EVENTS DATA STRUCTURE')
console.log('===================================\n')

console.log('📅 EVENTS TO CREATE IN SANITY:')
ntarEvents.forEach((event, index) => {
  console.log(`\n${index + 1}. ${event.title}`)
  console.log(`   Date: ${event.eventDate} at ${event.eventTime}`)
  console.log(`   Location: ${event.location}`)
  console.log(`   Categories: ${event.categories.join(', ')}`)
  console.log(`   Max Participants: ${event.maxParticipants}`)
  console.log(`   Featured: ${event.featured ? 'Yes' : 'No'}`)
  console.log(`   Status: ${event.status}`)
  
  if (event.classDetails) {
    console.log(`   Class Details:`)
    event.classDetails.forEach(cls => {
      console.log(`     • ${cls.className}: $${cls.entryFee} - ${cls.description}`)
    })
  }
})

console.log('\n💡 TO CREATE THESE EVENTS:')
console.log('1. Go to http://localhost:3000/admin (Sanity Studio)')
console.log('2. Click "Create" and select "Event"')
console.log('3. Fill in the event details using the structure above')
console.log('4. Set the tenant reference to the NTAR tenant')
console.log('5. Set status to "published"')
console.log('6. Make sure eventDate is in the future for upcoming events\n')

console.log('🔧 IMPORTANT NOTES:')
console.log('• Replace "ntar-tenant-id" with the actual NTAR tenant ID from Sanity')
console.log('• Ensure event dates are in the future to show as "upcoming"')
console.log('• The tenant reference links events to the NTAR tenant')
console.log('• Categories array helps with filtering and display')
console.log('• Featured events get special highlighting\n')

console.log('📊 EVENT SCHEMA FIELDS USED:')
console.log('• title: Event name')
console.log('• slug: URL-friendly identifier')
console.log('• eventDate: Date of the event (YYYY-MM-DD)')
console.log('• eventTime: Time of the event')
console.log('• location: Where the event takes place')
console.log('• description: Event description')
console.log('• entryFee: Base entry fee')
console.log('• maxParticipants: Maximum number of participants')
console.log('• categories: Array of racing categories/classes')
console.log('• status: "published" to make visible')
console.log('• featured: Boolean for special highlighting')
console.log('• tenant: Reference to the tenant (NTAR)\n')

console.log('🎯 NEXT STEPS:')
console.log('1. Create these events in Sanity Studio')
console.log('2. Update tenant home page to fetch real events')
console.log('3. Replace static event cards with dynamic data')
console.log('4. Test the updated home page with real events\n')

console.log('✅ Once created, these events will appear on:')
console.log('• NTAR home page: http://ntar.localhost:3000/')
console.log('• NTAR events page: http://ntar.localhost:3000/events')
console.log('• Individual event pages: http://ntar.localhost:3000/events/[slug]')

console.log('\n🏁 Ready to replace static data with real Sanity events!')
