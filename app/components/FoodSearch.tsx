"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <div className="flex flex-col h-full w-screen items-center">
      <div className="p-4 bg-white w-5/6">
        <Input
          type="text"
          placeholder="Search food..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex-grow overflow-hidden w-5/6 rounded">
        <ScrollArea className="h-full p-4">
          {searchResults.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">
              Search for food items to see results
            </p>
          ) : (
            searchResults.map((item, index) => (
              <Card key={index} className="mb-4">
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
      </div>
    </div>
  );
}
