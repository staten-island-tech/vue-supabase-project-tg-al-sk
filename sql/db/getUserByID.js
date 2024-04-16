import supabaseClient from './supabaseClient'

export default async function getUserByID(id) {
  const supabase = supabaseClient()

  const { data, error } = await supabase.from('users').select().eq('id', id)
  return data
}
