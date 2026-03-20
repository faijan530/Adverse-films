import { useState, useEffect } from "react";
import { adminLogin, adminLogout, fetchLeads, isAuthenticated } from "../../lib/admin";
import type { Lead } from "../../lib/admin";

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
    if (isAuthenticated()) {
      loadLeads();
    }
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const leadsData = await fetchLeads();
      setLeads(leadsData);
      setError("");
    } catch (err: any) {
      setError("Failed to load leads");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await adminLogin(email, password);
    if (result.success) {
      setIsLoggedIn(true);
      await loadLeads();
    } else {
      setError(result.error || "Login failed");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    const result = await adminLogout();
    if (result.success) {
      setIsLoggedIn(false);
      setLeads([]);
      setEmail("");
      setPassword("");
    }
    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black tracking-tighter mb-2">Admin Login</h1>
            <p className="text-gray-400">Adverse Films Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                required
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-black px-6 py-3 font-black tracking-wider hover:bg-accent/90 disabled:opacity-50 transition-all duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            disabled={loading}
            className="bg-red-600 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tighter mb-2">Leads</h2>
          <p className="text-gray-400">Recent contact form submissions</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No leads yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-accent font-semibold">{lead.name}</p>
                    <p className="text-gray-400 text-sm">{lead.brand}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{lead.type}</p>
                    <p className="text-accent text-sm">{lead.budget}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {lead.createdAt ? new Date(lead.createdAt.toDate()).toLocaleDateString() : 'Unknown date'}
                    </p>
                    <p className="text-gray-500 text-xs">{lead.source}</p>
                  </div>
                </div>
                {lead.message && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-gray-300 text-sm">{lead.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
