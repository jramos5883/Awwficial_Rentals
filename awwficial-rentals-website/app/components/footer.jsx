import Link from "next/link";
import LargeButton from "./LargeButton";
import BorderlessButton from "./BorderlessButton";
import { playfairDisplay } from "../ui/fonts";

export default function Footer() {
  return (
    <footer className="bg-[#EDE9FD]">
      <div
        className="grid grid-cols-1 tablet:grid-cols-2 max-w-[1600px] mx-auto gap-2"
        style={{
          padding: "32px 20px",
          alignItems: "flex-start",
        }}
      >
        <div className="tablet:order-1">
          <p
            style={{
              color: "#000",
              fontFamily: `${playfairDisplay.style.fontFamily}`,
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Awwficial Rentals
          </p>
          <p
            className="pt-4"
            style={{
              color: "#000",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Providing 360 photobooth experience in LA and the OC!
          </p>
        </div>
        <div className="tablet:order-2">
          <div className="pt-4 flex flex-wrap justify-between w-full">
            <BorderlessButton href={'/'} name={'Home'}/>
            <BorderlessButton href={'/Services'} name={'Services'}/>
            <BorderlessButton href={'/GalleryPage'} name={'Gallery'}/>
            <BorderlessButton href={'/FAQs'} name={'FAQ'}/>
            <BorderlessButton href={'/Contact'} name={'Contact'}/>
          </div>
          <div className="pt-4 tablet:max-w-sm">
            <LargeButton className={'self-stretch my-6 w-full'} name={'Book Now'} href={"/GetAQuote"}/>
          </div>
          <div className="pt-4 flex flex-row gap-8">
            <a href="https://www.instagram.com/awwficialrentals/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20Z"
                  fill="#F00073"
                />
                <path
                  d="M20 11.5C22.75 11.5 23.125 11.5 24.25 11.5C25.25 11.5 25.75 11.75 26.125 11.875C26.625 12.125 27 12.25 27.375 12.625C27.75 13 28 13.375 28.125 13.875C28.25 14.25 28.375 14.75 28.5 15.75C28.5 16.875 28.5 17.125 28.5 20C28.5 22.875 28.5 23.125 28.5 24.25C28.5 25.25 28.25 25.75 28.125 26.125C27.875 26.625 27.75 27 27.375 27.375C27 27.75 26.625 28 26.125 28.125C25.75 28.25 25.25 28.375 24.25 28.5C23.125 28.5 22.875 28.5 20 28.5C17.125 28.5 16.875 28.5 15.75 28.5C14.75 28.5 14.25 28.25 13.875 28.125C13.375 27.875 13 27.75 12.625 27.375C12.25 27 12 26.625 11.875 26.125C11.75 25.75 11.625 25.25 11.5 24.25C11.5 23.125 11.5 22.875 11.5 20C11.5 17.125 11.5 16.875 11.5 15.75C11.5 14.75 11.75 14.25 11.875 13.875C12.125 13.375 12.25 13 12.625 12.625C13 12.25 13.375 12 13.875 11.875C14.25 11.75 14.75 11.625 15.75 11.5C16.875 11.5 17.25 11.5 20 11.5ZM20 9.625C17.125 9.625 16.875 9.625 15.75 9.625C14.625 9.625 13.875 9.875 13.25 10.125C12.625 10.375 12 10.75 11.375 11.375C10.75 12 10.5 12.5 10.125 13.25C9.875 13.875 9.75 14.625 9.625 15.75C9.625 16.875 9.625 17.25 9.625 20C9.625 22.875 9.625 23.125 9.625 24.25C9.625 25.375 9.875 26.125 10.125 26.75C10.375 27.375 10.75 28 11.375 28.625C12 29.25 12.5 29.5 13.25 29.875C13.875 30.125 14.625 30.25 15.75 30.375C16.875 30.375 17.25 30.375 20 30.375C22.75 30.375 23.125 30.375 24.25 30.375C25.375 30.375 26.125 30.125 26.75 29.875C27.375 29.625 28 29.25 28.625 28.625C29.25 28 29.5 27.5 29.875 26.75C30.125 26.125 30.25 25.375 30.375 24.25C30.375 23.125 30.375 22.75 30.375 20C30.375 17.25 30.375 16.875 30.375 15.75C30.375 14.625 30.125 13.875 29.875 13.25C29.625 12.625 29.25 12 28.625 11.375C28 10.75 27.5 10.5 26.75 10.125C26.125 9.875 25.375 9.75 24.25 9.625C23.125 9.625 22.875 9.625 20 9.625Z"
                  fill="white"
                />
                <path
                  d="M20 14.625C17 14.625 14.625 17 14.625 20C14.625 23 17 25.375 20 25.375C23 25.375 25.375 23 25.375 20C25.375 17 23 14.625 20 14.625ZM20 23.5C18.125 23.5 16.5 22 16.5 20C16.5 18.125 18 16.5 20 16.5C21.875 16.5 23.5 18 23.5 20C23.5 21.875 21.875 23.5 20 23.5Z"
                  fill="white"
                />
                <path
                  d="M25.5 15.75C26.1904 15.75 26.75 15.1904 26.75 14.5C26.75 13.8096 26.1904 13.25 25.5 13.25C24.8096 13.25 24.25 13.8096 24.25 14.5C24.25 15.1904 24.8096 15.75 25.5 15.75Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
