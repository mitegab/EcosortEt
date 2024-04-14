import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// Remove the unused import statement for 'Link'
// import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Join EcoSort and contribute to a cleaner environment through intelligent waste sorting, community engagement, and rewarding sustainability."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection
            imageUrl="/demo-illustration-1.svg"
            title="EcoSort: Transforming Waste Management for a Greener Future"
            overTitle="for the sake of the community"
          >
            <p>
              EcoSort revolutionizes waste management with its intelligent system, making it easier than ever to sort, recycle, and dispose
              of waste responsibly. Our smart bins automatically identify and categorize waste, eliminating the guesswork and promoting
              accurate sorting. With real-time fill-level monitoring, EcoSort ensures efficient collection, reducing overflowing bins and
              promoting cleaner communities. Join the movement towards a greener future by embracing sustainable waste management practices
              with EcoSort. Discover how you can contribute to a healthier planet and earn rewards for your responsible actions.
            </p>
          </BasicSection>
          <BasicSection
            imageUrl="/images/community-impact.svg"
            title="Empowering Communities"
            overTitle="Together We Make a Difference"
            reversed
          >
            <p>
              EcoSort fosters a sense of collective responsibility and empowers communities to work together towards a cleaner and more
              sustainable future. By promoting responsible waste management practices, we contribute to healthier environments and improved
              quality of life for everyone.
            </p>
            <ul>
              <li>Reduced litter and pollution</li>
              <li>Increased recycling rates</li>
              <li>Enhanced community aesthetics</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
