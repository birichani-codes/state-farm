import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
`;

export const VideoElement = styled.video`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
  object-fit: cover;
`;

const videoHexagonStyles = {
  container: {
    position: 'relative',
  },
  video: {
    width: '70%',
    height: '70%',
    position: 'absolute',
    top: '15%',
    left: '15%',
    objectFit: 'cover',
  },
};

export default videoHexagonStyles;
