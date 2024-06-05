// pages/api/location.ts

import { geolocation } from '@vercel/edge';

export const config = {
  runtime: 'edge',
};

export default function handler(request: Request) {
  const { city } = geolocation(request);
  console.log(city)
  return new Response(JSON.stringify({ city }), {
    headers: { 'content-type': 'application/json' },
  });
}
