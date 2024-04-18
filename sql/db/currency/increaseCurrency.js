import supabaseClient from "../supabaseClient"
import getUserByID from "../getUserByID"

export default async function increaseCurrency(golden_seagulls, diamond_seagulls, id) {
    const supabase = supabaseClient()
    const res = await supabase.from('currency').select().eq('id', id)
    const data = res.data[0]
    await supabase.from('currency').update({ golden_seagulls: golden_seagulls + data.golden_seagulls, diamond_seagulls: diamond_seagulls + data.diamond_seagulls }).eq('id', id)
}
