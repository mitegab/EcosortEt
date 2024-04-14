import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Explore Frequently Asked Questions about EcoSort</SectionTitle>
      <Accordion title="How does EcoSort manage waste disposal efficiently?">
        EcoSort utilizes state-of-the-art IoT technology integrated into smart dustbins. These dustbins automatically sort waste based on
        its type and volume. When a dustbin reaches its maximum capacity, it sends a notification to local waste collectors, providing them
        with precise location details and information about the types of waste contained. This streamlines the waste collection process,
        ensuring timely disposal and efficient management of waste.
      </Accordion>
      <Accordion title="What are the key benefits of using EcoSort?">
        EcoSort offers numerous benefits for both individuals and communities. Firstly, it simplifies waste management by automating the
        sorting and disposal process, reducing the time and effort required for manual handling. Secondly, EcoSort promotes environmental
        sustainability by encouraging proper waste disposal practices and reducing the amount of waste sent to landfills. Additionally,
        EcoSort enhances community engagement by allowing users to report waste outside their homes, fostering a sense of responsibility and
        incentivizing participation through rewards.
      </Accordion>
      <Accordion title="How does EcoSort contribute to environmental sustainability?">
        EcoSort plays a crucial role in promoting environmental sustainability through several mechanisms. Firstly, by efficiently sorting
        and managing waste, EcoSort reduces the amount of recyclable materials that end up in landfills, thereby conserving natural
        resources and reducing environmental pollution. Secondly, EcoSort encourages proper waste disposal practices within communities,
        leading to cleaner surroundings and healthier ecosystems. Moreover, by incentivizing user participation and rewarding responsible
        behavior, EcoSort fosters a culture of environmental stewardship and collective action towards sustainability goals.
      </Accordion>
      <Accordion title="Is EcoSort suitable for both residential and commercial use?">
        Yes, EcoSort is designed to cater to the waste management needs of both residential and commercial settings. Whether it&apos;s a
        household looking to streamline its waste disposal process or a business seeking to improve its environmental footprint, EcoSort
        offers customizable solutions tailored to various user requirements. With its scalable and adaptable design, EcoSort can efficiently
        manage waste in diverse environments, from individual homes to large commercial establishments.
      </Accordion>
      <Accordion title="Can users report waste outside their homes using EcoSort?">
        Absolutely! EcoSort empowers users to actively participate in maintaining clean and hygienic surroundings by reporting waste outside
        their homes. Through the EcoSort app or platform, users can easily submit reports about litter or uncollected waste, providing
        essential information such as location and type of waste. This feature not only helps expedite the waste collection process but also
        fosters community engagement and collaboration in addressing environmental challenges. Furthermore, to incentivize and reward
        responsible behavior, EcoSort offers incentives or rewards to users who actively contribute to waste reporting and management
        efforts.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
