# เว็บโปรเน็ต (Astro + Cloudflare Pages)

เว็บขายโปรเน็ต AIS แบบ static เน้น SEO ทำด้วย Astro

## สิ่งที่ต้องแก้ก่อนเปิดเว็บ

| ไฟล์ | แก้อะไร |
| --- | --- |
| `src/config.ts` | `AGENT_CODE` = รหัสตัวแทนของคุณ, `SITE.name` ชื่อเว็บ, `SITE.url` โดเมนจริง, `SITE.updated` เดือนที่อัปเดต |
| `public/robots.txt` | เปลี่ยน `example.com` เป็นโดเมนจริง |
| `src/data/ais.ts` | ราคาและรหัสแพ็กเกจ **ทดสอบกดจริงทุกรหัสก่อนเผยแพร่** |

ถ้า `AGENT_CODE` ว่าง ปุ่มสมัครจะเป็น `*777*รหัสแพ็กเกจ#` (ไม่มีค่าคอม)
เมื่อใส่รหัสแล้วจะเป็น `*777*รหัสแพ็กเกจ*รหัสตัวแทน#`

## รันบนเครื่อง

ต้องมี Node.js 22 ขึ้นไป

```bash
npm install
npm run dev      # เปิด http://localhost:4321
npm run build    # สร้างเว็บจริงไว้ในโฟลเดอร์ dist/
```

## ขึ้น Cloudflare Pages

**วิธี A: ผ่าน GitHub (แนะนำ แก้โค้ดแล้วเว็บอัปเดตเอง)**
1. เอาโฟลเดอร์นี้ขึ้น GitHub repo ใหม่
2. Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git
3. เลือก repo แล้วตั้งค่า
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. กด Deploy แล้วไปที่ Custom domains เพื่อผูกโดเมน

**วิธี B: อัปโหลดตรง**
1. `npm run build`
2. Cloudflare > Pages > Upload assets > ลากโฟลเดอร์ `dist` ขึ้นไป

## หลังเปิดเว็บ
- ใส่โดเมนใน Google Search Console แล้วส่ง `https://โดเมน/sitemap-index.xml`
- ทุกต้นเดือน: เช็กราคาใน `src/data/ais.ts` และแก้ `SITE.updated`

## โครงสร้าง

```
src/
  config.ts          ตั้งค่าหลัก + รหัสตัวแทน
  data/ais.ts        ราคาโปรทั้งหมด
  data/pages.ts      หน้า SEO ตามคีย์เวิร์ด (เพิ่มหน้าใหม่ที่นี่)
  pages/index.astro  หน้าแรก
  pages/[slug].astro สร้างหน้าจาก data/pages.ts
  pages/chooser.astro       เครื่องมือช่วยเลือกโปร
  pages/speed-guide.astro   ความเร็วแต่ละระดับ
  pages/ais-shortcodes.astro เบอร์ลัด
  pages/about.astro          เกี่ยวกับเรา / ข้อสงวนสิทธิ์
```
