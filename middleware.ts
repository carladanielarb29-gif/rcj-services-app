import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/client(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// El middleware debe correr en todas las rutas para que Clerk pueda
// sincronizar el estado de sesión (SignedIn/SignedOut) en toda la app;
// la protección real queda limitada a /client vía isProtectedRoute.
export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:html?|css|js|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
