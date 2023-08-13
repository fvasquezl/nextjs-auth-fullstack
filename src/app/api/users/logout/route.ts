import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = NextResponse.json({
<<<<<<< HEAD
      message: "Logout successful",
=======
      message: "Logout successfull",
>>>>>>> refs/remotes/origin/main
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
