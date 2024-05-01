import supabaseClient from "../supabaseClient"

export default async function insertGacha(gacha) {
    const supabase = supabaseClient()
    const id = await (await supabase.auth.getUser()).data.user.id
    console.log(gacha, id)
    fetch('/.netlify/functions/insertGacha', {
        method: 'post',
        body: JSON.stringify({
            gacha,
            id,
        })
    }) 
}
