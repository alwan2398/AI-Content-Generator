import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <SignUp afterSignUpUrl="/dashboard" />
    </div>
  );
};

export default SignUpPage;
