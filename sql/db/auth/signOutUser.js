import supabaseClient from '../supabaseClient'
import { Auth } from '@supabase/auth-ui-react'

export default async function signInUser(email, password) {
  const supabase = supabaseClient()

  const { data, error } = await supabase.auth.signOut()
  // console.log(data, error)

  console.log(await supabase.auth.getUser())
}
