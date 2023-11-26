import React from 'react';
import BoxesSectionTitle from '../texts/BoxesSectionTitle';
import Image from 'next/image';
import contactbride from '@/images/Eleganza_bridal_contact_bride.webp';
import EmailForm from '../forms/EmailForm';

//email js service Ids
const templateid = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const serviceid = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const publickey = process.env.REACT_APP_EMAILJS_PUB_KEY;

const ContactUsComponent = ({ contactform }) => {
  return (
    <div className="flex flex-row md:flex-col py-20">
      <div className="w-1/2 md:w-full z-10 pl-40 md:px-5 sm:px-1">
        <div className=" pb-20">
          <h2>
            <BoxesSectionTitle
              className="mb-5 text-3xl"
              title={contactform.title}
              subtitle={contactform.subtitle}
            />
          </h2>
          <EmailForm
            templateID={templateid}
            serviceID={serviceid}
            publicKEY={publickey}
            contactform={contactform}
          />
        </div>
      </div>
      <div className="w-1/2 md:w-full z-10 justify-center mx-auto items-center flex">
        <Image
          src={contactbride}
          width={550}
          height={500}
          alt="Contact Eleganza Bridal"
        />
      </div>
    </div>
  );
};

export default ContactUsComponent;
