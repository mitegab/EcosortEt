import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Discover Flexible Pricing Plans for EcoSort</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Starter Pack"
          description="Ideal for households and small businesses"
          benefits={['1 EcoSort device', 'Basic waste sorting functionality', 'Limited notifications', 'Community support']}
        >
          Free<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Professional Plan"
          description="Suitable for medium-sized enterprises"
          benefits={['5 EcoSort devices', 'Advanced waste sorting capabilities', 'Real-time notifications', 'Priority support']}
          isOutlined
        >
          2999 Birr<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Enterprise Solution"
          description="Tailored for large-scale operations"
          benefits={[
            'Unlimited EcoSort devices',
            'Customizable waste sorting options',
            '24/7 support',
            'Dedicated account manager',
            'Integration with third-party systems',
          ]}
        >
          Contact Us<span> for Pricing</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
