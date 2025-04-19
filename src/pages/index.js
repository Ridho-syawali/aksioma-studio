import ProductCard from "@/components/organism/ProductCard";
import Layout from "@/components/templates/Layout";

export default function Home() {
  const product = [
    {
      image: "/images/ppdb.jpg",
      title: "Sistem informasi pendidikan",
      description:
        "Sistem informasi untuk pendidikan sekolah seperti PPDB, Pembayaran SPP, Absensi, penilaian, dll. terdapat admin dan user..",
      price: 400000,
      stars: 5,
    },
    {
      image: "/images/page.jpg",
      title: "Landing Page",
      description: "Pembuatan web per page saja.",
      price: 100000,
      stars: 4,
    },
    {
      image: "/images/webporto.jpg",
      title: "Web Portofolio",
      description: "Pembuatan web portofolio tanpa hosting berbayar.",
      price: 300000,
      stars: 4,
    },
    {
      image: "/images/laporan.jpg",
      title: "Laporan atau Pembukuan",
      description:
        "Pembuatan laporan dan pembukuan dengan free revisi sampai jadi.",
      price: 200000,
      stars: 4,
    },
    {
      image: "/images/hosting.jpg",
      title: "Hosting",
      description: "Pembuatan domain tanpa hosting berbayar.",
      price: 50000,
      stars: 4,
    },
    {
      image: "/images/ecommer.jpg",
      title: "Ecommerce",
      description:
        "Pembuatan web ecommerce tanpa payment gateway yang bisa diakses oleh siapapun, terdapat user dan admin.",
      price: 400000,
      stars: 5,
    },
  ];
  return (
    <Layout>
      <section className="px-5 py-5">
        <div className="px-5 pb-5">
          <h1 className="lg:text-2xl text-lg font-bold">Product List</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-self-center">
          {product.map((item, index) => (
            <div key={index}>
              <ProductCard
                product={{
                  image: item.image,
                  title: item.title,
                  price: item.price,
                  stars: item.stars,
                  totalRating: item.stars + ".0",
                  description: item.description,
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
