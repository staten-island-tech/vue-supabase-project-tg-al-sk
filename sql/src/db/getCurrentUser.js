import createClientWrapper from './createClientWrapper'

export default async function getCurrentUser() {
  const supabase = createClientWrapper()

  const { data, error } = await supabase.auth.getUser()
  // console.log(data, error)

  console.log(data)
  return data
}
