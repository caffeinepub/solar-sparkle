import { BatteryCharging, MapPin, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function OffGridSystemPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <BatteryCharging className="h-4 w-4" />
                <span>Independent Power Solution</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Off-Grid Solar System
              </h1>
              <p className="text-lg text-muted-foreground">
                Achieve complete energy independence with our off-grid solar systems. Perfect for remote locations or 
                those seeking total self-sufficiency, these systems include battery storage to provide reliable power 
                24/7, regardless of grid availability.
              </p>
              <Button 
                onClick={() => navigate({ to: '/expert-consultancy' })}
                className="bg-navy-primary hover:bg-navy-primary/90 text-white"
              >
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/off-grid-system.dim_800x600.jpg" 
                alt="Off-Grid Solar System" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Off-Grid Systems Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete energy independence through solar power and battery storage
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">1</span>
                </div>
                <h3 className="font-semibold">Solar Generation</h3>
                <p className="text-sm text-muted-foreground">
                  Panels capture sunlight and convert it to DC electricity.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">2</span>
                </div>
                <h3 className="font-semibold">Charge Controller</h3>
                <p className="text-sm text-muted-foreground">
                  Regulates power flow to batteries for optimal charging.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">3</span>
                </div>
                <h3 className="font-semibold">Battery Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Stores excess energy for use during night or cloudy days.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">4</span>
                </div>
                <h3 className="font-semibold">Power Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Inverter converts stored DC to AC for your appliances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-primary/5 to-sky-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Energy Independence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete freedom from utility companies and grid outages. Generate and store your own power.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BatteryCharging className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>24/7 Power Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Battery storage ensures continuous electricity even during nights and cloudy weather.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Remote Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Perfect for areas without grid access or where grid connection costs are prohibitive.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Suitable Use Cases</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Remote Homes & Cabins</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal for properties far from the electrical grid or in rural areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Agricultural Operations</h4>
                  <p className="text-sm text-muted-foreground">
                    Power irrigation systems, barns, and equipment in remote farm locations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Telecommunications</h4>
                  <p className="text-sm text-muted-foreground">
                    Reliable power for cell towers and communication equipment in remote areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Emergency Backup</h4>
                  <p className="text-sm text-muted-foreground">
                    Critical facilities requiring uninterrupted power supply.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate({ to: '/expert-consultancy' })}
              className="bg-navy-primary hover:bg-navy-primary/90 text-white"
              size="lg"
            >
              Explore Off-Grid Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
