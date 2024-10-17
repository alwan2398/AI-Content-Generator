import {
  AtSign,
  BadgeCheck,
  Brain,
  ChartSpline,
  Clapperboard,
  Clock,
} from "lucide-react";

const featureList = [
  {
    name: "Caption dengan Teknologi AI",
    description:
      "Dapatkan rekomendasi caption yang akurat dan relevan, sesuai dengan tren terkini di media sosial. AI kami memahami kontenmu dan memberikan saran terbaik untuk meningkatkan engagement.",
    icon: AtSign,
  },
  {
    name: "Caption Sesuai Platform",
    description:
      "Caption yang dikurasi khusus untuk platform seperti TikTok, Instagram, dan Twitter. Setiap rekomendasi disesuaikan dengan tone dan gaya bahasa unik dari setiap platform.",
    icon: BadgeCheck,
  },
  {
    name: "Sesuaikan dengan Gaya Kamu",
    description:
      "Ubah dan sesuaikan rekomendasi caption agar sesuai dengan brand atau personaliti kamu. Kamu bisa menambahkan sentuhan personal tanpa kehilangan esensi dari saran AI.",
    icon: Clapperboard,
  },
  {
    name: "Ikuti Tren Terbaru",
    description:
      "Temukan topik dan hashtag trending yang relevan dengan kontenmu. Kami membantu memastikan kontenmu tetap up-to-date dan menarik perhatian lebih banyak audiens.",
    icon: Brain,
  },
  {
    name: "Saran Strategi Konten",
    description:
      "Dapatkan saran untuk mengatur postingan kontenmu secara efektif. AI kami memberikan panduan kapan dan bagaimana cara terbaik untuk membagikan konten agar hasilnya maksimal.",
    icon: Clock,
  },
  {
    name: "Pratinjau Instan & Analitik",
    description:
      "Lihat pratinjau langsung dari caption dan ukur performa potensial dengan alat analitik kami. Ketahui seberapa efektif caption kamu sebelum mempostingnya.",
    icon: ChartSpline,
  },
];

const Features = () => {
  return (
    <section className="py-16 lg:py-24">
      <div id="features" className="mx-auto max-w-6xl px-4">
        <div
          className="max-w-xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-opacity="1"
        >
          <h2 className="text-3xl text-gray-50 font-semibold sm:text-4xl">
            Fitur Unggulan yang Membuatmu Lebih Kreatif!
          </h2>
          <p className="mt-4 text-gray-300">
            Fitur Canggih untuk Membantu Kamu Membuat Konten yang Berkesan di
            Setiap Platform.
          </p>
        </div>
        <div
          className="relative mt-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-opacity="1"
        >
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureList.map((feature) => (
              <li
                key={feature.name}
                className="space-y-3 p-4 rounded-xl border border-gray-800 bg-grid"
              >
                <feature.icon />
                <h3 className="mt-6 text-lg font-semibold text-gray-50">
                  {feature.name}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
