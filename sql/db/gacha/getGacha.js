import supabaseClient from "../supabaseClient"
import getCurrentUser from "../getCurrentUser"


export default async function getGacha() {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id

    const res = await fetch('/.netlify/functions/getGacha', {
        method: 'post',
        body: JSON.stringify({ id })
    })
    const data = await res.json()
    console.log(data)
    return data
}