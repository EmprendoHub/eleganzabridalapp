import { NextResponse } from 'next/server';

import dbConnect from '@/lib/db';
import Product from '@/models/Product';

export const GET = async (req) => {
  await dbConnect();

  const _id = await req.url.split('?')[1];

  try {
    const product = await Product.findOne({ _id });
    // Extract 4 related products in category

    const fourRelated = await Product.aggregate([
      { $match: { category: product?.category } },
      { $sample: { size: 4 } },
    ]);
    const response = NextResponse.json({
      message: 'One Product plus related fetched successfully',
      success: true,
      fourRelated,
      product,
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
