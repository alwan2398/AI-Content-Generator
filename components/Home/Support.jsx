import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Support = () => {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 blur-[160px] m-auto h-[13rem] top-12 max-w-xs bg-color-1"></div>
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 py-28 relative">
            <div
              className="relative z-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-opacity="1"
            >
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-gray-50 text-3xl sm:text-4xl font-semibold">
                  Buat Deskripsi Konten Social Media Dengan Mudah
                </h2>
                <p className="mt-5 text-gray-300">
                  Dengan Website Alcode yang terintegrasi dengan Gemini AI
                  mempermudah andan untuk mencari deskripsi konten.
                </p>
              </div>
              <Link href="/sign-in" className="mt-5 flex justify-center">
                <Button className="bg-purple-600 hover:bg-purple-500 active:bg-purple-700 py-2.5 px-5">
                  Masuk <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <Image
                src="/image.webp"
                alt="background_pattern"
                width={2880}
                height={1358}
                className="absolute inset-0 h-full w-full object-cover pointer-events-none m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
