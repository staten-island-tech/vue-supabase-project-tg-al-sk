import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    const supabase = supabaseClient()
    const res = await supabase.from('gacha').select().eq('id', body.id)
    const data = res.data[0]
    const currentGacha = JSON.parse(data.gacha)

    return {
        body: JSON.stringify(currentGacha),
        statusCode: 200
    }
}