"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  const handleClick = () => {
    router.push("/about");
  };
  return (
    <div>
      <nav>
        <ul className="flex justify-center space-x-4 bg-red-600 p-4 text-lg">
          {links?.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={`${pathName === link.path && "text-green-600"}`}
            >
              {link.title}
            </Link>
          ))}

          <button onClick={handleClick} className="font-bold">
            button
          </button>
        </ul>
      </nav>
    </div>
  );
}
