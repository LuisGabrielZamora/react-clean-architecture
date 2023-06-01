export interface IExpandedExpensesRecord {
  key: string | number;
  user: string;
  breakfasts: number;
  breakfastCost: number;
  foods: number;
  foodCost: number;
  dinners: number;
  dinnerCost: number;
  status: string;
  validatedAt: Date | string;
}
