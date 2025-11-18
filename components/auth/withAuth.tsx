'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getToken, isTokenExpired } from '@/lib/auth';

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuthWrapper(props: P) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const token = getToken();
        
        if (!token) {
          router.push('/login');
          return;
        }

        const expired = await isTokenExpired(token);
        if (expired) {
          // Clear the expired token
          localStorage.removeItem('token');
          document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          router.push('/login');
          return;
        }

        setIsLoading(false);
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
