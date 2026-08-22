import React from 'react';

// Exact 29 logos from the user's reference image
export interface TechLogoItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export const TECH_LOGOS: TechLogoItem[] = [
  // 1. ChatGPT (Exact Black Spiral Emblem)
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    renderLogo: () => (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.66-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zm-12.6401 4.135l-2.02-1.1635a.0804.0804 0 0 1-.038-.0568V6.074a4.4992 4.4992 0 0 1 7.371-3.4537l-.142.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.6069 1.4998-2.602-1.4998z"
          fill="#000000"
        />
      </svg>
    ),
  },

  // 2. Claude
  {
    id: 'claude',
    name: 'Claude',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <g transform="translate(50,50)">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <path
              key={i}
              d={`M0,0 L0,-38 C3,-38 5,-35 4,-20 L0,0`}
              fill="#D97757"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="9" fill="#D97757" />
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, i) => (
            <rect
              key={`r-${i}`}
              x="-2"
              y="-34"
              width="4"
              height="18"
              rx="2"
              fill="#D97757"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
      </svg>
    ),
  },

  // 3. Gemini (Exact 4-point gradient sparkle star)
  {
    id: 'gemini',
    name: 'Gemini',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <defs>
          <linearGradient id="gemini-exact-diag" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#EA4335" />
            <stop offset="25%" stopColor="#FBBC05" />
            <stop offset="50%" stopColor="#4285F4" />
            <stop offset="75%" stopColor="#34A853" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path
          d="M50 2 C50 26 26 50 2 50 C26 50 50 74 50 98 C50 74 74 50 98 50 C74 50 50 26 50 2 Z"
          fill="url(#gemini-exact-diag)"
        />
      </svg>
    ),
  },

  // 4. Lovable
  {
    id: 'lovable',
    name: 'Lovable',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <defs>
          <linearGradient id="lovable-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4B4B" />
            <stop offset="50%" stopColor="#FF7643" />
            <stop offset="75%" stopColor="#9C27B0" />
            <stop offset="100%" stopColor="#2196F3" />
          </linearGradient>
        </defs>
        <path
          d="M50 82 S20 62 14 42 A20 20 0 0 1 50 24 A20 20 0 0 1 86 42 C80 62 50 82 50 82 Z"
          fill="url(#lovable-grad)"
        />
      </svg>
    ),
  },

  // 5. Midjourney
  {
    id: 'midjourney',
    name: 'Midjourney',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Navy stylized sailboat matching logo */}
        <path
          d="M20 72 C35 78 65 78 82 72 M16 75 C35 84 65 84 86 75"
          stroke="#1F3A60"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M48 18 C52 35 62 52 78 62 C58 64 38 60 26 56 C38 46 44 32 48 18 Z"
          stroke="#1F3A60"
          strokeWidth="4.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M46 22 L46 62 M34 40 C42 45 46 52 46 62"
          stroke="#1F3A60"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  // 6. ElevenLabs
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <rect x="30" y="18" width="14" height="64" rx="4" fill="#000000" />
        <rect x="56" y="18" width="14" height="64" rx="4" fill="#000000" />
      </svg>
    ),
  },

  // 7. n8n (Exact Pink Branching Nodes)
  {
    id: 'n8n',
    name: 'n8n',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Connecting pink branches */}
        <path
          d="M18 50 L38 50"
          stroke="#E83D68"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M38 50 C55 50 56 34 70 34 L82 34"
          stroke="#E83D68"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M48 50 C58 50 60 66 74 66"
          stroke="#E83D68"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* 4 Hollow Pink Circles */}
        <circle cx="16" cy="50" r="10" stroke="#E83D68" strokeWidth="7" fill="#FFFFFF" />
        <circle cx="38" cy="50" r="10" stroke="#E83D68" strokeWidth="7" fill="#FFFFFF" />
        <circle cx="84" cy="34" r="10" stroke="#E83D68" strokeWidth="7" fill="#FFFFFF" />
        <circle cx="78" cy="66" r="10" stroke="#E83D68" strokeWidth="7" fill="#FFFFFF" />
      </svg>
    ),
  },

  // 8. Zapier
  {
    id: 'zapier',
    name: 'Zapier',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <g transform="translate(50,50)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect
              key={i}
              x="-5.5"
              y="-38"
              width="11"
              height="28"
              rx="5.5"
              fill="#FF4A00"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="13" fill="#FF4A00" />
        </g>
      </svg>
    ),
  },

  // 9. HeyGen
  {
    id: 'heygen',
    name: 'HeyGen',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <defs>
          <linearGradient id="heygen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A6CF7" />
            <stop offset="100%" stopColor="#8A46FF" />
          </linearGradient>
        </defs>
        <path
          d="M28 20 C24 18 20 21 20 26 L20 74 C20 79 24 82 28 80 L76 56 C80 54 80 46 76 44 Z"
          stroke="url(#heygen-grad)"
          strokeWidth="14"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },

  // 10. Python
  {
    id: 'python',
    name: 'Python',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Blue snake */}
        <path
          d="M48 14 C30 14 31 22 31 22 L31 30 L50 30 L50 33 L23 33 C14 33 8 40 8 50 C8 60 15 62 15 62 L20 62 L20 54 C20 44 28 44 28 44 L47 44 C55 44 55 36 55 36 L55 22 C55 14 48 14 48 14 Z"
          fill="#3776AB"
        />
        <circle cx="39" cy="22" r="3.2" fill="#FFFFFF" />
        {/* Yellow snake */}
        <path
          d="M52 86 C70 86 69 78 69 78 L69 70 L50 70 L50 67 L77 67 C86 67 92 60 92 50 C92 40 85 38 85 38 L80 38 L80 46 C80 56 72 56 72 56 L53 56 C45 56 45 64 45 64 L45 78 C45 86 52 86 52 86 Z"
          fill="#FFD43B"
        />
        <circle cx="61" cy="78" r="3.2" fill="#FFFFFF" />
      </svg>
    ),
  },

  // 11. TensorFlow
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Isometric 3D T */}
        <path d="M50 12 L82 30 L50 48 L18 30 Z" fill="#FF6F00" />
        <path d="M18 30 L50 48 L50 88 L18 70 Z" fill="#FF9100" />
        <path d="M50 48 L82 30 L82 70 L50 88 Z" fill="#E65100" />
        <path d="M38 38 L50 45 L50 82 L38 75 Z" fill="#FFB74D" />
      </svg>
    ),
  },

  // 12. PyTorch
  {
    id: 'pytorch',
    name: 'PyTorch',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path
          d="M50 16 A32 32 0 1 0 78 68 L69 61 A22 22 0 1 1 50 26 Z"
          fill="#EE4C2C"
        />
        <circle cx="68" cy="24" r="5" fill="#EE4C2C" />
      </svg>
    ),
  },

  // 13. Hugging Face
  {
    id: 'huggingface',
    name: 'Hugging Face',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Face */}
        <circle cx="50" cy="48" r="34" fill="#FFD21E" />
        {/* Eyebrows & Eyes */}
        <ellipse cx="38" cy="42" rx="4" ry="6" fill="#1C1917" />
        <ellipse cx="62" cy="42" rx="4" ry="6" fill="#1C1917" />
        {/* Cheeks */}
        <ellipse cx="30" cy="52" rx="6" ry="3" fill="#F43F5E" opacity="0.6" />
        <ellipse cx="70" cy="52" rx="6" ry="3" fill="#F43F5E" opacity="0.6" />
        {/* Smile */}
        <path d="M36 54 Q50 68 64 54" stroke="#1C1917" strokeWidth="4" strokeLinecap="round" fill="#1C1917" />
        {/* Hugging hands */}
        <ellipse cx="20" cy="62" rx="12" ry="10" fill="#FFB800" transform="rotate(-20 20 62)" />
        <ellipse cx="80" cy="62" rx="12" ry="10" fill="#FFB800" transform="rotate(20 80 62)" />
      </svg>
    ),
  },

  // 14. TypeScript
  {
    id: 'typescript',
    name: 'TypeScript',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <rect width="100" height="100" rx="18" fill="#3178C6" />
        <text
          x="50"
          y="70"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="46"
          textAnchor="middle"
          letterSpacing="-2"
        >
          TS
        </text>
      </svg>
    ),
  },

  // 15. Tailwind CSS
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path
          d="M26 44 C30 32 38 28 50 32 C44 38 44 42 48 46 C52 50 58 52 64 60 C70 68 66 76 54 78 C42 80 36 74 36 66 C36 60 40 56 36 52 C32 48 26 48 26 44 Z"
          fill="#06B6D4"
        />
        <path
          d="M50 24 C54 14 62 10 74 14 C68 20 68 24 72 28 C76 32 82 34 88 42 C94 50 90 58 78 60 C66 62 60 56 60 48 C60 42 64 38 60 34 C56 30 50 30 50 24 Z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },

  // 16. Postman
  {
    id: 'postman',
    name: 'Postman',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <circle cx="50" cy="50" r="42" fill="#FF6C37" />
        {/* White Spaceman Silhouette */}
        <g fill="#FFFFFF">
          <circle cx="68" cy="32" r="6" />
          <path d="M64 40 L38 66 L30 64 L34 52 L54 36 Z" />
          <path d="M50 38 L62 26 L52 22 L42 32 Z" />
          <path d="M38 66 L26 76 L22 72 L30 64 Z" />
        </g>
      </svg>
    ),
  },

  // 17. Node.js
  {
    id: 'nodejs',
    name: 'Node.js',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <polygon points="50,12 84,31 84,69 50,88 16,69 16,31" fill="#539E43" />
        <text
          x="50"
          y="58"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="24"
          textAnchor="middle"
        >
          JS
        </text>
      </svg>
    ),
  },

  // 18. Express.js
  {
    id: 'express',
    name: 'Express.js',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <text
          x="50"
          y="66"
          fill="#1C1917"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="52"
          textAnchor="middle"
          letterSpacing="-4"
        >
          ex
        </text>
      </svg>
    ),
  },

  // 19. React
  {
    id: 'react',
    name: 'React',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <ellipse cx="50" cy="50" rx="36" ry="14" stroke="#61DAFB" strokeWidth="4.5" />
        <ellipse cx="50" cy="50" rx="36" ry="14" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="36" ry="14" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(120 50 50)" />
        <circle cx="50" cy="50" r="7" fill="#61DAFB" />
      </svg>
    ),
  },

  // 20. JavaScript
  {
    id: 'javascript',
    name: 'JavaScript',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <rect width="100" height="100" rx="18" fill="#F7DF1E" />
        <text
          x="52"
          y="72"
          fill="#000000"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="44"
          textAnchor="middle"
          letterSpacing="-1"
        >
          JS
        </text>
      </svg>
    ),
  },

  // 21. HTML5
  {
    id: 'html5',
    name: 'HTML5',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <polygon points="18,14 82,14 76,82 50,90 24,82" fill="#E34F26" />
        <polygon points="50,20 76,20 71,77 50,83" fill="#EF652A" />
        <path
          d="M32 30 L68 30 L66 42 L42 42 L44 54 L65 54 L63 70 L50 74 L37 70 L36 58 L46 58 L47 64 L50 65 L54 64 L55 58 L34 58 Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  // 22. Make
  {
    id: 'make',
    name: 'Make',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <defs>
          <linearGradient id="make-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="make-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        {/* 3 angled bars forming M */}
        <rect x="20" y="24" width="14" height="52" rx="7" transform="skewX(-14)" fill="url(#make-grad1)" />
        <rect x="42" y="24" width="14" height="52" rx="7" transform="skewX(-14)" fill="url(#make-grad1)" />
        <rect x="64" y="24" width="14" height="52" rx="7" transform="skewX(-14)" fill="url(#make-grad2)" />
      </svg>
    ),
  },

  // 23. OpenAI
  {
    id: 'openai',
    name: 'OpenAI',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <g stroke="#000000" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(50,50) scale(0.9)">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <path
              key={i}
              d="M0,-36 C12,-36 22,-28 22,-16 L22,0 L10,8 L-10,-4 L-10,-24 Z"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
      </svg>
    ),
  },

  // 24. Hermes (Exact Nous Research Anime Mascot)
  {
    id: 'hermes',
    name: 'Hermes',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Outer frame */}
        <rect x="2" y="2" width="96" height="96" rx="4" stroke="#000000" strokeWidth="4" fill="#FFFFFF" />
        
        {/* Hair silhouette */}
        <path
          d="M20 78 C12 70 10 50 14 36 C18 20 32 10 50 10 C70 10 84 22 88 40 C92 56 88 78 80 88 C76 80 74 68 76 56 C70 66 66 76 60 84 L46 88 C40 84 32 78 30 70 C28 78 24 82 20 78 Z"
          fill="#000000"
        />

        {/* Bangs / Glints */}
        <path
          d="M24 38 L30 26 L36 38 L44 24 L52 38 L60 26 L68 38 L74 28 L78 38"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Headphone Band */}
        <path
          d="M34 22 C44 14 62 14 70 28"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Ear Cup */}
        <ellipse cx="68" cy="46" rx="9" ry="12" fill="#000000" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="68" cy="46" r="4" fill="#FFFFFF" />

        {/* Face Profile */}
        <path
          d="M30 42 C26 48 24 55 28 62 C30 65 32 67 32 72 L44 76 C42 66 40 56 42 48 Z"
          fill="#FFFFFF"
        />

        {/* Eye */}
        <ellipse cx="36" cy="52" rx="4.5" ry="5.5" fill="#000000" />
        <circle cx="34.5" cy="50.5" r="1.5" fill="#FFFFFF" />
        <circle cx="37.5" cy="53.5" r="0.8" fill="#FFFFFF" />
        <path d="M31 49 C34 46 39 46 42 49" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Nose & Lips */}
        <path d="M26 56 C28 58 29 59 27 61" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M29 64 C32 64 34 66 36 67" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* Collar with 'N' */}
        <polygon points="36,78 46,74 54,82 44,86" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
        <text x="44" y="82" fill="#000000" fontFamily="sans-serif" fontWeight="900" fontSize="7" textAnchor="middle">N</text>
      </svg>
    ),
  },

  // 25. LangGraph (Exact Dark Green Pill + Parrot + Graph Nodes)
  {
    id: 'langgraph',
    name: 'LangGraph',
    renderLogo: () => (
      <svg viewBox="0 0 120 60" className="w-12 h-6 sm:w-14 sm:h-7" fill="none">
        <rect width="120" height="60" rx="30" fill="#123330" />
        {/* White Parrot Silhouette */}
        <g fill="#FFFFFF" transform="translate(20, 16) scale(0.68)">
          <path d="M12 0 C6 0 1 5 1 12 C1 14 2 16 3 17 C0 19 0 23 3 26 C2 28 4 30 7 30 C7 36 10 41 15 44 L16 51 L20 52 L22 51 L21 46 C27 45 32 40 33 34 C35 25 31 12 25 5 C21 2 17 0 12 0 Z M8 10 C9.1 10 10 10.9 10 12 C10 13.1 9.1 14 8 14 C6.9 14 6 13.1 6 12 C6 10.9 6.9 10 8 10 Z" />
        </g>
        {/* Connected 4-Node Graph Network */}
        <g fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" transform="translate(68, 14)">
          {/* Connecting lines */}
          <line x1="16" y1="6" x2="2" y2="18" />
          <line x1="16" y1="6" x2="30" y2="18" />
          <line x1="2" y1="18" x2="16" y2="18" strokeWidth="3.5" />
          <line x1="2" y1="18" x2="16" y2="30" />
          <line x1="30" y1="18" x2="16" y2="30" />
          {/* 4 Nodes */}
          <circle cx="16" cy="6" r="4.5" fill="#FFFFFF" stroke="none" />
          <circle cx="2" cy="18" r="4.5" fill="#FFFFFF" stroke="none" />
          <circle cx="30" cy="18" r="4.5" fill="#FFFFFF" stroke="none" />
          <circle cx="16" cy="30" r="4.5" fill="#FFFFFF" stroke="none" />
        </g>
      </svg>
    ),
  },

  // 26. LangChain (Exact Dark Green Pill + Parrot + Chain Link)
  {
    id: 'langchain',
    name: 'LangChain',
    renderLogo: () => (
      <svg viewBox="0 0 120 60" className="w-12 h-6 sm:w-14 sm:h-7" fill="none">
        {/* Dark green rounded pill */}
        <rect width="120" height="60" rx="30" fill="#123330" />
        {/* White Parrot Silhouette */}
        <g fill="#FFFFFF" transform="translate(20, 16) scale(0.68)">
          <path d="M12 0 C6 0 1 5 1 12 C1 14 2 16 3 17 C0 19 0 23 3 26 C2 28 4 30 7 30 C7 36 10 41 15 44 L16 51 L20 52 L22 51 L21 46 C27 45 32 40 33 34 C35 25 31 12 25 5 C21 2 17 0 12 0 Z M8 10 C9.1 10 10 10.9 10 12 C10 13.1 9.1 14 8 14 C6.9 14 6 13.1 6 12 C6 10.9 6.9 10 8 10 Z" />
        </g>
        {/* White Interlocking Chain Links */}
        <g stroke="#FFFFFF" strokeWidth="4.2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(68, 16)">
          <ellipse cx="12" cy="12" rx="11" ry="6" transform="rotate(-38 12 12)" />
          <ellipse cx="22" cy="22" rx="11" ry="6" transform="rotate(-38 22 22)" />
        </g>
      </svg>
    ),
  },

  // 27. OpenClaw (Exact Mascot Logo)
  {
    id: 'openclaw',
    name: 'OpenClaw',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Antennas / Horns */}
        <path d="M30 18 C26 12 36 8 42 16 C38 16 34 17 30 18 Z" fill="#FA5252" />
        <path d="M70 18 C74 12 64 8 58 16 C62 16 66 17 70 18 Z" fill="#FA5252" />
        
        {/* Side hands */}
        <ellipse cx="14" cy="48" rx="9" ry="8.5" fill="#E03131" />
        <ellipse cx="86" cy="48" rx="9" ry="8.5" fill="#E03131" />

        {/* Feet */}
        <rect x="37" y="80" width="9" height="12" rx="2" fill="#C92A2A" />
        <rect x="54" y="80" width="9" height="12" rx="2" fill="#C92A2A" />

        {/* Round Body */}
        <defs>
          <radialGradient id="openclaw-marquee-grad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="60%" stopColor="#FA5252" />
            <stop offset="100%" stopColor="#E03131" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="48" r="36" fill="url(#openclaw-marquee-grad)" />

        {/* Eyes with Cyan Glow */}
        <circle cx="38" cy="32" r="6" fill="#0A0F14" />
        <circle cx="38" cy="32" r="3.2" fill="#00F5D4" />
        <circle cx="37.2" cy="31.2" r="1.2" fill="#E0F7FA" />

        <circle cx="62" cy="32" r="6" fill="#0A0F14" />
        <circle cx="62" cy="32" r="3.2" fill="#00F5D4" />
        <circle cx="61.2" cy="31.2" r="1.2" fill="#E0F7FA" />
      </svg>
    ),
  },

  // 27. Google Cloud
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M42 28 A16 16 0 0 1 70 34 A14 14 0 0 1 82 52 A18 18 0 0 1 66 74 L32 74 A18 18 0 0 1 20 48 A16 16 0 0 1 42 28 Z" fill="#EA4335" />
        <path d="M42 28 A16 16 0 0 1 70 34 A14 14 0 0 1 82 52 L64 52 A10 10 0 0 0 42 28 Z" fill="#4285F4" />
        <path d="M32 74 A18 18 0 0 1 20 48 A16 16 0 0 1 36 32 L48 48 L32 74 Z" fill="#FBBC05" />
        <path d="M32 74 L66 74 A18 18 0 0 0 76 60 L54 60 L32 74 Z" fill="#34A853" />
        <ellipse cx="48" cy="52" rx="14" ry="10" fill="#FFFFFF" />
      </svg>
    ),
  },

  // 28. Docker
  {
    id: 'docker',
    name: 'Docker',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        {/* Containers */}
        <g fill="#0DB7ED">
          <rect x="22" y="34" width="8" height="7" rx="1" />
          <rect x="32" y="34" width="8" height="7" rx="1" />
          <rect x="42" y="34" width="8" height="7" rx="1" />
          <rect x="32" y="25" width="8" height="7" rx="1" />
          <rect x="42" y="25" width="8" height="7" rx="1" />
          <rect x="52" y="25" width="8" height="7" rx="1" />
          <rect x="42" y="16" width="8" height="7" rx="1" />
        </g>
        {/* Whale body */}
        <path
          d="M84 44 C82 44 76 46 72 50 C68 44 58 44 54 44 L14 44 C12 58 20 72 38 76 C56 80 78 76 86 62 C92 62 96 56 96 50 C92 48 88 48 84 44 Z"
          fill="#0DB7ED"
        />
        <circle cx="32" cy="56" r="2.5" fill="#FFFFFF" />
      </svg>
    ),
  },

  // 29. AWS
  {
    id: 'aws',
    name: 'AWS',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <text
          x="50"
          y="48"
          fill="#232F3E"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="30"
          textAnchor="middle"
          letterSpacing="-1"
        >
          aws
        </text>
        {/* Orange smile arrow */}
        <path
          d="M26 58 Q50 76 74 58"
          stroke="#FF9900"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M71 55 L77 59 L73 66 Z"
          fill="#FF9900"
        />
      </svg>
    ),
  },

  // 30. Webflow (Uploaded logo 1)
  {
    id: 'webflow',
    name: 'Webflow',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path
          d="M100 0L68 100H38L51.4 58.6C34.8 61.2 18.2 73.6 0 86.8V45.2C15.2 45.2 29.2 38.6 42.4 27.6C47.8 23.2 53.2 14.2 55.4 0H100ZM27 0V35.6C18.6 35.6 9.4 33.4 0 29.8V0H27Z"
          fill="#146EF5"
        />
      </svg>
    ),
  },

  // 31. Nous Research (Uploaded logo 2 - rainbow arch curve)
  {
    id: 'nous-research',
    name: 'Nous Research',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <defs>
          <linearGradient id="nous-marquee-grad" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2979FF" />
            <stop offset="25%" stopColor="#43A047" />
            <stop offset="48%" stopColor="#FFB300" />
            <stop offset="58%" stopColor="#F4511E" />
            <stop offset="80%" stopColor="#8E24AA" />
            <stop offset="100%" stopColor="#2979FF" />
          </linearGradient>
          <radialGradient id="nous-marquee-glow" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#FF5722" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FFC107" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#2979FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M 16 88 C 6 96 0 88 4 78 C 14 50 28 10 50 10 C 72 10 86 50 96 78 C 100 88 94 96 84 88 C 76 80 70 66 64 58 C 58 50 42 50 36 58 C 30 66 24 80 16 88 Z"
          fill="url(#nous-marquee-grad)"
        />
        <path
          d="M 16 88 C 6 96 0 88 4 78 C 14 50 28 10 50 10 C 72 10 86 50 96 78 C 100 88 94 96 84 88 C 76 80 70 66 64 58 C 58 50 42 50 36 58 C 30 66 24 80 16 88 Z"
          fill="url(#nous-marquee-glow)"
          style={{ mixBlendMode: "screen" }}
        />
      </svg>
    ),
  },

  // 32. Snowflake (Uploaded logo 3)
  {
    id: 'snowflake',
    name: 'Snowflake',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <rect width="100" height="100" rx="20" fill="#29B5E8" />
        <g transform="translate(50, 50)" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Diamond Center */}
          <polygon points="0,-7 7,0 0,7 -7,0" fill="#29B5E8" stroke="#FFFFFF" strokeWidth="3.5" />
          {/* 6 Spokes with chevrons */}
          {[0, 60, 120, 180, 240, 300].map((rot, i) => (
            <g key={i} transform={`rotate(${rot})`}>
              <line x1="0" y1="-8" x2="0" y2="-32" />
              <path d="M-8 -22 L0 -29 L8 -22" fill="none" strokeWidth="4.5" />
            </g>
          ))}
        </g>
      </svg>
    ),
  },
];

export function TechLogosMarquee() {
  // Triple items list to guarantee seamless infinite rightward marquee looping without any empty space
  const items = [...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <div className="relative w-full py-4 sm:py-6 overflow-hidden select-none bg-transparent">
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F4EFE6] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F4EFE6] to-transparent z-10" />

      {/* Marquee Track moving to the RIGHT */}
      <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
        {items.map((tech, index) => (
          <div
            key={`${tech.id}-${index}`}
            className="flex flex-col items-center justify-between w-[92px] h-[96px] sm:w-[100px] sm:h-[104px] p-2.5 sm:p-3 mx-2 sm:mx-2.5 bg-white/90 backdrop-blur-xs rounded-xl sm:rounded-2xl border border-[#E7E1D4] shadow-[0_4px_12px_rgba(40,35,25,0.04)] hover:shadow-[0_8px_20px_rgba(40,35,25,0.08)] hover:border-[#C88A32]/40 transition-all duration-200 shrink-0 group"
          >
            <div className="flex-1 flex items-center justify-center transition-transform duration-200 group-hover:scale-108">
              {tech.renderLogo()}
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#4A473F] group-hover:text-[#20201D] text-center whitespace-nowrap leading-tight mt-1">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
