import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-4xl font-bold">Hello World</div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="relative w-full h-screen">
        <Image 
          src="/home.jpg" 
          alt="home"
          width={2000}
          height={1000}
          style={{
            marginBottom: "500px",
            objectFit: "cover",
            objectPosition: "center",
            width: "100vw",
            height: "100vh",
          }}
        />  
        </div>
    </div>
  );
}
