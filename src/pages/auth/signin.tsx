import { SignInButton } from "@/components/SignInButton";
import { AuthLayout } from "@/layouts/Auth";

export default function SignInPage() {
  return (
    <AuthLayout title="Entrar">
      <SignInButton />
    </AuthLayout>
  );
}
