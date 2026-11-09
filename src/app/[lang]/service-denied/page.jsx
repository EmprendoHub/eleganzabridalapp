import Link from "next/link";
import SectionContainer from "@/components/container/SectionContainer";
import Image from "next/image";
import { CiWarning } from "react-icons/ci";

const whatsappHref =
  "https://wa.me/523532464146?text=Hello%2C%20I%20am%20interested%20in%20buying%20this%20domain%20eleganzabridal-lv.com.";

const ServiceDeniedPage = () => {
  return (
    <SectionContainer className="py-24 px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-transparent p-8 text-center shadow-sm sm:p-12">
        <Image
          src="/images/new_emprendomex_logo_horizontal_white.webp"
          alt="Emprendomex Marketing"
          width={250}
          height={250}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold tracking-tight text-gray-50 sm:text-4xl">
          <CiWarning className="inline-block mr-2" /> Website Suspended{" "}
          <CiWarning className="inline-block mr-2" />
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-50 sm:text-lg">
          This website is no longer available. If you are interested in buying
          the domain, please contact us on WhatsApp.
        </p>

        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Contact us on WhatsApp
        </Link>
      </div>
    </SectionContainer>
  );
};

export default ServiceDeniedPage;
