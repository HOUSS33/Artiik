import Link from "next/link";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Slider from "./Slider";

type Props = {
    children: React.ReactNode;
    title: string;
    description: React.ReactNode;
};

const LayoutLogin = ({ title, description, children }: Props) => (
    <div className="p-5">
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
            <div className="flex flex-col w-1/2 pl-12 max-lg:w-full max-lg:pl-0">
                
                <div className="w-full max-w-89 mx-auto my-6">
                    <div className="mb-7 text-center max-md:mb-4">
                        <Link className="inline-flex mb-6 max-md:mb-4" href="/">
                            <Image
                                className="w-18 opacity-100 max-md:w-14"
                                src="/images/logo-auth.svg"
                                width={68}
                                height={68}
                                alt=""
                            />
                        </Link>
                        <div className="text-h3 max-md:text-[1.6rem]">
                            {title}
                        </div>
                        <div className="mt-1.5 text-h6 max-md:text-label-md">
                            {description}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default LayoutLogin;
