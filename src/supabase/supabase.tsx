import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/schema'

const supabase_url = process.env.SUPABASE_URL
const service_role_key = process.env.SUPABASE_KEY

const supabase = createClient<Database>(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})