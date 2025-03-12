import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lvkqisnwlsyxyprjfwvs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2a3Fpc253bHN5eHlwcmpmd3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExODk3MjEsImV4cCI6MjA1Njc2NTcyMX0.t-hnRcPn5TtZj3DTaL-E4h4kkuRnjQ0amZ54sZ_nzHg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
