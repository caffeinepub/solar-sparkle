import { Home, Zap, DollarSign, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export function ResidentialSolarPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit hover:bg-navy-primary/20 transition-colors duration-300">
                <Home className="h-4 w-4 icon-bounce" />
                <span>Residential Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Residential Solar Solutions
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Transform your home into a sustainable energy powerhouse with our cutting-edge residential solar solutions. 
                Reduce your electricity bills, increase your property value, and contribute to a cleaner environment.
              </p>
              <Button 
                onClick={() => navigate({ to: '/expert-consultancy' })}
                className="bg-navy-primary hover:bg-navy-primary/90 text-white hover-scale transition-all duration-300 shadow-md hover:shadow-glow-md w-full sm:w-auto"
              >
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/assets/generated/residential-solar-hero.dim_800x600.jpg" 
                alt="Residential Solar Installation" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-glow-lg transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Residential Solar?</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Discover the benefits of switching to solar energy for your home
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="hover-lift hover-glow transition-all duration-300 animate-fade-in-delay-1">
              <CardHeader className="pb-3 md:pb-6">
                <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-navy-primary mb-2 icon-bounce" />
                <CardTitle className="text-lg md:text-xl">Save Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Reduce your monthly electricity bills by up to 70% and enjoy long-term savings with minimal maintenance costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-glow transition-all duration-300 animate-fade-in-delay-2">
              <CardHeader className="pb-3 md:pb-6">
                <Zap className="h-8 w-8 md:h-10 md:w-10 text-sky-primary mb-2 icon-bounce" />
                <CardTitle className="text-lg md:text-xl">Energy Independence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Generate your own clean energy and reduce dependence on the grid. Protect yourself from rising electricity costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-glow transition-all duration-300 animate-fade-in-delay-3">
              <CardHeader className="pb-3 md:pb-6">
                <Home className="h-8 w-8 md:h-10 md:w-10 text-navy-primary mb-2 icon-bounce" />
                <CardTitle className="text-lg md:text-xl">Increase Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Homes with solar panels sell faster and at higher prices. Solar is a smart investment in your property.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-glow transition-all duration-300 animate-fade-in-delay-3">
              <CardHeader className="pb-3 md:pb-6">
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-sky-primary mb-2 icon-bounce" />
                <CardTitle className="text-lg md:text-xl">Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Reduce your carbon footprint and contribute to a cleaner, more sustainable future for generations to come.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-navy-primary/5 to-sky-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up px-4">
            <h2 className="text-2xl md:text-3xl font-bold">Our Residential Solar Process</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              We make going solar simple and hassle-free. Our expert team handles everything from initial consultation 
              to installation and ongoing support.
            </p>
            <div className="grid gap-4 md:gap-6 sm:grid-cols-3 text-left mt-8">
              <div className="space-y-2 hover-lift transition-all duration-300 p-4 rounded-lg bg-background/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-primary text-white flex items-center justify-center font-bold text-lg md:text-xl icon-bounce">1</div>
                <h3 className="font-semibold text-base md:text-lg">Free Consultation</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  We assess your energy needs and design a custom solar solution for your home.
                </p>
              </div>
              <div className="space-y-2 hover-lift transition-all duration-300 p-4 rounded-lg bg-background/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-primary text-white flex items-center justify-center font-bold text-lg md:text-xl icon-bounce">2</div>
                <h3 className="font-semibold text-base md:text-lg">Professional Installation</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Our certified technicians install your system with precision and care.
                </p>
              </div>
              <div className="space-y-2 hover-lift transition-all duration-300 p-4 rounded-lg bg-background/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-primary text-white flex items-center justify-center font-bold text-lg md:text-xl icon-bounce">3</div>
                <h3 className="font-semibold text-base md:text-lg">Ongoing Support</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Enjoy peace of mind with our comprehensive warranty and maintenance services.
                </p>
              </div>
            </div>
            <Button 
              onClick={() => navigate({ to: '/expert-consultancy' })}
              className="bg-navy-primary hover:bg-navy-primary/90 text-white mt-8 hover-scale transition-all duration-300 shadow-md hover:shadow-glow-md w-full sm:w-auto"
              size="lg"
            >
              Start Your Solar Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

