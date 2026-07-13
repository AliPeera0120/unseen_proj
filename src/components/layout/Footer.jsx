
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Heart } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/69ebed55a2b77ce4342a0caf/5249a9601_UnseenLogo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_URL} alt="The Unseen Project" className="h-12 w-12 object-contain brightness-0 invert" />
              <span className="font-serif font-semibold text-lg text-background">
                The Unseen Project
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-background/60">
              Collecting eyeglasses to restore vision and empower homeless communities in Philadelphia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { label: "Donation Map", path: "/map" },
                { label: "About Us", path: "/about" },
                { label: "Our Impact", path: "/impact" },
                { label: "Get Involved", path: "/get-involved" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">Get Involved</h4>
            <div className="space-y-2.5">
              <Link to="/get-involved" className="block text-sm text-background/60 hover:text-primary transition-colors">
                Host a Donation Box
              </Link>
              <Link to="/get-involved" className="block text-sm text-background/60 hover:text-primary transition-colors">
                Donate Eyeglasses
              </Link>
              <Link to="/get-involved" className="block text-sm text-background/60 hover:text-primary transition-colors">
                Partner With Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href="mailto:theunseenprojectofficial@gmail.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                theunseenprojectofficial@gmail.com
              </a>
              <p className="text-sm text-background/60">Philadelphia, PA</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} The Unseen Project. All rights reserved.
          </p>
          <p className="text-xs text-background/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Philadelphia
          </p>
        </div>
      </div>
    </footer>
  );
}