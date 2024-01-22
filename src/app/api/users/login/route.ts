import { connect } from "@/helper/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/model/userModel";

connect();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        message: "User doesn't exist",
        success: false,
      });
    }

    const validPass = await bcryptjs.compare(password, user.password);

    if (!validPass) {
      return NextResponse.json({ message: "Invalid Password", success: false });
    }

    const tokenData = { id: user._id, email: user.email };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "2d",
    });

    const res = NextResponse.json({
      message: "Logged In Successfully",
      success: true,
    });

    res.cookies.set("token", token, { httpOnly: true });

    return res;
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: "An Error Occurred" }, { status: 500 });
  }
}
