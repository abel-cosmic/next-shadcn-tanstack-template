"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const genres = [
  "Fantasy",
  "Sci-Fi",
  "Mystery",
  "Romance",
  "Thriller",
  "Horror",
  "Biography",
  "History",
  "Self-Help",
  "Poetry",
  "Adventure",
  "Graphic Novels",
  "Cookbooks",
  "Children's Literature",
  "Drama",
  "Classics",
  "Travel",
  "Religion & Spirituality",
  "Humor",
  "Dystopian",
];

// Randomize the order of the genres
const shuffledGenres = genres.sort(() => Math.random() - 0.5);

export default function Home() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] p-4">
      <h1 className="text-3xl font-bold mb-6">Your AI Powered Book Search</h1>

      <div className="relative w-full max-w-3xl flex flex-row items-center gap-4 justify-center mb-6">
        <Textarea
          placeholder="Describe the book you're looking for..."
          className="w-full min-h-[60px] max-h-[200px] resize-none overflow-hidden transition-all duration-200"
          onChange={(e) => {
            const textarea = e.target;
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
          }}
        />
        <Button size="icon" className="absolute right-2 rounded-full">
          <ArrowUp />
        </Button>
      </div>

      <div className="w-full max-w-3xl">
        <div className="flex flex-wrap gap-2 justify-center">
          {shuffledGenres.map((genre) => (
            <Badge
              key={genre}
              variant={selectedGenres.includes(genre) ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105 rounded-full"
              onClick={() => toggleGenre(genre)}
            >
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
