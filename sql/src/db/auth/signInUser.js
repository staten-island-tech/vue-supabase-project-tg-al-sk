import createClientWrapper from '../createClientWrapper'
import { Auth } from '@supabase/auth-ui-react'

export default async function signInUser(email, password) {
  const supabase = createClientWrapper()
  console.log(email, password)

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  console.log(error)
  if (!error) {
    supabase.auth.setSession({
      access_token: data.session.access_token
    })
  }
  // console.log(data, error)

  console.log(await supabase.auth.getUser())
}
