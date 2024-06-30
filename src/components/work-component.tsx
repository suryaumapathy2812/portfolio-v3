import { Card, CardContent, CardHeader } from "./ui/card";

export default function WorkComponent() {
  return (
    <>
      <div className="space-y-3.5 w-full">
        <div className="md:flex block md:items-center w-full space-x-4">
          <div className="shrink-0 inline">Work 1</div>
          <div className="grow-1 hidden md:inline w-full h-px bg-zinc-800"></div>
          <div className="shrink-0 inline text-muted-foreground">2021 - Present</div>
        </div>
        <div className="text-muted-foreground text-sm leading-6">
          I’m building a local-first music client called Overtone which brings
          all your music (e.g. from Spotify, Bandcamp, Dropbox, ...) into a
          single, high-quality app.
        </div>
      </div>
    </>
  );
}
