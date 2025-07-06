export async function POST(request,{params}) {
    const {id} = await params;
    console.log(id)
    return Response.json({id})
}