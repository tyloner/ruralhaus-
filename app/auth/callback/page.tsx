export default function CallbackPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const code = searchParams?.code;
  const error = searchParams?.error;
  const errorReason = searchParams?.error_reason;
  const errorDescription = searchParams?.error_description;

  return (
    <main style={{ padding: 24, fontFamily: "monospace" }}>
      <h1>OAuth Callback</h1>

      <p>
        <b>code</b>: {Array.isArray(code) ? code[0] : code ?? "(none)"}
      </p>

      <h2 style={{ marginTop: 16 }}>All params</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(
          { code, error, errorReason, errorDescription, searchParams },
          null,
          2
        )}
      </pre>
    </main>
  );
}
