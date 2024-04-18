import supabaseClient from '../supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import createUserCurrencyTable from '../createUserCurrencyTable'

async function insertToSupabaseDB(id, username, email) {
  const res = await fetch('/.netlify/functions/signupUser', {
    method: 'post',
    body: JSON.stringify({ id, username, email })
  })
  const data = await res.json()
  return data
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
  insertToSupabaseDB(id, username, email).then((data) => {
    // console.log(data)
    setTimeout(() => createUserCurrencyTable(id), 3000)
    
  })
  
}

// signUpUser('testing@gmail.com', 'testing')
