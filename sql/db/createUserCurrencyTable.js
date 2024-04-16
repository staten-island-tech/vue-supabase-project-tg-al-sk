import supabaseClient from "./supabaseClient";

export default async function createUserCurrencyTable(id) {
    const supabase = supabaseClient()
    const {data, error} = await supabase.from('currencies').insert({ golden_seagulls: 0, diamond_seagulls: 0, id})
}