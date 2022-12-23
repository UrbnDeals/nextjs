import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
} from 'react-icons/io5'

export const footer = {
  widgets: [
    {
      id: 1,
      widgetTitle: 'widget-title-social',
      lists: [
        {
          id: 1,
          title: 'link-instagram',
          path: 'https://www.instagram.com/urbndeals/?fbclid=IwAR3J741-r0O9lk9cdbW91x0I5sMsdTN9-5DIFjjGmZQ_RthmtfNbZ0xEuIs',
          icon: <IoLogoInstagram />,
        },
        {
          id: 2,
          title: 'link-twitter',
          path: 'https://twitter.com/redqinc',
          icon: <IoLogoTwitter />,
        },
        {
          id: 3,
          title: 'link-facebook',
          path: 'https://www.facebook.com/urbndeals/',
          icon: <IoLogoFacebook />,
        },
        {
          id: 4,
          title: 'link-youtube',
          path: 'https://www.youtube.com/channel/UC7Sbs9VOQd8TRFw50xeb-dQ',
          icon: <IoLogoYoutube />,
        },
      ],
    },
    {
      id: 2,
      widgetTitle: 'widget-title-account',
      lists: [
        {
          id: 1,
          title: 'link-my-profile',
          path: '/my-profile',
        },
        {
          id: 2,
          title: 'link-favorite-properties',
          path: '/favorite-properties',
        },
        {
          id: 3,
          title: 'link-messages',
          path: '/messages',
        },
        {
          id: 4,
          title: 'link-subscription',
          path: '/my-account/subscriptions',
        },
				{
          id: 5,
          title: 'link-payment-methods',
          path: '/my-account/payment-methods',
        },
				{
          id: 6,
          title: 'link-insights',
          path: '/insights',
        },
				{
          id: 7,
          title: 'link-board',
          path: '/board',
        },
				{
          id: 8,
          title: 'link-affiliate-program',
          path: '/affiliate-registration',
        },
				{
          id: 9,
          title: 'link-dashboard',
          path: '/sales-dashboard',
        },
      ],
    },
    {
      id: 3,
      widgetTitle: 'widget-title-company',
      lists: [
        {
          id: 1,
          title: 'link-contact-us',
          path: '/contact-us',
        },
        {
          id: 2,
          title: 'link-privacy-policy',
          path: '/privacy',
        },
        {
          id: 3,
          title: 'link-terms-conditions',
          path: '/terms-and-conditions',
        },
        {
          id: 4,
          title: 'link-refund-returns',
          path: '/refund_returns',
        },
				{
          id: 5,
          title: 'link-about',
          path: '/about',
        },
        {
          id: 6,
          title: 'link-become-seller',
          path: '/become-a-seller',
        },
      ],
    },
    {
      id: 4,
      widgetTitle: 'widget-title-surveys',
      lists: [
        {
          id: 1,
          title: 'link-product-feedback',
          path: 'https://www.typeform.com/private-typeform/?utm_source=typeform.com-21325184-free&utm_medium=typeform&utm_content=typeform-private&utm_campaign=KOWzlkWY',
        },
        {
          id: 2,
          title: 'link-apply-intern',
          path: 'https://www.typeform.com/private-typeform/?utm_source=typeform.com-21325184-free&utm_medium=typeform&utm_content=typeform-private&utm_campaign=m9FMiY6e',
        },
        {
          id: 3,
          title: 'link-become-partner',
          path: 'https://8yhglvs5dz1.typeform.com/to/UvoNsGdd',
        },
				{
          id: 4,
          title: 'link-fund-us',
          path: 'https://8yhglvs5dz1.typeform.com/to/YTkWeseT',
        },
      ],
    },
    {
      id: 5,
      widgetTitle: 'widget-title-resources',
      lists: [
        {
          id: 1,
          title: 'link-free-contracts',
          path: '/free-real-estate-contracts',
        },
        {
          id: 2,
          title: 'link-blog',
          path: '/blogs',
        }
      ],
    }
  ],
  payment: [
    {
      id: 1,
      path: '/',
      image: '/assets/images/payment/mastercard.svg',
      name: 'payment-master-card',
      width: 34,
      height: 20,
    },
    {
      id: 2,
      path: '/',
      image: '/assets/images/payment/visa.svg',
      name: 'payment-visa',
      width: 50,
      height: 20,
    },
    {
      id: 3,
      path: '/',
      image: '/assets/images/payment/paypal.svg',
      name: 'payment-paypal',
      width: 76,
      height: 20,
    },
    {
      id: 4,
      path: '/',
      image: '/assets/images/payment/jcb.svg',
      name: 'payment-jcb',
      width: 26,
      height: 20,
    },
    {
      id: 5,
      path: '/',
      image: '/assets/images/payment/skrill.svg',
      name: 'payment-skrill',
      width: 39,
      height: 20,
    },
  ],
}

export const footerContemporary = {
  widgets: [
    {
      id: 0,
      isCompanyIntroduction: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',

      lists: [
        {
          id: 1,
          title: 'link-instagram',
          path: 'https://www.instagram.com/redqinc/',
          icon: <IoLogoInstagram />,
        },
        {
          id: 2,
          title: 'link-twitter',
          path: 'https://twitter.com/redqinc',
          icon: <IoLogoTwitter />,
        },
        {
          id: 3,
          title: 'link-facebook',
          path: 'https://www.facebook.com/redqinc/',
          icon: <IoLogoFacebook />,
        },
        {
          id: 4,
          title: 'link-youtube',
          path: 'https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw',
          icon: <IoLogoYoutube />,
        },
      ],
    },
    {
      id: 1,
      widgetTitle: 'widget-title-social',
      lists: [
        {
          id: 1,
          title: 'link-instagram',
          path: 'https://www.instagram.com/redqinc/',
          icon: <IoLogoInstagram />,
        },
        {
          id: 2,
          title: 'link-twitter',
          path: 'https://twitter.com/redqinc',
          icon: <IoLogoTwitter />,
        },
        {
          id: 3,
          title: 'link-facebook',
          path: 'https://www.facebook.com/redqinc/',
          icon: <IoLogoFacebook />,
        },
        {
          id: 4,
          title: 'link-youtube',
          path: 'https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw',
          icon: <IoLogoYoutube />,
        },
      ],
    },
    {
      id: 2,
      widgetTitle: 'widget-title-account',
      lists: [
        {
          id: 1,
          title: 'link-my-profile',
          path: '/contact-us',
        },
        {
          id: 2,
          title: 'link-favorite-properties',
          path: '/',
        },
        {
          id: 3,
          title: 'link-messages',
          path: '/',
        },
        {
          id: 4,
          title: 'link-messages',
          path: '/',
        },
      ],
    },
    {
      id: 3,
      widgetTitle: 'widget-title-company',
      lists: [
        {
          id: 1,
          title: 'link-contact-us',
          path: '/contact-us',
        },
        {
          id: 2,
          title: 'link-privacy-policy',
          path: '/',
        },
        {
          id: 3,
          title: 'link-terms-conditions',
          path: '/terms-and-conditions',
        },
        {
          id: 4,
          title: 'link-copyright',
          path: '/',
        },
      ],
    },
    {
      id: 4,
      widgetTitle: 'widget-title-surveys',
      lists: [
        {
          id: 1,
          title: 'link-product-feedback',
          path: '/faq',
        },
        {
          id: 2,
          title: 'link-apply-intern',
          path: '/',
        },
        {
          id: 3,
          title: 'link-become-partner',
          path: '/',
        },
      ],
    },
    {
      id: 5,
      widgetTitle: 'widget-title-resources',
      lists: [
        {
          id: 1,
          title: 'link-privacy',
          path: '/privacy',
        },
        {
          id: 2,
          title: 'link-blog',
          path: '/terms',
        },
        {
          id: 3,
          title: 'link-return-policy',
          path: '/privacy',
        },
        {
          id: 4,
          title: 'link-site-map',
          path: '/',
        },
      ],
    },
  ],
  payment: [
    {
      id: 1,
      path: '/',
      image: '/assets/images/payment/mastercard.svg',
      name: 'payment-master-card',
      width: 34,
      height: 20,
    },
    {
      id: 2,
      path: '/',
      image: '/assets/images/payment/visa.svg',
      name: 'payment-visa',
      width: 50,
      height: 20,
    },
    {
      id: 3,
      path: '/',
      image: '/assets/images/payment/paypal.svg',
      name: 'payment-paypal',
      width: 76,
      height: 20,
    },
    {
      id: 4,
      path: '/',
      image: '/assets/images/payment/jcb.svg',
      name: 'payment-jcb',
      width: 26,
      height: 20,
    },
    {
      id: 5,
      path: '/',
      image: '/assets/images/payment/skrill.svg',
      name: 'payment-skrill',
      width: 39,
      height: 20,
    },
  ],
}
