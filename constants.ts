import { Service, TeamMember } from './types';
import { WrenchScrewdriverIcon, CpuChipIcon, LightBulbIcon, ShieldCheckIcon, CogIcon, FireIcon } from './components/icons/SolidIcons';

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    name: 'General Maintenance & Servicing',
    description: 'Comprehensive vehicle servicing, including oil changes, fluid checks, and filter replacements to keep your car running smoothly.',
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 's2',
    name: 'Advanced Diagnostics',
    description: 'Utilizing state-of-the-art diagnostic tools to accurately identify and resolve complex electronic and engine management issues.',
    icon: CpuChipIcon,
  },
  {
    id: 's3',
    name: 'Electrical Systems Repair',
    description: 'Expert repair of all automotive electrical components, from lighting and wiring to alternators and starter motors.',
    icon: LightBulbIcon,
  },
  {
    id: 's4',
    name: 'Brake & Suspension Services',
    description: 'Specialized services for brakes, shock absorbers, and suspension systems to ensure optimal safety and handling.',
    icon: ShieldCheckIcon,
  },
  {
    id: 's5',
    name: 'Engine & Transmission',
    description: 'In-depth engine and transmission repairs, rebuilds, and performance tuning for both petrol and diesel vehicles.',
    icon: CogIcon,
  },
  {
    id: 's6',
    name: 'Performance Tuning',
    description: 'Unleash your vehicle\'s true potential with our custom ECU remapping and performance enhancement services.',
    icon: FireIcon,
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 't1',
    name: 'Thabo "The Tactician" Ndlovu',
    role: 'Co-Founder & Master Technician',
    bio: 'With over 20 years of experience, Thabo is a master diagnostician specializing in complex European engine management systems. His methodical approach ensures no fault goes unfound.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 't2',
    name: 'Thomas "The Tuner" Pillay',
    role: 'Co-Founder & Performance Specialist',
    bio: 'Thomas lives and breathes performance. An expert in engine tuning and performance modifications, he is dedicated to squeezing every ounce of power from your vehicle, reliably and safely.',
    imageUrl: 'https://images.unsplash.com/photo-1627843563095-2df97843c9dc?q=80&w=800&auto=format&fit=crop',
  },
];
