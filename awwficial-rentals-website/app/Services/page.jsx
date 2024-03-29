import Link from "next/link";
import { playfairDisplay } from "../ui/fonts";
export default function Services() {
  return (
    <div className="flex flex-col items-center pb-52 desklg:pb-60 pl-8 pr-8">
      <h1
        className="pt-8 pb-8"
        style={{
          color: "#000",
          fontFamily: `${playfairDisplay.style.fontFamily}, serif`,
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        Rental Inclusions
      </h1>

      <div
        className="flex flex-col items-start"
        style={{
          maxWidth: "640px",
          width: "100%",
          padding: "20px",
          //was originally gap: "20px"
          gap: "10px",
          borderRadius: "10px",
          border: "1px solid #740E94",
          background: "var(--icon-color, #FFF)",
        }}
      >
        <div
          className=""
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            alignSelf: "stretch",
            borderRadius: "10px 10px 0 0",
            background: "#EDE9FD",
          }}
        >
          <h3
            className={`text-2xl tablet:text-[32px] leading-normal ${playfairDisplay.className}`}
          >
            Features
          </h3>
        </div>
        <hr
          style={{
            width: "100%",
            height: "0px",
            color: "#DADEE3",
          }}
        />
        <p
          className="text-lg tablet:text-2xl"
        >
          32” stage that accommodates 3-4 people at a time
        </p>

        <hr
          style={{
            width: "100%",
            height: "0px",
            color: "#DADEE3",
          }}
        />
        <p
          className="text-lg tablet:text-2xl"
        >
          Unlimited HQ slow motion video captures
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          4 RGB LED Lights
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          2 on-site attendants
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          1 Customized Overlay with 3 Revisions
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          Custom Logo/Branding On Video
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          Laser & Disco Light Machine
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          Fog Machine
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          Over 50 different props, including themed ones
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          Online gallery for download
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <p
          className="text-lg tablet:text-2xl"
        >
          Free local travel (within 30 miles of Pasadena)
        </p>
        <hr style={{ width: "100%", height: "0px", color: "#DADEE3" }} />
        <div
          style={{
            display: "flex",
            padding: "10px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <Link
            href="/GetAQuote"
            className="flex flex-col items-center"
            style={{
              alignSelf: "stretch",
              padding: "14px 18px",
              gap: "8px",
              borderRadius: "8px",
              background: "var(--action-primariy-default, #7E1F86)",
            }}
          >
            <p
              style={{
                color: "var(--action-primar-inverted, var(--icon-color, #FFF))",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "28px",
              }}
            >
              Book now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
