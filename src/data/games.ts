// ============================================================
//  โปรเน็ตที่แนะนำสำหรับคนเล่นเกมมือถือ (ใช้ในหน้า /games/)
//  แก้รหัสโปรที่นี่ที่เดียว — ต้องเป็นรหัสที่มีอยู่ใน src/data/ais.ts
// ============================================================
import { AIS, type Pkg } from './ais';
import { NEW_SIM } from './newsim';
import { MY_STYLE } from './mystyle';

export type GamePick = { code: string; label: string; why: string };

export const GAME_PICKS: GamePick[] = [
  { code: '7790', label: 'เล่นทุกวัน คุ้มสุด', why: 'เน็ตไม่อั้น 5G 4 Mbps 30 วัน เล่นเกม ดูคลิปสอนเล่น คุยเสียงในทีมได้สบาย ตกวันละประมาณ 16 บาท' },
  { code: '7789', label: 'งบประหยัด', why: 'เน็ตไม่อั้น 5G 2 Mbps 30 วัน พอสำหรับเล่นเกมอย่างเดียว (อัปเดตเกมผ่าน Wi-Fi)' },
  { code: '7154', label: 'รายสัปดาห์', why: 'เน็ตไม่อั้น 5G 4 Mbps 7 วัน เหมาะกับช่วงปิดเทอมหรือสัปดาห์ที่ลงแรงก์หนัก' },
  { code: '7721', label: 'เล่นเฉพาะวันหยุด', why: 'เน็ตไม่อั้น 5G 4 Mbps 1 วัน + เน็ต 5G 1GB เอาไว้โหลดอัปเดตเกมด่วน' },
];

export const gamePkgs = (): (Pkg & GamePick)[] =>
  GAME_PICKS.map((s) => {
    const p = AIS.find((x) => x.code === s.code);
    if (!p) throw new Error(`ไม่พบรหัสโปร ${s.code} ใน ais.ts`);
    return { ...p, ...s };
  });

/** แพ็กที่ให้เน็ตเล่นเกมโดยเฉพาะ (ดึงจากข้อมูลซิมใหม่และ MY STYLE) */
export const gameNewSim = () => {
  const p = NEW_SIM.find((x) => x.code === '3300');
  if (!p) throw new Error('ไม่พบรหัสแพ็กซิมใหม่สายเกม 3300 ใน newsim.ts');
  return p;
};
export const gameMyStyle = () => {
  const p = MY_STYLE.find((x) => x.code === '2904');
  if (!p) throw new Error('ไม่พบรหัสแพ็ก MY STYLE เกม 2904 ใน mystyle.ts');
  return p;
};

/** เน็ตที่ใช้ต่อชั่วโมง (อ้างอิงบทความ /blog/mobile-game-data-usage/) */
export const GAME_USAGE: [string, string, string][] = [
  ['Free Fire', '≈ 31 MB', 'AFK Gaming (ประมาณ 3 เกม)'],
  ['PUBG Mobile', '≈ 28 MB', 'AFK Gaming'],
  ['Call of Duty: Mobile', '≈ 35 MB', 'AFK Gaming'],
  ['ROV / เกม MOBA อื่น ๆ', 'หลักสิบ MB', 'ยังไม่มีตัวเลขวัดทางการ'],
  ['ดู TikTok (เทียบ)', '≈ 300 MB', 'SlashGear ทดสอบ 323 MB/ชม.'],
  ['อัปเดตเกม', 'หลายร้อย MB – หลาย GB', 'ต่อครั้ง ควรโหลดผ่าน Wi-Fi'],
];
