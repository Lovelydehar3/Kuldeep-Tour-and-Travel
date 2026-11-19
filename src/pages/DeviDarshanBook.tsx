import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { buildWhatsAppUrl } from '@/lib/contact';
import OptimizedImage from '@/components/OptimizedImage';

import mataChintpurni from '@/assets/mata-chintpurni.jpg';
import mataBaglamukhi from '@/assets/mata-baglamukhi.jpg';
import mataJwalaji from '@/assets/mata-jwalaji.jpg';
import mataKangra from '@/assets/mata-kangra.jpg';
import mataBajreshwari from '@/assets/mata-bajreshwari.jpg';
import mataChamunda from '@/assets/mata-chamunda.jpg';

const DeviDarshanBook = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    date: '',
    name: '',
    phone: '',
    passengers: '',
  });

  const [currentImage, setCurrentImage] = useState(0);
  const images = [mataChintpurni, mataBaglamukhi, mataJwalaji, mataKangra, mataBajreshwari, mataChamunda];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const generateBookingNumber = () => `DD${Date.now().toString().slice(-6)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingNumber = generateBookingNumber();

    const message = `
Hello,

I want to book *Amb Anduara → Devi Darshan Fixed Package*.

*Booking No:* ${bookingNumber}
*Pickup:* Amb Anduara Railway Station
*Package:* Devi Darshan
*Route:*
  - Chintpurni
  - Baglamukhi
  - Jwala Ji
  - Kangra
  - Brijeshwari
  - Chamunda Devi
*Duration:* 3 Days / 2 Nights

*Travel Date:* ${form.date || 'To be decided'}
*Number of Persons:* ${form.passengers}

*Name:* ${form.name}
*Phone:* ${form.phone}

Please share price & details.
    `;

    toast({
      title: 'Booking created',
      description: `Booking No: ${bookingNumber}. Redirecting to WhatsApp…`,
    });

    setTimeout(() => {
      window.open(
        buildWhatsAppUrl(message),
        '_blank'
      );
    }, 800);
  };

  return (
    <Layout>
      {/* HERO WITH IMAGE SLIDER */}
      <section className="relative h-[60vh] min-h-[360px] sm:min-h-[420px] overflow-hidden">
        <OptimizedImage
          key={images[currentImage]}
          src={images[currentImage]}
          alt={`Devi Darshan - ${currentImage + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl text-cream">
            <span className="text-primary text-sm uppercase tracking-wider">Fixed Package</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 font-display">
              Amb Anduara → <span className="text-primary">Devi Darshan</span>
            </h1>
            <p className="text-cream/70 mt-4 max-w-xl mx-auto">
              Pickup & route already decided. Just fill your details and book via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6 space-y-6">

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <Label>Pickup Location</Label>
                  <Input
                    type="text"
                    value="Amb Anduara Railway Station"
                    disabled
                    className="bg-muted"
                  />
                </div>

                <div>
                  <Label>Destination</Label>
                  <Input
                    type="text"
                    value="Devi Darshan"
                    disabled
                    className="bg-muted"
                  />
                </div>

                <div>
                  <Label>Full Name</Label>
                  <Input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Travel Date</Label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={e => setForm({ ...form, date: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label>Number of Passengers</Label>
                    <Input
                      type="number"
                      min="1"
                      value={form.passengers}
                      onChange={e => setForm({ ...form, passengers: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary py-6 text-lg"
                >
                  <MessageCircle className="mr-2" />
                  Book on WhatsApp <ArrowRight className="ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  No advance payment • Price shared on WhatsApp
                </p>
              </form>

            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default DeviDarshanBook;
