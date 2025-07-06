import { connectDb } from "@/lib/connectDb"; // Adjust the path as needed

export async function GET(request) {
  const collection = await connectDb("services"); // await here is crucial
  const data = await collection.find({}).toArray();
  console.log(data)

  return Response.json({ data });
}

export async function POST(req) {
    const reqData = await req.json()
    const collection = await connectDb("test_api"); // await here is crucial
  const data = await collection.insertOne({reqData})
  console.log(data)

  return Response.json({data})
}
