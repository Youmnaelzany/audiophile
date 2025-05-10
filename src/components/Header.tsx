import Image from "next/image";
import Link from "next/link";

import { CarFront } from "lucide-react";

import Container from "./Container";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="py-5">
      <Container className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/assets/shared/desktop/logo"}
            alt="Logo"
            width={143}
            height={25}
          />
        </Link>
        <Navigation />
        <CarFront />
      </Container>
    </header>
  );
};
export default Header;
