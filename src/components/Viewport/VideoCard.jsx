import React from 'react';
import ReactPlayer from 'react-player';
import { SwiperSlide } from 'react-swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Card = ({ videoSrc, title }) => {
  return (
    <SwiperSlide key={videoSrc}>
      <div className="bg-red-400 rounded-2xl h-full w-[480px] shadow-md">
        <ReactPlayer
          url={videoSrc}
          muted={true} // Consider adding a mute toggle
          playing={true} // Adjust playback behavior as needed
          width="100%"
          height="200px" // Adjust height as needed
          controls={true} // Optionally show video controls
        />
        <div className="px-4 py-2 flex items-center justify-between">
          <p className="text-lg font-bold">{title}</p>
          {/* Add other UI elements like like button, progress bar, etc. */}
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Card;
