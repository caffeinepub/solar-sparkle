import { Droplets, Sun, Sprout, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function SolarWaterPumpPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <Droplets className="h-4 w-4" />
                <span>Water Management Solution</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Solar Water Pump
              </h1>
              <p className="text-lg text-muted-foreground">
                Harness the power of the sun to meet your water pumping needs. Our solar water pumps provide a reliable, 
                cost-effective solution for irrigation, livestock watering, and domestic water supply in areas with or 
                without grid access.
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
                src="/assets/generated/solar-water-pump.dim_800x600.jpg" 
                alt="Solar Water Pump" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Solar Water Pumps?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sustainable water solutions powered by the sun
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Sun className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Zero Operating Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No electricity or fuel costs. The sun provides free energy for pumping water.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Droplets className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Reliable Water Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consistent water pumping during daylight hours, perfect for irrigation schedules.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sprout className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clean, renewable energy with no emissions or environmental impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-primary/5 to-sky-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
            <div className="grid gap-4 md:grid-cols-2 mb-12">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Multiple Pump Types</h4>
                  <p className="text-sm text-muted-foreground">
                    Submersible and surface pumps available for different water sources.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Variable Flow Rates</h4>
                  <p className="text-sm text-muted-foreground">
                    Systems sized from small domestic to large agricultural applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Durable Construction</h4>
                  <p className="text-sm text-muted-foreground">
                    Weather-resistant components designed for outdoor installation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Easy Maintenance</h4>
                  <p className="text-sm text-muted-foreground">
                    Simple design with minimal moving parts for long-lasting performance.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center">Suitable Use Cases</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Agricultural Irrigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect for crop irrigation, drip systems, and sprinkler operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Livestock Watering</h4>
                  <p className="text-sm text-muted-foreground">
                    Reliable water supply for cattle, sheep, and other farm animals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Remote Locations</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal for areas without electricity access or where grid connection is costly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Community Water Supply</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide clean water to villages and rural communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate({ to: '/expert-consultancy' })}
                className="bg-navy-primary hover:bg-navy-primary/90 text-white"
                size="lg"
              >
                Explore Solar Water Pumps
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
