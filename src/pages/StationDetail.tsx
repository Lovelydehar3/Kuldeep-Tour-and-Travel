import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle, Train, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getStationBySlug } from '@/data/stations';
import OptimizedImage from '@/components/OptimizedImage';
import { CONTACT, buildWhatsAppUrl } from '@/lib/contact';

const StationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const station = getStationBySlug(slug || '');

  if (!station) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <p className="text-muted-foreground mb-8">The station or airport you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </section>
      </Layout>
    );
  }

  const bookingMsg = `Hello! I need a taxi from ${station.name}. Please share availability and rates.`;
  const Icon = station.type === 'airport' ? Plane : Train;

  return (
    <Layout>
      <SEO
        title={`${station.name} Taxi Service | Balaji Tour & Travel`}
        description={station.about?.[0] || `Book reliable taxi from ${station.name}. 24/7 service to all major destinations in Himachal Pradesh.`}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] sm:min-h-[420px] overflow-hidden">
        {station.image && (
          <OptimizedImage
            src={station.image}
            alt={station.name}
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream px-4">
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon size={16} />
              {station.type === 'airport' ? 'Airport Transfer' : 'Railway Station Taxi'}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-3">
              {station.name}
            </h1>
            {station.tagline && (
              <p className="text-base sm:text-xl text-cream/80">{station.tagline}</p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* About */}
              {station.about && station.about.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                    About {station.name}
                  </h2>
                  {station.about.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-3 text-base">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {station.highlights && station.highlights.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                    Our {station.name} Taxi Service
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {station.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Routes */}
              {station.popularRoutes && station.popularRoutes.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                    Popular Routes from {station.type === 'airport' ? station.name : station.name.replace(' Railway Station', '')}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {station.popularRoutes.map((route, i) => (
                      <Link
                        key={i}
                        to={`/book/station?station=${encodeURIComponent(station.name)}`}
                        className="group flex items-center justify-between p-4 bg-muted hover:bg-primary/10 rounded-xl border border-transparent hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="text-primary flex-shrink-0" />
                          <div>
                            <span className="text-xs text-muted-foreground block">{route.from}</span>
                            <span className="font-medium text-sm">{route.to}</span>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us */}
              {station.whyChooseUs && station.whyChooseUs.length > 0 && (
                <Card className="card-travel bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 font-display text-primary">
                      Why Choose Balaji Tour & Travel?
                    </h3>
                    <ul className="space-y-3">
                      {station.whyChooseUs.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right: Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">

                {/* Book Now Card */}
                <Card className="card-travel">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold font-display">Book Your Taxi</h3>

                    {station.location && (
                      <div className="flex items-start gap-3">
                        <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                        <div>
                          <span className="font-medium text-sm block">Location</span>
                          <span className="text-muted-foreground text-sm">{station.location}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <Icon className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Service Type</span>
                        <span className="text-muted-foreground text-sm">
                          {station.type === 'airport' ? 'Airport Transfer' : 'Railway Station Pickup & Drop'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Available</span>
                        <span className="text-muted-foreground text-sm">24/7 — All Days</span>
                      </div>
                    </div>

                    <div className="pt-2 space-y-3">
                      <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-amber-dark">
                        <Link to={`/book/station?station=${encodeURIComponent(station.name)}`} className="flex items-center justify-center gap-2">
                          Book Taxi Now <ArrowRight size={18} />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                        <a href={buildWhatsAppUrl(bookingMsg)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <MessageCircle size={18} />
                          WhatsApp Us
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a href={`tel:${CONTACT.phoneE164}`} className="flex items-center justify-center gap-2">
                          <Phone size={18} />
                          {CONTACT.phoneDisplay}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* View All Packages */}
                <Card className="card-travel">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 font-display">Fixed Packages Available</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explore our pre-planned fixed packages departing from {station.type === 'airport' ? 'nearby stations' : station.name.replace(' Railway Station', '')}.
                    </p>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/destinations" className="flex items-center justify-center gap-2">
                        View All Packages <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StationDetail;
