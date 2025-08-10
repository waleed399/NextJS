import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    image: StaticImageData;
    title: string;
    description: string;
}

export default function Hero({ image, title, description }: HeroProps) {
    return (
        <section className="relative h-[70vh] min-h-[420px]">
            <Image 
                src={image} 
                alt={title}
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
                <p className="mt-3 max-w-2xl text-white/90 text-base sm:text-lg">{description}</p>
            </div>
        </section>
    )
}
