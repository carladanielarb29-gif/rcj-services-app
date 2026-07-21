import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// 👇 Solo aplica Clerk en la ruta /clients
export const config = {
  matcher: ["/clients(.*)"],
};
