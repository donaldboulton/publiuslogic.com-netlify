import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/schema'

const supabase =
  process.env.SUPABASE_URL && process.env.SUPABASE_KEY
    ? createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    : undefined
