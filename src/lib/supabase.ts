import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = 'https://qmsdsgasczmyuyutacci.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2RzZ2FzY3pteXV5dXRhY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzQzMzUsImV4cCI6MjA2MTc1MDMzNX0.h9ej_io1rli3t4tWHdnYQRlyBgQIZAspcjDJatyInZo';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  }
});

// Test function to verify connection
export const testSupabaseConnection = async () => {
  try {
    // Test the database connection
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      if (error.code === '42P01') {
        console.error('Table does not exist. Please run the SQL setup script.');
      } else if (error.code === '42501') {
        console.error('Permission denied. Please check RLS policies.');
      }
      return false;
    }
    
    console.log('Supabase connection test successful');
    return true;
  } catch (error) {
    console.error('Supabase connection test error:', error);
    return false;
  }
}; 