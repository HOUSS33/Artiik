"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Field from "@/components/Field";
import { signInWithCredentials } from "@/lib/actions/auth"; // your server action
import Image from "@/components/Image";


const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const result = await signInWithCredentials({ email, password });
      if (result.success) {
        // Redirect to dashboard or home after successful login
        router.push("/");
      } else {
        setErrorMessage(result.error || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

{/*Right Side With Form */}
  return (
<div className="flex flex-col w-1/2 pl-12 max-lg:w-full max-lg:pl-0">
    <div className="w-full max-w-89 mx-auto my-6">



      <div className="mb-7 text-center max-md:mb-4">
        {/*Logo */}
          <Link className="inline-flex mb-6 max-md:mb-4" href="/">
            <Image className="w-18 opacity-100 max-md:w-14" src="/images/logo-artiik.svg" width={100} height={100} alt="" />
          </Link>

          {/*Title and Description */}
          <div className="text-h3 max-md:text-[1.6rem]">
              Welcome back
          </div>
          <div className="mt-1.5 text-h6 max-md:text-label-md">
             <>
              Don’t have an account?{" "}
              <Link className="text-blue-500" href="/sign-up">
                 Sign up
              </Link>{" "}
                  here
            </>
          </div>
      </div>


      {/*Sign In Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
        <Field
          placeholder="Enter email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Field
          placeholder="Enter password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <Button
          type="submit"
          className="w-full !h-12 !rounded-xl"
          isBlue
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

  </div>
</div>

  );
};

export default SignInPage;
