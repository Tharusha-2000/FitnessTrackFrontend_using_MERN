import React from 'react';
import styled from 'styled-components';
import TT from '../utils/Images/TT.png';

// Main container and wrapper styles
// Main container with a background image and ash color overlay
const Container = styled.div`
  flex: 1;
  height: 100vh;  /* Full viewport height */
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: auto;

  /* Background Image with smooth gradient overlay */
  background: linear-gradient(
      to bottom, 
      rgba(255, 255, 255, 0.8),  /* Start with a white ash color */
      rgba(255, 255, 255, 0.4)   /* Gradually fade to transparent */
    ),
    url(${TT});  /* Set the background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

// Card component styling with responsive image control
const Card = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;  // Hides the image on smaller screens
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Blogs = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>5 Fitness Bloggers to Follow in 2024</h1>
          <Section>
            <p>
              The online fitness community has expanded significantly, with "Fitness" becoming a popular hashtag on Instagram. During the pandemic, 33% of consumers streamed at-home fitness videos. Fitness blogs are an excellent resource for sharing and consuming fitness content. This article highlights top fitness bloggers who offer inspiration and valuable insights for anyone interested in health and fitness.
            </p>
          </Section>
        </Header>

        {/* Card 1 */}
        <Card>
          <Image src="https://firebasestorage.googleapis.com/v0/b/fitnaseetracking.appspot.com/o/Breaking%20muscle.jpg?alt=media&token=c2c9dd4a-bef2-41e9-aac1-80fe28348795" alt="Breaking Muscle" />
          <Content>
            <Section>
              <h1>1. Breaking Muscle – Chris Colucci and Robert Zeglinski</h1>
              <Paragraph>
                <Link href="https://breakingmuscle.com/" target="_blank" rel="noopener noreferrer">Breaking Muscle</Link> is one of the leading fitness blogs on the internet. Focused on strength sports — like weightlifting, powerlifting, CrossFit, and Strongman — it provides readers with advice on how to build muscle, including training tips and nutrition information.
              </Paragraph>
              <Paragraph>
                The blog has workout guides for each muscle group, reviews of equipment and supplements, and advice on how to work out safely and effectively. It aims to help its readers achieve their fitness goals while improving their overall health.
              </Paragraph>
            </Section>
          </Content>
        </Card>

        {/* Card 2 */}
        <Card>
          <Image src="https://firebasestorage.googleapis.com/v0/b/fitnaseetracking.appspot.com/o/NF.webp?alt=media&token=d647b316-4077-4544-92c5-7921f9c13e1e" alt="Nerd Fitness" />
          <Content>
            <Section>
              <h1>2. Nerd Fitness – Steve Kamb</h1>
              <Paragraph>
                <Link href="https://www.nerdfitness.com/blog/" target="_blank" rel="noopener noreferrer">Nerd Fitness</Link> aims to help readers have a good time while getting fit. Its founder, Steve Kamb, started the site in 2009 to “provide a fun place for nerds to learn about health and fitness, chat about gaming and comics, and live better lives.”
              </Paragraph>
              <Paragraph>
                Nerd Fitness provides beginner guides to various health and fitness topics, including nutrition and specific workouts. It focuses on building a strong community based on shared interests.
              </Paragraph>
            </Section>
          </Content>
        </Card>

        {/* Card 3 */}
        <Card>
          <Image src="https://firebasestorage.googleapis.com/v0/b/fitnaseetracking.appspot.com/o/gg.webp?alt=media&token=84448da9-abce-4593-aa26-9e96fd4f6dbf" alt="Sweat" />
          <Content>
            <Section>
              <h1>3. Sweat – Kayla Itsines</h1>
              <Paragraph>
                <Link href="https://sweat.com/blogs/news" target="_blank" rel="noopener noreferrer">Sweat</Link>, led by Australian personal trainer Kayla Itsines, has helped millions of people worldwide get fit and healthy.
              </Paragraph>
              <Paragraph>
                Sweat focuses on providing women with workouts that can be done in the comfort of their own homes without any extra equipment or gym memberships.
              </Paragraph>
            </Section>
          </Content>
        </Card>

        {/* Card 4 */}
        <Card>
          <Image src="https://firebasestorage.googleapis.com/v0/b/fitnaseetracking.appspot.com/o/rr.jpg?alt=media&token=eb48c764-48e7-43e8-ab32-2f0049644986" alt="The Body Coach" />
          <Content>
            <Section>
              <h1>4. The Body Coach – Joe Wicks</h1>
              <Paragraph>
                <Link href="https://www.thebodycoach.com/blog/" target="_blank" rel="noopener noreferrer">The Body Coach</Link> is a popular fitness blog founded by British personal trainer Joe Wicks. The blog focuses on delivering short but effective HIIT workouts.
              </Paragraph>
              <Paragraph>
                Joe’s approach to health and fitness has become incredibly popular, offering exclusive content like live workout sessions.
              </Paragraph>
            </Section>
          </Content>
        </Card>

        {/* Card 5 */}
        <Card>
          <Image src="https://firebasestorage.googleapis.com/v0/b/fitnaseetracking.appspot.com/o/hh.png?alt=media&token=af441b90-00f2-4b68-bcc7-237f6a47f54d" alt="Fit Bottomed Girls" />
          <Content>
            <Section>
              <h1>5. Fit Bottomed Girls – Jennipher Walters and Kristen Seymour</h1>
              <Paragraph>
                <Link href="https://fitbottomedgirls.com/" target="_blank" rel="noopener noreferrer">Fit Bottomed Girls</Link> promotes body positivity with the slogan “you can’t hate yourself healthy.” It provides readers with accessible workouts, nutrition advice, and wellness content.
              </Paragraph>
            </Section>
          </Content>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Blogs;

