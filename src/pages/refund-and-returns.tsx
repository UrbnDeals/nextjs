import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function RefundAndReturnsPage() {
  return (
				<>
			<PageHeader pageHeader="text-page-refund-and-returns" />
			<Container>
				<div>Refund And Returns</div>
			</Container>
		</>
	)
}

RefundAndReturnsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};