import { getTokenData } from "@/helper/getTokenData";
import { NextResponse, NextRequest } from "next/server";
import Task from "@/model/taskModel";
import User from "@/model/userModel";
import { connect } from "@/helper/dbConfig";

connect();
export async function POST(req: NextRequest) {
  try {
    const { id } = await getTokenData(req);

    const { title, description, deadLine, status } = await req.json();

    const task = new Task({
      title,
      description,
      deadLine,
      userId: id,
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

export async function GET(req: NextRequest) {
  try {
    const { id } = await getTokenData(req);

    const tasks = await Task.find({ userId: id });
    return NextResponse.json({ tasks, success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { id, fields } = reqBody;

    const data = await Task.findByIdAndUpdate(
      id,
      fields,
      (err: any, docs: any) => {
        if (err) {
          return NextResponse.json({ message: "Error", success: false, err });
        } else {
          return NextResponse.json({ message: "Deleted", success: true, docs });
        }
      },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const data = await Task.findByIdAndDelete(
      id,
      function (err: any, docs: any) {
        if (err) {
          return NextResponse.json({ message: "Error", success: false, err });
        } else {
          return NextResponse.json({ message: "Deleted", docs, success: true });
        }
      },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
