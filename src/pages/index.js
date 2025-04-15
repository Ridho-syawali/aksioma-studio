import CardProduct from "@/components/molecules/CardProduct";
import Layout from "@/components/templates/Layout";

export default function Home() {
  const product = [
    {
      image: "/images/ppdb.jpg",
      title: "Sistem informasi pendidikan",
      desc: "Sistem informasi untuk pendidikan sekolah seperti PPDB, Pembayaran SPP, Absensi, penilaian, dll. terdapat admin dan user..",
      price: 400000,
    },
    {
      image: "/images/page.jpg",
      title: "Landing Page",
      desc: "Pembuatan web per page saja.",
      price: 100000,
    },
    {
      image: "/images/webporto.jpg",
      title: "Web Portofolio",
      desc: "Pembuatan web portofolio tanpa hosting berbayar.",
      price: 300000,
    },
    {
      image: "/images/laporan.jpg",
      title: "Laporan atau Pembukuan",
      desc: "Pembuatan laporan dan pembukuan dengan free revisi sampai jadi.",
      price: 150000,
    },
    {
      image: "/images/hosting.jpg",
      title: "Hosting",
      desc: "Pembuatan domain tanpa hosting berbayar.",
      price: 50000,
    },
    {
      image: "/images/ecommer.jpg",
      title: "Ecommerce",
      desc: "Pembuatan web ecommerce tanpa payment gateway yang bisa diakses oleh siapapun, terdapat user dan admin.",
      price: 400000,
    },
  ];
  return (
    <Layout>
      <section className="px-5">
        <div className="px-5 py-5">
          <h1 className="lg:text-2xl text-lg font-bold">Product List</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-self-center">
          {product.map((item, index) => (
            <CardProduct key={index}>
              <CardProduct.Header image={item.image} />
              <CardProduct.Body title={item.title} desc={item.desc} />
              <CardProduct.Footer price={item.price} />
            </CardProduct>
          ))}
        </div>
      </section>
    </Layout>
  );
}
