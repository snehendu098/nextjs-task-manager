import { getTokenData } from "@/helper/getTokenData";
import { NextResponse, NextRequest } from "next/server";
import Task from "@/model/taskModel";
import User from "@/model/userModel";
import { connect } from "@/helper/dbConfig";

connect();
export async function POST(req: NextRequest) {
  try {
    const { id } = await getTokenData(req);
    const user = await User.findOne({ _id: id }).select("-password");

    const { title, description, deadLine, status } = await req.json();

    const task = new Task({
      title,
      description,
      deadLine,
      userId: user._id,
      status,
    });

    const savedTodo = await task.save();

    return NextResponse.json({
      message: "Task Created Succesfully",
      success: true,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
