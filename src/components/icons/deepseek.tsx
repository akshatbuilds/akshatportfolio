export default function DeepSeek({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#deepseek-gradient)"/>
      <path d="M12 6v12M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="deepseek-gradient" x1="2" y1="2" x2="22" y2="22">
          <stop stopColor="#667EEA"/>
          <stop offset="1" stopColor="#764BA2"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
