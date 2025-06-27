"use client";

import { ContactForm } from "../layout/appLayout/utils";
import LazyPageLoader from "../LazyPageLoader";

const Contact = () => {
  return (
    <LazyPageLoader>
      <ContactForm />
    </LazyPageLoader>
  );
};

export default Contact;
