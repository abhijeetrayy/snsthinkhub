import { authOptions } from "../../../lib/validation/auth";
import NextAuth from "next-auth/next";

export default NextAuth(authOptions)