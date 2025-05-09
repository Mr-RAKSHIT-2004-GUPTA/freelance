import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const restaurants = [
  { name: "Burger Point", image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Best burgers in town." },
  { name: "Pizza Palace", image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Hot, cheesy pizzas." },
  { name: "Sushi Central", image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Fresh Japanese sushi." },
  { name: "Pasta House", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Authentic Italian pastas." },
  { name: "Taco Bell", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", desc: "Delicious Mexican tacos." },
  { name: "Steak Street", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", desc: "Juicy steaks and grilled meats." },
  { name: "Salad Bowl", image: " https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Healthy and fresh salads." },
  { name: "Doughnut Factory", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", desc: "Freshly made doughnuts." },
  { name: "Waffle World", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", desc: "Sweet and crispy waffles." },
  { name: "Ice Cream Hut", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Creamy ice creams for every season." },
  { name: "Fried Chicken Co.", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", desc: "Crispy and flavorful fried chicken." },
  { name: "BBQ Grill", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", desc: "Sizzling barbecued meats." },
  { name: "Smoothie Spot", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Refreshing fruit smoothies." },
  { name: "Burrito Bros", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", desc: "Packed and flavorful burritos." },
  { name: "Bagel Barn", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", desc: "Warm and fresh bagels." },
  { name: "Dim Sum Delight", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Delicious dim sum bites." },
  { name: "Curry Corner", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", desc: "Spicy and aromatic curries." },
  { name: "Donut Delights", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", desc: "Soft and sweet donuts." },
  { name: "Ramen Royal", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Authentic Japanese ramen." },
  { name: "Grilled Cheese", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", desc: "Perfectly grilled cheese sandwiches." },
  { name: "Falafel House", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", desc: "Crispy falafels with dips." },
  { name: "Kebab Kingdom", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Tender and spiced kebabs." },
  { name: "Poke Bowl Bar", image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg", desc: "Customizable poke bowls." },
  { name: "Veggie Delight", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", desc: "Wholesome vegetarian dishes." },
  { name: "Momos Mania", image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", desc: "Hot and juicy dumplings." }
];


export default function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen scroll-smooth">
      <header className="sticky top-0 z-10 bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">FoodieExpress</h1>
        <div className="flex items-center gap-2">
          <Input placeholder="Search..." className="w-64" />
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {restaurants.map((res, idx) => (
          <Card
            key={idx}
            className="shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-full h-48 object-cover"
            />
            <CardContent>
              <h2 className="text-xl font-semibold">{res.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{res.desc}</p>
              <Button className="w-full">Order Now</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
        © 2025 FoodieExpress. All rights reserved.
      </footer>
    </div>
  );
}
