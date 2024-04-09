import getUserByID from '../../src/db/getUserByID'

export async function handler(req: Request) {
  const { id } = JSON.parse(req.body)
  const user = await getUserByID(id)
  if (user) {
    return {
      body: JSON.stringify(user[0]),
      statusCode: 200
    }
  }
}
