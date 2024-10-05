import Navbar from "@/components/navbar";

function HomePage() {
  return (
    <div
      id="home-page"
      className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6"
    >
      <h1>CC</h1>
      <Navbar />
    </div>
  );
}

export default HomePage;
