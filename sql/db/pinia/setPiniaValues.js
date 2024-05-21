import { useUserStore } from "./stores/userStore"
import getCurrentUser from "../getCurrentUser"
import getGacha from "../gacha/getGacha"
import getCurrency from "../currency/getCurrency"

export async function setPiniaValues(session) {
    const userStore = useUserStore()

    const user = await getCurrentUser()
    const gacha = JSON.parse(await getGacha())
    const currency = await getCurrency()
    
    userStore.setUser(user)
    userStore.setSession(session)
    userStore.setGacha(gacha)
    userStore.setCurrency(currency)
    
    console.log(userStore.$state)
}
