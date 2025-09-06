# RC RaceHub 🏁

A comprehensive multi-tenant platform for RC racing clubs, featuring timing integration, e-commerce, content management, and sponsorship tools.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Sanity account

### Local Development Setup

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd rcrachub
cd apps/web
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```
Fill in your Supabase and Sanity credentials.

3. **Set up local subdomains (Required for multi-tenant testing):**

**Mac/Linux:**
```bash
# Run the setup script
./scripts/setup-local-hosts.sh

# Or manually add to /etc/hosts:
sudo nano /etc/hosts
# Add these lines:
127.0.0.1 ntar.localhost
127.0.0.1 speedway.localhost
```

**Windows:**
```batch
# Run as Administrator
scripts/setup-local-hosts.bat

# Or manually add to C:\Windows\System32\drivers\etc\hosts:
127.0.0.1 ntar.localhost
127.0.0.1 speedway.localhost
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Access the sites:**
- **Main Site**: http://localhost:3001
- **NTAR Tenant**: http://ntar.localhost:3001
- **Speedway Tenant**: http://speedway.localhost:3001
- **Debug Info**: http://localhost:3001/debug

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Lucide Icons
- **Database**: Supabase (PostgreSQL)
- **CMS**: Sanity
- **Payments**: Stripe (Elements, Terminal, Connect)
- **Tables**: TanStack Table

### Multi-Tenant Architecture
- **Subdomain-based routing**: `tenant.rcracehub.com`
- **Tenant isolation**: Row-level security in Supabase
- **Custom branding**: Per-tenant themes and logos
- **Content management**: Tenant-scoped content in Sanity

## 🎯 Features

### For Track Owners
- **Custom branded websites** with subdomain
- **Event management** with registration and results
- **E-commerce platform** with inventory management
- **Sponsorship management** with performance tracking
- **Content management** via Sanity CMS
- **POS integration** with Stripe Terminal

### For Racers
- **Event registration** and payment processing
- **Race results** and historical data
- **Online parts shopping** with track pickup
- **Community features** with news and galleries

### For Platform
- **Revenue sharing** from e-commerce sales
- **Centralized management** of all tenants
- **Analytics and reporting** across all tracks
- **Scalable infrastructure** for growth

## 📊 Current Status

### ✅ Completed
- [x] Multi-tenant routing and theming
- [x] Supabase schema with RLS policies
- [x] Sanity CMS integration
- [x] Basic UI components and layouts
- [x] Sample tenant data (NTAR)
- [x] Development environment setup

### 🚧 In Progress
- [ ] Dynamic content loading from Sanity
- [ ] E-commerce functionality
- [ ] Payment processing with Stripe
- [ ] User authentication and roles

### 📋 Planned
- [ ] Timing system integration
- [ ] POS system with Stripe Terminal
- [ ] Advanced analytics and reporting
- [ ] Mobile app companion

## 🏢 Sample Tenants

### North Texas Asphalt Racers (NTAR)
- **URL**: http://ntar.localhost:3001
- **Theme**: Red/Gray/Amber
- **Content**: 3 events, 3 blog posts, 2 promos
- **Products**: 5 RC racing products with inventory

### Speedway RC Track
- **URL**: http://speedway.localhost:3001
- **Theme**: Default
- **Content**: Basic setup for testing

## 🛠️ Development

### Project Structure
```
rcrachub/
├── apps/web/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   ├── lib/            # Utilities and configurations
│   │   └── middleware.ts   # Multi-tenant routing
├── docs/                   # Documentation
├── scripts/               # Setup and utility scripts
└── supabase/             # Database migrations and types
```

### Key Files
- `src/middleware.ts` - Subdomain detection and routing
- `src/lib/tenant-context.tsx` - Tenant data management
- `src/lib/sanity.ts` - Sanity CMS client configuration
- `src/lib/supabase.ts` - Supabase client configuration

### Adding New Tenants
1. Create tenant in Supabase `tenants` table
2. Create tenant document in Sanity
3. Add subdomain to local hosts file
4. Access via `http://[subdomain].localhost:3001`

## 🔧 Troubleshooting

### Subdomain Issues
- Ensure hosts file is updated correctly
- Clear browser cache or use incognito mode
- Try alternative route: `http://localhost:3001/tenant/[slug]`
- Check debug page: `http://localhost:3001/debug`

### Common Issues
- **Port conflicts**: Change port in `package.json` if 3001 is in use
- **Environment variables**: Ensure all required vars are set in `.env.local`
- **Database connection**: Verify Supabase credentials and RLS policies

## 📚 Documentation

- [Development Checklist](docs/developmentChecklist.md)
- [Database Schema](docs/database-schema.md)
- [API Documentation](docs/api.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

[License information]

---

**RC RaceHub** - Powering the future of RC racing communities 🏁
