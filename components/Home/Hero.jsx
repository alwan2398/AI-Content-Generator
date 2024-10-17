import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="py-28 mx-auto max-w-6xl px-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-opacity="1"
      >
        <div className="space-y-5 mx-auto max-w-3xl text-center">
          <h1
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r mx-auto sm:text-6xl"
            style={{
              backgroundImage:
                "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
            }}
          >
            Membantu Kontenmu Lebih Menarik Disini
          </h1>
          <p className="max-w-xl mx-auto text-gray-300">
            Temukan Caption Terbaik untuk konten social media anda dengan mudah
            dan dalam Sekejap.
          </p>
          <Link href="/sign-in" className="flex justify-center">
            <Button className="relative inline-flex h-12 w-30 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Mulai Sekarang
              </span>
            </Button>
          </Link>
        </div>

        <div className="relative mt-14 sm:mt-28 max-w-6xl mx-auto h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[600px]">
          <div className="absolute m-auto blur-[160px] max-w-3xl top-12 inset-0 h-[250px] sm:h-[300px] lg:h-[600px] bg-color-1"></div>
          <div className="relative">
            <Image
              src="/hero.png"
              alt="hero"
              width={1920}
              height={1000}
              className="shadow-lg rounded-2xl object-cover w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
