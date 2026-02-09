import { Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { useNavigate } from '@tanstack/react-router';
import { LOGO_PATHS, BRAND_NAME, BRAND_TAGLINE } from '@/lib/branding';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-background to-sky-light/10">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <button 
              onClick={() => navigate({ to: '/' })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src={LOGO_PATHS.markSmall}
                alt={`${BRAND_NAME} Logo`}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-navy-primary">
                {BRAND_NAME}
              </span>
            </button>
            <p className="text-sm text-muted-foreground">
              {BRAND_TAGLINE}
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/share/1DT3K4cpYj/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-primary/10 p-2 rounded-lg hover:bg-navy-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4 text-navy-primary" />
              </a>
              <a 
                href="https://x.com/SolarSparkle25" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-primary/10 p-2 rounded-lg hover:bg-navy-primary/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-4 w-4 text-navy-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/solar-sparkle-281b4a38b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-primary/10 p-2 rounded-lg hover:bg-navy-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-4 w-4 text-navy-primary" />
              </a>
              <a 
                href="https://www.instagram.com/solarsparkle_official/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-primary/10 p-2 rounded-lg hover:bg-navy-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4 text-navy-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Offerings</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate({ to: '/residential-solar' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  Residential Solar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/commercial-solar' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  Commercial Solar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/industrial-solar' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  Industrial Solar
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solar Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate({ to: '/on-grid-system' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  On-Grid Solar System
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/off-grid-system' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  Off-Grid Solar System
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/hybrid-system' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  Hybrid Solar System
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/solar-atta-chakki' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  Solar Atta Chakki
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/solar-water-pump' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  Solar Water Pump
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Head Office: Kanpur, India</li>
              <li>+91 81124 38846</li>
              <li>Mon - Sat, 10 AM - 6 PM</li>
              <li>official@solarsparkle.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © 2026. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-navy-primary transition-colors">caffeine.ai</a>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-navy-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
