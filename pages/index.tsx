import type { NextPage } from "next";
import Head from "next/head";
import Layout from "Components/Layout";
import PostImage from "Components/PostImage";
import imagePost from "../public/images/01.jpg";
import imagePost2 from "../public/images/02.jpg";
import PostContentCard from "Components/PostContentCard";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Okan Jauhay</title>
        <meta name='description' content='a pesonal blog by okan jauhay' />
      </Head>

      <section className='bg-secondary'>
        <div className='container mx-auto px-6 sm:px-0 flex justify-center'>
          <div className='py-6 sm:py-12'>
            <div className='mb-10'>
              <PostImage href='/first-post' src={imagePost} />
            </div>
            <PostContentCard align='center' />
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto py-24 px-6 sm:px-0 flex justify-center'>
          <div className='columns-5xl'>
            <div className='mb-12'>
              <h2 className='title-with-line'>All Blog Postes</h2>
            </div>
            {[1, 2, 3].map(i => (
              <article
                key={i}
                className='mb-10 block sm:flex gap-x-0 sm:gap-x-4 md:gap-x-6 lg:gap-x-10'
              >
                <div className='relative basis-full md:basis-9/12 lg:basis-1/2'>
                  <PostImage
                    href='/'
                    className='static sm:absolute left-0 bottom-0 w-full lg:static'
                    src={imagePost2}
                  />
                </div>
                <div className='basis-auto block sm:flex items-end'>
                  <PostContentCard />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
