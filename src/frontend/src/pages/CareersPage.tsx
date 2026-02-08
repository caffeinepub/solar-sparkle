import { Briefcase, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function CareersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-background to-navy-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-primary/10 px-4 py-2 text-sm font-medium text-navy-primary">
              <Briefcase className="h-4 w-4" />
              <span>Career Opportunities</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Careers at Solar Sparkle
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our team and be part of the renewable energy revolution
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-navy-primary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="h-16 w-16 text-navy-primary" />
                </div>
                <CardTitle className="text-2xl">Job Openings Will Be Listed Soon</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base">
                  We're currently building our team and will be posting exciting career opportunities soon. 
                  Check back regularly to see available positions in sales, installation, engineering, and more.
                </CardDescription>
                <CardDescription className="text-base">
                  Solar Sparkle is committed to creating a diverse and inclusive workplace where talented individuals 
                  can grow their careers while making a positive impact on the environment.
                </CardDescription>
              </CardContent>
            </Card>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Why Work With Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Competitive salary and benefits</li>
                    <li>• Professional development opportunities</li>
                    <li>• Work with cutting-edge solar technology</li>
                    <li>• Make a positive environmental impact</li>
                    <li>• Collaborative team environment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Future Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Solar Installation Technicians</li>
                    <li>• Sales Representatives</li>
                    <li>• Project Managers</li>
                    <li>• Customer Service Specialists</li>
                    <li>• Engineering Positions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
