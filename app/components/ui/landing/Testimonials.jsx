import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";

const testimonials = [
  {
    initials: "PS",
    name: "Priya Sharma",
    quote: "Cut our reporting time in half. Super simple to use.",
  },
  {
    initials: "AM",
    name: "Arjun Mehta",
    quote: "Setup took 10 minutes. The dashboard just makes sense.",
  },
  {
    initials: "SK",
    name: "Sara Khan",
    quote: "Best internal tool our team has adopted.",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 mb-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((item) => (
            <Card key={item.name} className="bg-white shadow p-6 text-black">
              <p className="mb-4">"{item.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {item.initials}
                </div>

                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}