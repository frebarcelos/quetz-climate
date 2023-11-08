import Card from "@/components/card";
import Footer from "@/components/footer/footer";
import Nav from "@/components/nav";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    //className="flex min-h-screen flex-col items-center justify-between p-10"
    <React.Fragment>
      <Nav />
      <main className="flex items-center flex-col justify-center m-20 gap-y-5">
        <SearchBar />
        <Card />
      </main>
      <Footer />
    </React.Fragment>
  );
}
