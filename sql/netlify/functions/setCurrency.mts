import setCurrency from "../../db/currency/setCurrency";

export async function handler(req: Request) {
    const body = await JSON.parse(req.body)
    setCurrency(body.golden_seagulls, body.diamond_seagulls)
    return {
        body: 'success',
        statusCode: 200
    }
}