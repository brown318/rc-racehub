// Debug NTAR Events Query
// This script tests the event query to see why events aren't showing

import { client, TENANT_QUERY } from '../apps/web/src/lib/sanity.js';

async function debugNTAREvents() {
  console.log('🔍 DEBUGGING NTAR EVENTS QUERY')
  console.log('==============================\n')

  try {
    // First, get the NTAR tenant
    console.log('1. FETCHING NTAR TENANT:')
    const tenant = await client.fetch(TENANT_QUERY, { subdomain: 'ntar' });
    
    if (!tenant) {
      console.log('❌ NTAR tenant not found!')
      return;
    }
    
    console.log('✅ Tenant found:')
    console.log(`   ID: ${tenant._id}`)
    console.log(`   Name: ${tenant.name}`)
    console.log(`   Subdomain: ${tenant.subdomain}`)
    console.log('')

    // Test the events query
    console.log('2. TESTING EVENTS QUERY:')
    const eventsQuery = `
      *[_type == "event" && tenant._ref == $tenantId && status == "published" && eventDate >= now()] | order(eventDate asc)[0...3] {
        _id,
        title,
        slug,
        eventDate,
        eventTime,
        location,
        description,
        entryFee,
        maxParticipants,
        currentParticipants,
        categories,
        status,
        featured,
        registrationOpen,
        tenant
      }
    `;
    
    console.log('Query:', eventsQuery.replace(/\s+/g, ' ').trim())
    console.log(`Parameters: { tenantId: "${tenant._id}" }`)
    console.log('')
    
    const events = await client.fetch(eventsQuery, { tenantId: tenant._id });
    
    console.log('3. QUERY RESULTS:')
    console.log(`Found ${events.length} events`)
    
    if (events.length === 0) {
      console.log('❌ No events found. Let\'s debug further...\n')
      
      // Check all events for this tenant (without date filter)
      console.log('4. CHECKING ALL EVENTS FOR TENANT (no date filter):')
      const allEvents = await client.fetch(`
        *[_type == "event" && tenant._ref == $tenantId] {
          _id,
          title,
          eventDate,
          status,
          tenant
        }
      `, { tenantId: tenant._id });
      
      console.log(`Found ${allEvents.length} total events for tenant`)
      allEvents.forEach((event, index) => {
        console.log(`   ${index + 1}. ${event.title}`)
        console.log(`      Date: ${event.eventDate}`)
        console.log(`      Status: ${event.status}`)
        console.log(`      Tenant: ${event.tenant?._ref || 'No tenant reference'}`)
      })
      console.log('')
      
      // Check all events in the system
      console.log('5. CHECKING ALL EVENTS IN SYSTEM:')
      const systemEvents = await client.fetch(`
        *[_type == "event"] {
          _id,
          title,
          eventDate,
          status,
          tenant
        }
      `);
      
      console.log(`Found ${systemEvents.length} total events in system`)
      systemEvents.forEach((event, index) => {
        console.log(`   ${index + 1}. ${event.title}`)
        console.log(`      Date: ${event.eventDate}`)
        console.log(`      Status: ${event.status}`)
        console.log(`      Tenant: ${event.tenant?._ref || 'No tenant reference'}`)
      })
      
    } else {
      console.log('✅ Events found:')
      events.forEach((event, index) => {
        console.log(`   ${index + 1}. ${event.title}`)
        console.log(`      ID: ${event._id}`)
        console.log(`      Date: ${event.eventDate}`)
        console.log(`      Time: ${event.eventTime || 'Not set'}`)
        console.log(`      Status: ${event.status}`)
        console.log(`      Featured: ${event.featured}`)
        console.log(`      Registration Open: ${event.registrationOpen}`)
        console.log(`      Categories: ${event.categories?.join(', ') || 'None'}`)
        console.log('')
      })
    }
    
  } catch (error) {
    console.error('❌ Error during debugging:', error)
  }
}

// Run the debug
debugNTAREvents();
