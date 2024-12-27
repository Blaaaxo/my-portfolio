import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* texto */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span>Ingeniero en Sistemas</span>
                        <h1 className="h1 mb-6">
                            Hola, soy <br /> <span className="text-accent">Brayan Fernandez</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Ingeniero Full Stack especializado en desarrollar soluciones eficientes e intuitivas que transforman ideas en productos de alto impacto.
                        </p>

                        {/* botones de redes sociales */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Link href={'https://www.linkedin.com/in/brayan-fernandez-8182b0239/'}>
                                <Button variant={'outline'} size={'lg'} className="uppercase flex items-center gap-2">
                                    <span>Descargar CV</span>
                                    <Download className="text-xl" />
                                </Button>
                            </Link>

                            <div className="mb-8 xl:mb-0">
                                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                    {/* foto */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
