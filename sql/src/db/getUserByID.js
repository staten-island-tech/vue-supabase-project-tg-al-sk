import createClientWrapper from './createClientWrapper'

export default async function getUserByID(id) {
  const supabase = createClientWrapper()

  const { data, error } = await supabase.from('users').select().eq('id', id)
  return data
}
