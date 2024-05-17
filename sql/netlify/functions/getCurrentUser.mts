import getUserByID from '../../db/getUserByID'

export async function handler(req: Request) {
  const { id } = JSON.parse(req.body)
  const user = await getUserByID(id)
  console.log(user)
  if (user) {
    return {
      body: JSON.stringify(user[0]),
      statusCode: 200
    }
  }
}
