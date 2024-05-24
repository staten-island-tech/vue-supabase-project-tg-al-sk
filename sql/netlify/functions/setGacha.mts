import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    const supabase = supabaseClient()
    const res = await supabase.from('gacha').select().eq('id', body.id)
    const gacha = res.data[0]
    const e = await supabase.from('gacha').update({ gacha }).eq('id', body.id)

    return {
        body: 'success',
        statusCode: 200
    }
}