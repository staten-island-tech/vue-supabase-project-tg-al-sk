import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    const supabase = supabaseClient()
    const res = await supabase.from('gacha').select().eq('id', body.id)

    return {
        body: JSON.stringify(res.data[0].gacha),
        statusCode: 200
    }
}