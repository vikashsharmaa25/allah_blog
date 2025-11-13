import { ReactNode } from 'react';
import { Sidebar } from '@/components/admin/sidebar';
import { MobileNav } from '@/components/admin/mobile-nav';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
            <MobileNav />
            <div className="w-full flex-1">
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
