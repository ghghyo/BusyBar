import React, { Fragment, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import FooterLight from "./footer/FooterLight";
import FooterTwo from "./footer/FooterTwo";
import FooterThree from "./footer/FooterThree";
import FooterTwoLight from "./footer/FooterTwoLight";
import FooterThreeLight from "./footer/FooterThreeLight";
import ScrollProgress from "./ScrollProgress";

type layoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

const Layout = ({ children, header, footer }: layoutProps) => {
  const router = useRouter();

  let additionalClasses = " ";

  if (router.pathname === "/") {
    // additionalClasses = " home-dark";
    additionalClasses = " home-two-light";
  } else if (router.pathname === "/index-light") {
    additionalClasses = " home-light";
  } else if (router.pathname === "/index-two") {
    additionalClasses = " home-two-dark";
  } else if (router.pathname === "/index-two-light") {
    additionalClasses = " home-two-light";
  } else if (router.pathname === "/index-three") {
    additionalClasses = " home-three-dark";
  } else if (router.pathname === "/index-three-light") {
    additionalClasses = " home-three-light";
  }

  const combinedClasses = `${additionalClasses} my-app`;

  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/busybarlogo.png" type="image/x-icon" />
        <title>BusyBar</title>
        <meta name="keywords" content="bar, ai, nightlife" />
        <meta name="description" content="AI Busiest Bar Tool" />
      </Head>
      <div className={`${combinedClasses}${openNav ? " body-active" : " "}`}>
        {header && (
          <Header
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        <main>{children}</main>
        {footer === 1 && <Footer />}
        {footer === 2 && <FooterLight />}
        {footer === 3 && <FooterTwo />}
        {footer === 4 && <FooterTwoLight />}
        {footer === 5 && <FooterThree />}
        {footer === 6 && <FooterThreeLight />}
        <ScrollProgress />
      </div>
    </Fragment>
  );
};

export default Layout;
