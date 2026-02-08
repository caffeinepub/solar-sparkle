import { Plug, TrendingUp, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function OnGridSystemPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <Plug className="h-4 w-4" />
                <span>Grid-Connected Solution</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                On-Grid Solar System
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect to the power grid and enjoy the best of both worlds. Our on-grid solar systems allow you to 
                generate your own electricity while staying connected to the utility grid for backup power and net metering benefits.
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
                src="/assets/generated/on-grid-system.dim_800x600.jpg" 
                alt="On-Grid Solar System" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How On-Grid Systems Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the technology behind grid-connected solar power
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">1</span>
                </div>
                <h3 className="font-semibold">Solar Generation</h3>
                <p className="text-sm text-muted-foreground">
                  Solar panels convert sunlight into DC electricity during daylight hours.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">2</span>
                </div>
                <h3 className="font-semibold">Power Conversion</h3>
                <p className="text-sm text-muted-foreground">
                  Inverter converts DC power to AC electricity for home use.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">3</span>
                </div>
                <h3 className="font-semibold">Grid Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Excess power is exported to the grid; grid power is used when needed.
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
                <TrendingUp className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Net Metering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn credits for excess electricity you send back to the grid, reducing your overall energy costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Lower Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No need for expensive battery storage systems, making it more affordable than off-grid solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Reliable Power</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Grid connection ensures continuous power supply even when solar production is low.
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
                  <h4 className="font-semibold mb-1">Urban & Suburban Homes</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect for properties with reliable grid access and net metering policies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Commercial Buildings</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal for businesses looking to reduce energy costs without battery investment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Industrial Facilities</h4>
                  <p className="text-sm text-muted-foreground">
                    Great for factories with high daytime energy consumption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Educational Institutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Schools and universities can benefit from daytime solar generation.
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
              Learn More About On-Grid Systems
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
