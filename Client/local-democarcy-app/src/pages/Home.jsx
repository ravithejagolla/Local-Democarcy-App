// pages/HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  AlertCircle,
  BookOpen,
  MessageSquare,
  Users,
  BarChart2,
  CalendarCheck,
  Megaphone,
  Globe,
} from "lucide-react";

const features = [
  {
    title: "Real-time Alerts",
    desc: "Get updates about local issues instantly.",
    icon: <AlertCircle className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Simplified Laws",
    desc: "Understand proposed legislation in plain English.",
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Public Feedback",
    desc: "Communicate with your reps and see their responses.",
    icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
  },
  {
    title: "Community Voting",
    desc: "See how your neighbors feel about issues.",
    icon: <Users className="h-8 w-8 text-pink-600" />,
  },
  {
    title: "Policy Impact",
    desc: "Visualize how changes affect different groups.",
    icon: <BarChart2 className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Organize Together",
    desc: "Start initiatives with people nearby.",
    icon: <CalendarCheck className="h-8 w-8 text-yellow-600" />,
  },
  {
    title: "Raise Awareness",
    desc: "Launch campaigns and spread awareness with tools that matter.",
    icon: <Megaphone className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Global Perspective",
    desc: "Compare how other cities and regions are tackling similar issues.",
    icon: <Globe className="h-8 w-8 text-cyan-600" />,
  },
];

const HomePage = () => {
  return (

    <>
      <div >
        <Navbar />
        
        <header className="bg-gray-100 text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Empowering Your Local Voice
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Stay informed, share your voice, and make a real impact in your community.
            CivicConnect brings your neighborhood closer to local democracy.
          </p>
        </header>

        <section className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 px-6 py-12 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow rounded-2xl border hover:border-blue-500"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;


