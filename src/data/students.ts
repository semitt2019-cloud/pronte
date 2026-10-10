// ============================================================
//  โปรเน็ตที่แนะนำสำหรับนักเรียน นักศึกษา (ใช้ในหน้า /students/ และบทความหมวดนักเรียน)
//  แก้รหัสโปรที่นี่ที่เดียว — ต้องเป็นรหัสที่มีอยู่ใน src/data/ais.ts
// ============================================================
import { AIS, type Pkg } from './ais';

export type StudentPick = { code: string; label: string; why: string };

export const STUDENT_PICKS: StudentPick[] = [
  { code: '7789', label: 'คุ้มสุดทั้งเดือน', why: 'เน็ตไม่อั้น 2 Mbps 30 วัน ตกวันละไม่ถึง 14 บาท ดู TikTok, Facebook, เรียนออนไลน์แบบเสียงได้ทั้งเดือน' },
  { code: '7790', label: 'เรียนออนไลน์ลื่น', why: 'เน็ตไม่อั้น 4 Mbps 30 วัน พอสำหรับ Zoom/Meet แบบวิดีโอ และ YouTube 720p' },
  { code: '7629', label: 'รายสัปดาห์', why: 'เน็ตไม่อั้น 2 Mbps 7 วัน เหมาะกับช่วงที่ใช้หนักแค่บางสัปดาห์' },
  { code: '7721', label: 'วันสอบ / วันส่งงาน', why: 'เน็ตไม่อั้น 4 Mbps 1 วัน + เน็ต 5G 1GB กดสมัครเฉพาะวันที่ต้องใช้จริง' },
];

export const studentPkgs = (): (Pkg & StudentPick)[] =>
  STUDENT_PICKS.map((s) => {
    const p = AIS.find((x) => x.code === s.code);
    if (!p) throw new Error(`ไม่พบรหัสโปร ${s.code} ใน ais.ts`);
    return { ...p, ...s };
  });

/** ปริมาณเน็ตโดยประมาณต่อชั่วโมง (อ้างอิงจากแหล่งที่ระบุในหน้า /students/) */
export const USAGE_PER_HOUR: [string, string, string][] = [
  ['Zoom วิดีโอคอลกลุ่ม (คุณภาพปกติ)', '≈ 0.8 GB', 'Zoom: 0.8–1.0 Mbps ขาขึ้น/ขาลง'],
  ['Zoom เปิดแค่เสียง', '≈ 30–70 MB', 'Zoom: เสียง 60–80 kbps'],
  ['Google Meet วิดีโอ SD (5 คน)', '≈ 1.1 GB', 'Google: 1 Mbps ขึ้น / 1.5 Mbps ลง'],
  ['YouTube 480p', '≈ 0.5 GB', 'WhistleOut'],
  ['YouTube 720p', '≈ 1.5 GB', 'WhistleOut'],
  ['TikTok (เลื่อนดูต่อเนื่อง)', '≈ 0.3 GB', 'SlashGear ทดสอบ 323 MB/ชม.'],
  ['Netflix โหมดอัตโนมัติบนมือถือ', '≈ 0.25 GB', 'Netflix: 1 GB ต่อ 4 ชม.'],
  ['เกม Free Fire / PUBG Mobile', '≈ 30 MB', 'AFK Gaming (ไม่รวมอัปเดตเกม)'],
];
