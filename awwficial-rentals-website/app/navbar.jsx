"use client";
import * as React from "react";
import Link from "next/link";
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const navBarLabels = [
    { label: "Home", route: "/" },
    { label: "Services", route: "/Services" },
    { label: "Gallery", route: "/GalleryPage" },
    { label: "Contact", route: "/Contact" },
    { label: "FAQ", route: "/FAQ" },
    { label: "GetAQuote", route: "/GetAQuote" },
  ];
  return (
    // I plan to make the navbar transparent later,
    // but I do like seeing the colors change with the breakpoints.
    // Helps me with responsive design.
    <div className="h-20 flex flex-row items-center justify-between bg-pink-300 cellsm:bg-blue-300 celllg:bg-blue-600 tablet:bg-yellow-300 lapsm:bg-green-300 laplg:bg-green-600 desksm:bg-red-600 desklg:bg-red-900">
      <div>Logo</div>
      {isLargeScreen ? (
        <div className="space-x-2">
          <Link href="/">Home</Link>
          <Link href="/Services">Services</Link>
          <Link href="/GalleryPage">Gallery</Link>
          <Link href="/Contact">Contact Us</Link>
          <Link href="/FAQs">FAQ</Link>
          <Link href="/GetAQuote">Get A Quote</Link>
        </div>
      ) : (
        <ResponsiveDrawer navBarLabels={navBarLabels} />
      )}
    </div>
  );
}
