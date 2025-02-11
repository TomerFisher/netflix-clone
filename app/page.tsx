"use client";

import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { fetcher } from "@/lib/fetcher";
import { Movie } from "@prisma/client";
import useSWR from "swr";

export default function Home() {
  const { data: movies = [] } = useSWR<Movie[]>("/api/movies", fetcher);

  return (
    <>
      <Navbar />
      <Billboard />
      <MovieList title="Trending Now" data={movies} />
    </>
  );
}
