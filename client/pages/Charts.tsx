import React, { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Album {
  id: number;
  title: string;
  cover: string;
  cover_medium: string;
  cover_big: string;
  artist: {
    name: string;
    picture_medium: string;
  };
  position: number;
  fans?: number;
}

export default function Charts() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        // Fetch top albums chart via our backend proxy
        const albumsResponse = await fetch("/api/music/albums");
        const albumsData = await albumsResponse.json();

        setAlbums(albumsData.data.slice(0, 20));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching albums data:", error);
        setLoading(false);
      }
    }

    fetchAlbums();
  }, []);

  return (
    <div className="min-h-screen bg-cream pt-[80px] pb-20">
      <div className="px-[0.7vw]">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-title text-f-80 md:text-f-120 text-dark mb-4">
            Top Albums Chart
          </h1>
          <p className="font-copy text-lg text-dark/60 max-w-3xl">
            Discover the most trending albums with the highest streams. Powered
            by Deezer API.
          </p>
        </div>

        {/* Albums Masonry Grid */}
        <Card className="bg-dark border-2 border-cream">
          <CardHeader>
            <CardTitle className="font-title text-f-36 text-cream">
              Top Albums Chart
            </CardTitle>
            <CardDescription className="font-copy text-cream/60">
              Trending albums with the most streams
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[...Array(20)].map((_, i) => (
                  <Skeleton key={i} className="aspect-square w-full" />
                ))}
              </div>
            ) : (
              <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
                {albums.map((album, index) => (
                  <div
                    key={album.id}
                    className="break-inside-avoid mb-4 group relative cursor-pointer"
                    style={{
                      // Randomize heights for masonry effect
                      marginBottom:
                        index % 3 === 0
                          ? "2rem"
                          : index % 2 === 0
                            ? "1rem"
                            : "0.5rem",
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-cream shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      {/* Position Badge */}
                      <div className="absolute top-2 left-2 z-10">
                        <Badge className="bg-red text-cream font-bold text-xs px-2 py-1 border-2 border-cream">
                          #{album.position}
                        </Badge>
                      </div>

                      {/* Album Cover */}
                      <img
                        src={album.cover_big}
                        alt={album.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="font-title text-cream text-lg mb-1 truncate">
                          {album.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <img
                            src={album.artist.picture_medium}
                            alt={album.artist.name}
                            className="w-8 h-8 rounded-full border-2 border-cream"
                          />
                          <p className="font-copy text-cream/80 text-sm truncate">
                            {album.artist.name}
                          </p>
                        </div>
                        <div className="mt-2">
                          <PlayCircle className="w-10 h-10 text-red" />
                        </div>
                      </div>
                    </div>

                    {/* Album Info Below */}
                    <div className="mt-2 px-1">
                      <p className="font-copy text-cream font-semibold text-sm truncate">
                        {album.title}
                      </p>
                      <p className="font-copy text-cream/60 text-xs truncate">
                        {album.artist.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
