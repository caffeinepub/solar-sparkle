import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsCallerAdmin } from '../hooks/useAdmin';
import { useGetAllConsultancyForms, useGetAllAmcEnquiries, useGetAllPartnerRegistrations } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, ShieldAlert, LogIn, AlertCircle, Info } from 'lucide-react';
import { formatTimestamp } from '../lib/formatTimestamp';
import { useQueryClient } from '@tanstack/react-query';

export function AdminSubmissionsPage() {
  const { login, clear, identity, isInitializing } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: isAdmin, isLoading: isAdminLoading, isFetched: isAdminFetched, error: adminError } = useIsCallerAdmin();
  
  const isAuthenticated = !!identity;
  const showLoading = isInitializing || (isAuthenticated && isAdminLoading);
  const showAccessDenied = isAuthenticated && isAdminFetched && !isAdmin;
  const canFetchSubmissions = isAuthenticated && isAdminFetched && isAdmin;

  // Only fetch submissions if user is confirmed admin
  const { 
    data: consultations = [], 
    isLoading: consultationsLoading,
    error: consultationsError 
  } = useGetAllConsultancyForms(canFetchSubmissions);
  
  const { 
    data: amcEnquiries = [], 
    isLoading: amcLoading,
    error: amcError 
  } = useGetAllAmcEnquiries(canFetchSubmissions);
  
  const { 
    data: partnerRegistrations = [], 
    isLoading: partnersLoading,
    error: partnersError 
  } = useGetAllPartnerRegistrations(canFetchSubmissions);

  // Sort newest first (by id descending)
  const sortedConsultations = [...consultations].sort((a, b) => Number(b.id) - Number(a.id));
  const sortedAmcEnquiries = [...amcEnquiries].sort((a, b) => Number(b.id) - Number(a.id));
  const sortedPartnerRegistrations = [...partnerRegistrations].sort((a, b) => Number(b.id) - Number(a.id));

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  if (showLoading) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-navy-primary mx-auto" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-navy-primary/10 flex items-center justify-center">
              <LogIn className="h-6 w-6 text-navy-primary" />
            </div>
            <CardTitle>Admin Login Required</CardTitle>
            <CardDescription>
              Please log in with your Internet Identity to access the admin submissions dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={login} className="w-full" size="lg">
              Login with Internet Identity
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showAccessDenied) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-2xl w-full border-destructive">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <ShieldAlert className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-destructive">Access Denied</CardTitle>
            <CardDescription>
              You do not have permission to view this page. Only administrators can access submission data.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>How Admin Access Works</AlertTitle>
              <AlertDescription className="space-y-2 text-sm">
                <p>
                  Admin access is granted based on your <strong>Internet Identity Principal</strong>, not a separate token.
                </p>
                <div className="mt-3 space-y-2">
                  <p className="font-medium">To get admin access:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>The first user to log in automatically becomes the admin</li>
                    <li>If you need admin access and aren't the first user, contact the system administrator</li>
                    <li>The administrator can grant you admin rights using your Principal ID</li>
                  </ol>
                </div>
                <div className="mt-3 p-3 bg-muted rounded-md">
                  <p className="text-xs font-medium mb-1">For Administrators:</p>
                  <p className="text-xs text-muted-foreground">
                    See <code className="bg-background px-1 py-0.5 rounded">frontend/DEPLOYMENT.md</code> for the complete procedure to grant admin access to additional users via their Internet Identity Principal.
                  </p>
                </div>
              </AlertDescription>
            </Alert>
            <Button onClick={handleLogout} variant="outline" className="w-full">
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show error state if any submission queries failed
  const hasErrors = consultationsError || amcError || partnersError;
  if (hasErrors) {
    return (
      <div className="container py-16 flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-2xl w-full border-destructive">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-destructive">Error Loading Submissions</CardTitle>
            <CardDescription>
              There was a problem loading the submission data.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error Details</AlertTitle>
              <AlertDescription className="space-y-2 text-sm">
                {consultationsError && <p>Consultations: {String(consultationsError)}</p>}
                {amcError && <p>AMC Enquiries: {String(amcError)}</p>}
                {partnersError && <p>Partner Registrations: {String(partnersError)}</p>}
              </AlertDescription>
            </Alert>
            <div className="flex gap-2">
              <Button onClick={() => window.location.reload()} className="flex-1">
                Retry
              </Button>
              <Button onClick={handleLogout} variant="outline" className="flex-1">
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-primary mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            View and manage all form submissions
          </p>
        </div>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      <Tabs defaultValue="consultations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="consultations">
            Consultations ({sortedConsultations.length})
          </TabsTrigger>
          <TabsTrigger value="amc">
            AMC Enquiries ({sortedAmcEnquiries.length})
          </TabsTrigger>
          <TabsTrigger value="partners">
            Partner Registrations ({sortedPartnerRegistrations.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="consultations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Consultation Submissions</CardTitle>
              <CardDescription>
                Free consultation requests from potential customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {consultationsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-navy-primary" />
                </div>
              ) : sortedConsultations.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No consultation submissions yet
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Requirement</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedConsultations.map((form) => (
                        <TableRow key={form.id.toString()}>
                          <TableCell className="font-medium">#{form.id.toString()}</TableCell>
                          <TableCell>{form.name}</TableCell>
                          <TableCell>{form.phoneNumber}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{form.email}</TableCell>
                          <TableCell>{form.location}</TableCell>
                          <TableCell className="max-w-[300px]">
                            <div className="truncate" title={form.requirementMessage}>
                              {form.requirementMessage}
                            </div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            {formatTimestamp(form.timestamp)}
                          </TableCell>
                          <TableCell>
                            <Badge variant={form.status === 'new' ? 'default' : 'secondary'}>
                              {form.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amc" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AMC Enquiry Submissions</CardTitle>
              <CardDescription>
                Annual Maintenance Contract enquiries from customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {amcLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-navy-primary" />
                </div>
              ) : sortedAmcEnquiries.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No AMC enquiries yet
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>System Details</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedAmcEnquiries.map((enquiry) => (
                        <TableRow key={enquiry.id.toString()}>
                          <TableCell className="font-medium">#{enquiry.id.toString()}</TableCell>
                          <TableCell>{enquiry.clientName}</TableCell>
                          <TableCell>{enquiry.phoneNumber}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{enquiry.email}</TableCell>
                          <TableCell>{enquiry.location}</TableCell>
                          <TableCell className="max-w-[300px]">
                            <div className="truncate" title={enquiry.systemDetails}>
                              {enquiry.systemDetails}
                            </div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            {formatTimestamp(enquiry.timestamp)}
                          </TableCell>
                          <TableCell>
                            <Badge variant={enquiry.status === 'new' ? 'default' : 'secondary'}>
                              {enquiry.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="partners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Partner Registration Submissions</CardTitle>
              <CardDescription>
                Partnership and franchise applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              {partnersLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-navy-primary" />
                </div>
              ) : sortedPartnerRegistrations.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No partner registrations yet
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Business Details</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedPartnerRegistrations.map((registration) => (
                        <TableRow key={registration.id.toString()}>
                          <TableCell className="font-medium">#{registration.id.toString()}</TableCell>
                          <TableCell>{registration.name}</TableCell>
                          <TableCell>{registration.companyName}</TableCell>
                          <TableCell>{registration.phoneNumber}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{registration.email}</TableCell>
                          <TableCell>{registration.location}</TableCell>
                          <TableCell className="max-w-[300px]">
                            <div className="truncate" title={registration.businessDetails}>
                              {registration.businessDetails}
                            </div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            {formatTimestamp(registration.timestamp)}
                          </TableCell>
                          <TableCell>
                            <Badge variant={registration.status === 'new' ? 'default' : 'secondary'}>
                              {registration.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
