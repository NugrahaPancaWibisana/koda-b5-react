export default function Header({ title, ...rest }) {
  return (
    <header>
      <h1 {...rest}>{title}</h1>
    </header>
  );
}
