import React, { useState, useRef } from "react";
import Image from "next/image";

interface VoiceItemProps {
  Vbg: any;
  Vimg: any;
  Vtitle: any;
  Vaudio: any;
}

const VoiceSliderItem = ({ Vbg, Vimg, Vtitle, Vaudio }: VoiceItemProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`voice__slider-single ${Vbg}`}>
      <div className="voice__slider-single-thumb">
        <Image src={Vimg} priority alt="Image" />
      </div>
      <div className="voice__slider-single-content">
        <h5 className="h5">{Vtitle}</h5>
        <div className="voice__slider-single-content-play">
          <button
            aria-label="play audio"
            className="play-track"
            onClick={handlePlayToggle}
          >
            <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
          </button>
          <audio ref={audioRef} className="player" src={Vaudio}></audio>
        </div>
      </div>
    </div>
  );
};

export default VoiceSliderItem;
