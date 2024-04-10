import supabaseClient from './supabaseClient'

export default async function getCurrentUser() {
  const supabase = supabaseClient()

  const { data, error } = await supabase.auth.getUser()
  // console.log(data, error)

  console.log(data)
  return data
}
