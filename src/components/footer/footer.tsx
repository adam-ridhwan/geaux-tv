'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import HorizontalSeparator from '@/components/ui/horizontal-separator';
import * as Accordion from '@radix-ui/react-accordion';

const Footer = () => {
  const footerLinks = {
    ABOUT: {
      About: 'https://geaux.tv/about',
      'Geaux Network Podcasts': 'https://geauxnet.com/audio',
      'Content Creators': 'https://geaux.tv/creators',
    },
    HELP: {
      'Report an issue': 'https://geaux.tv/issue',
      'Reset password': '/profile/reset-password',
    },
    CONTACT: {
      'Contact us': 'https://geaux.tv/contact',
    },
  };
  return (
    <>
      <Accordion.Root type='multiple' className='w-full bg-primary-darkest px-7 py-5'>
        {Object.entries(footerLinks).map(([category, links], index) => (
          <>
            <Accordion.Item key={`fragment-${index}`} value={`item-${index}`}>
              <Accordion.Trigger className='flex w-full justify-between py-4 text-left tracking-wide text-primary-lightest'>
                <span>{category}</span>
                <ChevronDown />
              </Accordion.Trigger>

              <Accordion.Content>
                <div className='flex flex-col'>
                  {Object.entries(links).map(([linkText, linkHref], linkIndex) => {
                    return (
                      <>
                        {linkText === 'Contact us' && (
                          <>
                            <span className='p-2 text-primary-lighter'>+1 (857) 445-0424</span>
                            <span className='p-2 text-primary-lighter'>info@geauxnet.com</span>
                          </>
                        )}
                        <Link
                          key={linkIndex}
                          href={linkHref}
                          target='_blank'
                          className='p-2 text-primary-lighter hover:text-primary-lightest'
                        >
                          {linkText}
                        </Link>
                      </>
                    );
                  })}
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <HorizontalSeparator />
          </>
        ))}
      </Accordion.Root>
    </>
  );
};

export default Footer;
