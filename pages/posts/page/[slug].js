import Pagination from "layouts/components/Pagination";
import Base from "layouts/Baseof";
import Banner from "layouts/components/Banner";
import Cta from "layouts/components/Cta";
import { getListPage, getSinglePage } from "lib/contentParser";
import { gsap } from "lib/gsap";
import Post from "layouts/partials/Post";
import { useEffect, useRef } from "react";

// blog pagination
const BlogPagination = ({
  postIndex,
  posts,
  authors,
  currentPage,
  pagination,
}) => {
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;
  const postsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(postsRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Base title={title}>
      <section className="section pt-0">
        <Banner title={title} />
        <div className="container">
          <div
            className="row justify-center pt-20 pb-16 opacity-0"
            ref={postsRef}
          >
            {currentPosts.map((post, i) => (
              <div key={`key-${i}`} className="mb-8 lg:col-5">
                <Post post={post} authors={authors} />
              </div>
            ))}
          </div>
          <Pagination
            section="posts"
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </section>
      {/* CTA */}
      <Cta />
    </Base>
  );
};

export default BlogPagination;

// get blog pagination slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage('content/posts');
  const allSlug = getAllSlug.map((item) => item.slug);
  const totalPages = Math.ceil(allSlug.length / 6);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get blog pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const posts = getSinglePage('content/posts');
  const postIndex = await getListPage(`content/posts/_index.md`);

  return {
    props: {
      pagination: 6,
      posts: posts,
      currentPage: currentPage,
      postIndex: postIndex,
    },
  };
};
