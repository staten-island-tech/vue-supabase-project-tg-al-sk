export async function handler(req: Request) {
  const { uid } = JSON.parse(req.body);
  console.log(uid)
  return {
    body: "successful",
    statusCode: 200
  }
}

// export async function handler(event) {
// 	body = JSON.parse(event.body);
// 	insert(body.title, body.description, body.price, body.image).catch((e) => {
// 		throw new Error('Insert into DB error');
// 	});

// 	console.log('Successful Insert');
// 	return {
// 		statusCode: 200,
// 		body: 'Successful',
// 	};
// }