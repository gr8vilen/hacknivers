import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'delf5fo6',
    dataset:'production',
    ignoreBrowserTokenWarning: true,
    useCdn: true,
    apiVersion: '2021-03-21',
    token:'sksm1N7szWkgbPIFfKE87wkqkGnziyhKQCvaFUAnqsoj7dRJxHo4nJZNbWt3hWU4VYpB7gx6MmVdtda5a4LQl8G3E5QcRJq2V84UVj2NxM8Bm8l8gFFDU6btjwuL8sDBGveiVlalc5HzSMGWfe8quWk6OEROgWxnQzFogoZYCfoWhRU64BXK',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);