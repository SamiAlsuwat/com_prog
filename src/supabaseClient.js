import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rownvmnsukwdcpojvsvz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvd252bW5zdWt3ZGNwb2p2c3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NjU4NjgsImV4cCI6MjEwNzA0MTg2OH0.6X3rIjpcaf0mR-Nit7y6vsFzcteqe6GouURiG39onrY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
