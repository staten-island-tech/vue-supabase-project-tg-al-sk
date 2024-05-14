import supabaseClient from "../supabaseClient"

export default async function insertGacha(gacha) {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id
    const body = JSON.stringify({
        gacha: gacha,
        id,
    })
    fetch('/.netlify/functions/insertGacha', {
        method: 'post',
        body,
    }) 
}