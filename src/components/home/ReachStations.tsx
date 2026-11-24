import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

import stationAmbAndaura from '@/assets/station-amb-andaura.jpg';
import stationChandigarh from '@/assets/station-chandigarh.jpg';
import stationPathankot from '@/assets/station-pathankot.jpg';
import airportAmritsar from '@/assets/airport-amritsar.jpg';
import airportChandigarh from '@/assets/airport-chandigarh.jpg';
import airportKangra from '@/assets/airport-kangra.jpg';

const stations = [
  {
    id: '1',
    name: 'Amb Andaura Railway Station',
    label: 'Railway Station',
    image: stationAmbAndaura,
    bookParam: 'Amb Andaura Railway Station',
    slug: 'amb-andaura-railway-station',
  },
  {
    id: '2',
    name: 'Pathankot Railway Station',
    label: 'Railway Station',
    image: stationPathankot,
    bookParam: 'Pathankot Railway Station',
    slug: 'pathankot-railway-station',
  },
  {
    id: '3',
    name: 'Chandigarh Railway Station',
    label: 'Railway Station',
    image: stationChandigarh,
    bookParam: 'Chandigarh Railway Station',
    slug: 'chandigarh-railway-station',
  },
  {
    id: '4',
    name: 'Gaggal Airport',
    label: 'Kangra Airport',
    image: airportKangra,
    bookParam: 'Gaggal Airport',
    slug: 'gaggal-airport-kangra',
  },
  {
    id: '5',
    name: 'Chandigarh Airport',
    label: 'Airport',
    image: airportChandigarh,
    bookParam: 'Chandigarh Airport',
    slug: 'chandigarh-airport',
  },
  {
    id: '6',
    name: 'Amritsar Airport',
    label: 'International Airport',
    image: airportAmritsar,
    bookParam: 'Amritsar Airport',
    slug: 'amritsar-airport',
  },
];

const ReachStations = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Reach Us Easily</span>
          <h2 className="section-title mt-2">
            Station &amp; Airport <span className="text-primary">Transfers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sacred temples to serene hill stations, we offer reliable taxi service from major railway stations and airports to your destination
          </p>
        </div>

        {/* Stations Grid - picture cards like DestinationsPreview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {stations.map((station) => (
            <div key={station.id} className="group">
              <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3]">
                <OptimizedImage
                  src={station.image}
                  alt={station.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded mb-2 inline-block">
                    {station.label}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-cream group-hover:text-primary transition-colors mb-3">
                    {station.name}
                  </h3>
                  <div className="flex gap-2">
                    <Link
                      to={`/stations/${station.slug}`}
                      className="flex-1 text-center bg-cream/20 backdrop-blur-sm text-cream text-xs font-medium py-2 px-3 rounded-lg hover:bg-cream/30 transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/book/station?station=${encodeURIComponent(station.bookParam)}`}
                      className="flex-1 text-center bg-primary text-primary-foreground text-xs font-medium py-2 px-3 rounded-lg hover:bg-amber-dark transition-colors flex items-center justify-center gap-1"
                    >
                      Book Taxi <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-amber-dark">
            <Link to="/book/station" className="flex items-center gap-2">
              Book a Transfer <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReachStations;
