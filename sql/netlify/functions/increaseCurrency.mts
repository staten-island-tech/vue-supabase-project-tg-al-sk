import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    console.log(body)
    const supabase = supabaseClient()
    const res = await supabase.from('currency').select().eq('id', body.id)
    const data = res.data[0]
    console.log(data)
    await supabase.from('currency').update({ golden_seagulls: body.golden_seagulls + data.golden_seagulls, diamond_seagulls: body.diamond_seagulls + data.diamond_seagulls }).eq('id', body.id)
    return {
        body: 'success',
        statusCode: 200
    }
}