import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  // Placeholder profile image - replace with your actual image
  const profileImage = "/wale.jpg.jpeg";

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero profileImage={profileImage} />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Israel Olasupo. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Built with React, Tailwind CSS, and passion ❤️
          </p>
        </div>
      </footer>
      <Toaster position="top-right" />
    </div>
  );
}