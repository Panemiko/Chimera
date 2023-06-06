import { signInWithGoogle } from "@/utils/auth";
import React from "react";

export const SignInButton: React.FC = () => {
  return (
    <button onClick={() => signInWithGoogle()}>Entrar com o Google</button>
  );
};
