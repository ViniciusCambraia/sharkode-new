import React from 'react';
import { Icon } from '@iconify/react';

export const LogoMarquee: React.FC = () => {
  const logos = [
    { icon: 'simple-icons:git', label: 'git' },
    { icon: 'simple-icons:npm', label: '' },
    { icon: 'simple-icons:lucid', label: 'Lucidchart' },
    { icon: 'simple-icons:wrike', label: 'wrike' },
    { icon: 'simple-icons:jquery', label: 'jQuery' },
    { icon: 'simple-icons:openstack', label: 'openstack' },
    { icon: 'simple-icons:servicenow', label: 'servicenow' },
    { label: 'paysafe:', customText: true },
  ];

  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pb-12 md:pb-20 mt-32">
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="flex items-center justify-center md:justify-start [&>div]:mx-8 w-max animate-infinite-scroll">
          {/* First run */}
          {logos.map((logo, index) => (
            <div key={`run1-${index}`} className="flex items-center gap-2">
              {logo.customText ? (
                <span className="font-bold tracking-tight text-lg text-white font-sans">{logo.label}</span>
              ) : (
                <>
                  <Icon icon={logo.icon!} className={`${logo.icon!.includes('npm') ? 'text-3xl' : 'text-xl'} text-white`} />
                  {logo.label && <span className="font-medium text-lg text-white font-sans">{logo.label}</span>}
                </>
              )}
            </div>
          ))}
          {/* Second run */}
          {logos.map((logo, index) => (
            <div key={`run2-${index}`} className="flex items-center gap-2">
              {logo.customText ? (
                <span className="font-bold tracking-tight text-lg text-white font-sans">{logo.label}</span>
              ) : (
                <>
                  <Icon icon={logo.icon!} className={`${logo.icon!.includes('npm') ? 'text-3xl' : 'text-xl'} text-white`} />
                  {logo.label && <span className="font-medium text-lg text-white font-sans">{logo.label}</span>}
                </>
              )}
            </div>
          ))}
          {/* Third run for seamless looping on larger displays */}
          {logos.map((logo, index) => (
            <div key={`run3-${index}`} className="flex items-center gap-2">
              {logo.customText ? (
                <span className="font-bold tracking-tight text-lg text-white font-sans">{logo.label}</span>
              ) : (
                <>
                  <Icon icon={logo.icon!} className={`${logo.icon!.includes('npm') ? 'text-3xl' : 'text-xl'} text-white`} />
                  {logo.label && <span className="font-medium text-lg text-white font-sans">{logo.label}</span>}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
