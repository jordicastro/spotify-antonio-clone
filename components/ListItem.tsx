"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay as PlayIcon } from "react-icons/fa";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem = ({image, name, href}: ListItemProps) => {
    const router = useRouter();

    const onClick = () => {
        // add authentication before push
        router.push(href);
    }

    return (
        <button
            onClick={onClick}
            className="relative group/item flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neurtral-100/20 transition pr-4"
        >
            <div
                className="relative min-h-[64px] min-w-[64px]"
            >
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <p className="font-medium truncate py-5">
                {name}
            </p>

            <div
                className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-3 drop-shadow-md right-5 group-hover/item:opacity-100 hover:scale-110"
            >
                <PlayIcon className="text-black w-3 h-3" />
            </div>

        </button>
    )
}

export default ListItem