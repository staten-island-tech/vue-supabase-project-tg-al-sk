import supabaseClient from "../supabaseClient"
import getCurrentUser from "../getCurrentUser"

export default async function getGacha() {
    const supabase = supabaseClient()
    const user = await getCurrentUser()
    const body = JSON.stringify({
        id: user.id,
    })
    const res = await fetch('/.netlify/functions/getGacha', {
        method: 'post',
        body,
    }) 
    return JSON.parse(res.body)
}