import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PackageCard } from '@/components/ui/PackageCard';
import { packages } from '@/data/packages';

export default function DooarsTourPackage() {
  const dooarsPackages = packages.filter(p => p.category === 'Dooars');

  return (
    <>
      <PageHero 
        title="Dooars Tour Packages" 
        subtitle="Explore the untouched forests, rivers, and wildlife of Dooars"
        image="/images/pkg_dooars_forest.jpg" 
      />

      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Explore Dooars Packages" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {dooarsPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
