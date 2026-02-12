import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useNavigate } from '@tanstack/react-router';
import { Shield, Wrench, Clock, CheckCircle, Phone, Mail, Calendar, TrendingUp, Sparkles, Target } from 'lucide-react';
import { useSubmitAmcEnquiry } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { exportAmcEnquiryToSheets } from '@/lib/googleSheetsExport';
import { isAmcExportConfigured } from '@/config/googleSheetsConfig';

export function AmcPage() {
  const navigate = useNavigate();
  const submitAmcEnquiry = useSubmitAmcEnquiry();

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    location: '',
    systemSize: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.location) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Combine system size and message into systemDetails
    const systemDetails = `System Size: ${formData.systemSize || 'Not specified'}\nMessage: ${formData.message || 'No additional message'}`;

    try {
      // Submit to backend first
      await submitAmcEnquiry.mutateAsync({
        clientName: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        location: formData.location,
        systemDetails,
      });

      // Show success message for backend submission
      toast.success('AMC enquiry submitted successfully! We will contact you soon.');

      // Attempt Google Sheets export if configured (non-blocking)
      if (isAmcExportConfigured()) {
        try {
          const exportResult = await exportAmcEnquiryToSheets({
            clientName: formData.name,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            location: formData.location,
            systemDetails,
          });

          if (!exportResult.success && !exportResult.configMissing) {
            console.warn('Google Sheets export failed:', exportResult.error);
            // Don't show error to user - backend submission succeeded
          }
        } catch (exportError) {
          console.warn('Google Sheets export error:', exportError);
          // Don't show error to user - backend submission succeeded
        }
      }
      
      // Clear form
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        location: '',
        systemSize: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to submit enquiry. Please try again.');
      console.error('AMC enquiry submission error:', error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-primary via-navy-primary/90 to-sky-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/assets/generated/on-grid-system.dim_800x600.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Annual Maintenance Contract
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Solar AMC Services
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Keep your solar system running at peak performance with our comprehensive Annual Maintenance Contract. 
              Protect your investment and maximize your energy savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                onClick={() => {
                  const formSection = document.getElementById('amc-enquiry-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-navy-primary hover:bg-white/90 hover-scale shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get AMC Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  const phone = '+918112438846';
                  window.open(`tel:${phone}`, '_self');
                }}
                className="border-white text-white hover:bg-white/10 hover-scale"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is an AMC Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-4">Understanding AMC</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is an AMC?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
                An Annual Maintenance Contract (AMC) is a comprehensive service agreement designed to ensure your solar power system operates at peak efficiency throughout the year. It's a proactive approach to system care that includes regular inspections, preventive maintenance, performance monitoring, and priority support. With an AMC, you get peace of mind knowing that trained professionals are continuously looking after your solar investment, helping you maximize energy generation and extend the lifespan of your system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What does an AMC consist of Section */}
      <section className="py-16 md:py-24 bg-sky-light/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <Badge className="mb-4">AMC Components</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What does an AMC for solar panels consist of?
              </h2>
              <p className="text-muted-foreground text-lg">
                Our comprehensive AMC package covers all aspects of your solar system maintenance and support.
              </p>
            </div>

            <Card className="hover-lift transition-all duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Complete System Care</CardTitle>
                <CardDescription>
                  Everything you need to keep your solar system in perfect condition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Panel cleaning and inspection (quarterly)',
                    'Inverter health check and diagnostics',
                    'Electrical connections and wiring inspection',
                    'Mounting structure stability check',
                    'Performance analysis and reporting',
                    'Emergency breakdown support',
                    'Replacement of faulty components',
                    'System optimization and upgrades',
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-primary/5 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">AMC Advantages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What are the benefits of an AMC for solar panels?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Annual Maintenance Contract ensures your solar system operates efficiently year-round, 
              protecting your investment and maximizing returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Comprehensive Protection',
                description: 'Complete coverage for your solar system including panels, inverters, and mounting structures.',
              },
              {
                icon: Wrench,
                title: 'Regular Maintenance',
                description: 'Scheduled preventive maintenance to ensure optimal performance and longevity of your system.',
              },
              {
                icon: Clock,
                title: 'Priority Support',
                description: '24/7 priority support with rapid response times for any issues or emergencies.',
              },
              {
                icon: TrendingUp,
                title: 'Performance Monitoring',
                description: 'Continuous monitoring of system performance with detailed reports and optimization recommendations.',
              },
            ].map((benefit, index) => (
              <Card 
                key={index}
                className="hover-lift transition-all duration-300 hover:shadow-glow-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-navy-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-navy-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Cost Section */}
      <section className="py-16 md:py-24 bg-sky-light/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4">Pricing Information</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What would be the AMC cost for a solar system?
              </h2>
              <p className="text-muted-foreground">
                Our AMC pricing is transparent and competitive, tailored to your system size and requirements.
              </p>
            </div>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">AMC Pricing Guide</CardTitle>
                <CardDescription>
                  Estimated annual maintenance costs based on system size
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">System size</TableHead>
                      <TableHead className="font-semibold">Estimated AMC cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Small residential (1–5 kW)</TableCell>
                      <TableCell>₹1,000 – ₹2,000 per kW annually</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mid-scale commercial (10–50 kW)</TableCell>
                      <TableCell>1–2% of initial system cost</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Large solar plants (50 kW+)</TableCell>
                      <TableCell>
                        <span className="text-navy-primary font-medium">Contact us for a custom quote</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-4">
                  * Prices are indicative and may vary based on system complexity, location, and specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Solar Sparkle Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Solar Sparkle for your AMC?
              </h2>
              <p className="text-muted-foreground">
                Experience the difference with our professional solar maintenance services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Expert Technicians',
                  description: 'Our certified solar technicians have years of experience maintaining all types of solar systems.',
                },
                {
                  icon: Sparkles,
                  title: 'Comprehensive Coverage',
                  description: 'From panels to inverters, we cover every component of your solar installation.',
                },
                {
                  icon: Clock,
                  title: 'Flexible Scheduling',
                  description: 'We work around your schedule with convenient maintenance visit timings.',
                },
                {
                  icon: CheckCircle,
                  title: 'Proven Track Record',
                  description: 'Hundreds of satisfied customers trust us with their solar system maintenance.',
                },
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="hover-lift transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-navy-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottomline Section */}
      <section className="py-16 md:py-24 bg-sky-light/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4">The Bottom Line</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Your Solar Investment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              An AMC for your solar panels is not just a service—it's an investment in the longevity and efficiency of your system. 
              Regular maintenance ensures optimal performance, prevents costly repairs, and maximizes your return on investment. 
              With Solar Sparkle's comprehensive AMC, you can enjoy peace of mind knowing your solar system is in expert hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => {
                  const formSection = document.getElementById('amc-enquiry-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover-scale"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get Your AMC Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  const phone = '+918112438846';
                  const message = encodeURIComponent('Hi, I would like to know more about your AMC services for solar panels.');
                  window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                }}
                className="hover-scale"
              >
                <Mail className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Enquiry Form Section */}
      <section id="amc-enquiry-form" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4">Get Started</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request Your AMC Quote
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you with a customized AMC proposal.
              </p>
            </div>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>AMC Enquiry Form</CardTitle>
                <CardDescription>
                  Tell us about your solar system and we'll provide a tailored maintenance plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter your city/area"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="systemSize">Solar System Size (Optional)</Label>
                    <Input
                      id="systemSize"
                      name="systemSize"
                      value={formData.systemSize}
                      onChange={handleInputChange}
                      placeholder="e.g., 5 kW, 10 kW"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your solar system, any specific concerns, or questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={submitAmcEnquiry.isPending}
                  >
                    {submitAmcEnquiry.isPending ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-5 w-5" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
