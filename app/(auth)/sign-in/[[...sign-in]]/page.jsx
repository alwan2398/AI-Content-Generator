import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <SignIn afterSignInUrl="/dashboard" />
    </div>
  );
};

export default SignInPage;
