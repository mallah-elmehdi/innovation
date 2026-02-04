import { Mail, MapPin, Phone } from 'lucide-react';
import ContactCard from '../ui/ContactCard';
import Logo from '../ui/Logo';
import SectionTitle from '../ui/SectionTitle';
import P from '../ui/typography/P';

export default function Footer() {
    return (
        <div className="bg-foreground p-10 grid gap-10 lg:grid-cols-3 grid-cols-1">
            <Logo isWhite />
            <div className="flex flex-col gap-5 col-span-2">
                <SectionTitle isWhite title="Contact" size="sm" />
                <P className="text-white">Interested in co-creating the future? Connect with our innovation team.</P>

                <ContactCard title="contact@innovation.com">
                    <Mail />
                </ContactCard>
                <ContactCard title="+128272928255">
                    <Phone />
                </ContactCard>
                <ContactCard title="31 Innovations center">
                    <MapPin />
                </ContactCard>
            </div>
            <div className="lg:col-span-3 col-span-1">
                <hr className="border-white mb-4" />
                <P className="text-white">Use of this site constitutes acceptance of our User Agreement and Privacy Policy.</P>
            </div>
        </div>
    );
}
