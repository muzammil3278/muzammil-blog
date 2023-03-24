import React from "react";
import Left from "@/components/blog/left";
import Write from "@/components/blog/write";
import Banner from "@/components/banner";

export default function index() {
  return (
    <>
      <div className="bg-gray-100 py-24">
        <div className="container mx-auto px-8">
          <ul className="flex">
            <li className="mr-3">Home <span className="mx-1">/</span> </li>
            <li>About</li>
          </ul>
          <h2 className="text-4xl font-semibold">About Us</h2>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-3 gird-cols-1 gap-4  pt-4">
        <div className="lg:col-span-2">
          <Write />
        </div>
        <div>
          <Left />
        </div>
      </div>
      <Banner />
    </>
  );
}
