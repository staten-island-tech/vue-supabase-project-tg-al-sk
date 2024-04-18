import increaseCurrency from "../../db/currency/increaseCurrency"

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    console.log(body)
    increaseCurrency(body.golden_seagulls, body.diamond_seagulls, body.id)
    return {
        body: 'success',
        statusCode: 200
    }
}