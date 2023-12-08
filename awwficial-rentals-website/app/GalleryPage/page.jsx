import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="flex flex-col justify-center items-center pb-28 pl-4 pr-4">
      <p
        className="pt-8 pb-8"
        style={{
          color: "#000",
          fontFamily: "Playfair Display",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        Browse Photos by Events
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5 p-4"
        style={{
          width: "100%",
          maxWidth: "860px",
        }}
      >
        <div class="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/10ce/f99a/0d5d3d9f465a86abf8ad3cbddf1f0bbb?Expires=1702857600&Signature=Y8QKkqcc2LTZFrJpDnPZz0XN6aql-qacZkgOj03yxJ2JQLhXxTxlsplqwl7JFZEwGibnQzOKGFhEKb01fQfvVQNhL8YHocQ7LTeO3Ti5dmnUS8o1qDELRENbph8T~vli0-fMbssk-ynrgHxxlDC9BSaEV6k9wof7PXrcoQuPpCTvtaOpucQIx1Snx9RsE7CCfxADQ~5Kyqa0Bjdx7k-kiyYAaxjodt9VQOZpgwerVzdQI1hlWhBeKwcjvTIAi9xXbm5sK9pgduPknLXgWuxgDi8MVxl0KHA~BZXZNYU-U9jxfSStjIqQb4EPnVicYOBA9zat6GGc2O0l7N-w8BjxDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Image Alt Text"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full max-w-[500px] mx-auto rounded-xl"
            style={{
              display: "flex",
              flexDirection: "colunm",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              height: "82px",
              padding: "16",
              background: "rgba(25, 6, 27, 0.50)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                color: "#FFFEF8",
                fontFamily: "Playfair Display",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Holiday Parties
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/4f31/df12/114233def8a232f45e925ee0357ebcf8?Expires=1702857600&Signature=Zo3lJeqs3SN1Pm-FA-5MH8D~9TtW0PfmCaG-axFisHa4gfJuSscn9C~mU6CH5kB6sSrn44juzylg15xyfNMK1janvCtZUQLozdBXT688-eUaB5-5H3mMzM43IMrODXrXKu6YtvBd9-ctWFMvWEMOukYNNmxzwhlL8jIQEoyu9Ck21EKy1GQISOmt~bU5UsTTOd4klFcx5pah4yKyHcRia1x-siBLzhHe1ZeYsKp2fR3zalFUa4h~gzl5~R8tR5q652xBFEkZnYrRsvA8uKJPUThEvvQoz5zy1q9yG0WZI7qff35879RzQD2xRMNWzqzheirLnIMoevey4oyBlc~wIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Image Alt Text"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full max-w-[500px] mx-auto rounded-xl"
            style={{
              display: "flex",
              flexDirection: "colunm",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              height: "82px",
              padding: "16",
              background: "rgba(25, 6, 27, 0.50)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                color: "#FFFEF8",
                fontFamily: "Playfair Display",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Wedding Parties
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/59b3/0d4d/862877467e0b6fadaa414cb9dc66ef75?Expires=1702857600&Signature=TYgwL4beRIXkHM7HXfZbVErfkpqeELrfllfyjnAPuVJ86WFbawcm3Erj19KO6ejQfteGQYf3mElvusHtrlCMNsfKtvqeSUvPVwmXWavIuA6~7fcj1B0nHi0PYJgztH1l1AcL5RZV5CaN9jGeSOH~iSgZU1J9KNLPdJZzngMNdtokBE6gdh2-2dNXrRFe-Xtm-BNs8SpwTPCGIslfWX69gIvu7A0FCuvnlUFI2Wb6w5~GN~53HFwcHZK052~-Q0CoiGAlSbjc7wosGHGW2VdKwmxFZYpGpsA0zDkZ1zyEwpvYEX2yMqMFfO-~xUGpAraUpCjPNSF7jemHUSefeE6fKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Image Alt Text"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full max-w-[500px] mx-auto rounded-xl"
            style={{
              display: "flex",
              flexDirection: "colunm",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              height: "82px",
              padding: "16",
              background: "rgba(25, 6, 27, 0.50)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                color: "#FFFEF8",
                fontFamily: "Playfair Display",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Corporate Events
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/01fa/3dcf/449607c5514d0c17830a6bb7daf65563?Expires=1702857600&Signature=j56W97gGjd0rqd8r3~ah7A30ddSwSxwN8RABt~hrvgawemqOe~7zBc9scUTDtIRxjXWS2LxP1WlFGuNYyjqkjaOshTi-2ovmTITuhuROEKS-en7RY~m3rexsacMcMsCq9sYXdUkAgvHE9Jj7wapADTPDCFdioyb1ATG8Us2cJDiyd0Y4Ci-RminR5TluzeOk1sYKuHkEpMmDgnktJ3KFg8pu5E~9rR1p7NpNzAZ48wsxT3gTJYb4PTJZPPjWP9YZuyww2APwkQzJ2XEV5w7MIX6OTu8uv4U8uy12UeI5Qtr7qEZo7JRuLKChxSCeAPoOWqC2QdHrbPtnUfhvUDJCAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Image Alt Text"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full max-w-[500px] mx-auto rounded-xl"
            style={{
              display: "flex",
              flexDirection: "colunm",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              height: "82px",
              padding: "16",
              background: "rgba(25, 6, 27, 0.50)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                color: "#FFFEF8",
                fontFamily: "Playfair Display",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Birthday Parties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
