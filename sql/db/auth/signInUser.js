import supabaseClient from '../supabaseClient'
import { useUserStore } from '../../src/stores/userStore'
import getCurrentUser from '../getCurrentUser'
import getGacha from '../gacha/getGacha'
import getCurrency from '../currency/getCurrency'

export default async function signInUser(email, password) {
  const supabase = supabaseClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  const userStore = useUserStore()

  const user = await getCurrentUser()
  const gacha = getGacha()
  const currency = getCurrency()
  const session = data.session

  userStore.setUser(user)
  userStore.setSession(session)

  console.log(userStore.$state)

  if (!error) {
    supabase.auth.setSession({
      access_token: data.session.access_token
    })
    return true
  } else {
    return false
  }
}
