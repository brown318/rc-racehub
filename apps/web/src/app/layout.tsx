import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { TenantProvider } from "@/lib/tenant-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTenantFromHost } from "@/lib/utils";
import { client, TENANT_QUERY } from "@/lib/sanity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RC RaceHub - The Complete Platform for RC Racing",
  description: "Multi-tenant RC racing platform with timing, results, e-commerce, and sponsorships for tracks and racers.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  let subdomain = getTenantFromHost(host);

  console.log('Layout - Host:', host, 'Subdomain:', subdomain);

  // Fallback: check for tenant query parameter (for development)
  if (!subdomain) {
    const url = headersList.get("x-url") || "";
    if (url.includes("?tenant=")) {
      const urlParams = new URLSearchParams(url.split("?")[1]);
      subdomain = urlParams.get("tenant");
    }
  }

  // Fetch tenant data on server side
  let tenant = null;
  const isMainSite = !subdomain;

  if (subdomain) {
    try {
      console.log('Fetching tenant for subdomain:', subdomain);
      tenant = await client.fetch(TENANT_QUERY, { subdomain });
      console.log('Tenant found:', tenant?.name || 'null');
    } catch (error) {
      console.error('Error fetching tenant for subdomain:', subdomain, error);
    }
  } else {
    console.log('No subdomain detected, host:', host);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <TenantProvider tenant={tenant} isMainSite={isMainSite}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </TenantProvider>
      </body>
    </html>
  );
}
