import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoInstagram,
  IoMail,
} from "react-icons/io5";

const Social = () => {
  return (
    <ul className="social-icons mt-5">
      <li className="inline-block">
        <a
          aria-label="instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IoLogoInstagram />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="website"
          href="https://example.org"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IoGlobeOutline />
        </a>
      </li>
      <li className="inline-block">
        <a 
          aria-label="email" 
          href="mailto:mail@example.org"
        >
          <IoMail />
        </a>
      </li>
      <li className="inline-block">
        <a 
          aria-label="telephone" 
          href="tel:+491234567890"
        >
          <IoCall />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="location"
          href="https://example.org"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IoLocation />
        </a>
      </li>
    </ul>
    );
  };

export default Social;
