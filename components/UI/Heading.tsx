export function Heading({ title }: { title: React.ReactNode | string }) {
  return <h1 className="w-full my-2 text-3xl font-bold text-left font-inter">{title}</h1>;
}
