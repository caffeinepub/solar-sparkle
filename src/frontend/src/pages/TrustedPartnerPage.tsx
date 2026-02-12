import { useState } from 'react';
import { Handshake, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitPartnerRegistration } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { exportPartnerToSheets, type PartnerFormData } from '@/lib/googleSheetsExport';
import { isPartnerExportConfigured } from '@/config/googleSheetsConfig';

export function TrustedPartnerPage() {
  const [formData, setFormData] = useState<PartnerFormData>({
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    location: '',
    businessDetails: '',
  });
  const [isExportingToSheets, setIsExportingToSheets] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<PartnerFormData | null>(null);

  const submitMutation = useSubmitPartnerRegistration();

  const handleSheetsExport = async (data: PartnerFormData) => {
    setIsExportingToSheets(true);
    const result = await exportPartnerToSheets(data);
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
    
    if (!formData.name || !formData.companyName || !formData.phoneNumber || !formData.email || !formData.location) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // Submit to backend first
      await submitMutation.mutateAsync(formData);
      
      // Store the submitted data for potential retry
      setLastSubmittedData({ ...formData });
      
      // Show success message
      toast.success('Partner registration submitted successfully! Our team will contact you soon.');
      
      // Clear form
      setFormData({
        name: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        location: '',
        businessDetails: '',
      });

      // Export to Google Sheets after successful backend submission
      if (isPartnerExportConfigured()) {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary w-fit">
                <Handshake className="h-4 w-4" />
                <span>Partnership Opportunities</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Become a Trusted Partner
              </h1>
              <p className="text-lg text-muted-foreground">
                Join our network of trusted partners and grow your business with Solar Sparkle. We're looking for 
                distributors, installers, and resellers who share our commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/trusted-partner-hero.dim_800x600.jpg" 
                alt="Trusted Partner" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-6">Partner Registration Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter your city or region"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessDetails">Business Details</Label>
                  <Textarea
                    id="businessDetails"
                    value={formData.businessDetails}
                    onChange={(e) => setFormData({ ...formData, businessDetails: e.target.value })}
                    placeholder="Tell us about your business, experience, and why you want to partner with us..."
                    rows={5}
                  />
                </div>

                <div className="bg-sky-light/50 p-4 rounded-lg border border-navy-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> After submitting the form, our team will contact you to discuss partnership 
                    opportunities and next steps.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-navy-primary hover:bg-navy-primary/90 text-white"
                  disabled={submitMutation.isPending || isExportingToSheets}
                >
                  {submitMutation.isPending || isExportingToSheets ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {submitMutation.isPending ? 'Submitting...' : 'Exporting...'}
                    </>
                  ) : (
                    'Submit Partner Registration'
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

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Partnership Benefits</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access wholesale pricing and attractive margins on our complete range of solar products.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive comprehensive training and ongoing technical support from our expert team.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Marketing Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get access to professional marketing materials, product catalogs, and sales support resources.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Expand your business with our proven solar solutions and benefit from our brand reputation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
