import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://jacecfkyvowsylckxojv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphY2VjZmt5dm93c3lsY2t4b2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDk0NTIsImV4cCI6MjA1NzAyNTQ1Mn0.2fmlTtJYtDK5ztupHX1UNOymfSsGpmNYImeH6pbA6wo'
);
