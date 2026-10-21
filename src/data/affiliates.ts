// ============================================================
//  ลิงก์ affiliate (ACCESSTRADE) — แก้ลิงก์ที่นี่ที่เดียว
//  ลิงก์และแบนเนอร์ได้จาก publisher.accesstrade.in.th > แคมเปญ > รับลิงก์สำหรับโปรโมท
//  ต้องเป็นลิงก์ของไซต์ pronetmobile.com ไม่ใช่ไซต์อื่น ค่าคอมจะนับผิดไซต์
// ============================================================

export type Affiliate = {
  name: string;
  link: string;        // ลิงก์ข้อความ (atth.me/go/...)
  bannerHref: string;  // ลิงก์ของแบนเนอร์ (atth.me/adv.php?rk=...)
  bannerImg: string;   // รูปแบนเนอร์ (imp.accesstrade.in.th/img.php?rk=...)
  bannerW: number;
  bannerH: number;
  bannerAlt: string;
};

export const TRIP: Affiliate = {
  name: 'Trip.com',
  link: 'https://atth.me/go/mascqC3Y',
  bannerHref: 'https://atth.me/adv.php?rk=006mri0029s7',
  bannerImg: 'https://imp.accesstrade.in.th/img.php?rk=006mri0029s7',
  bannerW: 752,
  bannerH: 376,
  bannerAlt: 'Trip.com ดีลที่เที่ยว จองที่พัก ลดสูงสุด 60%',
};

/** Airalo — eSIM เที่ยวต่างประเทศ (หน้า /esim-travel/) */
export const AIRALO = {
  name: 'Airalo',
  link: 'https://atth.me/00d74u0029s7',
};

/** Codashop — เติมเกม (หน้า /games/) */
export const CODASHOP = {
  name: 'Codashop',
  link: 'https://atth.me/00d1oq0029s7',
  games: [
    { name: 'Mobile Legends: Bang Bang', link: 'https://atth.me/go/ncqIlCwu' },
    { name: 'VALORANT', link: 'https://atth.me/go/I2RtmaQs' },
  ],
};

/** หน้าโปรที่แสดงกล่อง Trip.com (หน้า /[slug]/ และ /pro/[slug]/) */
export const TRIP_PAGES = ['ais-2-day', 'ais-3-day', 'ais-70-baht-2-day', 'ais-105-baht-3-day'];
