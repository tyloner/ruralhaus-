export default function CallbackPage({ searchParams }: { searchParams: any }) {
  return (
    <main style={{ padding: 24, fontFamily: "monospace" }}>
      <h1>OAuth Callback</h1>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </main>
  );
}
