import { services } from "../data";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services?.[params.slug as keyof typeof services];

  if (!service) {
    return (
      <main>
        <h1>Service not found</h1>
        <p>Slug: {params.slug}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </main>
  );
}