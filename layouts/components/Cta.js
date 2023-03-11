import { markdownify } from "lib/utils/textConverter";
import Link from "next/link";
import Circle from "layouts/components/Circle";
import ImageFallback from "layouts/components/ImageFallback";

function Cta() {
  return (
    <section className="cta section pt-0">
      <div className="container-xl">
        <div className="section relative px-4 text-center">
          <div className="animate">
            {markdownify("Get Andromeda Now", "h2", "section-title")}
            {markdownify("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas </br> Werat viverra id et aliquet. vulputate egestas sollicitudin.", "p", "mt-10")}
            <Link href="https://themefisher.com/products/andromeda-light-nextjs" className="btn btn-primary mt-10">
            Download The Theme
            </Link>
          </div>
          <div className="bg-theme animated-bg absolute top-0 left-0 w-full after:hidden">
            <ImageFallback
              src="/images/wave.svg"
              fill={true}
              sizes="100vw"
              alt="bg wave"
            />
            <Circle
              className="left-[10%] top-12"
              width={32}
              height={32}
              fill={false}
            />
            <Circle className="left-[3%] bottom-[13%]" width={85} height={85} />
            <Circle
              className="left-[15%] bottom-[35%]"
              width={47}
              height={47}
              fill={false}
            />

            <Circle className="right-[12%] top-[12%]" width={20} height={20} />
            <Circle
              className="right-[2%] bottom-[30%]"
              width={73}
              height={73}
              fill={false}
            />
            <Circle
              className="right-[19%] bottom-[16%]"
              width={37}
              height={37}
              fill={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
