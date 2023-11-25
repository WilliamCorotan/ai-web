import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import NavbarLogo from "@/components/NavbarLogo";

export default function Nav(){
    return ( <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <NavbarLogo/>
        <span className="font-bold text-4xl text-inherit"><span className="text-secondary">MED</span><span className="text-primary">etect</span></span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="secondary" className="px-4" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" className="px-4">
            How to Use
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="px-4">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="px-4">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" radius="full" href="#" variant="solid">
            FDA Guidelines
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>);
}