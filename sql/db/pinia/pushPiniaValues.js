import { useUserStore } from "./stores/userStore";
import setCurrency from "../currency/setCurrency";
import setGacha from '../gacha/setGacha'

export async function pushPiniaValues() {
    const userStore = useUserStore()
    
    const user = userStore.getUser
    setCurrency(user.currency)
    console.log(user.gacha)
    setGacha(user.gacha)
}