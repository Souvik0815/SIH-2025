# NBCFDC Credit Scoring System

A comprehensive AI/ML-based credit scoring system for NBCFDC (National Backward Classes Finance and Development Corporation) that combines historical repayment behavior with consumption-based income assessment.

## Features

### 🏠 Dashboard
- Real-time overview of key metrics
- Credit score trends and risk distribution
- Loan approval trends
- Recent activities feed

### 👥 Beneficiary Management
- Comprehensive beneficiary database
- Search and filter functionality
- Risk band classification
- Detailed beneficiary profiles

### 📊 Credit Scoring
- AI/ML-based composite credit scores
- Multi-factor analysis (repayment, income, utilization, history)
- Risk band visualization
- Score history tracking
- Transparent scoring methodology

### 📤 Data Upload
- Consumption data upload (electricity, mobile, utility bills)
- File processing and validation
- Template downloads
- Data management interface

### 📈 Reports & Analytics
- Comprehensive reporting system
- Credit score distribution analysis
- Risk trend analysis
- Loan performance metrics
- Consumption data insights

## Technology Stack

- **Frontend**: React 18 with functional components
- **Styling**: Tailwind CSS for responsive design
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nbcfdc-credit-scoring
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   └── Layout.js          # Main layout with navigation
├── pages/
│   ├── Dashboard.js       # Dashboard with key metrics
│   ├── Beneficiaries.js   # Beneficiary management
│   ├── CreditScoring.js   # Credit scoring interface
│   ├── DataUpload.js      # Data upload functionality
│   └── Reports.js         # Reports and analytics
├── App.js                 # Main app component
├── index.js              # Entry point
└── index.css             # Global styles
```

## Key Features

### Credit Scoring Model
- **Composite Score**: Blends repayment behavior and income assessment
- **Risk Bands**: 
  - Low Risk - High Need
  - Low Risk - Low Need
  - High Risk - High Need
  - High Risk - Low Need

### Data Sources
- Historical repayment data
- Loan utilization patterns
- Consumption-based metrics:
  - Electricity usage patterns
  - Mobile recharge frequency
  - Utility bill payments
  - Government survey data

### Compliance Features
- Transparent scoring methodology
- Explainable AI decisions
- Audit trail
- Periodic re-scoring capability

## Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
