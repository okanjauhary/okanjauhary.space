import Layout from "Components/Layout";
import PageHeader from "Components/PageHeader";
import Head from "next/head";
import Image from "next/image";
import imageProfile from "../public/images/author.jpg";

const AboutMe = () => {
  return (
    <Layout headerGapColor='bg-white'>
      <Head>
        <title>About Me</title>
      </Head>

      <PageHeader title='About Me' subTitle="I'm Okan" />

      <section className='bg-secondary'>
        <div className='container mx-auto px-6 sm:px-0 flex justify-center'>
          <div className='w-full sm:w-11/12 md:w-4/5 mx-auto text-center py-14 sm:py-24'>
            <h2 className='title-with-line text-3xl before:left-1/2 before:translate-x-2/1 mb-10'>
              Biography
            </h2>
            <p className='text-lg'>
              For almost 5 years now, I have been creating web and mobile
              experiences and I have fun every day creating interactions in my
              interfaces. As a Digital Designer, I am here to make you stand out
              in the digital world. The combination of my passion for design and
              your vision will ensure a great end result.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='container mx-auto px-6 sm:px-0 flex justify-center'>
          <div className='columns-6xl'>
            <div className='flex flex-col sm:flex-row py-14 sm:py-28 gap-x-0 sm:gap-x-14 md:gap-x-28'>
              <div className='w-full sm:w-2/5 px-10 sm:px-0 box-border'>
                <div className='overflow-hidden rounded-full static sm:sticky top-40 mb-20 sm:mb-0'>
                  <Image src={imageProfile} layout='responsive' />
                </div>
              </div>
              <div className='w-full sm:w-3/5'>
                <section className='mb-10'>
                  <div className='mb-5'>
                    <h2 className='title-with-line text-3xl'>Education</h2>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='mb-6'>
                      <small>2020</small>
                      <h3 className='text-2xl my-1 font-tertiary'>
                        Art Direction
                      </h3>
                      <p className='text-gray-300'>Sint Lucas University</p>
                    </div>
                    <div className='mb-6'>
                      <small>2018</small>
                      <h3 className='text-2xl my-1 font-tertiary'>
                        Art Direction
                      </h3>
                      <p className='text-gray-300'>Sint Lucas University</p>
                    </div>
                    <div className='mb-6'>
                      <small>2014</small>
                      <h3 className='text-2xl my-1 font-tertiary'>
                        Art Direction
                      </h3>
                      <p className='text-gray-300'>Sint Lucas University</p>
                    </div>
                  </div>
                </section>

                <section className='mb-10'>
                  <div className='mb-5'>
                    <h2 className='title-with-line text-3xl'>Experience</h2>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='mb-6'>
                      <small>2020</small>
                      <h3 className='text-2xl my-1 font-tertiary'>
                        Art Direction
                      </h3>
                      <p className='text-gray-300'>Sint Lucas University</p>
                    </div>
                    <div className='mb-6'>
                      <small>2018</small>
                      <h3 className='text-2xl my-1 font-tertiary'>
                        Art Direction
                      </h3>
                      <p className='text-gray-300'>Sint Lucas University</p>
                    </div>
                    <div className='mb-6'>
                      <small>2014</small>
                      <h3 className='text-2xl my-1 font-tertiary'>
                        Art Direction
                      </h3>
                      <p className='text-gray-300'>Sint Lucas University</p>
                    </div>
                  </div>
                </section>

                <section className='mb-10 grid grid-cols-2'>
                  <div>
                    <div className='mb-5'>
                      <h2 className='title-with-line text-3xl'>Skills</h2>
                    </div>
                    <p className='text-lg mb-4 text-gray-900'>React JS</p>
                    <p className='text-lg mb-4 text-gray-900'>Vue JS</p>
                    <p className='text-lg mb-4 text-gray-900'>
                      Web Development
                    </p>
                    <p className='text-lg mb-4 text-gray-900'>
                      HTML - CSS - Javascript
                    </p>
                  </div>

                  <div>
                    <div className='mb-5'>
                      <h2 className='title-with-line text-3xl'>Tools</h2>
                    </div>
                    <p className='text-lg mb-4 text-gray-900'>React JS</p>
                    <p className='text-lg mb-4 text-gray-900'>Vue JS</p>
                    <p className='text-lg mb-4 text-gray-900'>
                      Web Development
                    </p>
                    <p className='text-lg mb-4 text-gray-900'>HTML/CSS</p>
                    <p className='text-lg mb-4 text-gray-900'>Javascript</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMe;
