import { connect } from "@/helper/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/model/userModel";
import bcryptjs from "bcryptjs";

connect();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        message: "User already exists",
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPass,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User Created Sucecssfully, Please Login",
      success: true,
      savedUser,
    });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
