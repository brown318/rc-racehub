import { client, TENANT_QUERY } from "@/lib/sanity";
import { TenantProvider } from "@/lib/tenant-context";
import { TenantSiteHome } from "@/components/tenant-site-home";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface TenantPageProps {
  params: {
    slug: string;
  };
}

export default async function TenantPage({ params }: TenantPageProps) {
  const { slug } = await params;
  
  let tenant = null;
  try {
    tenant = await client.fetch(TENANT_QUERY, { subdomain: slug });
  } catch (error) {
    console.error('Error fetching tenant:', error);
  }

  if (!tenant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tenant Not Found</h1>
          <p className="text-gray-600 mb-8">The tenant "{slug}" could not be found.</p>
          <a 
            href="http://localhost:3001" 
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Visit RC RaceHub
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TenantProvider tenant={tenant} isMainSite={false}>
        <Header />
        <main className="flex-1">
          <TenantSiteHome />
        </main>
        <Footer />
      </TenantProvider>
    </div>
  );
}
