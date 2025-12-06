export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-surface border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primarySoft transition"
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full bg-surface border border-white/10 rounded-md px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-primarySoft transition"
    />
  );
}
