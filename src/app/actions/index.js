 "use server";

import { signIn } from "@/auth";

export async function doSocialLogin(FormData) {
  const action = FormData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function createLogout() {}
