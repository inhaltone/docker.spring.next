import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {SidebarTrigger, SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Toaster} from "@/components/ui/toaster";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Docker · Spring Boot · Next.js",
    description: "Full-stack starter: Spring Boot API, Next.js UI, generated OpenAPI client, Docker Compose.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <SidebarProvider>
            <AppSidebar/>
            <main className="w-full">
                <SidebarTrigger className="m-2"/>
                {children}
                <Toaster/>
            </main>
        </SidebarProvider>
        </body>
        </html>
    );
}
