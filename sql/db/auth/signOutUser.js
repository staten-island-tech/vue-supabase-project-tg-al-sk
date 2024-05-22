import supabaseClient from '../supabaseClient'
import { useUserStore } from '../pinia/stores/userStore'

export default async function signInUser(email, password) {
  const supabase = supabaseClient()

  const { data, error } = await supabase.auth.signOut()

  const userStore = useUserStore()
  userStore.clearUser()
}
