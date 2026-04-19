"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // HARDCODED CREDENTIALS - User should update these later
    if (email === "hayyan@admin" && password === "hayyan@123") {
      // For demo, we just set a cookie or use something the middleware can check
      // Real auth would use NextAuth or JWT
      document.cookie = "admin_auth=true; path=/";
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Access denied.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-container">
        <div className="bg-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="w-full max-w-sm relative z-10 p-4">
        <div className="glass-card p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-xl">
          <div className="text-center mb-8">
            <h1 className="text-xs font-heading font-bold tracking-widest text-white uppercase opacity-70 mb-2">
              Admin Gateway
            </h1>
            <p className="text-2xl font-bold font-heading">Protected Area</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-xs bg-red-500/10 border border-red-500/20 p-3 rounded-lg text-center font-medium">
                {error}
              </div>
            )}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5 ml-1">
                Identity
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white placeholder:text-muted/50"
                placeholder="system_admin"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5 ml-1">
                Access Code
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white placeholder:text-muted/50"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-4 rounded-lg hover:bg-white/90 active:scale-[0.98] transition-all mt-6 shadow-2xl shadow-white/10"
            >
              Initialize Session
            </button>
          </form>
        </div>

        <div className="text-center mt-8 cursor-default">
          <p className="text-[10px] tracking-[0.2em] font-medium text-muted uppercase">
            Hayyan Ali // Secure System
          </p>
        </div>
      </div>
    </div>
  );
}
