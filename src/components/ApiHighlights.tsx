import { motion } from 'framer-motion';
import { Terminal, Code, FileJson, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Reusable Code Block Component
const CodeBlock = ({ code, language = 'php' }: { code: string, language?: string }) => (
    <div className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-white/10 font-mono text-xs my-4 shadow-lg">
        <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/5">
            <span className="text-white/40">{language}</span>
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
        </div>
        <div className="p-4 overflow-x-auto">
            <pre className="text-blue-100">
                <code>{code}</code>
            </pre>
        </div>
    </div>
);

// Reusable Endpoint Display
const Endpoint = ({ method, path }: { method: string, path: string }) => (
    <div className="flex items-center gap-3 font-mono text-sm bg-muted/30 p-2 rounded-md border border-border">
        <span className={`px-2 py-0.5 rounded text-xs font-bold ${method === 'POST' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'}`}>
            {method}
        </span>
        <span className="text-muted-foreground">{path}</span>
    </div>
);

export default function ApiHighlights() {
    const [activeTab, setActiveTab] = useState(0);

    const highlights = [
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

    return (
        <section id="api-highlights" className="py-20 px-6 border-b border-border bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Terminal className="w-6 h-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">API Highlights</h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Backend APIs built for fintech and public investment platforms,
                        combining financial modeling, decision logic, and production-ready implementation.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar / Tabs */}
                    <div className="lg:col-span-4 space-y-2">
                        {highlights.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 group ${activeTab === index
                                    ? 'bg-primary/10 border-primary shadow-sm'
                                    : 'bg-muted/20 border-border hover:bg-muted/40'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-sm font-bold font-mono ${activeTab === index ? 'text-primary' : 'text-muted-foreground'}`}>
                                        {`0${index + 1}`}
                                    </span>
                                    {activeTab === index && <ArrowRight className="w-4 h-4 text-primary" />}
                                </div>
                                <h3 className={`font-semibold ${activeTab === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                    {item.title}
                                </h3>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        {highlights.map((item, index) => (
                            activeTab === index && (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                            <Endpoint method={item.endpoint.method} path={item.endpoint.path} />
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Code Snippets Grid */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Code className="w-4 h-4" /> Logic (PHP/Laravel)
                                            </div>
                                            <CodeBlock code={item.code} />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <FileJson className="w-4 h-4" /> Request
                                                </div>
                                                <CodeBlock code={item.jsonRequest} language="json" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <FileJson className="w-4 h-4" /> Response
                                                </div>
                                                <CodeBlock code={item.jsonResponse} language="json" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Key Points */}
                                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            Key Design Decisions
                                        </h4>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {item.points.map((point, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
