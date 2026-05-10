import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000" // আপনার .env এর BETTER_AUTH_URL এর সাথে মিল থাকতে হবে
})

export const { signIn, signUp, useSession } = authClient;