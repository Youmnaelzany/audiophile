import Image from "next/image";
import Link from "next/link";

import { ShoppingCart } from "lucide-react";

import Container from "./Container";
import Navigation from "./Navigation";

interface HeaderProps {
  bgColor?: "black" | "#101010"; // Add a prop to choose between two colors
}

const Header: React.FC<HeaderProps> = ({ bgColor = "black" }) => {
  return (
    <header
      className={`py-5 ${bgColor === "black" ? "bg-black" : "bg-[#101010]"}`}
    >
      <Container className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/assets/shared/desktop/logo.svg"}
            alt="Logo"
            width={143}
            height={25}
          />
        </Link>
        <Navigation />
        <ShoppingCart
          className={bgColor === "black" ? "text-white" : "text-black"}
        />
      </Container>
    </header>
  );
};

export default Header;
