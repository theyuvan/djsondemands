
import React, { useState } from 'react';
import { Music, Upload, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const DJRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    stageName: "",
    profilePicture: null as File | null,
    email: "",
    phoneNumber: "",
    location: { country: "", state: "", city: "" },
    experienceYears: "",
    genres: [] as string[],
    bio: "",
    djSoftware: "",
    demoLinks: "",
    pastEvents: "",
    pricing: "",
    travelPreference: "",
    socialMediaLinks: "",
    personalWebsite: "",
  });

  const genresOptions = [
    "EDM", "Hip-Hop", "House", "Techno", "Pop", "Rock", "Other",
  ];

  const travelPreferences = [
    "Local only", "National", "International",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleGenresChange = (genre: string) => {
    setFormData((prevState) => {
      const genres = prevState.genres.includes(genre)
        ? prevState.genres.filter((g) => g !== genre)
        : [...prevState.genres, genre];
      return { ...prevState, genres };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // This is where the Supabase connection would be implemented
    console.log('Form submitted:', formData);
    alert('DJ Registration submitted successfully!');
  };

  return (
    <div className="min-h-screen hero-gradient overflow-hidden">
      {/* Background audio waves and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-0" />
      
      {/* Header with logo */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo />
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-10 mb-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-glow mb-4">DJ Registration</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join our elite roster of professional DJs and get connected with premium gigs and clients.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card max-w-4xl mx-auto p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information Section */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Music className="mr-2 text-primary" size={20} />
                Personal Information
              </h2>
              <div className="h-0.5 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent mb-6"></div>
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="block text-sm font-medium text-white/90 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                required
              />
            </div>

            {/* Stage Name */}
            <div className="form-group">
              <label htmlFor="stageName" className="block text-sm font-medium text-white/90 mb-2">
                Stage Name (Optional)
              </label>
              <input
                type="text"
                id="stageName"
                name="stageName"
                value={formData.stageName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white/90 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                required
              />
            </div>

            {/* Profile Picture */}
            <div className="form-group md:col-span-2">
              <label htmlFor="profilePicture" className="block text-sm font-medium text-white/90 mb-2">
                Profile Picture
              </label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="profilePicture" className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/20 rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-white/70" />
                    <p className="mb-2 text-sm text-white/90">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-white/70">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
                  </div>
                  <input id="profilePicture" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                </label>
              </div>
            </div>

            {/* Location Section */}
            <div className="md:col-span-2 mt-6">
              <h2 className="text-xl font-semibold text-white mb-4">Location</h2>
              <div className="h-0.5 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent mb-6"></div>
            </div>

            {/* Country */}
            <div className="form-group">
              <label htmlFor="country" className="block text-sm font-medium text-white/90 mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.location.country}
                onChange={handleLocationChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                required
              />
            </div>

            {/* State */}
            <div className="form-group">
              <label htmlFor="state" className="block text-sm font-medium text-white/90 mb-2">
                State/Province
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.location.state}
                onChange={handleLocationChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                required
              />
            </div>

            {/* City */}
            <div className="form-group md:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-white/90 mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.location.city}
                onChange={handleLocationChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                required
              />
            </div>

            {/* Professional Information Section */}
            <div className="md:col-span-2 mt-6">
              <h2 className="text-xl font-semibold text-white mb-4">Professional Information</h2>
              <div className="h-0.5 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent mb-6"></div>
            </div>

            {/* Years of Experience */}
            <div className="form-group">
              <label htmlFor="experienceYears" className="block text-sm font-medium text-white/90 mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                id="experienceYears"
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                min="0"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                required
              />
            </div>

            {/* DJ Software */}
            <div className="form-group">
              <label htmlFor="djSoftware" className="block text-sm font-medium text-white/90 mb-2">
                DJ Software/Equipment
              </label>
              <input
                type="text"
                id="djSoftware"
                name="djSoftware"
                value={formData.djSoftware}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
            </div>

            {/* Music Genres */}
            <div className="form-group md:col-span-2">
              <label className="block text-sm font-medium text-white/90 mb-2">
                Primary Music Genres
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {genresOptions.map((genre) => (
                  <div 
                    key={genre} 
                    className={`cursor-pointer px-4 py-2 rounded-lg text-center transition
                              ${formData.genres.includes(genre) 
                                ? 'bg-primary text-white' 
                                : 'bg-white/5 text-white/80 hover:bg-white/10'}`}
                    onClick={() => handleGenresChange(genre)}
                  >
                    {genre}
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Preference */}
            <div className="form-group md:col-span-2">
              <label className="block text-sm font-medium text-white/90 mb-2">
                Travel Preference
              </label>
              <div className="grid grid-cols-3 gap-3">
                {travelPreferences.map((pref) => (
                  <div 
                    key={pref} 
                    className={`cursor-pointer px-4 py-2 rounded-lg text-center transition
                              ${formData.travelPreference === pref 
                                ? 'bg-primary text-white' 
                                : 'bg-white/5 text-white/80 hover:bg-white/10'}`}
                    onClick={() => setFormData({...formData, travelPreference: pref})}
                  >
                    {pref}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="form-group md:col-span-2">
              <label htmlFor="bio" className="block text-sm font-medium text-white/90 mb-2">
                Bio / Artist Statement
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
            </div>

            {/* Demo Links */}
            <div className="form-group md:col-span-2">
              <label htmlFor="demoLinks" className="block text-sm font-medium text-white/90 mb-2">
                Demo Links (SoundCloud, Mixcloud, etc.)
              </label>
              <textarea
                id="demoLinks"
                name="demoLinks"
                value={formData.demoLinks}
                onChange={handleChange}
                rows={2}
                placeholder="https://soundcloud.com/your-profile"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
            </div>

            {/* Social Media Links */}
            <div className="form-group md:col-span-2">
              <label htmlFor="socialMediaLinks" className="block text-sm font-medium text-white/90 mb-2">
                Social Media Links
              </label>
              <textarea
                id="socialMediaLinks"
                name="socialMediaLinks"
                value={formData.socialMediaLinks}
                onChange={handleChange}
                rows={2}
                placeholder="Instagram: https://instagram.com/your-profile, Facebook: https://facebook.com/your-page"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              />
            </div>

            {/* Submit Button */}
            <div className="form-group md:col-span-2 text-center mt-6">
              <button 
                type="submit" 
                className="bg-dj text-white hover:bg-dj-dark hover:scale-105 button-glow transition-all duration-300 px-8 py-3 rounded-xl font-semibold"
              >
                Submit Registration
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default DJRegistration;
