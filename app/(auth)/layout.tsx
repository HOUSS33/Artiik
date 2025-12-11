import Image from "@/components/Image";
import Slider from "@/components/Auth/Slider";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

type Props = {
    children: React.ReactNode;
};


export default async function LayoutLogin({ children }: Props) {

    const session = await auth();
        if (session) {
            // If user is already authenticated, redirect to home or dashboard
            redirect("/");
        }

        
return (
    <div className="p-5">

        {/*Left Side With Big Image and Slider */}
        <div className="flex min-h-[calc(100svh-2.5rem)]">
            <div className="relative w-1/2 text-static-white overflow-hidden max-lg:hidden">
                <Image
                    className="object-cover rounded-3xl"
                    src="/images/auth-pic.jpg"
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    alt=""
                />
                <div className="absolute top-19 left-10 right-10 max-2xl:top-8 max-2xl:left-8 max-2xl:right-8">
                    <div className="mb-4 text-h1 max-2xl:text-h3">
                        Smart Data, Smarter Decisions, AI-Powered
                    </div>
                    <div className="text-p-lg max-2xl:text-p-md">
                        Turn raw numbers into insights in seconds!
                    </div>
                </div>
                <Slider />
            </div>

            {/*Right Side With Form */}
            {children}
            
        </div>
    </div>
);
};
