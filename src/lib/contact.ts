export const CONTACT = {
  phoneDisplay: '+91 9816883719',
  phoneE164: '+919816883719',
  whatsappE164: '919816883719',
  email: 'Balajitourandtravel38@gmail.com',
  adminEmail: 'Pt562100@gmail.com',
  facebookUrl: 'https://www.facebook.com/Balajitourandtravel38?mibextid=wwXIfr&rdid=VV6BDAwx88G4sip8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KaEtuCDdm%2F%3Fmibextid%3DwwXIfr#',
  instagramUrl: 'https://www.instagram.com/balajitourandtravel.15?evlk=ZGd6NnZjaXUyazhi&utm_source=qr',
  twitterUrl: 'https://x.com/balajitravel_?s=11',
  youtubeUrl: 'https://www.youtube.com/@Balajitourtravel6',
  linkedinUrl: 'https://www.linkedin.com/in/deepak-thakur-305b9941b?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  address: 'Pragpur, Dehra, Kangra, Himachal Pradesh, India',
  addressLine1: 'Pragpur, Dehra, Kangra',
  addressLine2: 'Himachal Pradesh, India',
} as const;

export const buildWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent(message)}`;
};
