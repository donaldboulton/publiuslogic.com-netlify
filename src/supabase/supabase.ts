import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/schema'

const options = {
  auth: {
    localStorage: true,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
}

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient<Database>(supabaseUrl, supabaseKey, options)
export { supabase }
