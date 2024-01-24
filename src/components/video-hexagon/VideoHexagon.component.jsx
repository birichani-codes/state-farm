import React from 'react';
import { VideoContainer, VideoElement } from '../video-hexagon/VideoHexagon.styles'; // Import the styling object

const VideoHexagon = ({ videoUrl, ...props }) => {
  return (
    <VideoContainer {...props}>
      <VideoElement controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoElement>
    </VideoContainer>
  );
};

export default VideoHexagon;
