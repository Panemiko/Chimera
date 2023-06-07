import { SignInButton } from "@/components/SignInButton";
import { useAuth } from "@/hooks/useAuth";
import { AuthLayout } from "@/layouts/Auth";

export default function SignInPage() {
  const auth = useAuth();

  return (
    <AuthLayout title="Entrar">
      {auth.get()?.email}
      <SignInButton />
    </AuthLayout>
  );
}
