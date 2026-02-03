export default function PoemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sm:max-w-screen sm:overflow-x-hidden">
      {children}
    </div>
  );
}
