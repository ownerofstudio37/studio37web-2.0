import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Studio37',
  description: 'Manage your Studio37 content and CRM.',
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Leads', value: '42', change: '+12% this month' },
            { label: 'Bookings', value: '8', change: 'This month' },
            { label: 'Gallery Images', value: '234', change: '+45 this month' },
            { label: 'Blog Posts', value: '12', change: '+3 this month' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.label}</h3>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Gallery Management', href: '/admin/gallery', icon: '📸' },
            { title: 'Blog Editor', href: '/admin/blog', icon: '📝' },
            { title: 'Leads & CRM', href: '/admin/leads', icon: '👥' },
            { title: 'Bookings', href: '/admin/bookings', icon: '📅' },
            { title: 'Settings', href: '/admin/settings', icon: '⚙️' },
            { title: 'Analytics', href: '/admin/analytics', icon: '📊' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">Manage →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
