import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Cookies policy">
      <CookiesPolicyContainer>
        <RichText>
          <p>
            EcoSort thrives on community participation! By reporting undisposed waste, you contribute directly to a cleaner environment and
            a more responsible community. Your reports help ensure efficient waste collection, prevent littering and pollution, and promote
            sustainable waste management practices. As a token of our appreciation, you will earn rewards for each validated report you
            submit. These rewards can be redeemed for various benefits, making your contribution even more impactful. Let&apos;s work
            together to build a cleaner and greener future! Start reporting undisposed waste today and make a difference.
          </p>
          <br />
          <strong>How to Report Undisposed Waste:</strong>
          <ul>
            <li>
              Ensure you are at the exact location of the undisposed waste before submitting a report. Accurate location data is crucial for
              efficient collection.
            </li>
            <li>Select the appropriate waste category to help optimize the sorting and recycling process.</li>
            <li>If possible, provide a clear photo of the waste to assist waste collectors in identifying and handling it properly.</li>
            <li>Double-check all information before submitting your report to ensure accuracy and avoid any confusion.</li>
          </ul>
          <table>
            <tr>
              <th>Feature</th>
              <th>Description</th>
              <th>Benefits</th>
              <th>Advantages</th>
            </tr>
            <tr>
              <td>Waste Sorting</td>
              <td>
                Ecosort intelligently sorts waste based on its type, ensuring efficient management from initial disposal to final
                processing.
              </td>
              <td>Reduces contamination, optimizes recycling, and minimizes environmental impact.</td>
              <td>Enhances sustainability efforts, reduces landfill waste, and promotes a cleaner environment.</td>
            </tr>
            <tr>
              <td>Smart Notification</td>
              <td>
                When the smart dustbin reaches maximum capacity, it automatically notifies local waste collectors, providing precise
                location and waste type details.
              </td>
              <td>Facilitates timely waste collection, preventing overflow and maintaining cleanliness.</td>
              <td>Improves waste management efficiency, enhances community cleanliness, and reduces odor and pest issues.</td>
            </tr>
            <tr>
              <td>Community Engagement</td>
              <td>Allows users to report undisposed waste outside their homes, incentivizing participation through rewards.</td>
              <td>
                Encourages community involvement in maintaining cleanliness and contributes to a sense of environmental responsibility.
              </td>
              <td>Fosters a culture of waste awareness, promotes civic engagement, and strengthens community bonds.</td>
            </tr>
          </table>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
