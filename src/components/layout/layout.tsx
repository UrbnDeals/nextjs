import { NextSeo } from 'next-seo';
import Header from '@components/layout/header/header';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import Search from '@components/common/search';
import CookieBar from '@components/common/cookie-bar';
import { useAcceptCookies } from '@utils/use-accept-cookies';
import Button from '@components/ui/button';
import { useTranslation } from 'next-i18next';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
	const { t } = useTranslation('common');
	return (
		<div className="flex flex-col min-h-screen">
			<NextSeo
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0',
					},
				]}
				title="Urbn Deals"
				description="Your real estate investment marketplace. Buy or sell wholesale or investment properties all on one site."
				canonical="https://urbnDeals.vercel.app/"
				openGraph={{
					url: 'https://urbnDeals.vercel.app',
					title: 'Urbn Deals React',
					description:
						'Your real estate investment marketplace. Buy or sell wholesale or investment properties all on one site.',
					images: [
						{
							url: 'https://urbndeals.com/wp-content/uploads/2022/10/Urbn-Deals-Brand-Kit-270-×-90-px-90-×-90-px-70-×-70-px.png',
							width: 800,
							height: 600,
							alt: 'Og Image Alt',
						},
						{
							url: 'https://urbndeals.com/wp-content/uploads/2022/10/Urbn-Deals-Brand-Kit-270-×-90-px-90-×-90-px-70-×-70-px.png',
							width: 900,
							height: 800,
							alt: 'Og Image Alt Second',
						},
					],
				}}
			/>
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: '-webkit-fill-available',
					WebkitOverflowScrolling: 'touch',
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
			<Search />
			<CookieBar
				title={t('text-cookies-title')}
				hide={acceptedCookies}
				action={
					<Button onClick={() => onAcceptCookies()} variant="slim">
						{/* @ts-ignore */}
						{t('text-accept-cookies')}
					</Button>
				}
			/>
		</div>
	);
}
