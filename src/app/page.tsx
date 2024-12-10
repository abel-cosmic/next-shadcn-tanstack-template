"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import logo from "../../public/logo.svg";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

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
  const { toast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen font-[family-name:var(--font-geist-sans)] p-4">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-row gap-2 items-center justify-center">
          <img src={logo.src} className="w-24 h-24" />
          <p className="text-3xl font-semibold italic leading-snug">Super Search</p>
        </div>
       
      </div>

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
        <Button
          size="icon"
          className="absolute right-2 rounded-full"
          onClick={() => {
            toast({
              title: "demo title",
              description: "this is a demo description",
            });
          }}
        >
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
      <p className="text-xs text-zinc-400 w-[45rem] text-center text-wrap">
          Lightning-fast book search powered by vector space modeling for
          enhanced metadata discovery. Find books instantly by title, author,
          genre, or even similar content patterns. Experience AI-driven search
          that understands context.
        </p>

    </div>
  );
}
