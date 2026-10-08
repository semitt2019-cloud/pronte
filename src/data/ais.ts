// ============================================================
//  ข้อมูลโปรเน็ต AIS เติมเงิน (ไม่จำกัดปริมาณ ไม่ลดสปีด)
//  แก้ราคา/รหัสที่นี่ที่เดียว ทุกหน้าจะอัปเดตตาม
//  ** ทดสอบกดรหัสจริงทุกครั้งก่อนเผยแพร่ **
// ============================================================

export type Pkg = {
  code: string;      // รหัสแพ็กเกจ (ตัวเลขหลัง *777*)
  price: number;     // ราคารวมภาษี (บาท)
  days: number;      // จำนวนวัน
  net: '4G' | '5G';
  mbps: number;      // ความเร็ว (Mbps) — 512 Kbps = 0.5
  bonus?: string[];  // ของแถม
  popular?: boolean; // แสดงในหมวดยอดนิยม
};

export const AIS: Pkg[] = [
  // 1 วัน
  { code: '7017', price: 24, days: 1, net: '4G', mbps: 0.5 },
  { code: '7381', price: 30, days: 1, net: '5G', mbps: 2 },
  { code: '7721', price: 40, days: 1, net: '5G', mbps: 4, popular: true,
    bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB/วัน', 'โทรฟรีทุกเครือข่าย 10 นาที'] },
  { code: '7209', price: 49, days: 1, net: '4G', mbps: 6 },
  { code: '7722', price: 55, days: 1, net: '5G', mbps: 6, bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB'] },
  { code: '7386', price: 59, days: 1, net: '4G', mbps: 10 },
  { code: '7723', price: 65, days: 1, net: '5G', mbps: 10, bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB'] },
  // 2 วัน
  { code: '7380', price: 38, days: 2, net: '4G', mbps: 1 },
  { code: '7384', price: 59, days: 2, net: '4G', mbps: 4 },
  { code: '7724', price: 70, days: 2, net: '5G', mbps: 4, popular: true, bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB/วัน'] },
  { code: '7385', price: 81, days: 2, net: '4G', mbps: 6 },
  { code: '7725', price: 90, days: 2, net: '5G', mbps: 6, bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB/วัน'] },
  { code: '7387', price: 102, days: 2, net: '4G', mbps: 10 },
  // 3 วัน
  { code: '7719', price: 105, days: 3, net: '5G', mbps: 4, popular: true, bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB/วัน'] },
  { code: '7720', price: 130, days: 3, net: '5G', mbps: 6, bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB/วัน'] },
  // 7 วัน
  { code: '7629', price: 130, days: 7, net: '5G', mbps: 2, popular: true },
  { code: '7630', price: 155, days: 7, net: '4G', mbps: 2, bonus: ['โทรฟรีทุกเครือข่าย 15 นาที'] },
  { code: '7154', price: 236, days: 7, net: '5G', mbps: 4 },
  { code: '7210', price: 289, days: 7, net: '5G', mbps: 6 },
  { code: '7388', price: 354, days: 7, net: '5G', mbps: 10 },
  // 30 วัน
  { code: '7789', price: 400, days: 30, net: '5G', mbps: 2, popular: true,
    bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB', 'โทรฟรีในเครือข่าย ไม่จำกัดครั้ง (ครั้งละไม่เกิน 15 นาที)'] },
  { code: '7790', price: 490, days: 30, net: '5G', mbps: 4, popular: true,
    bonus: ['เน็ต 5G ความเร็วสูงสุด 1GB', 'โทรฟรีในเครือข่าย ไม่จำกัดครั้ง (ครั้งละไม่เกิน 15 นาที)'] },
  { code: '7159', price: 696, days: 30, net: '4G', mbps: 4 },
  { code: '7211', price: 910, days: 30, net: '4G', mbps: 6 },
  { code: '7389', price: 1177, days: 30, net: '4G', mbps: 10 },
];

export const byDays = (d: number) => AIS.filter((p) => p.days === d).sort((a, b) => a.price - b.price);
export const perDay = (p: Pkg) => Math.round((p.price / p.days) * 10) / 10;
export const speedLabel = (mbps: number) => (mbps < 1 ? `${mbps * 1000} Kbps` : `${mbps} Mbps`);

/** ความเร็วแต่ละระดับใช้ทำอะไรได้ (เขียนเอง ใช้ในหลายหน้า) */
export const SPEED_GUIDE: { mbps: number; good: string; limit: string }[] = [
  { mbps: 0.5, good: 'LINE, แชต, อ่านข่าว, อีเมล', limit: 'ดูวิดีโอได้แค่ความละเอียดต่ำ โหลดรูปช้า' },
  { mbps: 1, good: 'Facebook, LINE, ฟังเพลงออนไลน์', limit: 'วิดีโอสั้นอาจกระตุกบ้าง' },
  { mbps: 2, good: 'TikTok, YouTube 480p, Facebook ทั้งวัน', limit: 'ดู HD ไม่ค่อยไหว แชร์เน็ตหลายเครื่องไม่พอ' },
  { mbps: 4, good: 'YouTube 720p, TikTok ลื่น, วิดีโอคอล, เกมมือถือส่วนใหญ่', limit: 'ไลฟ์สด HD นาน ๆ อาจไม่นิ่ง' },
  { mbps: 6, good: 'YouTube 1080p, ไลฟ์สดขายของ, แชร์ฮอตสปอต 1–2 เครื่อง', limit: 'แทบไม่มีสำหรับมือถือเครื่องเดียว' },
  { mbps: 10, good: 'ใช้แทนเน็ตบ้าน, แชร์ฮอตสปอตหลายเครื่อง, ดาวน์โหลดไฟล์', limit: 'ราคาสูงกว่ามาก คุ้มเฉพาะคนใช้หนัก' },
];
