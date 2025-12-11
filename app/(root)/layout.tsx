import { auth } from "@/auth";
import { redirect } from "next/dist/client/components/navigation";


type Props = {
    children: React.ReactNode;
};

const  Layout = async ({ children }: Props) => {
    const session = await auth();
            if (!session) {
                // If user is already authenticated, redirect to home or dashboard
                redirect("/sign-in");
            }

    
    return (
        <>{children}</>
    );
};

export default Layout;


