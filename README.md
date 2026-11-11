# Muhammad Anas Jawed ? Next.js Portfolio

Original My-Portfolio-React ZIP ke layout aur animation components ko Next.js App Router mein port kiya gaya hai. Code simple JavaScript / JSX mein formatted hai. Theme: pearl, sage, teal aur champagne gradient.

## CMD mein run karein

```cmd
cd /d "C:\Users\Hamza\Desktop\portfolio 1\anas-nextjs-portfolio"
npm run dev
```

Browser mein http://localhost:3000 kholein. Server pehle se chal raha ho to browser mein Ctrl + F5 se refresh karein. CMD server chalne tak khula rakhein. Band karne ke liye Ctrl + C.

Dependencies abhi installed hain. Kisi naye computer par Node.js 22.12+ install karke pehle `npm install` chalayein.

## Apni changes kaise karein

- Naam, email, phone, intro, social links: `src/portfolio.js` ka profile object.
- Skills: isi file ka skillGroups array.
- Experience, internships aur education: isi file ke corresponding arrays.
- Projects: projects aur showcaseProjects arrays. RestroPOS admin aur user alag slides hain; yeh ek hi project ke do entry points hain.
- Colors: `src/app/globals.css` ke `:root` variables aur `.site-shell` gradient.
- Photo: `public/photo.jpg` rakhein, portfolio.js mein `photo: "photo.jpg"` karein. Abhi AJ initials hain.
- CV: `public/Anas-Jawed-Resume.pdf` replace karein. Filename badlein to profile.resume bhi update karein.
- Browser title aur description: `src/app/layout.jsx`.

## Source structure

```text
src/
  app/
    layout.jsx                 Next.js layout aur metadata
    page.jsx                   Home route
    globals.css                Tailwind, theme aur animated background
  Portfolio.jsx                Main page aur animation providers
  portfolio.js                 Editable content
  components/
    layout/Navbar.jsx          Original animated floating navbar
    hero-card/                 Original rope, 3D tilt, depth, shine aur sway
    sections/
      Hero.jsx
      About.jsx
      TechStack.jsx
      Portfolio.jsx            GSAP pinned project scroll aur lightbox
      Experience.jsx
      Contact.jsx
      Footer.jsx
    ui/
      CustomCursor.jsx         Mouse cursor aur follower ring
      LiquidHeading.jsx        Original SVG liquid heading effect
      card.jsx
  hooks/useCounter.js          Animated counters
public/
  Anas-Jawed-Resume.pdf
  avatar.svg
  project-images/              Editable SVG concept illustrations
```

## Animations

Original spring navigation entrance, hover pills, mobile menu transitions, staggered hero entrance, rope entrance, continuous card sway, mouse-following 3D tilt, depth and reflection layers, SVG liquid headings, animated counters, skill-card glow/lift, GSAP pinned project scrolling, preview transitions, lightbox aur animated background orbs retained hain.

Mobile par project cards normal scroll mein dikhte hain. Device ki reduced-motion preference par movement reduce hoti hai aur projects normal scroll mein dikhte hain.

## Contact aur project links

Contact form EmailJS se directly inbox mein message bhejta hai. Integration `src/components/sections/Contact.jsx` mein hai. Service ID, Template ID aur Public Key main project folder ki `.env.local` file mein hain. Fresh setup par `.env.example` ko `.env.local` copy karke apni values lagayein.

EmailJS template mein To Email apna receiving address rakhein; Reply To `{{email}}`, subject mein `{{subject}}`, aur content mein `{{name}}`, `{{email}}`, `{{message}}` use karein. Values change karne ke baad dev server restart karein. Vercel deploy karte waqt ye teen NEXT_PUBLIC_EMAILJS variables project ki Environment Variables settings mein bhi add karke redeploy karein. Ye EmailJS Public Key hai; Gmail password ya EmailJS Private Key frontend mein add na karein.

Form sending state, success message aur error message dikhata hai. Direct Email aur WhatsApp buttons bhi available hain.

RestroPOS ke supplied admin/user login links use hue hain. Illustrations clearly concept previews hain, actual screenshots nahi. Automation aur VR slides ke CV details button se supplied resume khulti hai; un projects ke live demo URLs supply nahi hue.

## Production

```cmd
npm run build
npm start
```

Vercel par Next.js framework select karein, baqi output settings default rakhein. Generated `.next` files ko manually edit na karein.

## Credits

Original template: My-Portfolio-React by Muhammad Umer. Original MIT license LICENSE mein preserved hai. Personal details supplied CV aur project links ke mutabiq replace hain. Original owner's photos, projects, employment aur achievement counts use nahi hue.
