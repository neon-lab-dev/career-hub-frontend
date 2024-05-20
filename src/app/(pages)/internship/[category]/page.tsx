export default function Page({ params }: { params: { category: string } }) {
  return <div>My Post: {params.category}</div>;
}
