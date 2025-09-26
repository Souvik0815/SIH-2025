import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  MoreVertical,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const Beneficiaries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

  // Mock data
  const beneficiaries = [
    {
      id: 'BEN001',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'rajesh.kumar@email.com',
      location: 'Delhi, India',
      joinDate: '2023-01-15',
      creditScore: 785,
      riskBand: 'Low Risk - High Need',
      loanAmount: 75000,
      repaymentStatus: 'Current',
      lastPayment: '2024-01-15',
      businessType: 'Small Retail',
      incomeLevel: 'Below 3 LPA',
    },
    {
      id: 'BEN002',
      name: 'Sunita Devi',
      phone: '+91 98765 43211',
      email: 'sunita.devi@email.com',
      location: 'Mumbai, India',
      joinDate: '2023-02-20',
      creditScore: 720,
      riskBand: 'Low Risk - Low Need',
      loanAmount: 50000,
      repaymentStatus: 'Current',
      lastPayment: '2024-01-10',
      businessType: 'Food Service',
      incomeLevel: '3-5 LPA',
    },
    {
      id: 'BEN003',
      name: 'Amit Singh',
      phone: '+91 98765 43212',
      email: 'amit.singh@email.com',
      location: 'Bangalore, India',
      joinDate: '2023-03-10',
      creditScore: 650,
      riskBand: 'High Risk - High Need',
      loanAmount: 100000,
      repaymentStatus: 'Overdue',
      lastPayment: '2023-12-15',
      businessType: 'Manufacturing',
      incomeLevel: 'Below 3 LPA',
    },
    {
      id: 'BEN004',
      name: 'Priya Sharma',
      phone: '+91 98765 43213',
      email: 'priya.sharma@email.com',
      location: 'Chennai, India',
      joinDate: '2023-04-05',
      creditScore: 810,
      riskBand: 'Low Risk - High Need',
      loanAmount: 60000,
      repaymentStatus: 'Current',
      lastPayment: '2024-01-20',
      businessType: 'Textile',
      incomeLevel: '3-5 LPA',
    },
    {
      id: 'BEN005',
      name: 'Vikram Patel',
      phone: '+91 98765 43214',
      email: 'vikram.patel@email.com',
      location: 'Ahmedabad, India',
      joinDate: '2023-05-12',
      creditScore: 580,
      riskBand: 'High Risk - Low Need',
      loanAmount: 80000,
      repaymentStatus: 'Default',
      lastPayment: '2023-11-20',
      businessType: 'Construction',
      incomeLevel: 'Below 3 LPA',
    },
  ];

  const filteredBeneficiaries = beneficiaries.filter(beneficiary => {
    const matchesSearch = beneficiary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beneficiary.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beneficiary.phone.includes(searchTerm);
    
    const matchesFilter = selectedFilter === 'all' || 
                         beneficiary.riskBand.toLowerCase().includes(selectedFilter.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const getRiskBadgeColor = (riskBand) => {
    if (riskBand.includes('Low Risk')) {
      return 'badge-success';
    } else if (riskBand.includes('High Risk')) {
      return 'badge-danger';
    }
    return 'badge-warning';
  };

  const getRepaymentBadgeColor = (status) => {
    switch (status) {
      case 'Current':
        return 'badge-success';
      case 'Overdue':
        return 'badge-warning';
      case 'Default':
        return 'badge-danger';
      default:
        return 'badge-info';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Beneficiaries</h1>
          <p className="text-gray-600">Manage and monitor beneficiary information</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="btn-primary">
            <User className="h-4 w-4 mr-2" />
            Add Beneficiary
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, ID, or phone..."
                className="input-field pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:w-48">
            <select
              className="input-field"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Risk Bands</option>
              <option value="low risk - high need">Low Risk - High Need</option>
              <option value="low risk - low need">Low Risk - Low Need</option>
              <option value="high risk - high need">High Risk - High Need</option>
              <option value="high risk - low need">High Risk - Low Need</option>
            </select>
          </div>
          <button className="btn-secondary">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Beneficiaries Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Beneficiary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credit Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Band
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loan Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBeneficiaries.map((beneficiary) => (
                <tr key={beneficiary.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{beneficiary.name}</div>
                        <div className="text-sm text-gray-500">{beneficiary.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{beneficiary.phone}</div>
                    <div className="text-sm text-gray-500">{beneficiary.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{beneficiary.creditScore}</span>
                      {beneficiary.creditScore >= 750 ? (
                        <TrendingUp className="ml-1 h-4 w-4 text-success-500" />
                      ) : beneficiary.creditScore < 600 ? (
                        <AlertTriangle className="ml-1 h-4 w-4 text-danger-500" />
                      ) : null}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge ${getRiskBadgeColor(beneficiary.riskBand)}`}>
                      {beneficiary.riskBand}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{beneficiary.loanAmount.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">{beneficiary.businessType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge ${getRepaymentBadgeColor(beneficiary.repaymentStatus)}`}>
                      {beneficiary.repaymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedBeneficiary(beneficiary)}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Beneficiary Detail Modal */}
      {selectedBeneficiary && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedBeneficiary(null)} />
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Beneficiary Details</h3>
                  <button
                    onClick={() => setSelectedBeneficiary(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{selectedBeneficiary.name}</p>
                      <p className="text-sm text-gray-500">{selectedBeneficiary.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <p className="text-sm text-gray-900">{selectedBeneficiary.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <p className="text-sm text-gray-900">{selectedBeneficiary.email}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <p className="text-sm text-gray-900">{selectedBeneficiary.location}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <p className="text-sm text-gray-900">Joined: {selectedBeneficiary.joinDate}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <p className="text-sm text-gray-900">Loan: ₹{selectedBeneficiary.loanAmount.toLocaleString()}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Credit Score</p>
                        <p className="text-lg font-semibold text-gray-900">{selectedBeneficiary.creditScore}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Income Level</p>
                        <p className="text-sm text-gray-900">{selectedBeneficiary.incomeLevel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="btn-primary sm:ml-3"
                  onClick={() => setSelectedBeneficiary(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beneficiaries;
