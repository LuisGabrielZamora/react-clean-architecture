export interface TravelSheetExpensesSummary {
  user: string;
  status: string;
  details: ExpensesDetail[];
}

export interface ExpensesDetail {
  expenses: string;
  realExpenses: number;
  forecastExpenses: number;
}
