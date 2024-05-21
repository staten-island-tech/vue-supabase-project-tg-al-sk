import supabaseClient from '../supabaseClient'
import { setPiniaValues } from '../setPiniaValues'

export default async function signInUser(email, password) {
  const supabase = supabaseClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  await setPiniaValues(data.session)

  if (!error) {
    supabase.auth.setSession({
      access_token: data.session.access_token
    })
    return true
  } else {
    return false
  }
}
