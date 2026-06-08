import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;

export const supabaseAdmin = supabaseUrl && serviceKey
  ? createClient(supabaseUrl, serviceKey)
  : null;
