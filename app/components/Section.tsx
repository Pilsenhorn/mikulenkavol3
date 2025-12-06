type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  full?: boolean;
};

export default function Section({ id, className = "", children, full = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`${className} ${full ? "min-h-screen md:min-h-screen" : ""} py-12 md:py-24`}
    >
      {children}
    </section>
  );
}
