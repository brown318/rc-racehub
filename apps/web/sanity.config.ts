import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { media } from 'sanity-plugin-media'

import schema from './src/sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'rcracehub',
  title: 'RC RaceHub',
  
  projectId,
  dataset,
  
  basePath: '/admin',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('RC RaceHub Content')
          .items([
            S.listItem()
              .title('Tenants')
              .child(S.documentTypeList('tenant').title('Tenants')),
            S.divider(),
            S.listItem()
              .title('Content')
              .child(
                S.list()
                  .title('Content')
                  .items([
                    S.listItem()
                      .title('Posts')
                      .child(S.documentTypeList('post').title('Posts')),
                    S.listItem()
                      .title('Events')
                      .child(S.documentTypeList('event').title('Events')),
                    S.listItem()
                      .title('Promos')
                      .child(S.documentTypeList('promo').title('Promos')),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Media')
              .child(
                S.list()
                  .title('Media')
                  .items([
                    S.listItem()
                      .title('Media Assets')
                      .child(S.documentTypeList('mediaAsset').title('Media Assets')),
                    S.listItem()
                      .title('Sponsor Blocks')
                      .child(S.documentTypeList('sponsorBlock').title('Sponsor Blocks')),
                  ])
              ),
          ])
    }),
    visionTool(),
    colorInput(),
    media(),
  ],
  
  schema: {
    types: schema,
  },
  
  document: {
    // Hide 'Settings' from new document options
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== 'settings')
      }
      return prev
    },
  },
})
