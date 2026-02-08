import { Wheat, Sun, TrendingDown, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function SolarAttaChakkiPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <Wheat className="h-4 w-4" />
                <span>Agricultural Solution</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Solar Atta Chakki
              </h1>
              <p className="text-lg text-muted-foreground">
                Revolutionize your flour milling operations with our solar-powered atta chakki. Designed specifically 
                for flour mills and agricultural businesses, this eco-friendly solution reduces operational costs while 
                providing reliable, clean energy for your milling needs.
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
                src="/assets/generated/solar-atta-chakki.dim_800x600.jpg" 
                alt="Solar Atta Chakki" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Solar Atta Chakki?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your milling business with sustainable solar power
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <TrendingDown className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Reduce Operating Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminate or significantly reduce electricity bills for your flour milling operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sun className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Clean Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Produce flour using 100% renewable solar energy, reducing your carbon footprint.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wheat className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Reliable Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consistent power supply ensures uninterrupted milling operations throughout the day.
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
                  <h4 className="font-semibold mb-1">High Efficiency Motors</h4>
                  <p className="text-sm text-muted-foreground">
                    Specially designed motors optimized for solar power operation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Battery Backup Option</h4>
                  <p className="text-sm text-muted-foreground">
                    Optional battery storage for operation during cloudy days or evenings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Low Maintenance</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimal maintenance requirements with long-lasting components.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Easy Installation</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick and simple installation process with minimal downtime.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center">Suitable Use Cases</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Small Flour Mills</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect for local flour mills serving communities and villages.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Agricultural Cooperatives</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal for farmer cooperatives processing their own grain.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Rural Businesses</h4>
                  <p className="text-sm text-muted-foreground">
                    Great for businesses in areas with unreliable grid power.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Organic Food Producers</h4>
                  <p className="text-sm text-muted-foreground">
                    Align with sustainable practices using solar-powered milling.
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
                Learn More About Solar Atta Chakki
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
