import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../database/db";
import BlogModel, { type IComment } from "../../../../../database/blogSchema";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function POST(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { slug } = await params;

    await connectDB();

    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment) {
      return NextResponse.json(
        { message: "Missing user or comment" },
        { status: 400 }
      );
    }

    const newComment: IComment = {
      user,
      comment,
      time: new Date(),
    };

    const updatedBlog = await BlogModel.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    ).lean();

    if (!updatedBlog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (err) {
    console.error("Error in comment POST:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
