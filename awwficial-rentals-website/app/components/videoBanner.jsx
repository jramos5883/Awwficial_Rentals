import Button from "@mui/material/Button";
import DropboxVideoEmbed from "./video.comp";
import Typography from "@mui/material/Typography";

export default function VideoBanner() {
  return (
    <div className="relative flex items-center justify-center">
      <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/1yskpzjq3hoz1xm0sjwqf/AwwficialCC_1.mov?rlkey=41p27bt9gk2barr4b7h6z3g4d&dl=0" />

      <div className="absolute flex flex-col justify-center items-center">
        <Typography
          variant="h6"
          className="text-purple-500 pb-8 font-extrabold"
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
  );
}
