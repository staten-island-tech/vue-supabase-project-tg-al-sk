import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

export default async function signInUser(email, password) {
  const supabase = createClient(
    'https://giswnketsngukdjcvptt.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpc3dua2V0c25ndWtkamN2cHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjU2MTksImV4cCI6MjAyNzY0MTYxOX0.2jRQrYwr9l2LNUHUcpwwlM0BwK52iFqqnEtmUBw8qhE'
  )

  const { data, error } = await supabase.auth.signOut()
  // console.log(data, error)

  console.log(await supabase.auth.getUser())
}
