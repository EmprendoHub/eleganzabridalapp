import SectionContainer from "@/components/container/SectionContainer";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import noPageImage from "@/images/wedding_dress_404.webp"

const NotFoundPage = ({params}) => {
  
  return (
    <SectionContainer className="flex items-center justify-center py-20 px-10">
      <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <Image src={noPageImage} alt="404 Page Not Found" width={400}/>
        <h2 className="text-4xl sm:text-2xl font-bold text-center">Page not Found</h2>
        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          href={"/catalog"}
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-pink-700 hover:text-white duration-200"
        >
          Explore our Catalog
        </Link>
      </div>
    </SectionContainer>
  );
};

export default NotFoundPage;