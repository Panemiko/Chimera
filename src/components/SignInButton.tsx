import React from "react";

import { signInWithGoogle } from "@/utils/auth";

export const SignInButton: React.FC = () => {
  return (
    <button onClick={() => signInWithGoogle()}>Entrar com o Google</button>
  );
};
