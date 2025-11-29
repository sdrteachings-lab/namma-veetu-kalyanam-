import { Profile } from './types';

export const TAMIL_TRANSLATIONS = {
  appName: "நம்ம வீட்டு கல்யாணம்",
  tagline: "தமிழர்களின் பாரம்பரிய திருமண தளம்",
  nav: {
    home: "முகப்பு",
    matches: "வரன்கள்",
    horoscope: "ஜாதக பொருத்தம்",
    chat: "உதவி",
    login: "உள்நுழைய",
  },
  hero: {
    title: "உங்கள் வாழ்க்கைத் துணையை இங்கே தேடுங்கள்",
    subtitle: "ஆயிரக்கணக்கான வரன்கள் காத்திருக்கின்றன",
    searchBtn: "தேடுக",
    registerBtn: "இலவச பதிவு",
  },
  filters: {
    lookingFor: "யாரைத் தேடுகிறீர்கள்?",
    bride: "மணமகள்",
    groom: "மணமகன்",
    age: "வயது",
    religion: "மதம்",
    caste: "ஜாதி",
  },
  profile: {
    age: "வயது",
    education: "கல்வி",
    job: "வேலை",
    location: "இடம்",
    contact: "தொடர்புக்கு",
  },
  horoscope: {
    title: "AI ஜாதக பொருத்தம்",
    desc: "செயற்கை நுண்ணறிவு மூலம் திருமண பொருத்தம் பார்க்கவும்",
    boy: "மணமகன் விவரங்கள்",
    girl: "மணமகள் விவரங்கள்",
    check: "பொருத்தம் பார்க்க",
    result: "பொருத்த முடிவு",
  }
};

export const MOCK_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Karthik Raja',
    age: 28,
    gender: 'Male',
    location: 'Chennai',
    profession: 'Software Engineer',
    education: 'B.E. CSE',
    religion: 'Hindu',
    caste: 'Mudaliar',
    motherTongue: 'Tamil',
    imageUrl: 'https://picsum.photos/400/400?random=1',
    about: 'I am a software engineer working in Chennai. I love traveling and music.'
  },
  {
    id: '2',
    name: 'Priya Lakshmi',
    age: 26,
    gender: 'Female',
    location: 'Coimbatore',
    profession: 'Doctor',
    education: 'MBBS',
    religion: 'Hindu',
    caste: 'Gounder',
    motherTongue: 'Tamil',
    imageUrl: 'https://picsum.photos/400/400?random=2',
    about: 'I am a dedicated doctor looking for a caring partner.'
  },
  {
    id: '3',
    name: 'Sundar Pichai',
    age: 30,
    gender: 'Male',
    location: 'Madurai',
    profession: 'Bank Manager',
    education: 'MBA',
    religion: 'Hindu',
    caste: 'Iyer',
    motherTongue: 'Tamil',
    imageUrl: 'https://picsum.photos/400/400?random=3',
    about: 'Working as a manager in SBI. Looking for a traditional girl.'
  },
  {
    id: '4',
    name: 'Divya Bharathi',
    age: 25,
    gender: 'Female',
    location: 'Trichy',
    profession: 'Teacher',
    education: 'M.Sc, B.Ed',
    religion: 'Christian',
    caste: 'Nadar',
    motherTongue: 'Tamil',
    imageUrl: 'https://picsum.photos/400/400?random=4',
    about: 'School teacher with a passion for literature.'
  },
  {
    id: '5',
    name: 'Mohamed Anis',
    age: 29,
    gender: 'Male',
    location: 'Chennai',
    profession: 'Business',
    education: 'B.Com',
    religion: 'Muslim',
    caste: 'Rowther',
    motherTongue: 'Tamil',
    imageUrl: 'https://picsum.photos/400/400?random=5',
    about: 'Running a successful export business in Chennai.'
  },
  {
    id: '6',
    name: 'Keerthi Suresh',
    age: 27,
    gender: 'Female',
    location: 'Salem',
    profession: 'Architect',
    education: 'B.Arch',
    religion: 'Hindu',
    caste: 'Vanniyar',
    motherTongue: 'Tamil',
    imageUrl: 'https://picsum.photos/400/400?random=6',
    about: 'Creative architect looking for a supportive partner.'
  }
];
