import Image from "next/image";

export default function () {
  return (
    <div className="flex flex-col items-center p-4">
      <p
        style={{
          color: "#000",
          fontFamily: "Playfair Display",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "150%",
        }}
      >
        Perfect for Any Event!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-9 gap-x-5">
        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/8ca0/78d8/ed3fd6fdb2d3efbe647e069b075dea76?Expires=1702857600&Signature=gT8tJnMn0maK~e7SieS8aJq74CKPLF07XbHp1ZrQPfuaTN32yk4QnW45CD~ZaDV-Fv2Yyn1BZywY~50tuhK98G8ps7BjSJ3pgWPA8rzaUEcqeLFlHzNfx2yO2DVKGxX4b9JYzSerHWPnS6Duxz-Q7L-9t1GFpS3vpQhHs1ySR19r9ACjlj9TVUUxSJN1d7HQQkxHMYmqaqRoYBigqV7AD-W6zOu-MLX1uxiNPFA-DrVEHzbS0C7MctOFc68iJoS7nWKDksVfseyB8bzTPygdxBprlT2pFFtOawxH3x02GypV202zRjTJEFgb548P-WKCvTaszSKe-iA9WtBoCadKMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
            src="https://s3-alpha-sig.figma.com/img/5b3e/1d41/76914fff7df9e83d4b51771155795953?Expires=1702857600&Signature=nIxoGx6hk7E6XLxbxguRF01CAbCVAgUN4gtnHYqZi384PGFieWyYQMmVJqfdJacxRJLThV~y-NyWxDZdilcISatayDhN55Tdadt5y~UWmufvwVoC49Xjz4Gn6lyFT5s-ujyCNajDH2LAmTLuSN3xhce9XuiZd-gp2ktb8f2xTaGLqoS8p4KwNqZ5CHAJEgYymfnqvoGByPeqCUaKjeLgnV-vsJR~H5sv4AuzwT1MFw7RlYchTtu03kFhSrOvUi9wWxJ-Sylg3bWoYL9cQNkBImmwn1htkoH-lOlDqjIKX2P5M-hJ8iqfLC~jc4Ct1YOE0tzln8JhXCiaJFXIHuZimQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              Weddings & Celebrations
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/2000/ef1e/2819d100d4a232ba9489f41f53663450?Expires=1702857600&Signature=VJl44WuyRUyKgq8y-6CspBSEQaE3nLLpDgopZQgLia1cHz3oHufi-PxXaWRUEtuAF4lZHUx~ZMW8lWBEO5jYfcyNUrYTa0sZerIuCzXfXoppHY8fqVsMRvjpSZoDbFIoYktQs0sW~I4JQ9MAYveW1rqGs9MZPg6fkWsYOLMMTByn~V3uYVaOGB1zMOqCgLdDeRNQWMjc9fcpaU2MDG5wWUqVLhygxn7xd-4RbIWmAU8zjG~be4XYm6ct3ggjwhc7bVkX0cHNs1VVTmgP1AHyHSmnOjQReSXoZeJxzvEMpoEy9Ngr1qDxCJSoyiyx9MTlAqpK1IsaL9pAHH7n9qg7Sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
      </div>
    </div>
  );
}
