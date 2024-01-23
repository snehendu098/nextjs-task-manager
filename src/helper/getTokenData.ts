import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getTokenData = (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedToken;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
