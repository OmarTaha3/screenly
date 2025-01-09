interface tagProps {
  tagName: string;
}

const Tag = ({ tagName }: tagProps) => (
  <div className="rounded-full bg-secondary px-3 py-1.5 text-sm text-white">
    {tagName}
  </div>
);

export default Tag;
