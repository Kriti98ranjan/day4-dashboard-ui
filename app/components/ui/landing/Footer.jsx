import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div>
            <h2 className="text-white font-bold">Dashboard App</h2>
            <p className="text-sm mt-2">
              Simple tools for teams.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={["Dashboard", "Features"]}
          />

          <FooterCol
            title="Company"
            links={["About", "Contact"]}
          />

          <FooterCol
            title="Legal"
            links={["Privacy", "Terms"]}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="text-white font-semibold">
        {title}
      </h3>

      <ul className="mt-3 space-y-2">
        {links.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}