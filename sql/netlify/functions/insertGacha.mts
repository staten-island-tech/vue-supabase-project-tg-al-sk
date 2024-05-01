import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    console.log(body)
    const supabase = supabaseClient()
    const res = await supabase.from('gacha').select().eq('id', body.id)
    const data = res.data[0]
    console.log(data)
    await supabase.from('currency').update({ gacha: JSON.stringify(data !== '{}' ?  JSON.parse(data).push(req.body.gacha) : [req.body.gacha])}).eq('id', body.id)
    return {
        body: 'success',
        statusCode: 200
    }
}