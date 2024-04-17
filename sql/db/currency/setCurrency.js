import supabaseClient from "../supabaseClient"
import getUserByID from "../getUserByID"

export default async function setCurrency(golden_seagulls, diamond_seagulls, id) {
    const supabase = supabaseClient()
    await supabase.from('currency').update({ golden_seagulls, diamond_seagulls }).eq('id', id)
}