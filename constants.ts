
import { Service, TeamMember } from './types';
import { WrenchScrewdriverIcon, CpuChipIcon, LightBulbIcon, ShieldCheckIcon, CogIcon, FireIcon } from './components/icons/SolidIcons';

export const SERVICES_DATA: Service[] = [
  { id: 'diag', name: 'Advanced Diagnostics', description: 'Using wizardry and the latest tech to decode your car\'s deepest secrets. We speak fluent engine-light.', icon: CpuChipIcon },
  { id: 'engine', name: 'Engine & Transmission', description: 'The heart and soul of your ride. From minor tweaks to major surgery, we keep the beat strong.', icon: CogIcon },
  { id: 'brakes', name: 'Brakes & Suspension', description: 'Salt-resistant suspensions and precision brakes to handle Durban\'s coastal roads and surprise potholes.', icon: ShieldCheckIcon },
  { id: 'electrical', name: 'Auto Electrical', description: 'Taming the gremlins in your car\'s wiring. We make sure the only sparks are from your driving passion.', icon: LightBulbIcon },
  { id: 'performance', name: 'Performance Tuning', description: 'Unleash the beast. Custom tuning to ignite your drive and turn heads on the esplanade.', icon: FireIcon },
  { id: 'general', name: 'General Maintenance', description: 'The essential check-ups to keep your vehicle humming with the rhythm of the Indian Ocean.', icon: WrenchScrewdriverIcon },
];

export const TEAM_DATA: TeamMember[] = [
    {
        id: 't1',
        name: 'Thabo "The Tactician" Ndlovu',
        role: 'Master Technician & Co-Founder',
        bio: "With over 20 years of sand-to-speedway sagacity, Thabo's hands don't just fix cars; they converse with them in a language only true artisans understand. His secret? Zulu chants for stubborn starters.",
        imageUrl: 'https://picsum.photos/seed/thabo/400/400'
    },
    {
        id: 't2',
        name: 'Travis "The Tech-Prophet" Pillay',
        role: 'Diagnostics Wizard & Co-Founder',
        bio: 'Travis sees the digital soul of a vehicle. He wields diagnostic tools like a maestro, turning cryptic error codes into clear, actionable solutions that anticipate problems before they start.',
        imageUrl: 'https://picsum.photos/seed/travis/400/400'
    },
];
