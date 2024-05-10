import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    const supabase = supabaseClient()
    const res = await supabase.from('gacha').select().eq('id', body.id)
    const data = res.data[0]
    const currentGacha = JSON.parse(data.gacha)
    if(currentGacha.length === 0) {
        const newGacha = JSON.stringify([body.gacha])
        const e = await supabase.from('gacha').update({ gacha: newGacha }).eq('id', body.id)
    } else {
        console.log(currentGacha)
        const newGacha = JSON.stringify([...currentGacha, body.gacha])
        const e = await supabase.from('gacha').update({ gacha: newGacha }).eq('id', body.id)
    }

    return {
        body: 'success',
        statusCode: 200
    }
}