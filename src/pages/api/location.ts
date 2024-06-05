import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  const geo = req.geo || {};
  const city = geo.city || 'Unknown City';

  return NextResponse.json({ city });
}
