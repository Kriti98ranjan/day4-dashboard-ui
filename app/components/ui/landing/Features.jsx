import Card from "@/app/components/ui/Card";

const features = [
  {
    title: "Fast Setup",
    desc: "Get your dashboard running in minutes.",
  },
  {
    title: "Live Analytics",
    desc: "Track everything with real-time charts.",
  },
  {
    title: "Secure by Default",
    desc: "Your data stays encrypted.",
  },
  {
    title: "Reusable Components",
    desc: "Cards, badges and modals ready to use.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Features
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Everything you need in one dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              className="bg-white shadow text-black mb-3"
            >

              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}