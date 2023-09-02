import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/database.types'

const options = {
  auth: {
    localStorage: true,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY;

console.log(supabaseUrl);
console.log(supabaseAnonKey);

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, options)