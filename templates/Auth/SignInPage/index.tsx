"use client";

import { useState } from "react";
import Link from "next/link";
import LayoutLogin from "@/components/LayoutLogin";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Field from "@/components/Field";

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LayoutLogin
            title="Welcome back"
            description={
                <>
                    Don’t have an account?{" "}
                    <Link className="text-blue-500" href="/auth/sign-up">
                        Sign up
                    </Link>{" "}
                    here
                </>
            }
        >
            <div className="">
                <div className="flex flex-col gap-4.5">
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
                    <Button
                        className="w-full !h-12 !rounded-xl"
                        isBlue
                        as="link"
                        href="/"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </LayoutLogin>
    );
};

export default SignInPage;
