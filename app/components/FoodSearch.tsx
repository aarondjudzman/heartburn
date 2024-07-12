"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { searchFood } from "@/app/func/search";
import { FoodItem } from "@/app/data/food";
import { HeartburnBadge } from "@/app/components/HeartburnBadge";

export default function FoodSearch() {
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);

  const handleSearch = (input: string) => {
    const results = searchFood(input);
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col min-h-screen w-screen items-center bg-peach-yellow-50">
      <header className="sticky top-0 z-30 w-full flex h-14 bg-peach-yellow-50 items-center border-b-2 border-b-peach-yellow-800 px-4">
        <div className="relative w-full flex justify-center">
          <Input
            type="search"
            placeholder="Search food..."
            onChange={(e) => handleSearch(e.target.value)}
            className="w-5/6 rounded-lg bg-transparent pl-2 border-2 border-peach-yellow-500 focus-visible:ring-peach-yellow-600"
          />
        </div>
      </header>
      <main className="flex-grow overflow-hidden w-5/6 rounded">
        <ScrollArea className="h-full p-4">
          {searchResults.length === 0 ? (
            <p className="text-gray-500 text-center mt-72">
              Search for food items to see results
            </p>
          ) : (
            searchResults.map((item, index) => (
              <Card
                key={index}
                className="mb-4 border-2 border-peach-yellow-400 shadow-lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div className="w-5/6">
                      <CardTitle className="text-sm">{item.name}</CardTitle>
                    </div>
                    <div className="w-1/6">
                      <HeartburnBadge category={item.category} />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </ScrollArea>
      </main>
    </div>
  );
}
