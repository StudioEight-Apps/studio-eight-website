import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    social: "",
    pitch: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        <Link to="/" className="text-xl font-medium tracking-tight text-foreground">
          Studio Eight
        </Link>
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-24 py-12 lg:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
            Let's work together
          </h1>
          <p className="text-muted-foreground mb-12">
            Tell us about your project and we'll be in touch.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">
                Name <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">
                Email <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="social">Social</Label>
              <Input
                id="social"
                name="social"
                type="text"
                placeholder="@username"
                value={formData.social}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="pitch">
                Tell us about your project <span className="text-muted-foreground">*</span>
              </Label>
              <Textarea
                id="pitch"
                name="pitch"
                required
                rows={5}
                value={formData.pitch}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" size="lg" className="w-full mt-4">
              Send message
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
