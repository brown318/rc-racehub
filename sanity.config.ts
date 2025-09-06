import { defineConfig } from 'sanity'
import schema from './sanity-schema'

export default defineConfig({
  name: 'rcracehub',
  title: 'RC RaceHub',
  projectId: 'ji5yggrg',
  dataset: 'production',
  
  plugins: [],
  
  schema: {
    types: schema,
  },
})
