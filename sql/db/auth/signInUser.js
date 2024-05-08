import supabaseClient from '../supabaseClient'
import { Auth } from '@supabase/auth-ui-react'

export default async function signInUser(email, password) {
  const supabase = supabaseClient()
  // console.log(email, password)

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  // console.log(error)
  console.log(await supabase.auth.getUser())
  if (!error) {
    supabase.auth.setSession({
      access_token: data.session.access_token
    })
    return true
  }else{
    return false
  }
  // console.log(data, error)

  
}
