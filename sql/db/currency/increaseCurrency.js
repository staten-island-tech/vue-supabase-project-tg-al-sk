import supabaseClient from "../supabaseClient"

export default async function increaseCurrency({ golden_seagulls, diamond_seagulls }) {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id
    console.log({golden_seagulls, diamond_seagulls, id})
    fetch('/.netlify/functions/increaseCurrency', {
        method: 'post',
        body: JSON.stringify({
            golden_seagulls,
            diamond_seagulls,
            id,
        })
    }) 
}
