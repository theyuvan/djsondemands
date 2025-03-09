
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Building2, Mail, Phone, MapPin, Info, Calendar, DollarSign, Globe, MessageSquare } from "lucide-react";

export default function CompanyRegistration() {
  const [formData, setFormData] = useState<{
    companyName: string;
    industry: string;
    contactName: string;
    email: string;
    phone: string;
    location: { city: string; country: string };
    description: string;
    services: string;
    eventTypes: string[];
    eventSize: string;
    budgetRange: string;
    communicationMethod: string;
    website: string;
    socialMedia: string;
    specialRequirements: string;
  }>({
    companyName: "",
    industry: "",
    contactName: "",
    email: "",
    phone: "",
    location: { city: "", country: "" },
    description: "",
    services: "",
    eventTypes: [],
    eventSize: "",
    budgetRange: "",
    communicationMethod: "",
    website: "",
    socialMedia: "",
    specialRequirements: "",
  });

  const eventTypeOptions = [
    "Weddings",
    "Corporate Events",
    "Nightclub Events",
    "Birthday Parties",
    "Festivals",
    "Other",
  ];

  const eventSizeOptions = [
    "Small (0-100 guests)",
    "Medium (100-500 guests)",
    "Large (500+ guests)",
  ];

  const communicationMethods = [
    "Email",
    "Phone Call",
    "WhatsApp",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleEventTypesChange = (eventType: string) => {
    setFormData((prevState) => {
      const eventTypes = prevState.eventTypes.includes(eventType)
        ? prevState.eventTypes.filter((e) => e !== eventType)
        : [...prevState.eventTypes, eventType];
      return { ...prevState, eventTypes };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Temporarily using console.log - in production you would connect to Supabase
    console.log("Submitting company registration:", formData);
    
    // Show success toast notification
    toast({
      title: "Registration Successful",
      description: "Your company has been registered successfully.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen hero-gradient pt-10 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 text-glow">
            Company Registration
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our platform to find the perfect DJ for your events. Fill out the details below to register your company.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="companyName" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Building2 className="h-4 w-4 text-company" />
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                />
              </div>

              {/* Industry */}
              <div className="space-y-2">
                <label htmlFor="industry" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Info className="h-4 w-4 text-company" />
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                />
              </div>

              {/* Contact Name */}
              <div className="space-y-2">
                <label htmlFor="contactName" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Mail className="h-4 w-4 text-company" />
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Mail className="h-4 w-4 text-company" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Phone className="h-4 w-4 text-company" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                />
              </div>

              {/* Website */}
              <div className="space-y-2">
                <label htmlFor="website" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Globe className="h-4 w-4 text-company" />
                  Website (optional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://"
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-company" />
                Company Location
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.location.city}
                  onChange={handleLocationChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.location.country}
                  onChange={handleLocationChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Info className="h-4 w-4 text-company" />
                About Your Company
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
              />
            </div>

            {/* Event Types */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar className="h-4 w-4 text-company" />
                Types of Events
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
                {eventTypeOptions.map((eventType) => (
                  <label key={eventType} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      value={eventType}
                      checked={formData.eventTypes.includes(eventType)}
                      onChange={() => handleEventTypesChange(eventType)}
                      className="rounded border-border/50 bg-muted/50"
                    />
                    {eventType}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Event Size */}
              <div className="space-y-2">
                <label htmlFor="eventSize" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Calendar className="h-4 w-4 text-company" />
                  Typical Event Size
                </label>
                <select
                  id="eventSize"
                  name="eventSize"
                  value={formData.eventSize}
                  onChange={handleChange}
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                  required
                >
                  <option value="">Select Event Size</option>
                  {eventSizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label htmlFor="budgetRange" className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <DollarSign className="h-4 w-4 text-company" />
                  Budget Range
                </label>
                <input
                  type="text"
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  placeholder="e.g. $500-$2000"
                  className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
                />
              </div>
            </div>

            {/* Communication Method */}
            <div className="space-y-2">
              <label htmlFor="communicationMethod" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MessageSquare className="h-4 w-4 text-company" />
                Preferred Communication Method
              </label>
              <select
                id="communicationMethod"
                name="communicationMethod"
                value={formData.communicationMethod}
                onChange={handleChange}
                className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
              >
                <option value="">Select Preferred Method</option>
                {communicationMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>

            {/* Special Requirements */}
            <div className="space-y-2">
              <label htmlFor="specialRequirements" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Info className="h-4 w-4 text-company" />
                Special Requirements or Preferences
              </label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                rows={3}
                value={formData.specialRequirements}
                onChange={handleChange}
                className="w-full bg-muted/50 border border-border/50 rounded-md px-4 py-2 text-foreground"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="company-button-glow bg-company hover:bg-company-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Register Company
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
