import { NextResponse } from 'next/server';
import cities from '@/data/indianCities.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([]);
  }

  const lowerQuery = query.toLowerCase();
  
  const filteredCities = cities.filter((item) => 
    item.city.toLowerCase().includes(lowerQuery)
  );

  // Sort by startsWith first, then includes
  filteredCities.sort((a, b) => {
    const aStarts = a.city.toLowerCase().startsWith(lowerQuery);
    const bStarts = b.city.toLowerCase().startsWith(lowerQuery);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    return 0;
  });

  return NextResponse.json(filteredCities.slice(0, 20));
}
