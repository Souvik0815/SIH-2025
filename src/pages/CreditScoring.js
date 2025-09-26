import React, { useState } from 'react';
import { 
  Search, 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
  Target,
  DollarSign,
  User,
  FileText,
  Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const CreditScoring = () => {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const beneficiaries = [
    {
      id: 'BEN001',
      name: 'Rajesh Kumar',
      creditScore: 785,
      riskBand: 'Low Risk - High Need',
      repaymentScore: 85,
      incomeScore: 75,
      utilizationScore: 80,
      historyScore: 90,
      lastUpdated: '2024-01-20',
      scoreChange: +15,
      factors: {
        repaymentHistory: 85,
        incomeStability: 75,
        loanUtilization: 80,
        creditHistory: 90,
        businessPerformance: 70,
        consumptionPattern: 65
      }
    },
    {
      id: 'BEN002',
      name: 'Sunita Devi',
      creditScore: 720,
      riskBand: 'Low Risk - Low Need',
      repaymentScore: 80,
      incomeScore: 85,
      utilizationScore: 75,
      historyScore: 85,
      lastUpdated: '2024-01-18',
      scoreChange: +8,
      factors: {
        repaymentHistory: 80,
        incomeStability: 85,
        loanUtilization: 75,
        creditHistory: 85,
        businessPerformance: 80,
        consumptionPattern: 70
      }
    },
    {
      id: 'BEN003',
      name: 'Amit Singh',
      creditScore: 650,
      riskBand: 'High Risk - High Need',
      repaymentScore: 60,
      incomeScore: 55,
      utilizationScore: 70,
      historyScore: 65,
      lastUpdated: '2024-01-15',
      scoreChange: -12,
      factors: {
        repaymentHistory: 60,
        incomeStability: 55,
        loanUtilization: 70,
        creditHistory: 65,
        businessPerformance: 50,
        consumptionPattern: 45
      }
    }
  ];

  const scoreHistory = [
    { date: '2023-10', score: 720 },
    { date: '2023-11', score: 735 },
    { date: '2023-12', score: 750 },
    { date: '2024-01', score: 785 },
  ];

  const riskBands = [
    { name: 'Low Risk - High Need', count: 45, color: '#22c55e', minScore: 750 },
    { name: 'Low Risk - Low Need', count: 32, color: '#3b82f6', minScore: 700 },
    { name: 'High Risk - High Need', count: 28, color: '#f59e0b', minScore: 600 },
    { name: 'High Risk - Low Need', count: 15, color: '#ef4444', minScore: 0 },
  ];

  const filteredBeneficiaries = beneficiaries.filter(beneficiary =>
    beneficiary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beneficiary.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScoreColor = (score) => {
    if (score >= 750) return 'text-success-600';
    if (score >= 700) return 'text-primary-600';
    if (score >= 600) return 'text-warning-600';
    return 'text-danger-600';
  };

  const getRiskBadgeColor = (riskBand) => {
    if (riskBand.includes('Low Risk')) {
      return 'badge-success';
    } else if (riskBand.includes('High Risk')) {
      return 'badge-danger';
    }
    return 'badge-warning';
  };

  const radarData = selectedBeneficiary ? [
    { subject: 'Repayment', A: selectedBeneficiary.factors.repaymentHistory, fullMark: 100 },
    { subject: 'Income', A: selectedBeneficiary.factors.incomeStability, fullMark: 100 },
    { subject: 'Utilization', A: selectedBeneficiary.factors.loanUtilization, fullMark: 100 },
    { subject: 'History', A: selectedBeneficiary.factors.creditHistory, fullMark: 100 },
    { subject: 'Business', A: selectedBeneficiary.factors.businessPerformance, fullMark: 100 },
    { subject: 'Consumption', A: selectedBeneficiary.factors.consumptionPattern, fullMark: 100 },
  ] : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Credit Scoring</h1>
          <p className="text-gray-600">AI/ML-based credit assessment and risk band classification</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="btn-primary">
            <Calculator className="h-4 w-4 mr-2" />
            Recalculate Scores
          </button>
        </div>
      </div>

      {/* Risk Bands Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {riskBands.map((band) => (
          <div key={band.name} className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div 
                  className="h-8 w-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: band.color + '20' }}
                >
                  <BarChart3 className="h-5 w-5" style={{ color: band.color }} />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600">{band.name}</p>
                <p className="text-2xl font-bold text-gray-900">{band.count}</p>
                <p className="text-sm text-gray-500">Score: {band.minScore}+</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Beneficiary List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Beneficiary List */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Beneficiaries</h3>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search beneficiaries..."
                  className="input-field pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-3">
              {filteredBeneficiaries.map((beneficiary) => (
                <div
                  key={beneficiary.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedBeneficiary?.id === beneficiary.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedBeneficiary(beneficiary)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{beneficiary.name}</p>
                      <p className="text-xs text-gray-500">{beneficiary.id}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${getScoreColor(beneficiary.creditScore)}`}>
                        {beneficiary.creditScore}
                      </p>
                      <div className="flex items-center">
                        {beneficiary.scoreChange > 0 ? (
                          <TrendingUp className="h-3 w-3 text-success-500" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-danger-500" />
                        )}
                        <span className={`text-xs ml-1 ${
                          beneficiary.scoreChange > 0 ? 'text-success-600' : 'text-danger-600'
                        }`}>
                          {beneficiary.scoreChange > 0 ? '+' : ''}{beneficiary.scoreChange}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className={`badge ${getRiskBadgeColor(beneficiary.riskBand)}`}>
                      {beneficiary.riskBand}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Score Details */}
        <div className="lg:col-span-2">
          {selectedBeneficiary ? (
            <div className="space-y-6">
              {/* Score Overview */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Score Details</h3>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Updated: {selectedBeneficiary.lastUpdated}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${getScoreColor(selectedBeneficiary.creditScore)}`}>
                      {selectedBeneficiary.creditScore}
                    </div>
                    <p className="text-sm text-gray-600">Composite Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedBeneficiary.repaymentScore}</div>
                    <p className="text-sm text-gray-600">Repayment</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedBeneficiary.incomeScore}</div>
                    <p className="text-sm text-gray-600">Income</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedBeneficiary.utilizationScore}</div>
                    <p className="text-sm text-gray-600">Utilization</p>
                  </div>
                </div>
              </div>

              {/* Score History */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Score History</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={scoreHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[600, 800]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Factor Analysis */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Factor Analysis</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Score Breakdown</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedBeneficiary.factors).map(([factor, score]) => (
                        <div key={factor} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 capitalize">
                            {factor.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-primary-600 h-2 rounded-full"
                                style={{ width: `${score}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-900 w-8">{score}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Radar Chart</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar
                          name="Score"
                          dataKey="A"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
                <div className="space-y-3">
                  {selectedBeneficiary.creditScore >= 750 ? (
                    <div className="flex items-start space-x-3 p-3 bg-success-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-success-800">Eligible for Direct Digital Lending</p>
                        <p className="text-sm text-success-700">This beneficiary qualifies for automated loan approval up to ₹1,00,000</p>
                      </div>
                    </div>
                  ) : selectedBeneficiary.creditScore >= 700 ? (
                    <div className="flex items-start space-x-3 p-3 bg-warning-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-warning-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-warning-800">Manual Review Recommended</p>
                        <p className="text-sm text-warning-700">Consider additional documentation for loan amounts above ₹50,000</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start space-x-3 p-3 bg-danger-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-danger-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-danger-800">High Risk - Enhanced Due Diligence</p>
                        <p className="text-sm text-danger-700">Requires comprehensive review and collateral assessment</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="text-center py-12">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Beneficiary</h3>
                <p className="text-gray-600">Choose a beneficiary from the list to view their credit score details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditScoring;
