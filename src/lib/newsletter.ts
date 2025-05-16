import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to subscribe to newsletter
export const subscribeToNewsletter = async (email: string) => {
  try {
    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .single();

    if (existingSubscriber) {
      return { success: false, message: 'You are already subscribed!' };
    }

    // Add new subscriber
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, subscribed_at: new Date().toISOString() }]);

    if (error) throw error;

    // Send confirmation email using Supabase Edge Function
    const { error: emailError } = await supabase.functions.invoke('send-newsletter-confirmation', {
      body: { email }
    });

    if (emailError) throw emailError;

    return { success: true, message: 'Successfully subscribed to newsletter!' };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, message: 'Failed to subscribe. Please try again.' };
  }
}; 