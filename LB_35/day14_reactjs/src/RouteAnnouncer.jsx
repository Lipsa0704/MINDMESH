function RouteAnnouncer({ title }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {title} page loaded
    </div>
  );
}

export default RouteAnnouncer;
