import React from "react";
import Video from "@/components/pages/Video";

export const Home = () => {
  const videos = [1, 3, 4, 4, 4, 54, 54];
  return (
    <div className="py-10">
      <div className="flex flex-wrap gap-5">
        {videos.map((el, i) => {
          return (
            <Video
              thumbnail="https://res.cloudinary.com/tryhktzv/image/upload/v1785311433/youtube-clone/thumbnails/uqim8zacjar7ba7xczjt.png"
              videoUrl="https://res.cloudinary.com/tryhktzv/video/upload/v1785311451/youtube-clone/videos/tkpg5fmpt77hynjiy1fw.mkv"
              title="Learn React From Scratch"
              channelName="Code With Ali"
              channelAvatar="https://example.com/avatar.jpg"
              views="125K"
              uploadedAt="2 days ago"
            />
          );
        })}
      </div>
    </div>
  );
};
