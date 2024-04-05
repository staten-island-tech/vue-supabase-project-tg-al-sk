import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import connectDB from '../connectDB'
import {users} from '../userSchema'

export default async function signUpUser(email, password) {
  const supabase = createClient(
    'https://giswnketsngukdjcvptt.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpc3dua2V0c25ndWtkamN2cHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjU2MTksImV4cCI6MjAyNzY0MTYxOX0.2jRQrYwr9l2LNUHUcpwwlM0BwK52iFqqnEtmUBw8qhE'
  )
  console.log(supabase)

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  console.log(data, error)
  supabase.auth.setSession({
    access_token: data.session.access_token
  })

  const {db, client} = await connectDB()
  console.log(db)
}

// signUpUser('testing@gmail.com', 'testing')
