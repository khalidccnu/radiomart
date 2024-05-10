import BaseHeroWrapper from '@base/components/BaseHeroWrapper';
import PageWrapper from '@base/container/PageWrapper';
import { paths } from '@lib/constant';
import ContactDetailSection from '@modules/contact/ContactDetailSection';

const ContactPage = () => {
  return (
    <PageWrapper title="Contact us">
      <BaseHeroWrapper title="Contact" breadcrumb={[{ name: 'contact', slug: paths.contact }]} />
      <ContactDetailSection className="py-14" />
    </PageWrapper>
  );
};

export default ContactPage;
