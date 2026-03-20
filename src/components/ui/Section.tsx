type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return <section className="py-20 md:py-32">{children}</section>;
}
