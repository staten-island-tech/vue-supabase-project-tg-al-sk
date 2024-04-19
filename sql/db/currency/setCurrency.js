import supabaseClient from "../supabaseClient"

export default async function setCurrency({ golden_seagulls, diamond_seagulls }) {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id
    console.log({golden_seagulls, diamond_seagulls, id})
    fetch('/.netlify/functions/setCurrency', {
        method: 'post',
        body: JSON.stringify({
            golden_seagulls,
            diamond_seagulls,
            id,
        })
    }) 
}
