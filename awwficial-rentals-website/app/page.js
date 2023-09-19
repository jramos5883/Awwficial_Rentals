import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="h-20 bg-blue-300 cellsm:bg-blue-600 celllg:bg-blue-900 tablet:bg-yellow-300 lapsm:bg-green-300 laplg:bg-green-600 desksm:bg-red-600 desklg:bg-red-900">
      <Button variant="text" className="">
        Text
      </Button>
      <Button variant="contained" className="px-12">
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
