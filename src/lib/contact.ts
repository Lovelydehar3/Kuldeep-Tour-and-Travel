export const CONTACT = {
  phoneDisplay: '+91 9816883719',
  phoneE164: '+919816883719',
  whatsappE164: '919816883719',
  email: 'Balajitourandtravel38@gmail.com',
  facebookUrl: 'https://www.facebook.com/share/17VhuQyM6H/',
  instagramUrl: 'https://www.instagram.com/kuld.eeptourtravel?igsh=aDUxbDhkZ3FxcjBt',
  address: 'Pragpur, Dehra, Kangra, Himachal Pradesh, India',
  addressLine1: 'Pragpur, Dehra, Kangra',
  addressLine2: 'Himachal Pradesh, India',
} as const;

export const buildWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent(message)}`;
};
