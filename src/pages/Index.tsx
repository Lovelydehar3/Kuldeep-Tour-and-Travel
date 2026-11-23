import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import HeroSlider from '@/components/home/HeroSlider';
import ReachStations from '@/components/home/ReachStations';
import DestinationsPreview from '@/components/home/DestinationsPreview';
import FixedPackagesSection from '@/components/home/FixedPackagesSection';
import BookNowSection from '@/components/home/BookNowSection';
import FleetPreview from '@/components/home/FleetPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Mail } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Himachal Taxi Services & Tour Packages"
        description="Book reliable taxi services in Himachal Pradesh. Specialized in Devi Darshan yatra, Golden Temple tours, Dharamshala, McLeodganj, Manali packages. 24/7 support."
        keywords="Himachal taxi services, Devi Darshan tour, Golden Temple Amritsar, Dharamshala taxi, McLeodganj travel, Manali tour packages, Himachal tour packages, local rides, outstation taxi"
      />
      {/* 1. Hero Slider */}
      <HeroSlider />

    {/* 2. Fixed Packages */}
      <FixedPackagesSection />
      
      {/* 3. Explore Himachal */}
      <DestinationsPreview />

      {/* 4. Station & Airport Transfers */}
      <ReachStations />
      
      {/* 5. Book Now */}
      <BookNowSection />
      
      {/* 5. Vehicles */}
      <FleetPreview />
      
      {/* 6. Trusted Travel Partner */}
      <WhyChooseUs />
      
      {/* CTA Section */}
      <section className="py-16 bg-muted">
  <div className="container mx-auto px-4">
    <div className="bg-charcoal rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-cream font-display mb-2">
          Ready to Start Your Journey?
        </h2>
        <p className="text-cream/70 mb-4">
          Book your ride now or contact our team & owner directly for instant assistance
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/90">
          <a href={`mailto:${CONTACT.adminEmail}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} className="text-primary flex-shrink-0" />
            <span><strong className="text-primary font-medium">Admin:</strong> {CONTACT.adminEmail}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-primary transition-colors text-cream/70">
            <span>Support: {CONTACT.email}</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* Book Now */}
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-amber-dark"
        >
          <Link to="/book" className="flex items-center gap-2">
            Book Now <ArrowRight size={20} />
          </Link>
        </Button>

        {/* Call Now */}
        <Button
          asChild
          size="lg"
          className="border border-cream text-cream bg-transparent hover:bg-cream hover:text-charcoal"
        >
          <a href={`tel:${CONTACT.phoneE164}`} className="flex items-center gap-2">
            <Phone size={20} />
            Call Now
          </a>
        </Button>

      </div>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default Index;
