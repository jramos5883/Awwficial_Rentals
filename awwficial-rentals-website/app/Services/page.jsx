export default function Services() {
  return (
    <div className="flex flex-col items-center">
      <h1>Rental Inclusions</h1>
      {/* Will change border color to the correct color in the future */}
      <div className="flex flex-col border rounded border-solid border-indigo-900 p-4">
        <p className="flex flex-col items-center">Features</p>
        <p className="border-t border-black">
          32” stage that accommodates 3-4 people at a time
        </p>
        <p className="border-t border-black">
          Unlimited HQ slow motion video captures
        </p>
        <p className="border-t border-black">4 RGB LED Lights</p>
        <p className="border-t border-black">2 on-site attendants</p>
        <p className="border-t border-black">
          1 Customized Overlay with 3 Revisions
        </p>
        <p className="border-t border-black">Custom Logo/Branding On Video</p>
        <p className="border-t border-black">Laser & Disco Light Machine</p>
        <p className="border-t border-black">Fog Machine</p>
        <p className="border-t border-black">
          Over 50 different props, including themed ones
        </p>
        <p className="border-t border-black">Online gallery for download</p>
        <p className="border-t border-b border-black">
          Free local travel (within 30 miles of Pasadena)
        </p>
        <button className="">Book now</button>
      </div>
    </div>
  );
}
