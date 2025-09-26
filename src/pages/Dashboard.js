import React from 'react';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  Activity,
  FileText,
  Clock
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Mock data for charts
  const creditScoreTrend = [
    { month: 'Jan', score: 720 },
    { month: 'Feb', score: 735 },
    { month: 'Mar', score: 750 },
    { month: 'Apr', score: 765 },
    { month: 'May', score: 780 },
    { month: 'Jun', score: 795 },
  ];

  const riskDistribution = [
    { name: 'Low Risk - High Need', value: 35, color: '#22c55e' },
    { name: 'Low Risk - Low Need', value: 25, color: '#3b82f6' },
    { name: 'High Risk - High Need', value: 20, color: '#f59e0b' },
    { name: 'High Risk - Low Need', value: 20, color: '#ef4444' },
  ];

  const loanApprovalTrend = [
    { month: 'Jan', approved: 45, rejected: 15 },
    { month: 'Feb', approved: 52, rejected: 12 },
    { month: 'Mar', approved: 48, rejected: 18 },
    { month: 'Apr', approved: 61, rejected: 9 },
    { month: 'May', approved: 58, rejected: 11 },
    { month: 'Jun', approved: 67, rejected: 8 },
  ];

  const stats = [
    {
      name: 'Total Beneficiaries',
      value: '12,847',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
    },
    {
      name: 'Active Loans',
      value: '8,432',
      change: '+8%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      name: 'Avg Credit Score',
      value: '742',
      change: '+15',
      changeType: 'positive',
      icon: TrendingUp,
    },
    {
      name: 'Default Rate',
      value: '3.2%',
      change: '-0.5%',
      changeType: 'positive',
      icon: AlertTriangle,
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'credit_score',
      message: 'Credit score updated for Rajesh Kumar',
      time: '2 minutes ago',
      icon: Activity,
    },
    {
      id: 2,
      type: 'loan_approved',
      message: 'Loan approved for Sunita Devi (₹50,000)',
      time: '15 minutes ago',
      icon: CheckCircle,
    },
    {
      id: 3,
      type: 'data_upload',
      message: 'Consumption data uploaded for 25 beneficiaries',
      time: '1 hour ago',
      icon: FileText,
    },
    {
      id: 4,
      type: 'review',
      message: 'Manual review required for 3 high-risk applications',
      time: '2 hours ago',
      icon: Clock,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of NBCFDC Credit Scoring System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.changeType === 'positive' ? 'text-success-600' : 'text-danger-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Credit Score Trend */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Score Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={creditScoreTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Distribution */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {riskDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Loan Approval Trend */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Approval Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={loanApprovalTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="approved" fill="#22c55e" name="Approved" />
            <Bar dataKey="rejected" fill="#ef4444" name="Rejected" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activities */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
