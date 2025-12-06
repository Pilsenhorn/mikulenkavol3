export default function Glass({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 shadow-subtle ${className}`}
    >
      {children}
    </div>
  );
}
