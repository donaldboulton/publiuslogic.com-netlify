import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/database.types'

const options = {
  auth: {
    detectSessionInUrl: false,
    autoRefreshToken: false,
    persistSession: false,
  },
}

const supabaseUrl = process.env.GATSBY_SUPABASE_URL
const supabaseKey = process.env.GATSBY_SUPABASE_KEY

const supabase = createClient<Database>(supabaseUrl, supabaseKey, options)

export { supabase }
