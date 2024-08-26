import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
    return res.json();
}