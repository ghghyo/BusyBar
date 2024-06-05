import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  city: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Extract the client's IP address from headers
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress;

  console.log(`Client IP: ${ip}`); // Debugging line to log the IP

  try {
    // Use the client's IP address in the API request
    const response = await fetch(`https://ipinfo.io/json?token=689fae9f921906`, {
      headers: {
        'Authorization': `Bearer 689fae9f921906`
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
