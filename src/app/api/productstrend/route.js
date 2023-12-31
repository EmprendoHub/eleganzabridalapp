import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import APIFilters from '@/utils/APIFilters';

export const GET = async (req, res) => {
  await dbConnect();

  // result to display per page
  //const resPerPage = 12
  // total number of documents in database

  const productsCount = await Product.countDocuments();

  try {
    // Extract 4 related products in category

    const products = await Product.aggregate([
      {
        $match: {
          $or: [
            { category: 'wedding' },
            { category: 'quinces' },
            { category: 'tuxedo' },
            { category: 'evening' },
          ],
        },
      },
      { $sample: { size: 200 } },
    ]);
    const filteredProductsCount = products.length;

    const response = NextResponse.json({
      products,
      message: 'Products fetched successfully',
      success: true,
      productsCount,
      filteredProductsCount,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Products loading error',
      },
      { status: 500 }
    );
  }
};
