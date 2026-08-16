import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const WatchVideo = () => {
  return (
    <div className="min-h-screen w-full p-5 relative z-0 ">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
        {/* =========================
            LEFT SIDE
        ========================= */}
        <div className="min-w-0">
          {/* Video Player */}
          <div className="aspect-video w-full overflow-hidden rounded-xl border bg-black">
            <video className="h-full w-full" controls poster="/thumbnail.jpg">
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Video Information */}
          <div className="mt-4">
            {/* Title */}
            <h1 className="text-xl font-semibold md:text-2xl">
              Build a Full Stack YouTube Clone with MERN Stack
            </h1>

            {/* Channel Information */}
            <div className="mt-4 flex flex-col gap-4 border rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Channel */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="h-11 w-11 overflow-hidden rounded-full border">
                  <img
                    src="/avatar.jpg"
                    alt="Channel"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Channel Info */}
                <div>
                  <h3 className="font-semibold">Code With Alee</h3>

                  <p className="text-sm text-muted-foreground">
                    125K subscribers
                  </p>
                </div>
              </div>

              {/* Subscribe */}
              <Button>Subscribe</Button>
            </div>

            {/* Description */}
            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="flex gap-4 text-sm font-medium">
                  <span>125K views</span>
                  <span>2 days ago</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  In this video, we are building a complete YouTube clone using
                  React, Node.js, Express and MongoDB. We will also implement
                  authentication, video upload, subscriptions and comments.
                </p>
              </CardContent>
            </Card>

            {/* Comments */}
            <div className="mt-6 border rounded-xl p-5">
              <h2 className="text-xl font-semibold">Comments</h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Comments section will come here.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}
        <aside className="border-l pl-5">
          <h2 className="mb-4 text-lg font-semibold">Suggested Videos</h2>

          <div className="space-y-4">
            {/* Suggested Video */}
            <Card className="border-0 shadow-none">
              <CardContent className="flex gap-3 p-0">
                {/* Thumbnail */}
                <div className="relative aspect-video w-[160px] shrink-0 overflow-hidden rounded-lg border bg-muted">
                  <img
                    src="/thumbnail.jpg"
                    alt="Video"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 py-0.5 text-xs text-white">
                    12:45
                  </span>
                </div>

                {/* Video Info */}
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold">
                    Learn React From Zero to Advanced
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Code With Alee
                  </p>

                  <p className="text-xs text-muted-foreground">
                    250K views · 3 days ago
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Suggested Video */}
            <Card className="border-0 shadow-none">
              <CardContent className="flex gap-3 p-0">
                <div className="relative aspect-video w-[160px] shrink-0 overflow-hidden rounded-lg border bg-muted">
                  <img
                    src="/thumbnail.jpg"
                    alt="Video"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 py-0.5 text-xs text-white">
                    08:32
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold">
                    Node.js Backend Development Complete Guide
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Code With Alee
                  </p>

                  <p className="text-xs text-muted-foreground">
                    180K views · 1 week ago
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Suggested Video */}
            <Card className="border-0 shadow-none">
              <CardContent className="flex gap-3 p-0">
                <div className="relative aspect-video w-[160px] shrink-0 overflow-hidden rounded-lg border bg-muted">
                  <img
                    src="/thumbnail.jpg"
                    alt="Video"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute bottom-1 right-1 rounded bg-black px-1.5 py-0.5 text-xs text-white">
                    15:20
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold">
                    MongoDB Aggregation Pipeline Explained
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Code With Alee
                  </p>

                  <p className="text-xs text-muted-foreground">
                    95K views · 5 days ago
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};
