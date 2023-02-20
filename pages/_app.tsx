import type { AppProps } from 'next/app'



import Head from "next/head";
import '@/styles/bootstrap.min.css'
import '@/styles/slider/sliderItem.css'
import '@/styles/slider/contactSlider.css'
import '@/styles/slider/customizeSlider.css'
import '@/styles/button.css'
import '@/styles/progress.css'
import '@/styles/navbar/nav.css'
import '@/styles/chatComments.css'
import '@/styles/responsive.css'
import '@/styles/globals.css'
import '@/styles/animate_icon.scss'

import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
// add now
// import { useState } from "react";
// import { gsap } from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { SmootherContext } from "../components/SmootherContext";
// import { useIsomorphicLayoutEffect } from "../components/useIsomorphicLayoutEffect";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
export default function App({ Component, pageProps }: AppProps) {
  // let [smoother, setSmoother] = useState<any>(null);
  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  //   let smoother = ScrollSmoother.create({
  //     smooth: 2,
  //     normalizeScroll: false, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  //     ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  //     effects: true,
  //     // preventDefault: true,
  //   });

  //   setSmoother(smoother);
  // }, []);

  return (
    <div dir="rtl">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="your, tags" />
        <meta name="description" content="150 words" />
        <meta name="copyright" content="company name" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
        <meta name="abstract" content="" />
        <meta name="topic" content="" />
        <meta name="summary" content="" />
        <meta name="Classification" content="Business" />
        <meta name="author" content="name, email@hotmail.com" />
        <meta name="designer" content="" />
        <meta name="reply-to" content="email@hotmail.com" />
        <meta name="owner" content="" />
        <meta name="url" content="http://www.websiteaddrress.com" />
        <meta name="identifier-URL" content="http://www.websiteaddress.com" />
        <meta name="directory" content="submission" />
        <meta name="category" content="" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="subtitle" content="This is my subtitle" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="date" content="Sep. 27, 2010" />
        <meta name="search_date" content="2010-09-27" />
        <meta name="DC.title" content="Unstoppable Robot Ninja" />
        <meta name="ResourceLoaderDynamicStyles" content="" />
        <meta name="medium" content="blog" />
        <meta
          name="syndication-source"
          content="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="original-source"
          content="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"
        />
        <meta
          name="verify-v1"
          content="dV1r/ZJJdDEI++fKJ6iDEl6o+TMNtSu0kv18ONeqM0I="
        />
        <meta name="y_key" content="1e39c508e0d87750" />
        <meta name="pageKey" content="guest-home" />
        <meta itemProp="name" content="jQTouch" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
      </Head>

      <Script
        src="/js/bootstrap.bundle.min.css"
        crossOrigin="anonymous"
      />
      <Script src="/js/hide-navbar.js" type="text/javascript" />

      <Navbar />
      {/* <SmootherContext.Provider value={smoother}> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
      {/* </SmootherContext.Provider> */}
    </div>
  );
}
