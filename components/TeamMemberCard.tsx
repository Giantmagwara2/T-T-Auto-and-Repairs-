
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-black/30 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center transform transition-transform duration-300 hover:scale-105">
      <img className="w-full md:w-1/3 h-64 md:h-auto object-cover" src={member.imageUrl} alt={member.name} loading="lazy" decoding="async" />
      <div className="p-6 md:p-8 flex-1">
        <h3 className="font-sans text-2xl font-bold text-brand-blue">{member.name}</h3>
        <p className="text-brand-light font-semibold mb-4">{member.role}</p>
        <p className="text-brand-silver">{member.bio}</p>
      </div>
    </div>
  );
};

export default React.memo(TeamMemberCard);
