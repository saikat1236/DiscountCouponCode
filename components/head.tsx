"use client";

import Head from "next/head";

export default function CouponSeo({ coupon }: { coupon: any }) {
  const title = `${coupon.title} | ${coupon.store} Coupons & Promo Codes`;
  const description = `${coupon.description} | Save now with ${coupon.discount} off. Verified ${coupon.store} discounts for FMGE, NEET PG, and more!`;
  const keywords = `${coupon.store}, ${coupon.title}, ${coupon.discount}, ${coupon.store} promo code, ${coupon.store} discount, ${coupon.store} coupon, NEET PG discount codes, FMGE offers`;

  const canonicalUrl = `https://neetpgandfmgediscountcode.com/store/${coupon.storeSlug}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={coupon.logo ? `https://neetpgandfmgediscountcode.com${coupon.logo}` : "https://neetpgandfmgediscountcode.com/default-image.jpg"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={coupon.logo ? `https://neetpgandfmgediscountcode.com${coupon.logo}` : "https://neetpgandfmgediscountcode.com/default-image.jpg"} />
    </Head>
  );
}
