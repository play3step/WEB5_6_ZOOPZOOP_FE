export default function NewsSearch({
  searchParams
}: {
  searchParams: { search: string }
}) {
  const { search } = searchParams

  return <div>NewsSearch {search}</div>
}
