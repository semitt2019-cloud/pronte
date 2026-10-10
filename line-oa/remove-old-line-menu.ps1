# ลบเมนู LINE (Rich Menu) ทั้งหมดที่ตั้งผ่าน Messaging API ออก
# (เมนูที่สร้างใน LINE OA Manager จะไม่ถูกลบ) token ใช้ครั้งเดียว ไม่ถูกบันทึก
Write-Host ""
Write-Host "ลบเมนูเขียวอันเก่า (สบายพาณิชย์) ออกจาก LINE OA" -ForegroundColor Cyan
Write-Host "Copy token จากหน้า LINE Developers > Messaging API > โทเค็นการเข้าถึงช่อง"
Write-Host ""
$sec = Read-Host "วาง token ตรงนี้ (คลิกขวาเพื่อวาง จะไม่เห็นตัวอักษร) แล้วกด Enter" -AsSecureString
$t = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec)).Trim()
$h = @{ Authorization = "Bearer $t" }
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
try {
  $list = Invoke-RestMethod -Method Get -Uri "https://api.line.me/v2/bot/richmenu/list" -Headers $h
  $menus = @($list.richmenus)
  Write-Host ("พบเมนูที่ตั้งผ่าน API: " + $menus.Count + " อัน")
  foreach ($m in $menus) {
    Invoke-RestMethod -Method Delete -Uri ("https://api.line.me/v2/bot/richmenu/" + $m.richMenuId) -Headers $h | Out-Null
    Write-Host (" - ลบแล้ว: " + $m.name) -ForegroundColor Yellow
  }
  try { Invoke-RestMethod -Method Delete -Uri "https://api.line.me/v2/bot/user/all/richmenu" -Headers $h | Out-Null } catch {}
  Write-Host ""
  Write-Host "สำเร็จ! ปิดแอป LINE ให้หมด (ปัดทิ้ง) แล้วเปิดแชต Pronetmobile ใหม่ เมนูใหม่จะขึ้นแทน" -ForegroundColor Green
} catch {
  Write-Host ""
  Write-Host "ไม่สำเร็จ: $($_.Exception.Message)" -ForegroundColor Red
  Write-Host "ถ้าขึ้น 401 แปลว่า token ไม่ถูกต้อง ลอง Copy ใหม่อีกครั้ง"
}
$t = $null; $h = $null
Read-Host "กด Enter เพื่อปิดหน้าต่าง"
