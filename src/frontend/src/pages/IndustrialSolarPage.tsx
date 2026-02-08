import { Factory, Gauge, Battery, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function IndustrialSolarPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <Factory className="h-4 w-4" />
                <span>Industrial Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Industrial Solar Solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                Scale your operations sustainably with our robust industrial solar solutions. Designed for high-capacity 
                energy demands, our systems deliver reliable power for manufacturing plants, processing facilities, and 
                large-scale industrial operations.
              </p>
              <Button 
                onClick={() => navigate({ to: '/expert-consultancy' })}
                className="bg-navy-primary hover:bg-navy-primary/90 text-white"
              >
                Schedule Industrial Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/industrial-solar-hero.dim_800x600.jpg" 
                alt="Industrial Solar Installation" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industrial-Grade Solar Power</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Engineered for demanding industrial environments
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Gauge className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>High Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mega-watt scale installations designed to meet the intensive energy requirements of industrial operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Battery className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Energy Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced battery systems ensure continuous power supply and load management for 24/7 operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Robust Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Heavy-duty components built to withstand harsh industrial conditions and deliver long-term reliability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Factory className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Custom Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored solutions designed specifically for your facility's unique power requirements and constraints.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-primary/5 to-sky-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Industrial Applications</h2>
            <p className="text-muted-foreground">
              Our industrial solar solutions power a wide range of heavy-duty operations
            </p>
            <div className="grid gap-4 md:grid-cols-3 text-left mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Manufacturing Plants</h3>
                <p className="text-sm text-muted-foreground">
                  Power production lines and machinery with clean, reliable solar energy.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Processing Facilities</h3>
                <p className="text-sm text-muted-foreground">
                  Support energy-intensive processing operations with sustainable power.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Warehouses</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce operational costs for large storage and distribution centers.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Mining Operations</h3>
                <p className="text-sm text-muted-foreground">
                  Power remote mining sites with off-grid solar solutions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Agriculture</h3>
                <p className="text-sm text-muted-foreground">
                  Support irrigation, processing, and cold storage operations.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Data Centers</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure reliable power for mission-critical IT infrastructure.
                </p>
              </div>
            </div>
            <Button 
              onClick={() => navigate({ to: '/expert-consultancy' })}
              className="bg-navy-primary hover:bg-navy-primary/90 text-white mt-8"
              size="lg"
            >
              Discuss Your Industrial Needs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
