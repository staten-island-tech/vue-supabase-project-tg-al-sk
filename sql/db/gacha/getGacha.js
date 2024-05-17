import supabaseClient from "../supabaseClient"

export default async function getGacha(gacha) {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id
    const body = JSON.stringify({
        gacha: gacha,
        id,
    })
    const res = await fetch('/.netlify/functions/getGacha', {
        method: 'post',
        body,
    }) 
    return JSON.parse(res.body)
}