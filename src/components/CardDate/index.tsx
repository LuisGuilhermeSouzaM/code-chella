interface CardDateProps {
  textDate: string;
}

export function CardDate(props: CardDateProps) {
  return (
    <p className="w-64 text-2xl font-bold text-center bg-Date p-4 mt-10 mb-8">
      {props.textDate}
    </p>
  );
}
