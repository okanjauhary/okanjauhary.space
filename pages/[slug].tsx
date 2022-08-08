import Layout from "Components/Layout";
import PostImage from "Components/PostImage";
import { NextPage } from "next";
import Head from "next/head";
import imagePost from "../public/images/01.jpg";
import imagePost2 from "../public/images/02.jpg";
import PostContentCard from "Components/PostContentCard";
import MyButton from "Components/MyButton";
import {
  AcademicCapIcon,
  ArchiveIcon,
  CakeIcon,
} from "@heroicons/react/outline";

const DetailPost: NextPage = () => {
  return (
    <Layout headerGapColor='bg-white'>
      <Head>
        <title>Detail Post</title>
      </Head>

      <article className='bg-white'>
        <div className='container mx-auto py-14 px-6 sm:px-0 flex justify-center'>
          <div className='columns-5xl py-0 sm:py-20 text-center px-0 md:px-14'>
            <p className='text-gray-200 uppercase mb-8 text-sm sm:text-base'>
              03 min read
            </p>
            <h1 className='title-with-line before:left-1/2 before:translate-x-2/1'>
              Stay focused by always asking yourself one key question
            </h1>
          </div>
        </div>
      </article>

      <section className='bg-secondary relative'>
        <div className='before:content-[""] before:w-full before:h-28 before:bg-white before:absolute before:top-0 before:left-0'>
          <div className='container mx-auto pb-14 px-6 sm:px-0 flex justify-center'>
            <div className='columns-5xl'>
              <div className='mb-14 sm:mb-24'>
                <PostImage href='/' src={imagePost} />
              </div>

              <div className='flex flex-col sm:flex-row'>
                <div className='flex-none w-full sm:w-48 order-2 sm:order-1'>
                  <div className='static sm:sticky top-40 mt-5 sm:mt-0'>
                    <span className='inline-block mb-4 text-gray-300'>
                      SHARE
                    </span>
                    <ul className='m-0 list-none p-0 flex gap-4 flex-row sm:flex-col'>
                      <li>
                        <MyButton icon small>
                          <AcademicCapIcon className='h-6 w-6 text-gray-300' />
                        </MyButton>
                      </li>
                      <li>
                        <MyButton icon small>
                          <ArchiveIcon className='h-6 w-6 text-gray-300' />
                        </MyButton>
                      </li>
                      <li>
                        <MyButton icon small>
                          <CakeIcon className='h-6 w-6 text-gray-300' />
                        </MyButton>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='grow order-1 sm:order-2'>
                  <article className='post-content'>
                    <h3>We all have goals</h3>
                    <p>
                      We all have goals. They might be as simple as cleaning the
                      house or as ambitious as winning an Olympic medal. Setting
                      goals is easy, but achieving them is hard, as we let
                      ourselves get distracted with all the other stuff life
                      throws at us.
                    </p>

                    <p>
                      Now we’ve all been taught that focus is essential if we
                      want to reach our goals. But I’ve heard that phrase so
                      many times it started to feel a bit empty. That was until
                      last week, when I read a story about a rowing team that
                      wanted to win a particular race. I don’t recall the
                      specifics, but I remember how they applied focus to
                      everything they did.
                    </p>

                    <h4>Every time they had to make decisions</h4>
                    <p>
                      Every time they had to make decisions, they all asked
                      themselves and each other: Does it make the boat go
                      faster? It was that simple. When someone asked: “Do we
                      need new shirts for the team?” The reply would be: “Does
                      it make the boat go faster? If yes, get me those new
                      shirts today. If not or uncertain, new shirts are a
                      distraction we don’t need.”
                    </p>

                    <h4>The real challenge here</h4>
                    <p>
                      The real challenge here, of course, is finding that one
                      single thing you want to achieve. When you’d ask a rowing
                      team what their main goal is, they might first tell you:
                      “We want to improve teamwork,” We want to participate in
                      the Olympics,” or “We want to win the race.”
                    </p>

                    <hr className='my-14 h-[1px] border-0 text-inherit bg-current opacity-20' />

                    <p className='text-gray-200 text-sm'>
                      Published September 26, 2021 - 11:09 PM UTC
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='container mx-auto py-24 px-6 sm:px-0 flex justify-center'>
          <div className='columns-5xl'>
            <div className='mb-8 sm:mb-12'>
              <h2 className='title-with-line'>Relates Posted</h2>
            </div>

            <div className='block sm:flex columns-0 sm:columns-2 gap-x-0 sm:gap-x-20'>
              <article className='mb-8 sm:mb-0'>
                <div className='mb-10'>
                  <PostImage href='/first-post' src={imagePost2} />
                </div>
                <PostContentCard align='center' />
              </article>
              <article>
                <div className='mb-10'>
                  <PostImage href='/first-post' src={imagePost2} />
                </div>
                <PostContentCard align='center' />
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailPost;
