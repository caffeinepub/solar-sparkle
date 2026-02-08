import { useState, useEffect } from 'react';
import { Sun, ClipboardCheck, Search, Wrench, Zap, Calculator, DollarSign, Leaf, TrendingUp, Heart, Shield, Award, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';

export function HomePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    monthlyBill: '',
    propertyType: '',
    roofArea: '',
    location: '',
  });
  const [results, setResults] = useState<{
    systemSize: number;
    estimatedCost: number;
    annualSavings: number;
    co2Reduction: number;
    paybackPeriod: number;
  } | null>(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateSolar = () => {
    const bill = parseFloat(formData.monthlyBill);
    if (!bill || !formData.propertyType) return;

    // Calculation logic for INR
    const avgCostPerWatt = 50; // INR per watt
    const systemSize = (bill * 12) / 15000; // kW (adjusted for INR)
    const estimatedCost = systemSize * 1000 * avgCostPerWatt;
    const annualSavings = bill * 12 * 0.7;
    const co2Reduction = systemSize * 1.5; // tons per year
    const paybackPeriod = estimatedCost / annualSavings;

    setResults({
      systemSize: Math.round(systemSize * 10) / 10,
      estimatedCost: Math.round(estimatedCost),
      annualSavings: Math.round(annualSavings),
      co2Reduction: Math.round(co2Reduction * 10) / 10,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Turn Sunlight Into Lifelong Savings Section - Now First */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background to-sky-light/10 overflow-hidden">
        <div className="container">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <Badge className="bg-sky-primary/10 text-sky-primary border-sky-primary/20 hover:bg-sky-primary/20 transition-colors duration-300">
                <Heart className="h-3 w-3 mr-1 inline icon-bounce" />
                Trusted by 1,000+ Indian Homeowners
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Turn <span className="text-navy-primary">Sunlight</span> Into{' '}
                <span className="text-sky-primary">Lifelong Savings</span>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground">
                Clean energy. Lower bills. A smarter home for decades to come.
              </p>

              <p className="text-sm md:text-base text-muted-foreground">
                Freedom from rising electricity costs. Peace of mind knowing your home runs on clean, renewable energy. 
                The security of predictable, zero-pollution power for 25 years.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2">
                <Button 
                  onClick={() => navigate({ to: '/expert-consultancy' })}
                  size="lg"
                  className="bg-sky-primary hover:bg-sky-primary/90 text-white hover-scale w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-glow-md"
                >
                  Get Your Free Solar Plan →
                </Button>
                <Button 
                  onClick={() => navigate({ to: '/expert-consultancy' })}
                  size="lg"
                  variant="outline"
                  className="border-sky-primary text-sky-primary hover:bg-sky-primary/10 w-full sm:w-auto transition-all duration-300"
                >
                  Book a Home Visit
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-4">
                <Card className="border-sky-primary/20 hover-lift hover-glow transition-all duration-300 animate-fade-in-delay-1">
                  <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 md:h-5 w-4 md:w-5 text-sky-primary icon-bounce" />
                      <p className="font-semibold text-xs md:text-sm">Government Approved</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Verified Solar Partner</p>
                  </CardContent>
                </Card>

                <Card className="border-sky-primary/20 hover-lift hover-glow transition-all duration-300 animate-fade-in-delay-2">
                  <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 md:h-5 w-4 md:w-5 text-sky-primary icon-bounce" />
                      <p className="font-semibold text-xs md:text-sm">25-Year Warranty</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Installed Once, Benefits Forever</p>
                  </CardContent>
                </Card>

                <Card className="border-sky-primary/20 hover-lift hover-glow transition-all duration-300 animate-fade-in-delay-3">
                  <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="h-4 md:h-5 w-4 md:w-5 text-sky-primary icon-bounce" />
                      <p className="font-semibold text-xs md:text-sm">Zero Pollution</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Clean Energy for Generations</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-glow-lg transition-shadow duration-500"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img 
                  src="/assets/generated/hero-solar-home.dim_1200x600.jpg" 
                  alt="Solar Home" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                
                <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-[160px] md:max-w-[200px] animate-float">
                  <div className="text-3xl md:text-4xl font-bold text-sky-primary mb-1">90%</div>
                  <div className="text-xs md:text-sm font-semibold text-navy-primary">Bill Savings</div>
                  <div className="text-xs text-muted-foreground">Potential Reduction</div>
                </div>

                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-[240px] md:max-w-[280px] animate-pulse-slow">
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-2xl md:text-3xl font-bold text-navy-primary">₹0</div>
                    <div className="text-xs md:text-sm text-muted-foreground">power bills</div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    Realistic savings potential with our systems
                  </div>
                  <div className="w-full bg-sky-light/30 rounded-full h-2">
                    <div className="bg-sky-primary h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go Solar in 4 Easy Steps Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-navy-primary text-white">
        <div className="container">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <Badge className="mb-4 bg-sky-primary/20 text-sky-light border-sky-light hover:bg-sky-primary/30 transition-colors duration-300">
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Go Solar in 4 Easy Steps</h2>
            <p className="text-base md:text-lg text-sky-light max-w-3xl mx-auto px-4">
              Our streamlined process makes switching to solar effortless. From consultation to installation, we handle everything.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-navy-primary/50 border-sky-light/20 text-white hover-lift hover:border-sky-light/40 transition-all duration-300 animate-fade-in-delay-1">
              <CardHeader className="pb-3 md:pb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-primary/20 flex items-center justify-center mb-3 md:mb-4 icon-bounce">
                  <ClipboardCheck className="h-5 w-5 md:h-6 md:w-6 text-sky-light" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-sky-light mb-2">STEP 01</div>
                <CardTitle className="text-white text-lg md:text-xl">Free Consultation</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-sky-light/80">
                  Share your electricity bills. Our experts analyze your energy needs and provide a customized proposal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-navy-primary/50 border-sky-light/20 text-white hover-lift hover:border-sky-light/40 transition-all duration-300 animate-fade-in-delay-2">
              <CardHeader className="pb-3 md:pb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-primary/20 flex items-center justify-center mb-3 md:mb-4 icon-bounce">
                  <Search className="h-5 w-5 md:h-6 md:w-6 text-sky-light" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-sky-light mb-2">STEP 02</div>
                <CardTitle className="text-white text-lg md:text-xl">Site Survey</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-sky-light/80">
                  Our professional team visits your location to assess roof structure, shadow analysis, and optimal panel placement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-navy-primary/50 border-sky-light/20 text-white hover-lift hover:border-sky-light/40 transition-all duration-300 animate-fade-in-delay-3">
              <CardHeader className="pb-3 md:pb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-primary/20 flex items-center justify-center mb-3 md:mb-4 icon-bounce">
                  <Wrench className="h-5 w-5 md:h-6 md:w-6 text-sky-light" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-sky-light mb-2">STEP 03</div>
                <CardTitle className="text-white text-lg md:text-xl">Professional Installation</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-sky-light/80">
                  Certified engineers install your solar system within 2-3 days with minimal disruption to your daily routine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-navy-primary/50 border-sky-light/20 text-white hover-lift hover:border-sky-light/40 transition-all duration-300 animate-fade-in-delay-3">
              <CardHeader className="pb-3 md:pb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-primary/20 flex items-center justify-center mb-3 md:mb-4 icon-bounce">
                  <Zap className="h-5 w-5 md:h-6 md:w-6 text-sky-light" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-sky-light mb-2">STEP 04</div>
                <CardTitle className="text-white text-lg md:text-xl">Power On & Save</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-sky-light/80">
                  Start generating clean energy immediately. Monitor your savings in real-time through our mobile app.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12 animate-fade-in">
            <Button 
              onClick={() => navigate({ to: '/expert-consultancy' })}
              size="lg"
              className="bg-sky-primary hover:bg-sky-primary/90 text-navy-primary font-semibold hover-scale transition-all duration-300 shadow-md hover:shadow-glow-md w-full sm:w-auto"
            >
              Start Your Solar Journey →
            </Button>
          </div>
        </div>
      </section>

      {/* Solar Calculator Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary mb-4 hover:bg-navy-primary/20 transition-colors duration-300">
              <Calculator className="h-4 w-4 icon-rotate" />
              <span>Solar Calculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Solar Potential</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Estimate the right solar system size for your needs and discover your potential savings in INR
            </p>
          </div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <Card className="hover-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">Enter Your Details</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Provide some basic information to get your personalized solar estimate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyBill" className="text-sm md:text-base">Average Monthly Electricity Bill (₹)</Label>
                    <Input
                      id="monthlyBill"
                      type="number"
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      placeholder="e.g., 5000"
                      className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyType" className="text-sm md:text-base">Property Type</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                    >
                      <SelectTrigger id="propertyType" className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roofArea" className="text-sm md:text-base">Available Roof Area (sq ft)</Label>
                    <Input
                      id="roofArea"
                      type="number"
                      value={formData.roofArea}
                      onChange={(e) => setFormData({ ...formData, roofArea: e.target.value })}
                      placeholder="e.g., 500"
                      className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm md:text-base">Location (City/State)</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., Mumbai, Maharashtra"
                      className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary"
                    />
                  </div>

                  <Button 
                    onClick={calculateSolar}
                    className="w-full bg-navy-primary hover:bg-navy-primary/90 text-white h-11 md:h-12 text-base hover-scale transition-all duration-300 shadow-md hover:shadow-glow-md"
                  >
                    Calculate Solar Potential
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Your Solar Estimate</h3>
              {results ? (
                <div className="space-y-3 md:space-y-4">
                  <Card className="hover-lift transition-all duration-300 animate-scale-in">
                    <CardHeader className="pb-3 md:pb-6">
                      <div className="flex items-center gap-3">
                        <Zap className="h-6 w-6 md:h-8 md:w-8 text-navy-primary icon-bounce" />
                        <div>
                          <CardTitle className="text-base md:text-lg">Recommended System Size</CardTitle>
                          <CardDescription className="text-xl md:text-2xl font-bold text-navy-primary mt-1">
                            {results.systemSize} kW
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover-lift transition-all duration-300 animate-scale-in">
                    <CardHeader className="pb-3 md:pb-6">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-sky-primary icon-bounce" />
                        <div>
                          <CardTitle className="text-base md:text-lg">Estimated System Cost</CardTitle>
                          <CardDescription className="text-xl md:text-2xl font-bold text-sky-primary mt-1">
                            ₹{results.estimatedCost.toLocaleString('en-IN')}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover-lift transition-all duration-300 animate-scale-in">
                    <CardHeader className="pb-3 md:pb-6">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-navy-primary icon-bounce" />
                        <div>
                          <CardTitle className="text-base md:text-lg">Annual Savings</CardTitle>
                          <CardDescription className="text-xl md:text-2xl font-bold text-navy-primary mt-1">
                            ₹{results.annualSavings.toLocaleString('en-IN')}/year
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover-lift transition-all duration-300 animate-scale-in">
                    <CardHeader className="pb-3 md:pb-6">
                      <div className="flex items-center gap-3">
                        <Leaf className="h-6 w-6 md:h-8 md:w-8 text-sky-primary icon-bounce" />
                        <div>
                          <CardTitle className="text-base md:text-lg">CO₂ Reduction</CardTitle>
                          <CardDescription className="text-xl md:text-2xl font-bold text-sky-primary mt-1">
                            {results.co2Reduction} tons/year
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="hover-lift transition-all duration-300 animate-scale-in">
                    <CardHeader className="pb-3 md:pb-6">
                      <div className="flex items-center gap-3">
                        <Calculator className="h-6 w-6 md:h-8 md:w-8 text-navy-primary icon-bounce" />
                        <div>
                          <CardTitle className="text-base md:text-lg">Payback Period</CardTitle>
                          <CardDescription className="text-xl md:text-2xl font-bold text-navy-primary mt-1">
                            {results.paybackPeriod} years
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="bg-gradient-to-br from-navy-primary/5 to-sky-light border-navy-primary/20 hover-glow transition-all duration-300">
                    <CardContent className="pt-4 md:pt-6 px-4 md:px-6">
                      <p className="text-xs md:text-sm text-muted-foreground mb-4">
                        These are estimated values based on average conditions. For a detailed, personalized assessment, 
                        book a free consultation with our experts.
                      </p>
                      <Button 
                        onClick={() => navigate({ to: '/expert-consultancy' })}
                        className="w-full bg-navy-primary hover:bg-navy-primary/90 text-white h-10 md:h-11 hover-scale transition-all duration-300"
                      >
                        Book Free Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="h-full flex items-center justify-center hover-glow transition-all duration-300">
                  <CardContent className="text-center py-12 md:py-16 px-4">
                    <Calculator className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground mx-auto mb-4 animate-pulse-slow" />
                    <CardTitle className="mb-2 text-lg md:text-xl">Ready to Calculate</CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Fill in the form on the left to see your personalized solar estimate
                    </CardDescription>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

