import React, { useState, useRef } from "react";
import Image from "next/image";
interface CloneProps {
  img: any;
  audio: any;
}
const CloneItem = ({ img, audio }: CloneProps) => {
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
    <div className="clone__thumb-single">
      <i className="fa-solid fa-signal"></i>
      <div className="thumb">
        <Image src={img} priority alt="Image" />
      </div>
      <div className="content">
        <p>The Upstairs</p>
        <p>Matraman</p>
      </div>
      <div className="voice__slider-single-content-play">
        <button
          aria-label="play audio"
          className="play-track"
          onClick={handlePlayToggle}
        >
          <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
        </button>
        <audio ref={audioRef} className="player" src={audio}></audio>
      </div>
      <span className="tag">Original voice</span>
    </div>
  );
};

export default CloneItem;
