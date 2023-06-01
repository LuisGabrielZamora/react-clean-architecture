export interface TranslationsInterface {
  SCREENS: {
    TRAVEL_SHEET: string;
    TRAVEL_SHEET_EXPENSES: string;
    VALIDATIONS: string;
    REPORTS: string;
  };
  SHARED_COMPONENTS: {
    BUTTONS: {
      BACK: string;
      STORE_MODAL: string;
      CANCEL: string;
    };
    TABLES: {
      BUTTON_ACTIONS_LABEL: string;
    };
  };
  LOGIN_SCREEN: {
    LABELS: {
      TITLE: string;
      SUB_TITLE: string;
      EMAIL: string;
      PASSWORD: string;
      REMEMBER_ME: string;
    };
    BUTTONS: {
      LOGIN: string;
    };
  };
  HOME_SCREEN: {
    TITLE: string;
    FOOTER: { TEXT: string };
    MENU: {
      ITEM_0: { TITLE: string; CONTENT: string };
      ITEM_1: { TITLE: string; CONTENT: string };
      ITEM_2: { TITLE: string; CONTENT: string };
      ITEM_3: { TITLE: string; CONTENT: string };
    };
  };
  TRAVEL_SHEET: {
    MODAL_TITLE: string;
    MODAL_AND_TABLE_FORM: {
      PROJECT_LABEL: string;
      STATE_LABEL: string;
      HOSPITAL_LABEL: string;
      ACTIVITY_LABEL: string;
      EQUIPMENT_LABEL: string;
      QUANTITY_LABEL: string;
      PERIOD_LABEL: string;
      INITIALIZED_AT_LABEL: string;
      ENDED_AT_LABEL: string;
      ACTIONS: string;
      STATUS: string;
      BUTTON: string;
    };
    EXPANDED_ROW_RENDED: {
      USER: string;
      BREAKFASTS: string;
      BREAKFAST_COST: string;
      FOODS: string;
      FOOD_COST: string;
      DINNERS: string;
      DINNER_COST: string;
      TOTAL_COST: string;
      STATUS: string;
      VALIDATED_AT: string;
    };
  };
  TRAVEL_SHEET_EXPENSES: {
    MODAL_TITLE: string;
    MODAL_AND_TABLE_FORM: {
      USER_LABEL: string;
      EXPENSE_LABEL: string;
      DATED_AT_LABEL: string;
      STATUS_LABEL: string;
      ACTIONS: string;
      BUTTON: string;
    };
    TABLE_SUMMARY_TABLE: {
      USER_LABEL: string;
      EXPENSE_LABEL: string;
      REAL_EXPENSE_LABEL: string;
      FORECAST_EXPENSE_LABEL: string;
      REAL_VS_FORECAST_LABEL: string;
      STATUS_LABEL: string;
    };
  };
}
