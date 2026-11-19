import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Calendar, Clock, User, Phone, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { buildWhatsAppUrl } from '@/lib/contact';

const BookCustom = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const prefilledDestination = searchParams.get('destination') || '';

  const [form, setForm] = useState({
    pickup: '',
    destination: prefilledDestination,
    days: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    passengers: '',
    notes: '',
  });

  const generateBookingNumber = () => `BK${Date.now().toString().slice(-6)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingNumber = generateBookingNumber();

    const message = `
Hello,

I want to book a *Custom Trip*.

*Booking No:* ${bookingNumber}
*Pickup Location:* ${form.pickup || 'To be decided'}
*Destination:* ${form.destination || 'To be decided'}
*Number of Days:* ${form.days || 'To be decided'}
*Travel Date:* ${form.date || 'To be decided'}
*Pickup Time:* ${form.time || 'To be decided'}
*Number of Passengers:* ${form.passengers}

*Name:* ${form.name}
*Phone:* ${form.phone}

*Additional Notes:* ${form.notes || 'None'}

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
      <section className="bg-charcoal text-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm uppercase tracking-wider">
            Custom Booking
          </span>
          <h1 className="text-4xl font-bold mt-2 font-display">
            Book Your <span className="text-primary">Custom Trip</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto">
            Choose your pickup location, destination, and travel dates. Full control over your itinerary.
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
                    placeholder="Enter your pickup location"
                    value={form.pickup}
                    onChange={e => setForm({ ...form, pickup: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label>Destination</Label>
                  <Input
                    type="text"
                    placeholder="Enter your destination"
                    value={form.destination}
                    onChange={e => setForm({ ...form, destination: e.target.value })}
                    required
                  />
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

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

                <div>
                  <Label>Additional Notes (optional)</Label>
                  <Textarea
                    rows={3}
                    value={form.notes}
                    onChange={e => setForm({ ...form, notes: e.target.value })}
                    placeholder="Any special requirements or preferences..."
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
                  • Price shared on WhatsApp
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BookCustom;
