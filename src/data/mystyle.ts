// ============================================================
//  แพ็กเสริม MY STYLE (ใบโปร AIS One-2-Call 1–31 ต.ค. 69)
//  ต้องมีแพ็กเน็ตราคาที่กำหนด และสมัครในวันเดียวกับแพ็กเน็ต
//  รับได้เพียง 1 รหัส
//  รหัส 2902–2908 ใบโปรไม่ได้พิมพ์ราคาแยก — หัวแคมเปญคือ 29 บาท/เดือน
// ============================================================

export type MyStylePkg = {
  code: string;
  title: string;
  /** ราคาที่พิมพ์ชัดบนใบโปร ถ้าไม่พิมพ์แยกเป็น null */
  price: number | null;
  priceText: string;
  duration: string;
  days: number;
  perks: string[];
  condition: string;
  tag?: string;
};

/** 14 เกมของรหัส 2904 ตามตัวพิมพ์บนใบโปร */
export const MY_STYLE_GAMES = [
  'ROV',
  'PUBG M',
  'Free Fire',
  'Call of Duty',
  'League of Legends: Wild Rift',
  'Ragnarok X',
  'Ragnarok M',
  'Ragnarok Origin',
  'Speed Drifters',
  'Genshin Impact',
  'Pokemon Unite',
  'FIFA2022',
  'Solo Leveling',
  'Swordman 3',
];

const CHOOSE = 'เลือกได้ 1 แพ็ก เมื่อสมัครแพ็กเน็ต 250–350 บาท ในวันเดียวกัน';

export const MY_STYLE: MyStylePkg[] = [
  {
    code: '2901',
    title: 'ReelShort + วอลเปเปอร์มงคล',
    price: 29,
    priceText: '29 บาท/เดือน',
    duration: 'รายเดือน',
    days: 30,
    tag: '29 บาท',
    condition: 'เมื่อสมัครแพ็กเน็ต 200 บาทขึ้นไป ในวันเดียวกัน',
    perks: [
      'ดูซีรีส์แนวตั้ง ReelShort ไม่จำกัด ครบทุกแนว',
      'เน็ต 5G 500MB ความเร็วสูงสุด 1 Gbps',
      'วอลเปเปอร์ลายองค์เทพพิเศษ พร้อมชุดเคล็ดลับมงคล โดย อ.บิ๊กดยุค (1 สิทธิ์ต่อเบอร์ กดรับภายใน 20 วัน)',
    ],
  },
  {
    code: '2902',
    title: 'เน็ตโซเชียล 5GB',
    price: null,
    priceText: 'เลือกได้ 1 แพ็ก',
    duration: '7 วัน',
    days: 7,
    tag: 'สายส่อง',
    condition: CHOOSE,
    perks: [
      'เน็ต 5GB นาน 7 วัน',
      'ใช้กับ Facebook, Messenger, Instagram และ LINE',
      'ความเร็วสูงสุด 7.2 Mbps',
    ],
  },
  {
    code: '2903',
    title: 'เน็ต TikTok 3GB',
    price: null,
    priceText: 'เลือกได้ 1 แพ็ก',
    duration: '7 วัน',
    days: 7,
    tag: 'สายติ๊ก',
    condition: CHOOSE,
    perks: [
      'เน็ต 3GB นาน 7 วัน สำหรับ TikTok',
      'ความเร็วสูงสุด 7.2 Mbps',
    ],
  },
  {
    code: '2904',
    title: 'เน็ต 14 เกม ไม่จำกัด',
    price: null,
    priceText: 'เลือกได้ 1 แพ็ก',
    duration: '30 วัน',
    days: 30,
    tag: 'สายเกม',
    condition: CHOOSE,
    perks: [
      'เล่น 14 เกมไม่จำกัด นาน 30 วัน',
      'ความเร็วสูงสุด 7.2 Mbps',
      MY_STYLE_GAMES.join(', '),
    ],
  },
  {
    code: '2905',
    title: 'AIS Karaoke',
    price: null,
    priceText: 'เลือกได้ 1 แพ็ก',
    duration: '30 วัน',
    days: 30,
    tag: 'สายไมค์',
    condition: CHOOSE,
    perks: ['ร้องเพลง AIS Karaoke ฟรี นาน 30 วัน'],
  },
  {
    code: '2906',
    title: 'Viu Premium',
    price: null,
    priceText: 'เลือกได้ 1 แพ็ก',
    duration: '30 วัน',
    days: 30,
    tag: 'สายยอง',
    condition: CHOOSE,
    perks: ['ดู Viu Premium ฟรี นาน 30 วัน'],
  },
  {
    code: '2907',
    title: 'WeTV VIP',
    price: null,
    priceText: 'เลือกได้ 1 แพ็ก',
    duration: '30 วัน',
    days: 30,
    tag: 'สายจีน',
    condition: CHOOSE,
    perks: ['ดู WeTV VIP ฟรี นาน 30 วัน'],
  },
  {
    code: '2908',
    title: 'ประกันอุบัติเหตุ KPI',
    price: null,
    priceText: 'เลือกได้ 1 แพ็ก',
    duration: '7 วัน',
    days: 7,
    tag: 'อุ่นใจ',
    condition: CHOOSE,
    perks: [
      'ประกันอุบัติเหตุ KPI ความคุ้มครองสูงสุด 100,000 บาท นาน 7 วัน',
      'ผู้รับสิทธิ์อายุ 20–60 ปี และมีสุขภาพแข็งแรง',
      'ความคุ้มครองเริ่มวันถัดจากวันที่ได้รับ SMS ยืนยันจากบริษัทประกัน',
    ],
  },
];
