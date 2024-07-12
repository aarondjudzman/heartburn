import FoodSearch from "./components/FoodSearch";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-between p-24">
      <FoodSearch />
    </main>
  );
}
