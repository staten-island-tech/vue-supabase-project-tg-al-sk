import supabaseClient from "./supabaseClient";

export default async function createUserCurrencyTable(id) {
    const supabase = supabaseClient()
    const {data, error} = await supabase.from('gacha').insert({ gacha: JSON.stringify({}), id})
    console.log(data)
}