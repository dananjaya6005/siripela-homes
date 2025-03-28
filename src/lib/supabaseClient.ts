import { createClient } from '@supabase/supabase-js';



const supabaseUrl = 'https://ouhxvhnsxyjippkymuzb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91aHh2aG5zeHlqaXBwa3ltdXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MDcyODcsImV4cCI6MjA1ODM4MzI4N30.ave3-PVghinMOPhEJFBOvmUaowiq55Ey1rbdkTtSGeQ'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase