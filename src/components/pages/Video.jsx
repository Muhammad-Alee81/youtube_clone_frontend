import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Volume2, VolumeOff } from "lucide-react";

const Video = ({
  thumbnail,
  videoUrl,
  title,
  channelName,
  channelAvatar,
  views,
  uploadedAt,
}) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <article className="group cursor-pointer basis-[32.5%] max-sm:basis-full hover:border border-white/20 p-2 rounded-xl hover:bg-white/10 transition-all  ">
      {/* Video / Thumbnail */}
      <div
        className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className={`absolute inset-0 h-full w-full object-cover duration-200 delay-400 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Hover Video */}
        <video
          ref={videoRef}
          src={videoUrl}
          muted={isMuted}
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover duration-200 delay-400 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Mute Button */}
        {isHovered && (
          <button
            type="button"
            onClick={toggleMute}
            className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-2 text-white cursor-pointer"
          >
            {isMuted ? <VolumeOff /> : <Volume2 />}
          </button>
        )}
      </div>

      {/* Video Information */}
      <div className="mt-3 flex gap-3">
        {/* Channel Avatar */}
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Details */}
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground ">{channelName}</p>

          <p className="text-sm text-white">
            {views} views • {uploadedAt}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Video;
