export default function Container({ children }) {
  return (
    <section className="justify-center">
      <div className="app-container">{children}</div>
    </section>
  );
}
