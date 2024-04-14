import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Intelligent Waste Sorting',
    description: 'EcoSort automatically sorts your waste based on its type, making recycling and disposal effortless.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Smart Fill-Level Detection',
    description:
      'Our smart bins monitor their fill levels and notify local waste collectors when they are full, ensuring timely and efficient collection.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Precise Location Tracking',
    description:
      'EcoSort provides real-time location data of waste bins, allowing collectors to optimize their routes and collect waste efficiently.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Community-Driven Reporting',
    description: 'Report undisposed waste in your surroundings and earn rewards while contributing to a cleaner environment.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Rewarding Sustainability',
    description:
      'EcoSort rewards users for responsible waste disposal and reporting, encouraging community participation in building a greener future.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Data-Driven Insights',
    description:
      'EcoSort provides valuable data on waste generation and disposal patterns, helping communities optimize waste management strategies.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Educational Resources',
    description: 'Access educational content and tips on sustainable waste management practices to learn and contribute more effectively.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Positive Community Impact',
    description:
      'EcoSort fosters community engagement and collective responsibility, leading to cleaner neighborhoods and a greener environment.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Smart Home Integration',
    description: 'Connect EcoSort with other smart home devices for a seamless and automated waste management experience.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
