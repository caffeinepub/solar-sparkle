import { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitConsultancyForm } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { exportConsultancyToSheets, type ConsultancyFormData } from '@/lib/googleSheetsExport';
import { isConsultancyExportConfigured } from '@/config/googleSheetsConfig';

export function ExpertConsultancyPage() {
  const [formData, setFormData] = useState<ConsultancyFormData>({
    name: '',
    phoneNumber: '',
    email: '',
    location: '',
    requirementMessage: '',
  });
  const [isExportingToSheets, setIsExportingToSheets] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<ConsultancyFormData | null>(null);

  const submitMutation = useSubmitConsultancyForm();

  const handleSheetsExport = async (data: ConsultancyFormData) => {
    setIsExportingToSheets(true);
    const result = await exportConsultancyToSheets(data);
    setIsExportingToSheets(false);

    if (!result.success) {
      if (result.configMissing) {
        console.warn('Google Sheets export not configured');
      } else {
        toast.error('Failed to export to Google Sheets', {
          description: result.error || 'Please try again or contact support.',
          action: {
            label: 'Retry',
            onClick: () => handleSheetsExport(data),
          },
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.location) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // Submit to backend first
      await submitMutation.mutateAsync(formData);
      
      // Store the submitted data for potential retry
      setLastSubmittedData({ ...formData });
      
      // Show success message
      toast.success('Consultation request submitted successfully! Our team will contact you soon.');
      
      // Clear form
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        location: '',
        requirementMessage: '',
      });

      // Export to Google Sheets after successful backend submission
      if (isConsultancyExportConfigured()) {
        await handleSheetsExport(lastSubmittedData || formData);
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  const handleRetryExport = () => {
    if (lastSubmittedData) {
      handleSheetsExport(lastSubmittedData);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit hover:bg-navy-primary/20 transition-colors duration-300">
                <MessageSquare className="h-4 w-4 icon-bounce" />
                <span>Free Consultation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Expert Solar Consultancy
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Get personalized advice from our solar energy experts. We'll help you design the perfect solar solution 
                for your specific needs, budget, and location. Book your free consultation today!
              </p>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/assets/generated/expert-consultancy-hero.dim_800x600.jpg" 
                alt="Expert Consultancy" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-glow-lg transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-background">
        <div className="container">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Book Your Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm md:text-base">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                    className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm md:text-base">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                    className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    required
                    className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm md:text-base">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter your city or address"
                    required
                    className="h-10 md:h-11 text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirementMessage" className="text-sm md:text-base">Requirement Message</Label>
                  <Textarea
                    id="requirementMessage"
                    value={formData.requirementMessage}
                    onChange={(e) => setFormData({ ...formData, requirementMessage: e.target.value })}
                    placeholder="Tell us about your solar energy requirements..."
                    rows={5}
                    className="text-base transition-all duration-300 focus:ring-2 focus:ring-sky-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-navy-primary hover:bg-navy-primary/90 text-white h-11 md:h-12 text-base hover-scale transition-all duration-300 shadow-md hover:shadow-glow-md"
                  disabled={submitMutation.isPending || isExportingToSheets}
                >
                  {submitMutation.isPending || isExportingToSheets ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {submitMutation.isPending ? 'Submitting...' : 'Exporting...'}
                    </>
                  ) : (
                    'Submit Consultation Request'
                  )}
                </Button>

                {lastSubmittedData && (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleRetryExport}
                    disabled={isExportingToSheets}
                  >
                    {isExportingToSheets ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Retrying Export...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Retry Google Sheets Export
                      </>
                    )}
                  </Button>
                )}
              </form>
            </div>

            <div className="space-y-4 md:space-y-6 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">What to Expect</h2>
              
              <Card className="hover-lift hover-glow transition-all duration-300">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-xl">Personalized Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">
                    Our experts will analyze your energy consumption patterns, roof space, and location to design 
                    the optimal solar solution for your needs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift hover-glow transition-all duration-300">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-xl">Cost-Benefit Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">
                    Receive detailed projections of your potential savings, return on investment, and payback period 
                    for different solar system configurations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-lift hover-glow transition-all duration-300">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-xl">Technical Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">
                    Get expert advice on system sizing, component selection, installation requirements, and 
                    maintenance considerations.
                  </CardDescription>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-navy-primary/5 to-sky-light p-4 md:p-6 rounded-lg space-y-4 hover-glow transition-all duration-300">
                <h3 className="font-semibold text-base md:text-lg">Contact Information</h3>
                <div className="space-y-3 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-navy-primary icon-bounce" />
                    <span>+91 81124 38846</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-navy-primary icon-bounce" />
                    <span>official@solarsparkle.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-navy-primary icon-bounce" />
                    <span>Kanpur, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
