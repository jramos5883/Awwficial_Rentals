import Link from "next/link";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="text-center">
      <section className="bg-yellow-50 py-10">
        <h3 className="text-2xl leading-9 tablet:text-5xl ">
          {" "}
          Ready to Make Your Event <span className="block">Awwficial?</span>
        </h3>
        <a href="/BookNow">
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-5">
            {" "}
            Book Today !
          </Button>
        </a>
      </section>
      <section className="bg-purple-700 py-5">
        <nav className="max-w-xs px-6 pt-6 pb-3 mx-auto">
          <ul className="list-none px-5 flex justify-around items-center">
            <li>
              <Link
                href="/FAQs"
                className="no-underline px-1 text-white  hover:text-pink-500"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="no-underline px-1 text-white  hover:text-pink-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-5/12 max-w-xs mx-auto">
          <ul className="list-none mt-0 px-7 flex justify-around items-center">
            <li>
              <a href="https://www.instagram.com/awwficialrentals/" className="text-white hover:text-pink-500"  ><InstagramIcon className="p-1 text-3xl text-white hover:text-pink-500" /></a>
            </li>
          </ul>
        </div>
        <p className="leading-normal  text-white">
          © Copyright 2023 Awwficial Rentals.
          <span className="block">All rights reserved.</span>
        </p>
      </section>
    </footer>
  );
}
