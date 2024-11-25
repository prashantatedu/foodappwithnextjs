import Link from "next/link";
import logoImg from "@/assets/logo.png";
import headerStyles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={headerStyles.header}>
        <Link href="/" className={headerStyles.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={headerStyles.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
