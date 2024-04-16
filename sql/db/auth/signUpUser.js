import supabaseClient from '../supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import createUserCurrencyTable from '../createUserCurrencyTable'

function insertToSupabaseDB(id, username, email) {
  fetch('/.netlify/functions/signupUser', {
    method: 'post',
    body: JSON.stringify({ id, username, email })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

export default async function signUpUser(username, email, password) {
  const supabase = supabaseClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  console.log(data, error)
  supabase.auth.setSession({
    access_token: data.session.access_token
  })

  const id = data.user.id
  insertToSupabaseDB(id, username, email)
  createUserCurrencyTable(id)
}

// signUpUser('testing@gmail.com', 'testing')
