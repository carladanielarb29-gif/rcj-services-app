import "server-only";
import { currentUser } from "@clerk/nextjs/server";

export async function getCurrentClientEmail(): Promise<string | null> {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  const primary = user.emailAddresses.find(
    (address) => address.id === user.primaryEmailAddressId
  );

  return primary?.emailAddress ?? user.emailAddresses[0]?.emailAddress ?? null;
}
