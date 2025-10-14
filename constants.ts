import { Service, TeamMember } from './types';
import { WrenchScrewdriverIcon, CpuChipIcon, LightBulbIcon, ShieldCheckIcon, CogIcon, FireIcon } from './components/icons/SolidIcons';

export const SERVICES_DATA: Service[] = [
  { id: 'diag', name: 'Advanced Diagnostics', description: "Utilizing state-of-the-art diagnostic equipment to accurately identify and resolve complex vehicle issues. We interpret fault codes with expert precision.", icon: CpuChipIcon },
  { id: 'engine', name: 'Engine & Transmission', description: 'Comprehensive engine and transmission services, from routine maintenance to complete overhauls, ensuring optimal powertrain performance.', icon: CogIcon },
  { id: 'brakes', name: 'Brakes & Suspension', description: 'Specialized brake and suspension services designed for superior safety and handling in all driving conditions.', icon: ShieldCheckIcon },
  { id: 'electrical', name: 'Auto Electrical', description: 'Expert diagnosis and repair of complex automotive electrical systems, ensuring reliability and functionality.', icon: LightBulbIcon },
  { id: 'performance', name: 'Performance Tuning', description: 'Custom performance tuning to optimize engine output, torque, and overall driving dynamics.', icon: FireIcon },
  { id: 'general', name: 'General Maintenance', description: "Scheduled and preventative maintenance to ensure your vehicle's longevity and reliability, adhering to manufacturer specifications.", icon: WrenchScrewdriverIcon },
];

export const TEAM_DATA: TeamMember[] = [
    {
        id: 't1',
        name: 'Thabo Ndlovu',
        role: 'Master Technician & Co-Founder',
        bio: "With over 20 years of industry experience, Thabo is a master of mechanical systems. His meticulous approach ensures every repair is executed to the highest standard of quality and precision.",
        imageUrl: 'https://images.unsplash.com/photo-1581299894007-aaa5329e3b24?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 't2',
        name: 'Travis Pillay',
        role: 'Diagnostics Specialist & Co-Founder',
        bio: 'Travis specializes in advanced vehicle diagnostics, leveraging cutting-edge technology to accurately identify electronic and system-level faults. His expertise ensures efficient and effective problem resolution.',
        imageUrl: 'https://images.unsplash.com/photo-1622631024349-3540a1b63ead?q=80&w=800&auto=format&fit=crop'
    },
];