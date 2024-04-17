import supabaseClient from "./supabaseClient";

export default async function createUserCurrencyTable(id) {
    const supabase = supabaseClient()
    const {data, error} = await supabase.from('currency').insert({ golden_seagulls: 0, diamond_seagulls: 0, id})
    console.log(error)
}