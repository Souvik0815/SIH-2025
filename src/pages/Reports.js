import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Filter, 
  TrendingUp, 
  TrendingDown,
  Users,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  FileText,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart as RechartsBarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedReport, setSelectedReport] = useState('overview');

  // Mock data
  const creditScoreDistribution = [
    { range: '750+', count: 450, percentage: 35 },
    { range: '700-749', count: 320, percentage: 25 },
    { range: '650-699', count: 256, percentage: 20 },
    { range: '600-649', count: 128, percentage: 10 },
    { range: 'Below 600', count: 128, percentage: 10 },
  ];

  const riskBandTrend = [
    { month: 'Jan', 'Low Risk - High Need': 35, 'Low Risk - Low Need': 25, 'High Risk - High Need': 20, 'High Risk - Low Need': 20 },
    { month: 'Feb', 'Low Risk - High Need': 38, 'Low Risk - Low Need': 27, 'High Risk - High Need': 18, 'High Risk - Low Need': 17 },
    { month: 'Mar', 'Low Risk - High Need': 42, 'Low Risk - Low Need': 28, 'High Risk - High Need': 16, 'High Risk - Low Need': 14 },
    { month: 'Apr', 'Low Risk - High Need': 45, 'Low Risk - Low Need': 30, 'High Risk - High Need': 15, 'High Risk - Low Need': 10 },
    { month: 'May', 'Low Risk - High Need': 48, 'Low Risk - Low Need': 32, 'High Risk - High Need': 12, 'High Risk - Low Need': 8 },
    { month: 'Jun', 'Low Risk - High Need': 50, 'Low Risk - Low Need': 35, 'High Risk - High Need': 10, 'High Risk - Low Need': 5 },
  ];

  const loanPerformance = [
    { month: 'Jan', disbursed: 45, repaid: 42, defaulted: 3 },
    { month: 'Feb', disbursed: 52, repaid: 48, defaulted: 4 },
    { month: 'Mar', disbursed: 48, repaid: 45, defaulted: 3 },
    { month: 'Apr', disbursed: 61, repaid: 58, defaulted: 3 },
    { month: 'May', disbursed: 58, repaid: 55, defaulted: 3 },
    { month: 'Jun', disbursed: 67, repaid: 64, defaulted: 3 },
  ];

  const incomeDistribution = [
    { category: 'Below 3 LPA', count: 512, color: '#ef4444' },
    { category: '3-5 LPA', count: 384, color: '#f59e0b' },
    { category: '5-8 LPA', count: 256, color: '#3b82f6' },
    { category: 'Above 8 LPA', count: 128, color: '#22c55e' },
  ];

  const consumptionAnalysis = [
    { month: 'Jan', electricity: 450, mobile: 1200, utility: 3500 },
    { month: 'Feb', electricity: 465, mobile: 1250, utility: 3600 },
    { month: 'Mar', electricity: 480, mobile: 1300, utility: 3700 },
    { month: 'Apr', electricity: 495, mobile: 1350, utility: 3800 },
    { month: 'May', electricity: 510, mobile: 1400, utility: 3900 },
    { month: 'Jun', electricity: 525, mobile: 1450, utility: 4000 },
  ];

  const keyMetrics = [
    {
      title: 'Total Beneficiaries',
      value: '12,847',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Average Credit Score',
      value: '742',
      change: '+15',
      changeType: 'positive',
      icon: TrendingUp,
    },
    {
      title: 'Loan Disbursement',
      value: '₹45.2 Cr',
      change: '+18%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Default Rate',
      value: '3.2%',
      change: '-0.5%',
      changeType: 'positive',
      icon: AlertTriangle,
    },
  ];

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'credit-scores', name: 'Credit Scores', icon: TrendingUp },
    { id: 'risk-analysis', name: 'Risk Analysis', icon: AlertTriangle },
    { id: 'loan-performance', name: 'Loan Performance', icon: DollarSign },
    { id: 'consumption', name: 'Consumption Data', icon: Activity },
  ];

  const periods = [
    { value: '3months', label: 'Last 3 Months' },
    { value: '6months', label: 'Last 6 Months' },
    { value: '1year', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' },
  ];

  const getChangeIcon = (changeType) => {
    return changeType === 'positive' ? (
      <TrendingUp className="h-4 w-4 text-success-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-danger-600" />
    );
  };

  const getChangeColor = (changeType) => {
    return changeType === 'positive' ? 'text-success-600' : 'text-danger-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive analysis of credit scoring and lending performance</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <select
            className="input-field"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {periods.map((period) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          <button className="btn-primary">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {reportTypes.map((report) => {
            const Icon = report.icon;
            return (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  selectedReport === report.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {report.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.title} className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center">
                    {getChangeIcon(metric.changeType)}
                    <p className={`text-sm ml-1 ${getChangeColor(metric.changeType)}`}>
                      {metric.change} from last period
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Report Content */}
      {selectedReport === 'overview' && (
        <div className="space-y-6">
          {/* Credit Score Distribution */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Score Distribution</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={creditScoreDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {creditScoreDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.range}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-12">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Band Trend */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Band Trend</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={riskBandTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Low Risk - High Need" stackId="1" stroke="#22c55e" fill="#22c55e" />
                <Area type="monotone" dataKey="Low Risk - Low Need" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                <Area type="monotone" dataKey="High Risk - High Need" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
                <Area type="monotone" dataKey="High Risk - Low Need" stackId="1" stroke="#ef4444" fill="#ef4444" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {selectedReport === 'credit-scores' && (
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Score Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Score Distribution</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={creditScoreDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="count"
                      label={({ range, percentage }) => `${range}: ${percentage}%`}
                    >
                      {creditScoreDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 60}, 70%, 50%)`} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Score Trends</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsLineChart data={riskBandTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Low Risk - High Need" stroke="#22c55e" strokeWidth={2} />
                    <Line type="monotone" dataKey="Low Risk - Low Need" stroke="#3b82f6" strokeWidth={2} />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedReport === 'risk-analysis' && (
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Risk Band Distribution</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={incomeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="count"
                      label={({ category, count }) => `${category}: ${count}`}
                    >
                      {incomeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Risk Trends</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsLineChart data={riskBandTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="High Risk - High Need" stroke="#f59e0b" strokeWidth={2} />
                    <Line type="monotone" dataKey="High Risk - Low Need" stroke="#ef4444" strokeWidth={2} />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedReport === 'loan-performance' && (
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Performance</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RechartsBarChart data={loanPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="disbursed" fill="#3b82f6" name="Disbursed" />
                <Bar dataKey="repaid" fill="#22c55e" name="Repaid" />
                <Bar dataKey="defaulted" fill="#ef4444" name="Defaulted" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {selectedReport === 'consumption' && (
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Consumption Data Analysis</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RechartsLineChart data={consumptionAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="electricity" stroke="#f59e0b" strokeWidth={2} name="Electricity (kWh)" />
                <Line type="monotone" dataKey="mobile" stroke="#3b82f6" strokeWidth={2} name="Mobile (₹)" />
                <Line type="monotone" dataKey="utility" stroke="#22c55e" strokeWidth={2} name="Utility (₹)" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
