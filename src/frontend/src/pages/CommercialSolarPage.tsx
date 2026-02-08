import { Building2, TrendingDown, Leaf, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function CommercialSolarPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <Building2 className="h-4 w-4" />
                <span>Commercial Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Commercial Solar Solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                Power your business with clean, renewable energy. Our commercial solar solutions help businesses 
                reduce operational costs, enhance sustainability credentials, and demonstrate environmental leadership.
              </p>
              <Button 
                onClick={() => navigate({ to: '/expert-consultancy' })}
                className="bg-navy-primary hover:bg-navy-primary/90 text-white"
              >
                Request Business Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/commercial-solar-hero.dim_800x600.jpg" 
                alt="Commercial Solar Installation" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits for Your Business</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Invest in solar energy and watch your business thrive
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <TrendingDown className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Lower Operating Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Significantly reduce your energy expenses and improve your bottom line with predictable energy costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Sustainability Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meet corporate sustainability targets and demonstrate your commitment to environmental responsibility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-navy-primary mb-2" />
                <CardTitle>Brand Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strengthen your brand image and attract environmentally conscious customers and partners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-sky-primary mb-2" />
                <CardTitle>Tax Incentives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Take advantage of government incentives, tax credits, and accelerated depreciation benefits.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-primary/5 to-sky-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ideal for Various Business Types</h2>
            <p className="text-muted-foreground">
              Our commercial solar solutions are perfect for offices, retail stores, warehouses, manufacturing facilities, 
              hotels, restaurants, and more.
            </p>
            <div className="grid gap-4 md:grid-cols-2 text-left mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Office Buildings</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce overhead costs and create a sustainable workplace environment.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Retail Stores</h3>
                <p className="text-sm text-muted-foreground">
                  Lower energy bills while showcasing your commitment to sustainability.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Manufacturing</h3>
                <p className="text-sm text-muted-foreground">
                  Power energy-intensive operations with clean, cost-effective solar energy.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Hospitality</h3>
                <p className="text-sm text-muted-foreground">
                  Enhance guest experience with eco-friendly energy solutions.
                </p>
              </div>
            </div>
            <Button 
              onClick={() => navigate({ to: '/expert-consultancy' })}
              className="bg-navy-primary hover:bg-navy-primary/90 text-white mt-8"
              size="lg"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
