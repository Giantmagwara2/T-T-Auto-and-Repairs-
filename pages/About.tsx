import React from 'react';
import { TEAM_DATA } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';

const About: React.FC = () => {
  const timelineEvents = [
    { year: "2015 - The Spark", description: "T&T Auto is born in a small Isipingo garage, with a mission to bring world-class diagnostics to the local community." },
    { year: "2019 - Eco-Edge Initiative", description: "We launch our sustainability program, introducing recycled materials and eco-friendly fluid disposal." },
    { year: "2024 - Digital Renaissance", description: "Launching our new digital platform with AI-powered assistance, bringing the T&T experience online." }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Our History</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Founded in 2015, T&T Auto Repairs & Diagnostics was established with a commitment to providing superior automotive service and technical excellence. We are a team of highly skilled, certified technicians.
        </p>
      </div>

      <div className="space-y-12">
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-8">Meet Our Technical Team</h2>
        <div className="max-w-4xl mx-auto space-y-12">
            {TEAM_DATA.map((member, index) => (
                <div key={member.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 200}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                    <TeamMemberCard member={member} />
                </div>
            ))}
        </div>
        <p className="text-center text-gray-500 italic mt-8">Interactive AR team bios coming soon!</p>
      </div>

      <div className="mt-20">
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-8">Company Milestones</h2>
        <div className="relative max-w-2xl mx-auto">
            <div className="border-l-2 border-weathered-brass absolute h-full left-3 top-1"></div>
            <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                     <div key={index} className="pl-8 relative animate-slide-in-up" style={{ animationDelay: `${index * 200}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                        <div className="absolute w-6 h-6 bg-weathered-brass rounded-full -left-[13px] border-4 border-ocean-dark"></div>
                        <h3 className="font-sans font-bold text-xl text-zulu-terracotta">{event.year}</h3>
                        <p className="text-gray-400">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;