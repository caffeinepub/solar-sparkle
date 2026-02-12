import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { useNavigate } from '@tanstack/react-router';

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
                src="/assets/generated/amc-logo-transparent.dim_512x512.png" 
                alt="Solar Sparkle Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-navy-primary">
                Solar Sparkle
              </span>
            </button>
            <p className="text-sm text-muted-foreground">
              Leading the way in sustainable solar energy solutions for a brighter, cleaner future.
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
              <li>
                <button 
                  onClick={() => navigate({ to: '/amc' })}
                  className="text-muted-foreground hover:text-navy-primary transition-colors"
                >
                  AMC
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Kanpur, Uttar Pradesh</li>
              <li>
                <a href="tel:+918112438846" className="hover:text-navy-primary transition-colors">
                  +91 81124 38846
                </a>
              </li>
              <li>
                <a href="mailto:official@solarsparkle.in" className="hover:text-navy-primary transition-colors">
                  official@solarsparkle.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Solar Sparkle. All rights reserved.
          </p>
          <button
            onClick={() => navigate({ to: '/admin/submissions' })}
            className="text-xs text-muted-foreground/60 hover:text-navy-primary transition-colors"
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
}
