import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    image: StaticImageData;
    title: string;
    description: string;
}

export default function Hero({ image, title, description }: HeroProps) {
    return (
        <div className="relative">
        <div className="relative h-screen">
        <Image 
          src={image} 
          alt={title}
          fill
          style={{
            objectFit: "cover",
          }}
        />  
        </div>
        <div className="pt-48 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        </div>
    )
}
