import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../../components/hexagon-component/hexagon-component';
import VideoHexagon from '../../components/video-hexagon/VideoHexagon.component'; // Import your VideoHexagon component

const Home = () => {
  return (
    <div>
      {/* Video hexagon */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Replace "your_video_url_here" with the actual video URL */}
        <VideoHexagon videoUrl="https://www.example.com/your_video.mp4" />
      </div>

      {/* Other hexagons */}
      <App />

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default Home;
