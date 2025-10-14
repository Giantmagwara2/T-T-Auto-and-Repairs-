
import React from 'react';
import { TEAM_DATA } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Legacy Labyrinth</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Founded in 2015 on the shores of Isipingo Beach, T&T was born from a passion for performance and a respect for the powerful Indian Ocean. We're more than mechanics; we're automotive artisans.
        </p>
      </div>

      <div className="space-y-12">
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-8">Meet the Holo-Heroes</h2>
        <div className="max-w-4xl mx-auto space-y-12">
            {TEAM_DATA.map(member => (
                <TeamMemberCard key={member.id} member={member} />
            ))}
        </div>
        {/* Placeholder for AR flip cards feature */}
        <p className="text-center text-gray-500 italic mt-8">Interactive AR team bios coming soon!</p>
      </div>

      <div className="mt-20">
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-8">Our Timeline: A Wrench in the Wrack-Line</h2>
        <div className="relative max-w-2xl mx-auto">
            {/* A simplified timeline representation */}
            <div className="border-l-2 border-weathered-brass absolute h-full left-3"></div>
            <div className="space-y-8">
                <div className="pl-8 relative">
                    <div className="absolute w-6 h-6 bg-weathered-brass rounded-full -left-[13px] border-4 border-ocean-dark"></div>
                    <h3 className="font-sans font-bold text-xl text-zulu-terracotta">2015 - The Spark</h3>
                    <p className="text-gray-400">T&T Auto is born in a small Isipingo garage, with a mission to bring world-class diagnostics to the local community.</p>
                </div>
                <div className="pl-8 relative">
                    <div className="absolute w-6 h-6 bg-weathered-brass rounded-full -left-[13px] border-4 border-ocean-dark"></div>
                    <h3 className="font-sans font-bold text-xl text-zulu-terracotta">2019 - Eco-Edge Initiative</h3>
                    <p className="text-gray-400">We launch our sustainability program, introducing recycled materials and eco-friendly fluid disposal.</p>
                </div>
                <div className="pl-8 relative">
                    <div className="absolute w-6 h-6 bg-weathered-brass rounded-full -left-[13px] border-4 border-ocean-dark"></div>
                    <h3 className="font-sans font-bold text-xl text-zulu-terracotta">2024 - Digital Renaissance</h3>
                    <p className="text-gray-400">Launching our new digital platform with AI-powered assistance, bringing the T&T experience online.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
