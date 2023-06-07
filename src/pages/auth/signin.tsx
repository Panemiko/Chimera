import { useRouter } from "next/router";
import { AiOutlineGoogle as GoogleIcon } from "react-icons/ai";

import { AuthLayout } from "@/layouts/Auth";
import { signInWithGoogle } from "@/utils/auth";

export default function SignInPage() {
  const { push } = useRouter();

  async function handleLogin() {
    signInWithGoogle().then(() => {
      push("/");
    });
  }

  return (
    <AuthLayout title="Entrar">
      <button
        className="bg-indigo9 font-medium shadow-lg text-xl flex items-center gap-3 py-2 px-5 rounded-lg hover:bg-indigo10 transition-colors"
        onClick={handleLogin}
      >
        <GoogleIcon className="h-8 w-8" />
        <span>Entrar com o Google</span>
      </button>
    </AuthLayout>
  );
}
