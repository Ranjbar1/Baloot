import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wwpewnucokvvqrqeignc.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cGV3bnVjb2t2dnFycWVpZ25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwMjgzNjksImV4cCI6MjAwODYwNDM2OX0.AMkdW5NiO3BLwPhXsz8goYRr_ViUF2GicimXGmK7v5c";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);
  return user;
}
