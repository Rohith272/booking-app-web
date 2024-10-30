import Link from "next/link";
import ThemeModeToggle from "../common/theme-mode-toggle";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="p-8 mt-10">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 justify-around gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="grid justify-center">
          <div className="size-36 rounded-md border"></div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex">
            <Mail className="mr-4 flex-shrink-0" />
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
      <div className="my-8">
        <ThemeModeToggle />
      </div>
    </div>
  );
};

export default Footer;
