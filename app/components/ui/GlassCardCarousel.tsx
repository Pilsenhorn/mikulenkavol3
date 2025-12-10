export default function GlassCardCarousel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        carousel-item
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        rounded-lg 
        p-6 
        shadow-subtle 
        w-[280px] 
        min-h-[200px] 
        snap-start 
        shrink-0
        ${className}
      `}
    >
      {children}
    </div>
  );
}
