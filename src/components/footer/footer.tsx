'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import copy from 'copy-to-clipboard';
import { ChevronDown, Clipboard } from 'lucide-react';

import HorizontalSeparator from '@/components/ui/horizontal-separator';
import * as Accordion from '@radix-ui/react-accordion';

const GEAUX_PHONE_NUMBER = '+1 (857) 445-0424';
const GEAUX_EMAIL = 'info@geauxnet.com';

const Footer = () => {
  const footerLinks = {
    ABOUT: {
      About: 'https://geaux.tv/about',
      'Geaux Network Podcasts': 'https://geauxnet.com/audio',
      'Content Creators': 'https://geaux.tv/creators',
    },
    HELP: {
      'Report an issue': 'https://geaux.tv/issue',
      'Reset password': '/account/reset-password',
    },
    CONTACT: {
      'Contact us': 'https://geaux.tv/contact',
    },
  };

  return (
    <>
      <Accordion.Root type='multiple' className='w-full bg-primary-darkest px-7 py-5'>
        {Object.entries(footerLinks).map(([category, links], index) => (
          <Fragment key={category}>
            <Accordion.Item key={`fragment-${index}`} value={`item-${index}`}>
              <Accordion.Trigger className='flex w-full justify-between py-4 text-left tracking-wide text-primary-lightest'>
                <span>{category}</span>
                <ChevronDown />
              </Accordion.Trigger>

              <Accordion.Content>
                <div className='flex flex-col'>
                  {Object.entries(links).map(([linkText, linkHref], linkIndex) => {
                    return (
                      <Fragment key={linkText}>
                        {linkText === 'Contact us' && (
                          <>
                            <div className='flex flex-row items-center gap-2 p-2 text-primary-lighter'>
                              <span>{GEAUX_PHONE_NUMBER}</span>
                              <button onClick={() => copy(GEAUX_PHONE_NUMBER)}>
                                <Clipboard className='h-4 w-4 hover:text-primary-lightest' />
                              </button>
                            </div>
                            <div className='flex flex-row items-center gap-2 p-2 text-primary-lighter'>
                              <span>{GEAUX_EMAIL}</span>
                              <button onClick={() => copy(GEAUX_EMAIL)}>
                                <Clipboard className='h-4 w-4 hover:text-primary-lightest' />
                              </button>
                            </div>
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
                      </Fragment>
                    );
                  })}
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <HorizontalSeparator />
          </Fragment>
        ))}
      </Accordion.Root>
    </>
  );
};

export default Footer;
