import React from "react";
import Today from "@/components/blog/right/today";
import Latest from "@/components/blog/right/latest";
import Banner1 from "@/components/blog/right/banner/banner1";
import Banner2 from "@/components/blog/right/banner/banner2";

export default function index() {
  return (
    <>
      <div className="lg:mr-4 mr-0">
        <Today />
        <Latest />
        <Banner1 />
        <Latest />
        <Banner2 />
      </div>
    </>
  );
}
