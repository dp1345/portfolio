import React from 'react';

export function SlackIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
    </svg>
  );
}

export function NotionIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#20201D" />
      <text x="6.5" y="17.5" fill="#FBF8F1" fontFamily="sans-serif" fontWeight="900" fontSize="16px">N</text>
    </svg>
  );
}

export function AirtableIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.4 2.2a1 1 0 0 1 1.2 0l8.7 5.7a.8.8 0 0 1-.4 1.5H3.1a.8.8 0 0 1-.4-1.5l8.7-5.7z" fill="#FCB400"/>
      <path d="M12.6 10.9v10.3a.8.8 0 0 0 1.2.7l7.5-4.5a.8.8 0 0 0 .4-.7v-5.8H12.6z" fill="#18BFFF"/>
      <path d="M11.4 10.9H2.3a.8.8 0 0 0-.8.8v5.8a.8.8 0 0 0 .4.7l7.5 4.5a.8.8 0 0 0 1.2-.7V10.9z" fill="#F82B60"/>
    </svg>
  );
}

export function ZapierIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" stroke="#FF4A00" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function ShopifyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M18.8 4.2l-2.4-.6c-.2-.1-.5 0-.6.2l-.7 1.7h-3.6l-.6-1.7c-.1-.2-.4-.3-.6-.2L7.9 4.2c-.3.1-.4.4-.3.7l3 16.3c.1.3.3.5.6.5h3.6c.3 0 .5-.2.6-.5l3-16.3c.1-.3 0-.6-.3-.7z" fill="#95BF47"/>
      <path d="M12 7.5c-1.4 0-2.4 1.1-2.4 2.5 0 1.9 2.5 2.1 2.5 3.3 0 .5-.4.8-.9.8-.7 0-1.5-.4-2-.9l-.6 1.4c.7.7 1.7 1 2.6 1 1.6 0 2.6-1 2.6-2.5 0-2-2.5-2.2-2.5-3.3 0-.4.3-.7.8-.7.6 0 1.2.3 1.7.6l.6-1.4c-.6-.5-1.5-.8-2.4-.8z" fill="#FFFFFF"/>
    </svg>
  );
}

export function MakeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#6D28D9"/>
      <path d="M6 16.5V7.5L10 13.5L14 7.5V16.5H12V11L9.5 14.5L7 11V16.5H6ZM14.5 16.5V7.5H16.5V16.5H14.5Z" fill="#FFFFFF"/>
    </svg>
  );
}

export function ChatGptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.66-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zm-12.6401 4.135l-2.02-1.1635a.0804.0804 0 0 1-.038-.0568V6.074a4.4992 4.4992 0 0 1 7.371-3.4537l-.142.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.6069 1.4998-2.602-1.4998z"
        fill="#000000"
      />
    </svg>
  );
}

export function N8nIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path d="M18 50 L38 50" stroke="#E83D68" strokeWidth="8" strokeLinecap="round" />
      <path d="M38 50 C55 50 56 34 70 34 L82 34" stroke="#E83D68" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M48 50 C58 50 60 66 74 66" stroke="#E83D68" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="50" r="10" stroke="#E83D68" strokeWidth="8" fill="#FFFFFF" />
      <circle cx="38" cy="50" r="10" stroke="#E83D68" strokeWidth="8" fill="#FFFFFF" />
      <circle cx="84" cy="34" r="10" stroke="#E83D68" strokeWidth="8" fill="#FFFFFF" />
      <circle cx="78" cy="66" r="10" stroke="#E83D68" strokeWidth="8" fill="#FFFFFF" />
    </svg>
  );
}

export function LangChainIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="30" fill="#123330" />
      <g fill="#FFFFFF" transform="translate(20, 16) scale(0.68)">
        <path d="M12 0 C6 0 1 5 1 12 C1 14 2 16 3 17 C0 19 0 23 3 26 C2 28 4 30 7 30 C7 36 10 41 15 44 L16 51 L20 52 L22 51 L21 46 C27 45 32 40 33 34 C35 25 31 12 25 5 C21 2 17 0 12 0 Z M8 10 C9.1 10 10 10.9 10 12 C10 13.1 9.1 14 8 14 C6.9 14 6 13.1 6 12 C6 10.9 6.9 10 8 10 Z" />
      </g>
      <g stroke="#FFFFFF" strokeWidth="4.2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(68, 16)">
        <ellipse cx="12" cy="12" rx="11" ry="6" transform="rotate(-38 12 12)" />
        <ellipse cx="22" cy="22" rx="11" ry="6" transform="rotate(-38 22 22)" />
      </g>
    </svg>
  );
}

export function LangGraphIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="30" fill="#123330" />
      <g fill="#FFFFFF" transform="translate(20, 16) scale(0.68)">
        <path d="M12 0 C6 0 1 5 1 12 C1 14 2 16 3 17 C0 19 0 23 3 26 C2 28 4 30 7 30 C7 36 10 41 15 44 L16 51 L20 52 L22 51 L21 46 C27 45 32 40 33 34 C35 25 31 12 25 5 C21 2 17 0 12 0 Z M8 10 C9.1 10 10 10.9 10 12 C10 13.1 9.1 14 8 14 C6.9 14 6 13.1 6 12 C6 10.9 6.9 10 8 10 Z" />
      </g>
      <g fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" transform="translate(68, 14)">
        <line x1="16" y1="6" x2="2" y2="18" />
        <line x1="16" y1="6" x2="30" y2="18" />
        <line x1="2" y1="18" x2="16" y2="18" strokeWidth="3.5" />
        <line x1="2" y1="18" x2="16" y2="30" />
        <line x1="30" y1="18" x2="16" y2="30" />
        <circle cx="16" cy="6" r="4.5" fill="#FFFFFF" stroke="none" />
        <circle cx="2" cy="18" r="4.5" fill="#FFFFFF" stroke="none" />
        <circle cx="30" cy="18" r="4.5" fill="#FFFFFF" stroke="none" />
        <circle cx="16" cy="30" r="4.5" fill="#FFFFFF" stroke="none" />
      </g>
    </svg>
  );
}

/* AI Model & Tool Icons */
export function OpenClawIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path d="M30 18 C26 12 36 8 42 16 C38 16 34 17 30 18 Z" fill="#FA5252" />
      <path d="M70 18 C74 12 64 8 58 16 C62 16 66 17 70 18 Z" fill="#FA5252" />
      
      <ellipse cx="14" cy="48" rx="9" ry="8.5" fill="#E03131" />
      <ellipse cx="86" cy="48" rx="9" ry="8.5" fill="#E03131" />

      <rect x="37" y="80" width="9" height="12" rx="2" fill="#C92A2A" />
      <rect x="54" y="80" width="9" height="12" rx="2" fill="#C92A2A" />

      <defs>
        <radialGradient id="openclaw-brand-grad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="60%" stopColor="#FA5252" />
          <stop offset="100%" stopColor="#E03131" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="48" r="36" fill="url(#openclaw-brand-grad)" />

      <circle cx="38" cy="32" r="6" fill="#0A0F14" />
      <circle cx="38" cy="32" r="3.2" fill="#00F5D4" />
      <circle cx="37.2" cy="31.2" r="1.2" fill="#E0F7FA" />

      <circle cx="62" cy="32" r="6" fill="#0A0F14" />
      <circle cx="62" cy="32" r="3.2" fill="#00F5D4" />
      <circle cx="61.2" cy="31.2" r="1.2" fill="#E0F7FA" />
    </svg>
  );
}

export function HermesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <rect x="2" y="2" width="96" height="96" rx="6" stroke="#000000" strokeWidth="4" fill="#FFFFFF" />
      <path
        d="M20 78 C12 70 10 50 14 36 C18 20 32 10 50 10 C70 10 84 22 88 40 C92 56 88 78 80 88 C76 80 74 68 76 56 C70 66 66 76 60 84 L46 88 C40 84 32 78 30 70 C28 78 24 82 20 78 Z"
        fill="#000000"
      />
      <path
        d="M24 38 L30 26 L36 38 L44 24 L52 38 L60 26 L68 38 L74 28 L78 38"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M34 22 C44 14 62 14 70 28" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="68" cy="46" rx="9" ry="12" fill="#000000" stroke="#FFFFFF" strokeWidth="2.5" />
      <circle cx="68" cy="46" r="4" fill="#FFFFFF" />
      <path d="M30 42 C26 48 24 55 28 62 C30 65 32 67 32 72 L44 76 C42 66 40 56 42 48 Z" fill="#FFFFFF" />
      <ellipse cx="36" cy="52" rx="4.5" ry="5.5" fill="#000000" />
      <circle cx="34.5" cy="50.5" r="1.5" fill="#FFFFFF" />
      <circle cx="37.5" cy="53.5" r="0.8" fill="#FFFFFF" />
      <path d="M31 49 C34 46 39 46 42 49" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M26 56 C28 58 29 59 27 61" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M29 64 C32 64 34 66 36 67" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <polygon points="36,78 46,74 54,82 44,86" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      <text x="44" y="82" fill="#000000" fontFamily="sans-serif" fontWeight="900" fontSize="7" textAnchor="middle">N</text>
    </svg>
  );
}

export function CodexIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#10A37F"/>
      <path d="M8.5 8.5L5 12L8.5 15.5M15.5 8.5L19 12L15.5 15.5M13.5 6.5L10.5 17.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function GeminiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="gemini-brand-exact-diag" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#EA4335" />
          <stop offset="25%" stopColor="#FBBC05" />
          <stop offset="50%" stopColor="#4285F4" />
          <stop offset="75%" stopColor="#34A853" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <path
        d="M50 2 C50 26 26 50 2 50 C26 50 50 74 50 98 C50 74 74 50 98 50 C74 50 50 26 50 2 Z"
        fill="url(#gemini-brand-exact-diag)"
      />
    </svg>
  );
}

export function ClaudeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#CC785C"/>
      <path d="M12 5V19M5 12H19M7.05 7.05L16.95 16.95M7.05 16.95L16.95 7.05" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round"/>
    </svg>
  );
}

export function WebflowIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M100 0L68 100H38L51.4 58.6C34.8 61.2 18.2 73.6 0 86.8V45.2C15.2 45.2 29.2 38.6 42.4 27.6C47.8 23.2 53.2 14.2 55.4 0H100ZM27 0V35.6C18.6 35.6 9.4 33.4 0 29.8V0H27Z"
        fill="#146EF5"
      />
    </svg>
  );
}

export function NousResearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="nous-grad-main" x1="0%" y1="100%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2979FF" />
          <stop offset="25%" stopColor="#43A047" />
          <stop offset="48%" stopColor="#FFB300" />
          <stop offset="58%" stopColor="#F4511E" />
          <stop offset="80%" stopColor="#8E24AA" />
          <stop offset="100%" stopColor="#2979FF" />
        </linearGradient>
        <radialGradient id="nous-grad-glow" cx="50%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#FF5722" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#FFC107" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#2979FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M 16 88 C 6 96 0 88 4 78 C 14 50 28 10 50 10 C 72 10 86 50 96 78 C 100 88 94 96 84 88 C 76 80 70 66 64 58 C 58 50 42 50 36 58 C 30 66 24 80 16 88 Z"
        fill="url(#nous-grad-main)"
      />
      <path
        d="M 16 88 C 6 96 0 88 4 78 C 14 50 28 10 50 10 C 72 10 86 50 96 78 C 100 88 94 96 84 88 C 76 80 70 66 64 58 C 58 50 42 50 36 58 C 30 66 24 80 16 88 Z"
        fill="url(#nous-grad-glow)"
        style={{ mixBlendMode: "screen" }}
      />
    </svg>
  );
}

export function SnowflakeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
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
  );
}

