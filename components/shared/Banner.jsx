"use client";

import { content } from "@/lib/content";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Input } from "../ui/input";

const Banner = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useCallback(() => {
    const filteredContent = content.filter((content) =>
      content.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    onSearch(filteredContent);
  }, [searchInput, onSearch]);

  useEffect(() => {
    // Set timeout untuk debouncing
    const timer = setTimeout(() => {
      debouncedSearch();
    }, 300); // 300ms delay

    // Bersihkan timer jika user mengetik lagi sebelum delay selesai
    return () => clearTimeout(timer);
  }, [searchInput, debouncedSearch]);
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div
        className="flex flex-col size-full items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div className="md:h-[400px] h-[200px] w-full rounded-[20px] bg-banner bg-cover bg-center max-w-6xl"></div>
        <div className="text-center flex flex-col items-center space-y-4 mt-8">
          <h2 className="text-3xl md:text-4xl max-w-4xl font-bold bg-gradient-to-br from-purple-400 to-purple-500 bg-clip-text text-transparent">
            Biarkan AI Yang Menyajikan Kontenmu Dengan Lebih Cepat
          </h2>
          <p className="text-gray-300">
            dengan Alcode AI dapat mempermudah anda dalam membuat caption atau
            deskripsi konten lebih cepat dan menarik.
          </p>
          <div className="relative w-80">
            <Input
              className="bg-transparent text-white outline-none"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Search className="w-5 h-5 absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
