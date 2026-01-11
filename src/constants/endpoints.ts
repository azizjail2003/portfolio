export const API_HIGHLIGHTS = [
    {
        title: "Multi-scenario Credit Simulation",
        endpoint: { method: "POST", path: "/api/v1/credit-simulations" },
        description: "Powers a credit simulator for a fintech platform. Accepts a borrower profile plus multiple scenarios, computes amortized monthly payments, and evaluates financial metrics per scenario. Classifies risk levels and suggests parameter adjustments.",
        code: `// Calculate loan parameters
$loanAmount = $this->calculateLoanAmount($goodPrice, $apportPercentage);
$monthlyPayment = $this->calculateMonthlyPayment($loanAmount, $rate, $months);

// Evaluate financial health metrics
$ted = $this->calculateDebtRatio($expenses, $monthlyPayment, $revenue);
$rav = $this->calculateRemainingIncome($revenue, $expenses, $monthlyPayment);

// Risk classification
$classification = $this->classifyRisk($ted, $rav, $monthlyPayment);`,
        jsonRequest: `{
  "personal": { "fullName": "John Doe", "status": "Resident", "age": 32 },
  "financial": {
    "good_price": 1200000,
    "revenue": 24000,
    "expenses": 6000,
    "scenarios": [
      { "apport": 20, "years": 20, "annual_interest_rate": 4.5 }
    ]
  }
}`,
        jsonResponse: `{
  "success": true,
  "simulations": [
    {
      "scenario_id": 1,
      "monthly_payment": "6084.3",
      "ted": "50.3%",
      "classification": "🟡",
      "suggestions": { "increase_apport": "..." }
    }
  ]
}`,
        points: [
            "Computes multiple credit scenarios in a single call using amortization formulas.",
            "Automatically proposes alternative strategies when risk is detected.",
            "Separates calculation logic from persistence for reuse across channels.",
            "Production-ready API serving a live fintech platform."
        ]
    },
    {
        title: "Loan Amortization Engine",
        endpoint: { method: "POST", path: "/api/v1/calculateLoan" },
        description: "Generates detailed amortization schedules for different financing levels. Returns monthly payments, total interest, and per-installment breakdowns, enabling visual comparison of repayment strategies.",
        code: `$financingLevels = [100, 90, 80, 70, 60, 50];

foreach ($financingLevels as $percentage) {
    $currentAmount = $loanAmount * ($percentage / 100);
    
    $monthlyPayment = $this->calculatePayment(
        $currentAmount, 
        $monthlyRate, 
        $months
    );
    
    $schedule = $this->generateAmortizationSchedule(
        $currentAmount, 
        $monthlyPayment, 
        $months
    );
}`,
        jsonRequest: `{
  "montant-pret": 1000000,
  "taux-interet-annuel": 5.5,
  "duree-pret-annees": 15,
  "operation": "Achat immobilier"
}`,
        jsonResponse: `{
  "loan_amount": 1000000,
  "monthly_payments": {
    "100": 8174.23,
    "90": 7356.81,
    "80": 6539.38
  },
  "result_tables": {
    "100": [
      {
        "payment_number": 1,
        "monthly_payment": "8 174,23",
        "remaining_balance": "996 425,77"
      }
    ]
  }
}`,
        points: [
            "Generates amortization schedules for multiple loan percentages in one call.",
            "Encapsulates complex financial logic in backend services.",
            "Uses structured JSON output to feed dashboards and reports.",
            "Validates inputs and handles edge cases."
        ]
    },
    {
        title: "Investment Grant Eligibility Engine",
        endpoint: { method: "POST", path: "/api/v1/subventions/eligibility" },
        description: "Policy engine for investment grants. Evaluates complex eligibility criteria and computes multiple grant types based on sector, location, and sustainability factors.",
        code: `// Evaluate basic eligibility
if (!$this->isEligible($investment, $jobsCreated)) {
    return response()->json(['eligibility' => false]);
}

// Compute grant amounts based on policy rules
$grants = $this->grantEngine->calculate([
    'investment' => $investment,
    'jobs' => $jobsCreated,
    'sector' => $sector,
    'region' => $region,
    'sustainability' => $criteria
]);

return response()->json([
    'eligibility' => true,
    'grants' => $grants
]);`,
        jsonRequest: `{
  "investment_amount": 60000000,
  "jobs_created": 200,
  "sector": "Renewable Energy",
  "sustainability_criteria": ["Green Energy"],
  "region": "Beni Mellal"
}`,
        jsonResponse: `{
  "eligibility": true,
  "grants": [
    { "type": "Employment Grant", "value": 5400000 },
    { "type": "Sector Grant", "value": 1800000 },
    { "type": "Regional Grant", "value": 7200000 }
  ],
  "total": 14400000
}`,
        points: [
            "Encodes real-world grant policy into deterministic backend logic.",
            "Computes multiple grant types with transparent calculations.",
            "Reusable decision engine for investment analysis tools.",
            "Translates complex domain knowledge into clean API design."
        ]
    }
];
