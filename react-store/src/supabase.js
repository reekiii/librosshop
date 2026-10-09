import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mrvdmassoyylmxglfhhg.supabase.co';
const supabaseKey = 'sb_publishable_OT4Q_WhxGQkHYQiTjysvFA_lh5x_zJi';

export const supabase = createClient(supabaseUrl, supabaseKey);
