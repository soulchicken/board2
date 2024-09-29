import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Post } from '@/types';

export async function GET() {
  const { data, error } = await supabase.from<Post>('posts').select('*');
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 200 });
}