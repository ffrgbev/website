import ImageFallback from "layouts/components/ImageFallback";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="navbar-brand block">
      <ImageFallback
        width="480"
        height="68"
        src="images/logo.svg"
        alt="Andromeda Light Nextjs"
        priority
        style={{ height: "34px", width: "240px" }}
      />
    </Link>
  );
};

export default Logo;
