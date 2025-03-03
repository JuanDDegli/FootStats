import React from "react";
import Link from "next/link";
import Image from "next/image";

type LinkProps = {
    href: string;
    name: string;
    src: string;
};

const LinkSide = ({href,name, src}:LinkProps) => {
    return (
        <div>
            <Link href={href} className=" flex items-center py-2 px-2 rounded-md transition">
                <Image src={src} alt={name} width={20} height={20} />
                <p className="ml-4 text-xs md:text-sm"> {name} </p>
            </Link>
        </div>
    )
};
export default LinkSide;