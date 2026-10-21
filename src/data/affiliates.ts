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
  link: 'https://atth.me/001jzw0029s7',
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

/** ร้านมือถือ (หน้า /phone-5g/) */
export const PHONE_SHOPS = [
  {
    name: 'PowerBuy',
    tag: 'เครื่องใหม่ · เครือเซ็นทรัล',
    desc: 'ร้านเครื่องใช้ไฟฟ้าและไอทีในเครือเซ็นทรัล มีมือถือ 5G ทุกแบรนด์หลัก สั่งออนไลน์หรือรับที่สาขาได้',
    points: ['มือถือใหม่ทุกแบรนด์หลัก', 'มีหน้ารวมคูปองและสินค้าลดล้างสต๊อก', 'มีสาขาในห้างทั่วประเทศ'],
    link: 'https://atth.me/000bo20029s7',
    extra: [
      { label: 'รวมคูปอง', link: 'https://atth.me/go/Lge9liRe' },
      { label: 'ลดล้างสต๊อก', link: 'https://atth.me/go/SuGN0kPc' },
    ],
  },
  {
    name: 'TG Fone',
    tag: 'เครื่องใหม่ · ผ่อน 0%',
    desc: 'ร้านมือถือและ Apple มีทั้ง Samsung, OPPO, Xiaomi, HONOR, iPhone และแท็บเล็ต พร้อมโปรผ่อน 0% ผ่านบัตรเครดิตธนาคารที่ร่วมรายการ',
    points: ['ผ่อน 0% นานสูงสุด 10 เดือน (บัตรที่ร่วมรายการ)', 'ส่งฟรีเมื่อซื้อครบ 1,500 บาท', 'เปลี่ยนสินค้าได้ภายใน 7 วันตามเงื่อนไขร้าน'],
    link: 'https://atth.me/008jzz0029s7',
    extra: [{ label: 'iPhone', link: 'https://atth.me/go/FC2vzvXX' }],
  },
  {
    name: 'COMPASIA',
    tag: 'มือสองตรวจสภาพ · ประหยัด',
    desc: 'ร้าน iPhone และ Samsung มือสองที่ตรวจทุกปุ่ม ทุกฟังก์ชัน พร้อมการรับประกันจากร้าน และรับเทิร์นเครื่องเก่า เหมาะกับคนอยากได้รุ่นท็อปในงบน้อยกว่า',
    points: ['มือสองตรวจสภาพทุกจุด มีประกันจากร้าน', 'รับเทิร์นเครื่องเก่าเป็นส่วนลด', 'ผ่อนผ่านบัตรเครดิตหรือไฟแนนซ์ได้'],
    link: 'https://atth.me/00djzt0029s7',
    extra: [],
  },
];

/** ซิมเที่ยวต่างประเทศของ Berry Mobile (หน้า /esim-travel/) */
export const TRAVESIM = {
  name: 'TRAVeSIM',
  link: 'https://atth.me/00eoq90029s7',
  nihon: {
    name: 'NihonSIM',
    link: 'https://atth.me/00eoqu0029s7',
    // ราคาตามหน้าเว็บผู้ให้บริการ (ต.ค. 2569) — เน็ตไม่อั้น ฮอตสปอตมีเพดาน
    plans: [
      { days: 4, price: 499, hotspot: '3GB' },
      { days: 7, price: 749, hotspot: '6GB' },
      { days: 10, price: 999, hotspot: '9GB' },
      { days: 15, price: 1499, hotspot: '15GB' },
      { days: 31, price: 2499, hotspot: '30GB' },
    ],
  },
};

/** เว็บจองที่พัก / ที่เที่ยว (หน้า /travel/) */
export const TRAVEL_BOOKING = [
  { name: 'Traveloka', use: 'ที่พัก · ตั๋วเครื่องบิน · ตั๋วรถไฟ/รถทัวร์', desc: 'จองโรงแรม รีสอร์ท และตั๋วเดินทางในแอปเดียว เหมาะกับทริปที่ต้องจองทั้งที่พักและการเดินทาง', link: 'https://atth.me/003v5v0029s7' },
  { name: 'Klook', use: 'บัตรเข้าที่เที่ยว · กิจกรรม · ทัวร์', desc: 'ตั๋วสวนสนุก พิพิธภัณฑ์ ทัวร์วันเดียว และกิจกรรมปลายทาง จองล่วงหน้า ใช้ QR เข้าได้เลย', link: 'https://atth.me/00dzj70029s7' },
  { name: 'Trip.com', use: 'โรงแรม · เที่ยวบิน · แพ็กเกจ', desc: 'เทียบราคาโรงแรมและเที่ยวบิน มีดีลตามฤดูกาลและโปรเที่ยวในประเทศเป็นระยะ', link: 'https://atth.me/001jzw0029s7' },
];

/** iQIYI — ดูซีรีส์ (หน้า /iqiyi/) */
export const IQIYI = {
  name: 'iQIYI',
  link: 'https://atth.me/00a7tn0029s7',
};

/** หน้าโปรที่แสดงกล่อง Trip.com (หน้า /[slug]/ และ /pro/[slug]/) */
export const TRIP_PAGES = ['ais-2-day', 'ais-3-day', 'ais-70-baht-2-day', 'ais-105-baht-3-day'];
