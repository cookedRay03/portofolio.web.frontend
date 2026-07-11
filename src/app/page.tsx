import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">
      <div>Hi! My name is Ray!</div>

      <Image
        src="/me.jpeg"
        alt="Profile picture"
        width={200}
        height={200}
        // className="rounded-full"
      />

      <div>I like coding :D</div>
    </div>
  );
}
