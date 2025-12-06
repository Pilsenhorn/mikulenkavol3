export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-surface rounded-lg p-6 shadow-subtle ${className}`}>
      {children}
    </div>
  );
}
