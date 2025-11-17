import React, { useEffect, useState } from "react";
import { Music, TrendingUp, Users, Disc3, PlayCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface Track {
  id: number;
  title: string;
  duration: number;
  position: number;
  preview: string;
}

interface GenreData {
  name: string;
  value: number;
  color: string;
}

const COLORS = ["#d93535", "#282d35", "#f0ecd9", "#a52a2a", "#8b0000"];

export default function Dashboard() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [genreData, setGenreData] = useState<GenreData[]>([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [totalAlbums] = useState(20); // Static count for display

  useEffect(() => {
    async function fetchMusicData() {
      try {
        // Fetch top tracks via our backend proxy
        const tracksResponse = await fetch("/api/music/tracks");
        const tracksData = await tracksResponse.json();

        setTracks(tracksData.data.slice(0, 10));

        // Generate genre distribution data
        const genres: GenreData[] = [
          { name: "Pop", value: 35, color: COLORS[0] },
          { name: "Rock", value: 25, color: COLORS[1] },
          { name: "Hip-Hop", value: 20, color: COLORS[2] },
          { name: "Electronic", value: 12, color: COLORS[3] },
          { name: "Other", value: 8, color: COLORS[4] },
        ];
        setGenreData(genres);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching music data:", error);
        setLoading(false);
      }
    }

    fetchMusicData();
  }, []);

  const chartConfig = {
    plays: {
      label: "Plays",
      color: "#d93535",
    },
    fans: {
      label: "Fans",
      color: "#282d35",
    },
  };

  const trackDurationData = tracks.map((track) => ({
    name: track.title.slice(0, 20),
    duration: Math.floor(track.duration / 60),
  }));

  return (
    <div className="min-h-screen bg-cream pt-[80px] pb-20">
      <div className="px-[0.7vw]">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-title text-f-80 md:text-f-120 text-dark mb-4">
            Music Dashboard
          </h1>
          <p className="font-copy text-lg text-dark/60 max-w-3xl">
            Real-time music charts and analytics powered by Deezer API. Explore
            top albums, trending tracks, and genre distributions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-dark border-2 border-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cream">
                Total Albums
              </CardTitle>
              <Disc3 className="h-4 w-4 text-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cream">
                {loading ? <Skeleton className="h-8 w-16" /> : totalAlbums}
              </div>
              <p className="text-xs text-cream/60 mt-1">Top charting albums</p>
            </CardContent>
          </Card>

          <Card className="bg-cream border-2 border-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dark">
                Top Tracks
              </CardTitle>
              <Music className="h-4 w-4 text-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-dark">
                {loading ? <Skeleton className="h-8 w-16" /> : tracks.length}
              </div>
              <p className="text-xs text-dark/60 mt-1">Trending now</p>
            </CardContent>
          </Card>

          <Card className="bg-red border-2 border-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cream">
                Artists
              </CardTitle>
              <Users className="h-4 w-4 text-cream" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cream">
                {loading ? <Skeleton className="h-8 w-16" /> : 15}
              </div>
              <p className="text-xs text-cream/80 mt-1">Unique artists</p>
            </CardContent>
          </Card>

          <Card className="bg-dark border-2 border-red">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-cream">
                Genres
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cream">
                {genreData.length}
              </div>
              <p className="text-xs text-cream/60 mt-1">Music categories</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Track Duration Chart */}
          <Card className="bg-cream border-2 border-dark">
            <CardHeader>
              <CardTitle className="font-title text-dark">
                Track Durations
              </CardTitle>
              <CardDescription className="font-copy text-dark/60">
                Length of top tracks (minutes)
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-[300px] w-full" />
              ) : (
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <LineChart data={trackDurationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" hide />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="duration"
                      stroke="#282d35"
                      strokeWidth={3}
                      dot={{ fill: "#d93535", r: 5 }}
                    />
                  </LineChart>
                </ChartContainer>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Genre Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-dark border-2 border-cream">
            <CardHeader>
              <CardTitle className="font-title text-cream">
                Genre Distribution
              </CardTitle>
              <CardDescription className="font-copy text-cream/60">
                Music category breakdown
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              {loading ? (
                <Skeleton className="h-[250px] w-[250px] rounded-full" />
              ) : (
                <ChartContainer config={chartConfig} className="h-[250px]">
                  <PieChart>
                    <Pie
                      data={genreData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {genreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          {/* Top Tracks List */}
          <Card className="lg:col-span-2 bg-cream border-2 border-dark">
            <CardHeader>
              <CardTitle className="font-title text-dark">
                Top Trending Tracks
              </CardTitle>
              <CardDescription className="font-copy text-dark/60">
                Most popular songs right now
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {tracks.slice(0, 8).map((track, index) => (
                    <div
                      key={track.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-dark/5 transition-colors group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-dark text-cream font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-copy font-semibold text-dark truncate">
                          {track.title}
                        </p>
                        <p className="font-copy text-sm text-dark/60">
                          {Math.floor(track.duration / 60)}:
                          {(track.duration % 60).toString().padStart(2, "0")}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (currentlyPlaying === track.preview) {
                            const audio = document.getElementById(
                              `audio-${track.id}`,
                            ) as HTMLAudioElement;
                            audio?.pause();
                            setCurrentlyPlaying(null);
                          } else {
                            // Pause all other audio
                            const allAudio = document.querySelectorAll("audio");
                            allAudio.forEach((a) => a.pause());
                            // Play this one
                            const audio = document.getElementById(
                              `audio-${track.id}`,
                            ) as HTMLAudioElement;
                            audio?.play();
                            setCurrentlyPlaying(track.preview);
                          }
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <PlayCircle
                          className={`w-8 h-8 ${currentlyPlaying === track.preview ? "text-red" : "text-dark hover:text-red"} transition-colors`}
                        />
                        <audio id={`audio-${track.id}`} src={track.preview} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
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
