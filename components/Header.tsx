"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft as LeftArrow } from "react-icons/rx";
import { RxCaretRight as RightArrow } from "react-icons/rx";
import { HiHome as HomeIcon } from "react-icons/hi";
import { BiSearch as SearchIcon } from "react-icons/bi";
import Button from "@/components/Button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header = ({children, className}: HeaderProps) => {
    const router = useRouter();

    const handleLogout = () => {
        // handle logout
    }

    return (
    <div
        className={twMerge(
            `h-fit bg-gradient-to-b from-emerald-800 p-6`,
            className
        )}
    >
        <div
            className="w-full mb-4 flex items-center justify-between"
        >
            <div 
                className="hidden md:flex gap-x-2 items-center"
            >
                <button
                    className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                    onClick={() => router.back()}
                >
                    <LeftArrow size={35} className="text-white"/>
                </button>

                <button
                    className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                    onClick={() => router.forward()}
                >
                    <RightArrow size={35} className="text-white"/>
                </button>
            </div>

            <div
                className="flex md:hidden gap-x-2 items-center"
            >
                <button
                    className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
                >
                    <HomeIcon size={20} className="text-black"/>
                </button>

                <button
                    className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
                >
                    <SearchIcon size={20} className="text-black"/>
                </button>
            </div>

            <div
                className="flex justify-between items-center gap-x-4"
            >
                <>
                    <div>
                        <Button
                            className="bg-transparent text-neutral-300 font-medium"
                            onClick={() => {}}
                        >
                            Sign up
                        </Button>
                    </div>

                    <div>
                        <Button
                            className="bg-white px-6 py-2"
                            onClick={() => {}}
                        >
                            Log in
                        </Button>
                    </div>
                </>
            </div>
        </div>
        {children}
    </div>
    )
}

export default Header