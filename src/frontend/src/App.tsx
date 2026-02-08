import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ResidentialSolarPage } from './pages/ResidentialSolarPage';
import { CommercialSolarPage } from './pages/CommercialSolarPage';
import { IndustrialSolarPage } from './pages/IndustrialSolarPage';
import { OnGridSystemPage } from './pages/OnGridSystemPage';
import { OffGridSystemPage } from './pages/OffGridSystemPage';
import { HybridSystemPage } from './pages/HybridSystemPage';
import { SolarAttaChakkiPage } from './pages/SolarAttaChakkiPage';
import { SolarWaterPumpPage } from './pages/SolarWaterPumpPage';
import { ExpertConsultancyPage } from './pages/ExpertConsultancyPage';
import { TrustedPartnerPage } from './pages/TrustedPartnerPage';
import { CareersPage } from './pages/CareersPage';

const queryClient = new QueryClient();

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const residentialSolarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/residential-solar',
  component: ResidentialSolarPage,
});

const commercialSolarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/commercial-solar',
  component: CommercialSolarPage,
});

const industrialSolarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industrial-solar',
  component: IndustrialSolarPage,
});

const onGridSystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/on-grid-system',
  component: OnGridSystemPage,
});

const offGridSystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/off-grid-system',
  component: OffGridSystemPage,
});

const hybridSystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hybrid-system',
  component: HybridSystemPage,
});

const solarAttaChakkiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solar-atta-chakki',
  component: SolarAttaChakkiPage,
});

const solarWaterPumpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solar-water-pump',
  component: SolarWaterPumpPage,
});

const expertConsultancyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/expert-consultancy',
  component: ExpertConsultancyPage,
});

const trustedPartnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/trusted-partner',
  component: TrustedPartnerPage,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/careers',
  component: CareersPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  residentialSolarRoute,
  commercialSolarRoute,
  industrialSolarRoute,
  onGridSystemRoute,
  offGridSystemRoute,
  hybridSystemRoute,
  solarAttaChakkiRoute,
  solarWaterPumpRoute,
  expertConsultancyRoute,
  trustedPartnerRoute,
  careersRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
