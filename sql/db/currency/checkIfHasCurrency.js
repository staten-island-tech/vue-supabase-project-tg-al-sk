import supabaseClient from "../supabaseClient";
import getUserById from '../getUserByID'

export default async function checkIfHasCurrency({ golden_seagulls = 0, diamond_seagulls = 0 }) {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id
    const user = await (await getUserById(id))[0]
    console.log(user)
    console.log(user.golden_seagulls, user.diamond_seagulls, golden_seagulls, diamond_seagulls)
    console.log(user.golden_seagulls >= golden_seagulls, user.diamond_seagulls >= diamond_seagulls)
}