import getTitle from "@/utils/get-title";
import { For } from "solid-js";
import { useMetadata } from "vike-metadata-solid";

const games = [
  {
    title: "Game 1",
    description: "Description 1",
    href: "/game/1",
    author: "Author 1",
  },
  {
    title: "Game 2",
    description: "Description 2",
    href: "/game/2",
    author: "Author 2",
  },
  {
    title: "Game 3",
    description: "Description 3",
    href: "/game/3",
    author: "Author 3",
  },
  {
    title: "Game 4",
    description: "Description 4",
    href: "/game/4",
    author: "Author 4",
  },
];

export default function Page() {
  useMetadata({
    title: getTitle("Home"),
  });

  return (
    <main class="container mx-auto px-6 md:px-12">
      <h1 class="text-2xl font-medium">All Games</h1>
      <div class="mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <For each={games}>
            {(game) => (
              <a
                href={game.href}
                class="bg-white rounded-lg border border-neutral-200 p-4 hover:bg-gray-100 transition-colors"
              >
                <h2 class="text-lg font-medium">{game.title}</h2>
                <p class="text-gray-600">{game.description}</p>
                <p class="text-sm text-gray-500 mt-2">Author: {game.author}</p>
              </a>
            )}
          </For>
        </div>
      </div>
    </main>
  );
}
