import { NextResponse } from "next/server";

import dbConnect from "@/lib/db";
import Product from "@/models/Product";

export const GET = async(req) => {
    
    await dbConnect()
    
    const _id =await req.url.split('?')[1];

    try {
        const product = ( await Product.findOne({_id}) )
        const response = NextResponse.json({
            message: "One Product fetched succesfully",
            success: true,
            product,
        });
        return response
        
    } catch (error) {
        return NextResponse.json(
            {
                error: 'Products loading error',
            },
            { status: 500 }
        );
    }
};