import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  listingId: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
