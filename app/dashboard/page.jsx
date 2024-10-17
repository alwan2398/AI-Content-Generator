"use client";

import Banner from "@/components/shared/Banner";
import ContentList from "@/components/shared/ContentList";
import { content } from "@/lib/content";
import AOS from "aos"; // Import AOS without curly braces
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [filterData, setFilterData] = useState(content);
  const handleSearch = (filterData) => {
    setFilterData(filterData);
  };
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <div>
      <Banner onSearch={handleSearch} />
      <ContentList contentList={filterData} />
    </div>
  );
};

export default Dashboard;
