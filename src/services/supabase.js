import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wozlhknjnwugufuusgok.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvemxoa25qbnd1Z3VmdXVzZ29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMzEyNTYsImV4cCI6MjAwNjgwNzI1Nn0.lS_9qSB4VcUEsEKn6nnAv5Ual_MIV1kLps65nZtpCa4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
