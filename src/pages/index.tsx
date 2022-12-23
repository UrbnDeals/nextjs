import Layout from '@components/layout/layout';
import PageHeader from '@components/ui/page-header';
import Container from '@components/ui/container';
import PropertyCarousel from '@containers/property-carousel';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <>
      <PageHeader
        pageHeader="text-page-home"
        pageSubHeader="text-page-sub-header-home"
      />
      <Container className="my-16">
        <PropertyCarousel
          sectionHeading="text-testimonial"
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          reduceCardSpacing={true}
        />
        <PropertyCarousel
          sectionHeading="text-rentals"
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          reduceCardSpacing={true}
        />
        <PropertyCarousel
          sectionHeading="text-recently-posted"
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          reduceCardSpacing={true}
        />
        <PropertyCarousel
          sectionHeading="text-top-places"
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          reduceCardSpacing={true}
        />
        <PropertyCarousel
          sectionHeading="text-recently-viewed"
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          reduceCardSpacing={true}
        />
      </Container>
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer'
      ]))
    }
  };
};
