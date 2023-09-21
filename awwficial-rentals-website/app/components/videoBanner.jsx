import Button from "@mui/material/Button";
import DropboxVideoEmbed from "./video.comp";
import Typography from "@mui/material/Typography";

export default function VideoBanner() {
  return (
    <div className="flex items-center justify-center">
      {/* The following divs are hidden on mobile and shown on tablet and up */}
      <div className="hidden tablet:block tablet:max-w-xs lapsm:max-w-lg">
        <div className="relative flex items-center justify-center">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div>
      </div>
      <div className="tablet:max-w-xs lapsm:max-w-lg">
        <div className="relative flex items-center justify-center">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/1yskpzjq3hoz1xm0sjwqf/AwwficialCC_1.mov?rlkey=41p27bt9gk2barr4b7h6z3g4d&dl=0" />

          <div className="absolute flex flex-col justify-center items-center">
            <Typography
              variant="h6"
              className="text-purple-500 pb-8 font-extrabold text-xs cellsm:text-xl tablet:text-sm lapsm:text-xl desksm:text-3xl"
            >
              Make Your Event Awwficial!
            </Typography>
            <div>
              <Button
                href="/BookNow"
                variant="contained"
                color="primary"
                className="text-white"
              >
                Book Now!
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* The following divs are hidden on mobile and shown on tablet and up */}
      <div className="hidden tablet:block tablet:max-w-xs lapsm:max-w-lg">
        <div className="relative flex items-center justify-center">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/rygy30vxfb0ynqhop7h12/AwwficialCC_3.mov?rlkey=i7sv9dy309zmjqo8r0kcutil3&dl=0" />
        </div>
      </div>
    </div>
  );
}
