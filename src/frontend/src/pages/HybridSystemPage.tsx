import { Layers, Zap, Battery, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function HybridSystemPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <Layers className="h-4 w-4" />
                <span>Best of Both Worlds</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Hybrid Solar System
              </h1>
              <p className="text-lg text-muted-foreground">
                Get the ultimate flexibility with our hybrid solar systems. Combining the benefits of both on-grid and 
                off-grid solutions, hybrid systems provide grid connectivity with battery backup, ensuring uninterrupted 
                power supply and maximum energy independence.
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
                src="/assets/generated/hybrid-system.dim_800x600.jpg" 
                alt="Hybrid Solar System" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Hybrid Systems Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intelligent power management for optimal energy utilization
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
                  Solar panels generate electricity from sunlight.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">2</span>
                </div>
                <h3 className="font-semibold">Smart Distribution</h3>
                <p className="text-sm text-muted-foreground">
                  Power your home first, then charge batteries.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">3</span>
                </div>
                <h3 className="font-semibold">Grid Interaction</h3>
                <p className="text-sm text-muted-foreground">
                  Export excess to grid or draw power when needed.
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-navy-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-navy-primary">4</span>
                </div>
                <h3 className="font-semibold">Backup Power</h3>
                <p className="text-sm text-muted-foreground">
                  Batteries provide power during outages.
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
                <Layers className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Maximum Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enjoy the benefits of both grid connection and battery backup for ultimate energy security.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Uninterrupted Power</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatic switchover to battery power during grid outages ensures continuous electricity supply.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Battery className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Optimized Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Store excess solar energy and use it during peak rate hours to maximize your savings.
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
                  <h4 className="font-semibold mb-1">Areas with Unreliable Grid</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect for locations experiencing frequent power outages or voltage fluctuations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Critical Operations</h4>
                  <p className="text-sm text-muted-foreground">
                    Hospitals, data centers, and businesses requiring uninterrupted power supply.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Time-of-Use Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Homes and businesses with time-of-use electricity rates can maximize savings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-navy-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Future-Proof Investment</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal for those planning to transition to full energy independence gradually.
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
              Discover Hybrid Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
