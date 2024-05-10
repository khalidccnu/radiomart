import BaseHeroWrapper from '@base/components/BaseHeroWrapper';
import PageWrapper from '@base/container/PageWrapper';
import { paths } from '@lib/constant';
import ContactDetailSection from '@modules/contact/ContactDetailSection';
import ContactFormSection from '@modules/contact/ContactFormSection';

const ContactPage = () => {
  return (
    <PageWrapper title="Contact us">
      <BaseHeroWrapper title="contact" breadcrumb={[{ name: 'contact', slug: paths.contact }]} />
      <ContactDetailSection className="py-14" />
      <ContactFormSection className="pb-14" />
    </PageWrapper>
  );
};

export default ContactPage;
