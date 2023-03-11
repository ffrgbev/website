import { gsap } from "lib/gsap";
import { plainify } from "lib/utils/textConverter";
import Footer from "layouts/partials/Footer";
import Header from "layouts/partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}) => {
  const router = useRouter();
  const main = useRef();

  //gsap fade animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      //fade
      const fadeElements = document.querySelectorAll(".fade");
      fadeElements.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scrollTrigger: el,
          duration: 0.3,
        });
      });

      //gsap animation
      const elements = document.querySelectorAll(".animate");
      elements.forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            // markers: true,
          },
        });

        if (el.classList.contains("from-left")) {
          tl.from(el, {
            opacity: 0,
            x: -100,
          });
        } else if (el.classList.contains("from-right")) {
          tl.from(el, {
            opacity: 0,
            x: 100,
          });
        } else {
          tl.from(el, {
            opacity: 0,
            y: 100,
          });
        }
      });

      //background animation
      const animatedBgs = document.querySelectorAll(".bg-theme");
      animatedBgs.forEach((bg) => {
        gsap.to(bg, {
          scrollTrigger: {
            trigger: bg,
            toggleClass: "bg-animate",
            once: true,
          },
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : "Andromeda Light Nextjs"
          )}
        </title>

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* meta-description */}
        <meta
          name="description"
          content={plainify(description ? description : "Andromeda-light Nextjs Blog Template")}
        />

        {/* author from config.json */}
        <meta name="author" content="Themefisher" />

        {/* og-title */}
        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : "Andromeda Light Nextjs"
          )}
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={plainify(description ? description : "Andromeda-light Nextjs Blog Template")}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`/${router.asPath.replace("/", "")}`}
        />

        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={plainify(
            meta_title ? meta_title : title ? title : "Andromeda Light Nextjs"
          )}
        />

        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={plainify(description ? description : "Andromeda-light Nextjs Blog Template")}
        />

        {/* og-image */}
        <meta
          property="og:image"
          content={`/${image ? image : "images/og-image.png"}`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`/${image ? image : "images/og-image.png"}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {/* main site */}
      <main ref={main}>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
