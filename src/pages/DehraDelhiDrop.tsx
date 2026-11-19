import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { buildWhatsAppUrl } from '@/lib/contact';

const DehraDelhiDrop = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    passengers: '',
  });

  const generateBookingNumber = () => `DD${Date.now().toString().slice(-6)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingNumber = generateBookingNumber();

    const message = `
Hello,

I want to book *Dehra Gopipur → Delhi Drop Transfer*.

*Booking No:* ${bookingNumber}
*Pickup:* Dehra Gopipur
*Drop:* Delhi
*Duration:* Within 24 Hours
*Stay:* None

*Travel Date:* ${form.date || 'To be decided'}
*Pickup Time:* ${form.time || 'To be decided'}
*Number of Passengers:* ${form.passengers}

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
      {/* HERO */}
      <section className="bg-charcoal text-cream py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm uppercase tracking-wider">
            Fixed Transfer
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2 font-display">
            Dehra Gopipur → <span className="text-primary">Delhi</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto">
            Point-to-point transfer service. No stay included. Direct drop within 24 hours.
          </p>
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
                    value="Dehra Gopipur"
                    disabled
                    className="bg-muted"
                  />
                </div>

                <div>
                  <Label>Drop Location</Label>
                  <Input
                    type="text"
                    value="Delhi"
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
                    <Label>Pickup Time</Label>
                    <Input
                      type="time"
                      value={form.time}
                      onChange={e => setForm({ ...form, time: e.target.value })}
                      required
                    />
                  </div>
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

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-6 text-lg"
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

export default DehraDelhiDrop;
