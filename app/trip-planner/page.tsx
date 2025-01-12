// app/trip-planner/page.tsx
"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Car, Bus, Loader2 } from 'lucide-react';
import { PLACE_DETAILS } from '@/lib/constants';

interface FormData {
  email: string;
  placeToVisit: string;
  tripType: string;
  transportation: string;
  currentLocation: string;
}

export default function TripPlannerPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    placeToVisit: '',
    tripType: '',
    transportation: '',
    currentLocation: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/trip-planner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create trip plan');
      }

      setSuccess(true);
      setFormData({
        email: '',
        placeToVisit: '',
        tripType: '',
        transportation: '',
        currentLocation: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Plan Your Satara Adventure</h1>
          <p className="text-gray-600">Fill in your details and we'll send you a customized trip plan</p>
        </div>

        {success && (
          <Alert className="mb-6 bg-green-50 text-green-900">
            <AlertDescription>
              Your trip plan has been created! Check your email for the details.
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="mb-6 bg-red-50 text-red-900">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>
              Tell us about your planned visit to Satara
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Place to Visit */}
              <div className="space-y-2">
                <Label htmlFor="placeToVisit">Place to Visit</Label>
                <Select
                  value={formData.placeToVisit}
                  onValueChange={(value) => setFormData({ ...formData, placeToVisit: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(PLACE_DETAILS).map((place) => (
                      <SelectItem key={place} value={place}>
                        {place}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Trip Type */}
              <div className="space-y-2">
                <Label>Trip Type</Label>
                <Select
                  value={formData.tripType}
                  onValueChange={(value) => setFormData({ ...formData, tripType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family Trip</SelectItem>
                    <SelectItem value="friends">Friends Trip</SelectItem>
                    <SelectItem value="solo">Solo Trip</SelectItem>
                    <SelectItem value="couple">Couple Trip</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Transportation */}
              <div className="space-y-2">
                <Label>Mode of Transportation</Label>
                <RadioGroup
                  value={formData.transportation}
                  onValueChange={(value) => setFormData({ ...formData, transportation: value })}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="own-vehicle" id="own-vehicle" />
                    <Label htmlFor="own-vehicle" className="flex items-center space-x-2">
                      <Car className="w-4 h-4" />
                      <span>Own Vehicle</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public-transport" id="public-transport" />
                    <Label htmlFor="public-transport" className="flex items-center space-x-2">
                      <Bus className="w-4 h-4" />
                      <span>Public Transport</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Current Location */}
              <div className="space-y-2">
                <Label htmlFor="currentLocation">Current Location</Label>
                <Input
                  id="currentLocation"
                  placeholder="Enter your current city"
                  value={formData.currentLocation}
                  onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Trip Plan...
                  </>
                ) : (
                  'Generate Trip Plan'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}