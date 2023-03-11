import Social from "layouts/components/Social";
import Logo from "layouts/components/Logo";
import { markdownify } from "lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify("Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat.", "p", "mt-3")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Socials</h3>
            <div className="mt-5">
              <Link href={`mailto:info@andromeda.io`}>info@andromeda.io</Link>
              <Social />
            </div>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            <ul className="mt-5 leading-10">
              <li>
                <Link className=" hover:text-primary hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className=" hover:text-primary hover:underline" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className=" hover:text-primary hover:underline" href="/terms-policy">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Location & Contact</h3>
            <ul className="mt-5 leading-10">
              <li>{markdownify("2118 Thornridge Cir. Syracuse, Connecticut 35624")}</li>
                <li><Link href={`tel:+887887998}`}>+887887998</Link></li>
            </ul>
          </div>
        </div>
        <div className=" py-6 text-center">
          {markdownify("Designed & Developed By [Themefisher](https:www.themefisher.com)", "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
