import createClientWrapper from '../createClientWrapper'
import { Auth } from '@supabase/auth-ui-react'

export default async function signInUser(email, password) {
  const supabase = createClientWrapper()

  const { data, error } = await supabase.auth.signOut()
  // console.log(data, error)

  console.log(await supabase.auth.getUser())
}
