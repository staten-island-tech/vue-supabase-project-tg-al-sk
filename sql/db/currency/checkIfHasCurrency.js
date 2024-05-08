import supabaseClient from "../supabaseClient";
import getUserById from '../getUserByID'
import getCurrency from "./getCurrency";

export default async function checkIfHasCurrency({ golden_seagulls = 0, diamond_seagulls = 0 }) {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id
    const userCurrency = await getCurrency()
    return userCurrency.golden_seagulls >= golden_seagulls && userCurrency.diamond_seagulls >= diamond_seagulls
}