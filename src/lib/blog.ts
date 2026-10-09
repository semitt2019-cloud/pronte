// ============================================================
//  โหลดบทความทั้งหมดจาก src/content/blog/*.md
//  เพิ่มบทความใหม่ = สร้างไฟล์ .md ใหม่ในโฟลเดอร์นั้น (ชื่อไฟล์ = URL)
// ============================================================
import type { MarkdownInstance } from 'astro';

export type PostMeta = {
  title: string;        // title สำหรับ Google (ไม่เกิน ~60 ตัวอักษร)
  h1: string;           // หัวข้อบนหน้า
  description: string;  // meta description (~150 ตัวอักษร)
  keyword: string;      // คีย์เวิร์ดหลัก
  date: string;         // วันที่เผยแพร่ YYYY-MM-DD
  updated?: string;     // วันที่แก้ล่าสุด YYYY-MM-DD
  order: number;        // ลำดับในหน้ารวมบทความ
  summary: string;      // กล่อง "สรุปสั้น" ด้านบน (ตอบคำถามทันที)
  image?: string;       // รูปแชร์ 1200x630
  faq?: [string, string][];
  related?: [string, string][]; // [ข้อความลิงก์, URL]
  sources?: [string, string][]; // [ชื่อแหล่ง, URL]
};

export type Post = { slug: string; meta: PostMeta; mod: MarkdownInstance<PostMeta> };

const files = import.meta.glob<MarkdownInstance<PostMeta>>('../content/blog/*.md', { eager: true });

export const POSTS: Post[] = Object.entries(files)
  .map(([path, mod]) => ({ slug: path.split('/').pop()!.replace(/\.md$/, ''), meta: mod.frontmatter, mod }))
  .sort((a, b) => a.meta.order - b.meta.order);

/** ประมาณเวลาอ่าน (ภาษาไทย ~ 500 ตัวอักษร/นาที) */
export function readMinutes(html: string): number {
  const text = html.replace(/<[^>]+>/g, '').replace(/\s+/g, '');
  return Math.max(2, Math.round(text.length / 500));
}

export function thaiDate(iso: string): string {
  const m = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  const [y, mo, d] = iso.split('-').map(Number);
  return `${d} ${m[mo - 1]} ${y + 543}`;
}
