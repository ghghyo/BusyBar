// pages/api/location.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  city: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ip = req.headers['x-real-ip'] as string || req.socket.remoteAddress || '';
  try {
    const response = await fetch(`https://ipinfo.io/json?token=689fae9f921906`, {
      headers: {
        'Authorization': `689fae9f921906`
      }
    });
    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ city: data.city });
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ city: null });
  }
}