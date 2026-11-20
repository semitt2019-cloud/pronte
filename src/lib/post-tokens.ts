// บทความอ้างราคา/รหัสผ่านโทเคน เพื่อดึงจาก src/data และ ussd() เท่านั้น
// ตัวอย่าง: {{price:7721}} {{speed:7721}} {{ussd:7721}} {{table:1}} {{table:newsim}}
import { AIS, SPEED_GUIDE, byDays, perDay, speedLabel, type Pkg } from '../data/ais';
import { NEW_SIM, type NewSimPkg } from '../data/newsim';
import { TRAVESIM } from '../data/affiliates';
import { ussd } from '../config';

const aisByCode = new Map(AIS.map((p) => [p.code, p]));
const nsByCode = new Map(NEW_SIM.map((n) => [n.code, n]));

/** โปรที่ใช้ช่วงเดินทางในประเทศ ตรงกับหน้า /travel/ */
const TRIP_CODES = ['7721', '7724', '7719', '7720', '7629', '7154'];

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function money(n: number): string {
  return n.toLocaleString('th-TH', { maximumFractionDigits: 2 });
}

function requireAis(code: string): Pkg {
  const p = aisByCode.get(code);
  if (!p) throw new Error(`ไม่พบโปร AIS รหัส ${code} ที่อ้างในบทความ`);
  return p;
}

function requireNs(code: string): NewSimPkg {
  const n = nsByCode.get(code);
  if (!n) throw new Error(`ไม่พบแพ็กซิมใหม่รหัส ${code} ที่อ้างในบทความ`);
  return n;
}

function aisTable(items: Pkg[]): string {
  const rows = items
    .map((p) => {
      const bonus = p.bonus?.length ? esc(p.bonus.join(' · ')) : '–';
      return `<tr><td><a href="/packages/${p.code}/">${esc(money(p.price))} บาท</a></td><td>${p.days} วัน</td><td>${esc(p.net)} ${esc(speedLabel(p.mbps))}</td><td>${bonus}</td><td><code>${esc(ussd(p.code))}</code></td></tr>`;
    })
    .join('');
  return `<table><thead><tr><th>ราคา</th><th>อายุโปร</th><th>เน็ต</th><th>ของแถมตามข้อมูลโปร</th><th>รหัสกดสมัคร</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function newSimTable(): string {
  const rows = NEW_SIM.map((n) => {
    const gifts = n.gifts.map((g) => g.replace(/\s*\(กดรับ \*777\*\d+#\)/g, '')).join(' · ');
    return `<tr><td><a href="/packages/${n.code}/">${esc(money(n.price))} บาท</a></td><td>${n.totalGB}GB</td><td>${esc(n.net.join(' · '))}</td><td>${esc(n.after)}</td><td>${esc(n.call)}</td><td>${esc(gifts)}</td><td><code>${esc(ussd(n.code))}</code></td></tr>`;
  }).join('');
  return `<table><thead><tr><th>ราคา / 30 วัน</th><th>เน็ตรวม</th><th>รายละเอียดเน็ต</th><th>หลังใช้ครบปริมาณ</th><th>โทร</th><th>ของแถม</th><th>รหัสกดสมัคร</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function nihonTable(): string {
  const rows = TRAVESIM.nihon.plans
    .map((p) => `<tr><td>${p.days} วัน</td><td>${esc(money(p.price))} บาท</td><td>ฮอตสปอต ${esc(p.hotspot)}</td></tr>`)
    .join('');
  return `<table><thead><tr><th>จำนวนวัน</th><th>ราคาตามข้อมูลที่เว็บเก็บไว้</th><th>เพดานฮอตสปอต</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function speedTable(): string {
  const rows = SPEED_GUIDE.map(
    (s) => `<tr><td>${esc(speedLabel(s.mbps))}</td><td>${esc(s.good)}</td><td>${esc(s.limit)}</td></tr>`,
  ).join('');
  return `<table><thead><tr><th>ความเร็วตามโปร</th><th>ใช้ทำอะไรได้</th><th>ข้อจำกัดที่เขียนไว้</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function render(kind: string, arg: string): string {
  if (kind === 'table') {
    if (arg === 'newsim') return newSimTable();
    if (arg === 'nihon') return nihonTable();
    if (arg === 'trip') return aisTable(TRIP_CODES.map(requireAis));
    if (arg === 'speed') return speedTable();
    if (arg === 'all') return aisTable([...AIS].sort((a, b) => a.days - b.days || a.price - b.price));
    const days = Number(arg);
    const items = Number.isInteger(days) ? byDays(days) : [];
    if (!items.length) throw new Error(`ไม่พบตารางโปร "${arg}"`);
    return aisTable(items);
  }

  if (kind === 'nsprice' || kind === 'nsgb' || kind === 'nsafter' || kind === 'nscall' || kind === 'nsussd' || kind === 'nsnet' || kind === 'nsgifts') {
    const n = requireNs(arg);
    if (kind === 'nsprice') return esc(money(n.price));
    if (kind === 'nsgb') return String(n.totalGB);
    if (kind === 'nsafter') return esc(n.after);
    if (kind === 'nscall') return esc(n.call);
    if (kind === 'nsnet') return esc(n.net.join(' · '));
    if (kind === 'nsgifts') return esc(n.gifts.map((g) => g.replace(/\s*\(กดรับ \*777\*\d+#\)/g, '')).join(' · '));
    return esc(ussd(n.code));
  }

  const p = requireAis(arg);
  if (kind === 'ussd') return esc(ussd(p.code));
  if (kind === 'price') return esc(money(p.price));
  if (kind === 'speed') return esc(speedLabel(p.mbps));
  if (kind === 'days') return String(p.days);
  if (kind === 'net') return esc(p.net);
  if (kind === 'perday') return esc(money(perDay(p)));
  if (kind === 'bonus') return p.bonus?.length ? esc(p.bonus.join(' · ')) : '';
  if (kind === 'label') return `${esc(money(p.price))} บาท · ${p.days} วัน · ${esc(p.net)} ${esc(speedLabel(p.mbps))}`;
  throw new Error(`โทเคนไม่รู้จัก {{${kind}:${arg}}}`);
}

const TOKEN = /\{\{([a-z]+):([a-z0-9]+)\}\}/g;

/** ขยายโทเคนในบทความหลังคอมไพล์ Markdown ถ้ารหัสไม่มีในข้อมูล จะให้ build พัง */
export function expandPost(input: string): string {
  const unwrapped = input.replace(/<p>\s*(\{\{table:[a-z0-9]+\}\})\s*<\/p>/g, '$1');
  const out = unwrapped.replace(TOKEN, (_, kind: string, arg: string) => render(kind, arg));
  const left = out.match(/\{\{[a-z]+:[^}]+\}\}/);
  if (left) throw new Error(`โทเคนบทความขยายไม่สำเร็จ: ${left[0]}`);
  return out;
}
