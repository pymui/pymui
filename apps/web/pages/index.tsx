import { Button } from "@meeu/material";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <div
        style={{
          display: "flex",

          gap: "1rem",
        }}
      >
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button variant="elevated">Elevated</Button>
        <Button variant="tonal">Tonal</Button>
      </div>
    </div>
  );
}
