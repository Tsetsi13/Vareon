import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vqjajbecebzfdgrzolub.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxamFqYmVjZWJ6ZmRncnpvbHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NDM5MzgsImV4cCI6MjA3NDAxOTkzOH0.Mc05--RdX-oSExzRNKM1LUEZJozvEjtf32R3A2oOr50'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ConsultationData = {
  id?: string
  name: string
  email: string
  selected_service: string
  company_name?: string
  problems?: string
  additional_info?: string
  created_at?: string
}