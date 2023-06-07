import React from "react";
import { AiOutlineGoogle as GoogleIcon } from "react-icons/ai";

import { signInWithGoogle } from "@/utils/auth";

export const SignInButton: React.FC = () => {
  return (
    <button
      className="bg-indigo9 font-medium shadow-lg text-xl flex items-center gap-3 py-2 px-5 rounded-lg hover:bg-indigo10 transition-colors"
      onClick={() => signInWithGoogle()}
    >
      <GoogleIcon className="h-8 w-8" /> <span>Entrar com o Google</span>
    </button>
  );
};
