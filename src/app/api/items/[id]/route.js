export async function POST(request,{params}) {
    const {id} = await params;
    console.log(id)
    return Response.json({id})
}

export async function GET(req,{params}) {
    const {id} = await params;
    const messagee = await req.body;
    return Response.json({id,messagee})
}