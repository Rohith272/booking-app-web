import Link from "next/link";
import ThemeModeToggle from "../common/theme-mode-toggle";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="border-t-2 p-4">
      <div className="mx-auto flex max-w-screen-xl justify-around">
        <div className="size-36 rounded-md border"></div>
        <div className="flex flex-col gap-8">
          <div className="flex">
            <Mail className="mr-4" />
            <Link href={""}>loremipsum@example.com</Link>
          </div>
          <div className="flex">
            <Phone className="mr-4" />
            <Link href={""}>9876543210</Link>
          </div>
          <div className="flex">
            <MapPin className="mr-4" />
            <Link href={""}>Lorem, ipsum dolor.</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Link href={""} className="mb-2">
            Lorem, ipsum dolor.
          </Link>
          <Link href={""} className="mb-2">
            Lorem, ipsum dolor.
          </Link>
          <Link href={""} className="mb-2">
            Lorem, ipsum dolor.
          </Link>
          <Link href={""} className="mb-2">
            Lorem, ipsum dolor.
          </Link>
          <Link href={""} className="">
            Lorem, ipsum dolor.
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href={""} className="mb-2">
            Lorem, ipsum dolor.
          </Link>
          <Link href={""} className="mb-2">
            Lorem, ipsum dolor.
          </Link>
          <Link href={""} className="mb-2">
            Lorem, ipsum dolor.
          </Link>
        </div>
      </div>

      <ThemeModeToggle />
    </div>
  );
};

export default Footer;
