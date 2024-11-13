import ProductRow from "@/components/ProductRow";
import { CategoriesEnum } from "@/constants";
import { findUser } from "@/lib/helpers";
import {unstable_noStore as noStore} from 'next/cache';

export default async function Home() {
  noStore();
  const user = await findUser();


  return (
    <section className="main-container pt-20">
      <div className="py-20">
        <div className="text-center">
          {user && <h1 className="pb-4 text-2xl sm:text-4xl lg:text-5xl font-semibold">Hello, <span className="text-primary">{user?.given_name} 👋</span></h1>}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-medium">
            <span>Find the best Tailwind</span>
            <span className="text-primary ml-3">Templates & Icons</span>
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-pretty">
            MART-UI is a platform, typically online, where buyers and sellers meet to exchange goods, services,
            or information. Marketplaces can be broad, covering multiple product categories, or they can be niche.
          </p>

        </div>
      </div>
      <ProductRow category={CategoriesEnum.NEWEST} />
      <ProductRow category={CategoriesEnum.TEMPLATE} />
      <ProductRow category={CategoriesEnum.ICONS} />
      <ProductRow category={CategoriesEnum.UIKITS} />
    </section>
  );
}
