import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import GitLogo from '@/assets/images/social-media-logos/github.svg';
import LinkedInLogo from '@/assets/images/social-media-logos/linkedin.svg';
import { DURATION } from '@/constants';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    children: ReactNode;
    href: string;
}

function NavLink({ children, href }: NavLinkProps) {
    return (
        // <Link className="inline-block py-4 px-4 text-xl hover:underline hover:bg-red-800" href={href}>{children}</Link>
        <li className="relative">
            <Link className={`inline-block py-4 px-4 text-xl underline transition-all duration-${DURATION} decoration-transparent hover:text-lime-300 hover:decoration-lime-300`} href={href}>
                {children}
            </Link>
        </li>
    )
}

function NavLinkLogo({ children, href }: NavLinkProps) {
    return (
        <li className="relative">
            <Link target='_blank' className={`inline-block py-4 px-4 text-xl underline transition-all duration-${DURATION} decoration-transparent hover:text-lime-300 hover:decoration-lime-300`} href={href}>
                {children}
            </Link>
        </li>
    )
}

export default function MainNavigation() {
    return (
        <div className="bg-neutral-700 text-white flex justify-between items-center">
            <div className={`text-3xl font-bold px-4 transition-colors duration-${DURATION} text-white hover:text-lime-300`}>
                <Link href="/">
                    Chandra Asar
                </Link>
            </div>
            <nav className="">
                <ul className="flex items-center">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLinkLogo href="https://github.com/ChandraTheMerciless"><GitLogo className={`w-8 fill-white transition-colors ${DURATION} hover:fill-lime-300`}/></NavLinkLogo>
                    <NavLinkLogo href="https://www.linkedin.com/in/chandra-asar-b325938/"><LinkedInLogo className={`w-8 fill-white transition-colors ${DURATION} hover:fill-lime-300`}/></NavLinkLogo>
                </ul>
            </nav>
        </div>
    );
}