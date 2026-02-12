import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-16 md:h-18 items-center justify-between">
        <button 
          onClick={() => handleNavigation('/')}
          className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover-scale"
        >
          <img 
            src="/assets/generated/amc-logo-transparent.dim_512x512.png" 
            alt="Solar Sparkle Logo" 
            className="h-10 md:h-12 w-auto"
          />
          <span className="text-lg md:text-xl font-bold text-navy-primary">
            Solar Sparkle
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-navy-primary hover:scale-105">
              Our Offerings <ChevronDown className="h-4 w-4 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="animate-fade-in">
              <DropdownMenuItem onClick={() => handleNavigation('/residential-solar')} className="transition-colors duration-200">
                Residential Solar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/commercial-solar')} className="transition-colors duration-200">
                Commercial Solar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/industrial-solar')} className="transition-colors duration-200">
                Industrial Solar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-navy-primary hover:scale-105">
              Solar Solutions <ChevronDown className="h-4 w-4 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="animate-fade-in">
              <DropdownMenuItem onClick={() => handleNavigation('/on-grid-system')} className="transition-colors duration-200">
                On-Grid Solar System
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/off-grid-system')} className="transition-colors duration-200">
                Off-Grid Solar System
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/hybrid-system')} className="transition-colors duration-200">
                Hybrid Solar System
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/solar-atta-chakki')} className="transition-colors duration-200">
                Solar Atta Chakki
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/solar-water-pump')} className="transition-colors duration-200">
                Solar Water Pump
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            onClick={() => handleNavigation('/expert-consultancy')}
            className="text-sm font-medium transition-all duration-300 hover:text-navy-primary hover:scale-105"
          >
            Expert Consultancy
          </button>

          <button 
            onClick={() => handleNavigation('/amc')}
            className="text-sm font-medium transition-all duration-300 hover:text-navy-primary hover:scale-105"
          >
            AMC
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-navy-primary hover:scale-105">
              More <ChevronDown className="h-4 w-4 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="animate-fade-in">
              <DropdownMenuItem onClick={() => handleNavigation('/trusted-partner')} className="transition-colors duration-200">
                Trusted Partner
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/careers')} className="transition-colors duration-200">
                Careers
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            onClick={() => handleNavigation('/expert-consultancy')}
            className="bg-navy-primary hover:bg-navy-primary/90 text-white hover-scale transition-all duration-300 shadow-md hover:shadow-glow-sm"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur animate-fade-in">
          <nav className="container flex flex-col gap-3 py-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground px-2">Our Offerings</p>
              <button 
                onClick={() => handleNavigation('/residential-solar')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Residential Solar
              </button>
              <button 
                onClick={() => handleNavigation('/commercial-solar')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Commercial Solar
              </button>
              <button 
                onClick={() => handleNavigation('/industrial-solar')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Industrial Solar
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground px-2">Solar Solutions</p>
              <button 
                onClick={() => handleNavigation('/on-grid-system')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                On-Grid Solar System
              </button>
              <button 
                onClick={() => handleNavigation('/off-grid-system')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Off-Grid Solar System
              </button>
              <button 
                onClick={() => handleNavigation('/hybrid-system')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Hybrid Solar System
              </button>
              <button 
                onClick={() => handleNavigation('/solar-atta-chakki')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Solar Atta Chakki
              </button>
              <button 
                onClick={() => handleNavigation('/solar-water-pump')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Solar Water Pump
              </button>
            </div>

            <button 
              onClick={() => handleNavigation('/expert-consultancy')}
              className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left px-3 py-2 rounded-md"
            >
              Expert Consultancy
            </button>

            <button 
              onClick={() => handleNavigation('/amc')}
              className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left px-3 py-2 rounded-md"
            >
              AMC
            </button>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground px-2">More</p>
              <button 
                onClick={() => handleNavigation('/trusted-partner')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Trusted Partner
              </button>
              <button 
                onClick={() => handleNavigation('/careers')}
                className="text-sm font-medium transition-all duration-200 hover:text-navy-primary hover:bg-navy-primary/5 text-left w-full px-3 py-2 rounded-md"
              >
                Careers
              </button>
            </div>

            <Button 
              onClick={() => handleNavigation('/expert-consultancy')}
              className="bg-navy-primary hover:bg-navy-primary/90 text-white w-full mt-2 hover-scale transition-all duration-300 shadow-md"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
