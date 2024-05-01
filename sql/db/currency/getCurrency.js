import supabaseClient from "../supabaseClient"

export default async function getCurrency() {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id

    const res = await fetch('/.netlify/functions/getCurrency', {
        method: 'post',
        body: JSON.stringify({ id })
    })
    const data = res.json()
    return data
}