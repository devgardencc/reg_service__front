import "./SectionTitle.css";

function SectionTitle({
  number,
  title,
  optional = false,
}: {
  number: string;
  title: string;
  optional?: boolean;
}) {
  return (
    <div className="form-section-title">
      <span>{number}</span>
      <p>
        {title}
        {optional && <small>OPTIONAL</small>}
      </p>
    </div>
  );
}

export default SectionTitle;
