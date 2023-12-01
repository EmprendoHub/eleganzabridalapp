import React from 'react';
import FavoritesContainer from '@/components/container/FavoritesContainer';
import SendQuoteComponent from '@/components/cart/SendQuoteComponent';
import { getDictionary } from '@/lib/dictionary';

const QuotePage = async ({ params: { lang } }) => {
  const { contactform } = await getDictionary(lang);
  //email js service Ids
  const templateid = process.env.REACT_APP_EMAILJS_QUOTE_TEMPLATE_ID;
  const serviceid = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const publickey = process.env.REACT_APP_EMAILJS_PUB_KEY;
  return (
    <FavoritesContainer className="p-12 md:p-4 sm:p-2 w-[80%] md:w-[95%]">
      <h2 className="text-2xl font-semibold mb-2 pl-4">Wishlist</h2>
      <div className="flex flex-col gap-5">
        <SendQuoteComponent
          templateid={templateid}
          serviceid={serviceid}
          publickey={publickey}
          contactform={contactform}
          lang={lang}
        />
      </div>
    </FavoritesContainer>
  );
};

export default QuotePage;
