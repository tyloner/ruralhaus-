
export default function CallbackPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  return (
    <main style={{ padding: 24, fontFamily: "monospace" }}>
      <h1>OAuth Callback</h1>
      <p>Temporary debug page. Copy the <b>code</b> value below.</p>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(searchParams, null, 2)}
      </pre>
    </main>
  );
}

