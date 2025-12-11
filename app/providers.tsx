"use client";

import { ThemeProvider } from "next-themes";


{/*It makes theme switching (light / dark Mode) */}
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider defaultTheme="light" disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
};

export default Providers;
