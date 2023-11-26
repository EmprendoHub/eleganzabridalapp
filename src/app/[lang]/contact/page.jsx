import ContactUsComponent from '@/components/ctas/ContactUsComponent';
import IconListSectionComponent from '@/components/ctas/IconListSectionComponent';
import QuizComponent from '@/components/ctas/QuizComponent';
import HeroTextComponent from '@/components/texts/HeroTextComponent';
import React from 'react';
import { getDictionary } from '@/lib/dictionary';
import ContactComponent from '@/components/contact/ContactComponent';

const ContactPage = async ({ params: { lang } }) => {
  const { contact, quiz, contactform } = await getDictionary(lang);
  return (
    <ContactComponent contact={contact} quiz={quiz} contactform={contactform} />
  );
};

export default ContactPage;
