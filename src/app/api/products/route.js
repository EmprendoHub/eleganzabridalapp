import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import APIFilters from "@/utils/APIFilters";

export const GET = async(req, res) => {
    await dbConnect()

    // result to dsiplay per page
    //const resPerPage = 12
    // total number of documents in database
    
    const productsCount = await Product.countDocuments()
    
    try {
        
        // Apply search Filters
        const apiFilters = new APIFilters(Product.find(), req.nextUrl.searchParams).searchAllFields().filter()

        const products = await apiFilters.query
        const filteredProductsCount = products.length

        const response = NextResponse.json({
            message: "Products fetched succesfully",
            success: true,
            productsCount, 
            filteredProductsCount,
            products,
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