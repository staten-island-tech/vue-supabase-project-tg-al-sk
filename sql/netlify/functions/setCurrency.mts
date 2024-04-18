import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    console.log(body)
    const supabase = supabaseClient()
    await supabase.from('currency').update({ golden_seagulls: body.golden_seagulls, diamond_seagulls: body.diamond_seagulls }).eq('id', body.id)   
    return {
        body: 'success',
        statusCode: 200
    }
}