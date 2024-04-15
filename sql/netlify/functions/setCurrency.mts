import setCurrency from "../../db/currency/setCurrency";

export async function handler(req: Request) {
    setCurrency(req.body)
}