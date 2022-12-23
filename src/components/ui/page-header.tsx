import { useTranslation } from 'next-i18next';

interface HeaderProps {
  pageSubHeader?: string;
  pageHeader: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<HeaderProps> = ({
  pageSubHeader = 'text-page-explore',
  pageHeader = 'text-page-header',
  backgroundImage = 'url(/assets/images/page-header.jpg)'
}) => {
  const { t } = useTranslation('common');
  return (
    <div
      className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: backgroundImage
      }}
    >
      <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="w-full items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
        <h2 className="text-xl md:text-4xl lg:text-7xl font-bold text-primary-main text-center">
          {t(`${pageHeader}`)}
        </h2>
        <div className="font-normal mb-3 text-center text-white">
          {t(`${pageSubHeader}`)}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
