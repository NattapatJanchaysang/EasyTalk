EasyTalk (MedicalGuroo)
=======================

AI ติวเตอร์ภาษาอังกฤษที่ผสานการคุยเสียงแบบเรียลไทม์กับระบบผู้ช่วยอัจฉริยะ พัฒนาโดย Next.js App Router พร้อมระบบยืนยันตัวตนด้วย Clerk, จัดการผู้ใช้และเครดิตด้วย Drizzle + Neon และมี UI ที่ออกแบบให้ใช้งานง่ายสำหรับการฝึกพูดภาษาอังกฤษ

คุณสมบัติหลัก
- คุยเสียงกับ AI ผ่าน Vapi พร้อม transcript สดและบันทึกบทสนทนาในหน้าต่างแชท ([components/Mainspace.tsx](components/Mainspace.tsx)).
- ยืนยันตัวตน/จัดการผู้ใช้ด้วย Clerk, ปกป้องเพจและ API ผ่าน middleware ([middleware.ts](middleware.ts)).
- สร้างโปรไฟล์ผู้ใช้และเครดิตเริ่มต้นทันทีที่ล็อกอิน ผ่าน API [app/api/users/route.tsx](app/api/users/route.tsx) และ context ผู้ใช้ ([app/provider.tsx](app/provider.tsx), [context/UserDetailContext.tsx](context/UserDetailContext.tsx)).
- ส่วนต้อนรับและการนำทางสวยงามด้วย Hero + Navbar ([components/Hero.tsx](components/Hero.tsx), [components/Navbar.tsx](components/Navbar.tsx)) และ Toast แจ้งเตือน ([components/ui/sonner.tsx](components/ui/sonner.tsx)).

เทคโนโลยีที่ใช้
- Next.js 16 (App Router), React 19, TypeScript
- Clerk สำหรับ Authentication/Authorization
- Vapi สำหรับ Voice AI agent (ระบุ agent config ใน `StartCall` ที่ [components/Mainspace.tsx](components/Mainspace.tsx))
- Drizzle ORM + Neon (PostgreSQL serverless) จัดการข้อมูลผู้ใช้ ([config/db.tsx](config/db.tsx), [config/schema.tsx](config/schema.tsx))
- OpenRouter/OpenAI SDK เตรียมไว้เรียกโมเดล ([config/openaimodel.tsx](config/openaimodel.tsx))
- UI/UX: Tailwind CSS, motion/react, lucide-react icons, sonner toast, custom components

โครงสร้างโปรเจกต์ย่อ
- แอปหลักและหน้าต้อนรับ: [app/page.tsx](app/page.tsx), [app/layout.tsx](app/layout.tsx)
- ส่วนประกอบ UI: [components/](components)
- API และ DB: [app/api/](app/api), [config/](config)
- การจัดการ context ผู้ใช้: [context/UserDetailContext.tsx](context/UserDetailContext.tsx)
- สไตล์พื้นฐาน: [app/globals.css](app/globals.css)

การติดตั้งและรันโครงการ
1) ติดตั้งเครื่องมือพื้นฐาน: Node.js 18+ และ npm
2) ติดตั้ง dependency
```
npm install
```
3) สร้างไฟล์ `.env.local` ที่รากโปรเจกต์ และกำหนดตัวแปรสิ่งแวดล้อมที่จำเป็น
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
NEXT_PUBLIC_VAPI_API_KEY=
OPEN_ROUTER_API_KEY=
```
4) รันโหมดพัฒนา
```
npm run dev
```
5) สร้างและรันโปรดักชัน
```
npm run build
npm start
```

การทำงานสำคัญ
- Root layout ครอบด้วย `ClerkProvider` และ Toaster ([app/layout.tsx](app/layout.tsx)).
- เมื่อผู้ใช้ล็อกอิน `Provider` จะเรียก POST /api/users เพื่อสร้าง/ดึงข้อมูลผู้ใช้และเครดิตเริ่มต้น ([app/provider.tsx](app/provider.tsx), [app/api/users/route.tsx](app/api/users/route.tsx)).
- `Mainspace` จัดการสถานะการโทร, ตัวจับเวลา, transcript แบบสด, การเริ่ม/จบสายด้วย Vapi key/agent config จาก env ([components/Mainspace.tsx](components/Mainspace.tsx)).
- `middleware` ปกป้องทุกเพจ/ API ยกเว้นเส้นทางสาธารณะ เช่น `/`, `/sign-in`, `/sign-up` ([middleware.ts](middleware.ts)).

การต่อยอด
- ปรับ prompt และ voice ของ Vapi agent โดยเปลี่ยน agent config ID ใน `StartCall`.
- ขยาย schema ผู้ใช้ (เช่น บันทึกประวัติบทสนทนา เพิ่มระบบตัดเครดิตต่อ session) ใน [config/schema.tsx](config/schema.tsx) และสร้าง endpoint เพิ่มเติมใน [app/api/](app/api).
- ผูก OpenRouter เพื่อสร้างสรุป/ฟีดแบ็กหลังจบการคุย โดยใช้ client ใน [config/openaimodel.tsx](config/openaimodel.tsx).
