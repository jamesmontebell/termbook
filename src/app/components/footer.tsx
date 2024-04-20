import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import React from "react"

export const Footer = () => {
  const links = [
    {
      href: "https://github.com/jamesmontebell/termbook",
      icon: <GitHubIcon className="h-8 w-8" />,
    },
  ];
  return (
    <div className="text-center w-full">
      <div className="flex items-center justify-center space-x-4">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="hover:opacity-45 transition duration-300"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
