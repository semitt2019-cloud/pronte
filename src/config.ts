// ============================================================
//  ตั้งค่าหลักของเว็บ — แก้ไฟล์นี้ไฟล์เดียว
// ============================================================

export const SITE = {
  // ชื่อเว็บ (แสดงบนหัวเว็บและในผลค้นหา)
  name: 'โปรเน็ต AIS สุดคุ้ม',
  // โดเมนจริงของเว็บ (ใช้ใน sitemap, canonical, รูปแชร์)
  url: 'https://pronetmobile.com',
  // เดือนที่ตรวจราคาโปรล่าสุด (แก้ทุกครั้งที่อัปเดต)
  updated: 'ตุลาคม 2026',
};

// ------------------------------------------------------------
//  Google Analytics 4 — ใส่ Measurement ID (ขึ้นต้นด้วย G-) เช่น 'G-ABC123XYZ'
//  เว้นว่างไว้ = ไม่ติดตั้ง
// ------------------------------------------------------------
export const GA_ID = 'G-QFRYSGEGEJ';

// ------------------------------------------------------------
//  รหัสตัวแทนของคุณ
//  ใส่ตัวเลขรหัสที่ได้รับ เช่น '123456'
//  ถ้าเว้นว่างไว้ ปุ่มสมัครจะใช้รหัสปกติของ AIS (*777*รหัสแพ็กเกจ#)
//  ห้ามใช้รหัสของเว็บอื่น ค่าคอมจะไม่เข้าบัญชีคุณ
// ------------------------------------------------------------
export const AGENT_CODE = '';

// ------------------------------------------------------------
//  ช่องทางสั่งซื้อเบอร์มงคล (หน้า /ber-mongkol/)
//  lineUrl = ลิงก์ LINE OA (lin.ee/...)  หรือ line = LINE ID   phone = เบอร์โทร (ถ้ามี)
//  shipping = ค่าส่งต่อเบอร์ (บาท)  shipBy = วิธีส่ง
// ------------------------------------------------------------
export const CONTACT = { lineUrl: 'https://lin.ee/NUUnkjx', line: '', phone: '', shipping: 30, shipBy: 'EMS' };
export function lineHref(): string {
  if (CONTACT.lineUrl) return CONTACT.lineUrl;
  const id = CONTACT.line.trim();
  return id ? 'https://line.me/R/ti/p/' + (id.startsWith('@') ? id : '~' + id) : '';
}

/** รหัส USSD ที่แสดงบนหน้าเว็บ เช่น *777*7721*123456# */
export function ussd(pkgCode: string): string {
  return AGENT_CODE ? `*777*${pkgCode}*${AGENT_CODE}#` : `*777*${pkgCode}#`;
}

/** ลิงก์สำหรับปุ่ม "กดสมัคร" (# ต้องเข้ารหัสเป็น %23) */
export function telHref(pkgCode: string): string {
  return 'tel:' + ussd(pkgCode).replace(/#/g, '%23');
}
