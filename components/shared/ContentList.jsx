"use client";
import Image from "next/image";
import Link from "next/link";

const ContentList = ({ contentList }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-opacity="1"
      >
        {contentList.map((content) => (
          <Link key={content.name} href={`/dashboard/content/${content.slug}`}>
            <div className="flex flex-col p-4 border border-white-2 rounded-lg cursor-pointer gap-2 hover:border-purple-600 transition-all">
              <Image src={content.icon} alt="icon" width={32} height={32} />
              <h2 className="text-lg font-bold">{content.name}</h2>
              <p className="text-sm text-gray-300 line-clamp-2">
                {content.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContentList;
