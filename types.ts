export interface Profile {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  location: string;
  profession: string;
  education: string;
  religion: string;
  caste: string;
  motherTongue: string;
  imageUrl: string;
  about: string;
}

export interface HoroscopeData {
  rashi: string;
  nakshatra: string;
}

export interface CompatibilityResult {
  score: number;
  description: string;
  matchType: 'Excellent' | 'Good' | 'Average' | 'Poor';
}

export enum ViewState {
  HOME = 'HOME',
  PROFILES = 'PROFILES',
  HOROSCOPE = 'HOROSCOPE',
  CHAT = 'CHAT'
}