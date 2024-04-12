import supabaseClient from '../../db/supabaseClient'

async function signupUser({ id, email, username }) {
  const supabase = supabaseClient()
  const { error } = await supabase.from('users').insert({ id, username, email })
  console.log(error)
  //   const users = await supabase.from('users').select()
  //   console.log('Users: ', users)
}

export async function handler(req: Request) {
  const body = JSON.parse(req.body)
  console.log(body)
  signupUser(body)
  return {
    body: req.body,
    statusCode: 200
  }
}
