"use client";

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[65px] flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
            T-Goda
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/hotels" className="text-primary border-b-2 border-primary py-5">Hotels</Link>
            <Link href="/flights" className="hover:text-primary py-5">Flights</Link>
            <Link href="/bundles" className="hover:text-primary py-5">Bundles</Link>
            <Link href="/activities" className="hover:text-primary py-5">Activities</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <button 
                onClick={signInWithGoogle}
                className="text-sm font-medium text-gray-700 hover:text-primary hidden sm:block"
              >
                Sign In
              </button>
              <button 
                onClick={signInWithGoogle}
                className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
              >
                Create Account
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src={user.photoURL || ""} 
                  alt={user.displayName || "User"} 
                  className="w-8 h-8 rounded-full border border-gray-200"
                />
                <span className="text-sm font-medium text-gray-700 hidden lg:block">
                  {user.displayName}
                </span>
              </div>
              <button 
                onClick={logout}
                className="text-xs font-bold text-secondary hover:underline"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
