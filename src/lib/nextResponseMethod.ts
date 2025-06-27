import { NextResponse } from "next/server";

export const nextRespoonseMethod = (res: any, status: number = 201) =>
  NextResponse.json(typeof res === "string" ? { message: res } : res, {
    status,
  });

export const nextCatchMethod = (err: any) =>
  NextResponse.json(
    { message: "Server error, plz try again.", error: err },
    { status: 404 }
  );
