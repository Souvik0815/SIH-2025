import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  X, 
  Download,
  Eye,
  Trash2,
  Plus,
  Calendar,
  DollarSign,
  Zap,
  Smartphone,
  Home,
  Users
} from 'lucide-react';

const DataUpload = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [consumptionData, setConsumptionData] = useState([]);

  // Mock data for uploaded files
  const mockUploadedFiles = [
    {
      id: 1,
      name: 'electricity_bills_jan_2024.csv',
      type: 'Electricity Consumption',
      size: '2.4 MB',
      uploadDate: '2024-01-20',
      status: 'processed',
      records: 1250,
      beneficiaries: 1250
    },
    {
      id: 2,
      name: 'mobile_recharge_data.csv',
      type: 'Mobile Recharge',
      size: '1.8 MB',
      uploadDate: '2024-01-19',
      status: 'processing',
      records: 980,
      beneficiaries: 980
    },
    {
      id: 3,
      name: 'utility_payments.xlsx',
      type: 'Utility Bills',
      size: '3.2 MB',
      uploadDate: '2024-01-18',
      status: 'error',
      records: 0,
      beneficiaries: 0,
      error: 'Invalid file format'
    }
  ];

  // Mock consumption data
  const mockConsumptionData = [
    {
      id: 'BEN001',
      name: 'Rajesh Kumar',
      electricityUsage: 450,
      mobileRecharge: 1200,
      utilityBills: 3500,
      lastUpdated: '2024-01-20',
      incomeEstimate: 'Below 3 LPA',
      riskLevel: 'Low'
    },
    {
      id: 'BEN002',
      name: 'Sunita Devi',
      electricityUsage: 380,
      mobileRecharge: 800,
      utilityBills: 2800,
      lastUpdated: '2024-01-19',
      incomeEstimate: '3-5 LPA',
      riskLevel: 'Low'
    },
    {
      id: 'BEN003',
      name: 'Amit Singh',
      electricityUsage: 650,
      mobileRecharge: 2000,
      utilityBills: 5200,
      lastUpdated: '2024-01-18',
      incomeEstimate: 'Below 3 LPA',
      riskLevel: 'High'
    }
  ];

  const [files, setFiles] = useState(mockUploadedFiles);
  const [data, setData] = useState(mockConsumptionData);

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files).map((file, index) => ({
      id: files.length + index + 1,
      name: file.name,
      type: 'Unknown',
      size: (file.size / 1024 / 1024).toFixed(1) + ' MB',
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'processing',
      records: 0,
      beneficiaries: 0
    }));
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setFiles(files.filter(file => file.id !== fileId));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="h-5 w-5 text-success-600" />;
      case 'processing':
        return <div className="h-5 w-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-danger-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'processed':
        return 'badge-success';
      case 'processing':
        return 'badge-info';
      case 'error':
        return 'badge-danger';
      default:
        return 'badge-info';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low':
        return 'badge-success';
      case 'Medium':
        return 'badge-warning';
      case 'High':
        return 'badge-danger';
      default:
        return 'badge-info';
    }
  };

  const tabs = [
    { id: 'upload', name: 'Upload Data', icon: Upload },
    { id: 'consumption', name: 'Consumption Data', icon: FileText },
    { id: 'templates', name: 'Templates', icon: Download },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Data Upload</h1>
        <p className="text-gray-600">Upload and manage consumption data for credit scoring</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Upload Tab */}
      {activeTab === 'upload' && (
        <div className="space-y-6">
          {/* Upload Area */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Consumption Data</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-900 mb-2">Upload Files</h4>
              <p className="text-gray-600 mb-4">
                Drag and drop files here, or click to select files
              </p>
              <input
                type="file"
                multiple
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="btn-primary cursor-pointer"
              >
                Choose Files
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: CSV, Excel (.xlsx, .xls)
              </p>
            </div>
          </div>

          {/* File List */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Files</h3>
            <div className="space-y-4">
              {files.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(file.status)}
                    <div>
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        {file.type} • {file.size} • {file.uploadDate}
                      </p>
                      {file.status === 'processed' && (
                        <p className="text-sm text-gray-500">
                          {file.records} records • {file.beneficiaries} beneficiaries
                        </p>
                      )}
                      {file.status === 'error' && (
                        <p className="text-sm text-danger-600">{file.error}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`badge ${getStatusColor(file.status)}`}>
                      {file.status}
                    </span>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Consumption Data Tab */}
      {activeTab === 'consumption' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Zap className="h-8 w-8 text-warning-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Electricity Data</p>
                  <p className="text-2xl font-bold text-gray-900">1,250</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Smartphone className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Mobile Data</p>
                  <p className="text-2xl font-bold text-gray-900">980</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Home className="h-8 w-8 text-success-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Utility Data</p>
                  <p className="text-2xl font-bold text-gray-900">850</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Beneficiaries</p>
                  <p className="text-2xl font-bold text-gray-900">1,250</p>
                </div>
              </div>
            </div>
          </div>

          {/* Consumption Data Table */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Consumption Data</h3>
              <button className="btn-secondary">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Beneficiary
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Electricity (kWh)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mobile (₹)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Utility (₹)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Income Estimate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.electricityUsage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{item.mobileRecharge}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{item.utilityBills}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.incomeEstimate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`badge ${getRiskColor(item.riskLevel)}`}>
                          {item.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <FileText className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Templates</h3>
            <p className="text-gray-600 mb-6">
              Download these templates to ensure your data is formatted correctly for upload.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <Zap className="h-8 w-8 text-warning-600" />
                  <button className="btn-secondary">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Electricity Consumption</h4>
                <p className="text-sm text-gray-500">Template for electricity bill data</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <Smartphone className="h-8 w-8 text-primary-600" />
                  <button className="btn-secondary">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Mobile Recharge</h4>
                <p className="text-sm text-gray-500">Template for mobile recharge data</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <Home className="h-8 w-8 text-success-600" />
                  <button className="btn-secondary">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Utility Bills</h4>
                <p className="text-sm text-gray-500">Template for utility bill payments</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataUpload;
