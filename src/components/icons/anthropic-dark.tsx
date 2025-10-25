export default function AnthropicDark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 2L20 22h-3.5l-5.5-20h3z" fill="white"/>
      <path d="M7 2L12.5 22H9L3.5 2h3.5z" fill="white"/>
    </svg>
  );
}
