export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/Dashboard",
    "/Products",
    "/Orders",
    "/Payments",
    "/Settings",
    "/Reviews",
    "/Customers",
    "/Analytics"
  ],
};
