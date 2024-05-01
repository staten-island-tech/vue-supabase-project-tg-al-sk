import supabaseClient from "../../db/supabaseClient"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    console.log(body)
    const supabase = supabaseClient()
    const res = await supabase.from('currency').select().eq('id', body.id)
    const data = await res.data[0]
    console.log(data)
    return {
        body: JSON.stringify(data),
        statusCode: 200
    }
}