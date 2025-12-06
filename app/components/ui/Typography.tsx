export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-h1 font-semibold mb-4">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-h2 font-semibold mb-3">{children}</h2>;
}

export function Body({ children }: { children: React.ReactNode }) {
  return <p className="text-body leading-relaxed">{children}</p>;
}

export function Small({ children }: { children: React.ReactNode }) {
  return <p className="text-small text-muted">{children}</p>;
}
