
import React from 'react';
import styled from 'styled-components';
import TT from '../utils/Images/TT.png';

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

// Simplified Card for video embedding
const VideoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-basis: 40%;  // Reduce the size of the videos
  border-radius: 10px;  // Add rounded corners
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);  // Add a subtle shadow
 
`;

const Tutorial = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/FB5-7tIiX-I",
    "https://www.youtube.com/embed/-hSma-BRzoo",
    "https://www.youtube.com/embed/7KSNmziMqog",
    "https://www.youtube.com/embed/CP9n_Hm4FCE",
  ];

  return (
    <Container>
      <Wrapper>
        {videoLinks.map((videoUrl, index) => (
          <VideoCard key={index}>
           <iframe 
              width="100%"  // The iframe will take up the full width of the card
              height="315" 
              src={videoUrl} 
              title={`YouTube video player ${index + 1}`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </VideoCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Tutorial;
