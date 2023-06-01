import { TranslationsInterface } from '../../../domain/settings';

export const spanishTranslation: TranslationsInterface = {
  SCREENS: {
    TRAVEL_SHEET: 'Hoja de viáticos',
    TRAVEL_SHEET_EXPENSES: 'Gestión de Gastos',
    VALIDATIONS: 'Validaciones',
    REPORTS: 'Reportes',
  },
  SHARED_COMPONENTS: {
    BUTTONS: {
      BACK: 'Regresar',
      STORE_MODAL: 'Registrar',
      CANCEL: 'Cancelar',
    },
    TABLES: {
      BUTTON_ACTIONS_LABEL: 'Ir a detalle',
    },
  },
  LOGIN_SCREEN: {
    BUTTONS: { LOGIN: 'Iniciar Sesión' },
    LABELS: {
      TITLE: 'Bitácora de Gastos de Viáticos',
      SUB_TITLE: 'Ingresa a la aplicación y gestiona tus viáticos',
      EMAIL: 'Correo electrónico',
      PASSWORD: 'Contraseña',
      REMEMBER_ME: 'Recuérdame',
    },
  },
  HOME_SCREEN: {
    TITLE: 'Bitácora de gastos de viáticos',
    FOOTER: {
      TEXT: `Bitácora de Gastos de Viáticos ©2023. Creado por Philips MX.`,
    },
    MENU: {
      ITEM_0: { TITLE: 'Menú', CONTENT: '' },
      ITEM_1: {
        TITLE: 'Hoja de viáticos',
        CONTENT: 'Control de viáticos de viaje por proyecto',
      },
      ITEM_2: {
        TITLE: 'Validaciones',
        CONTENT: 'Proceso de validaciones de gastos de viaje',
      },
      ITEM_3: {
        TITLE: 'Reportes',
        CONTENT: 'Reporte de indicadores de rendimiento y seguimiento',
      },
    },
  },
  TRAVEL_SHEET: {
    MODAL_TITLE: 'Nueva Hoja de Viaje',
    MODAL_AND_TABLE_FORM: {
      PROJECT_LABEL: 'Proyecto:',
      STATE_LABEL: 'Estado:',
      HOSPITAL_LABEL: 'Hospital:',
      ACTIVITY_LABEL: 'Actividad:',
      EQUIPMENT_LABEL: 'Equipo / Dispositivo:',
      QUANTITY_LABEL: 'Cantidad',
      PERIOD_LABEL: 'Fecha de viaje',
      INITIALIZED_AT_LABEL: 'Fecha de inicio',
      ENDED_AT_LABEL: 'Fecha de fin',
      ACTIONS: 'Acciones',
      STATUS: 'Estatus de Validación',
      BUTTON: 'Registrar Hoja de Viaje',
    },
    EXPANDED_ROW_RENDED: {
      USER: 'Usuario',
      BREAKFASTS: 'Desayunos',
      BREAKFAST_COST: 'Costo de Desayunos',
      FOODS: 'Comidas',
      FOOD_COST: 'Costo de Comidas',
      DINNERS: 'Cenas',
      DINNER_COST: 'Costo de Cenas',
      TOTAL_COST: 'Costo Total',
      STATUS: 'Estatus de validación',
      VALIDATED_AT: 'Fecha de validación',
    },
  },
  TRAVEL_SHEET_EXPENSES: {
    MODAL_TITLE: 'Nuevo Gasto de Viaje',
    MODAL_AND_TABLE_FORM: {
      USER_LABEL: 'Usuario',
      EXPENSE_LABEL: 'Categoría de Gasto',
      DATED_AT_LABEL: 'Fecha',
      STATUS_LABEL: 'Estatus',
      ACTIONS: 'Acciones',
      BUTTON: 'Registrar Gasto de Viaje',
    },
    TABLE_SUMMARY_TABLE: {
      USER_LABEL: 'Usuario',
      EXPENSE_LABEL: 'Categoría de Gasto',
      REAL_EXPENSE_LABEL: 'Gasto Real',
      FORECAST_EXPENSE_LABEL: 'Gasto Presupuestado',
      REAL_VS_FORECAST_LABEL: 'Real / Presupuesto',
      STATUS_LABEL: 'Estatus',
    },
  },
};
