import { connect } from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connect();
  return new NextResponse("It works", { status: 200 });
};
