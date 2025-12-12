import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import BlogModel, { type Blog } from "../../../../database/blogSchema";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    await connectDB();

    const blogDoc = await BlogModel.findOne({ slug }).lean<Blog | null>();

    if (!blogDoc) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blogDoc, { status: 200 });
  } catch (err) {
    console.error("Error in blog API route:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}