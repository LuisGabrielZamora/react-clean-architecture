import { Table, TableColumnsType, Tag } from 'antd';

import { handleStatusColor } from '../utils';
import {
  TravelSheet,
  TravelSheetExpenses,
  TravelSheetExpensesSummary,
} from '../../domain';
import { translationsManager } from '../../../../shared/infrastructure';

export interface ICardTabContent {
  key: string;
  label: string;
  children: any;
}

export const useTravelSheetExpensesTable = () => {
  // ***************************************************************
  // SUMMARY
  const summaryColumns: TableColumnsType<TravelSheetExpensesSummary> = [
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.TABLE_SUMMARY_TABLE
          .USER_LABEL,
      dataIndex: 'user',
      key: 'user',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.TABLE_SUMMARY_TABLE
          .EXPENSE_LABEL,
      dataIndex: 'expenses',
      key: 'expenses',
      render: (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value: any,
        record: TravelSheetExpensesSummary,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        index: number
      ) => (
        <>
          {}
          {/*{record.details.map((expensesDetail: ExpensesDetail, index) => {*/}
          {/*  return (*/}
          {/*    // eslint-disable-next-line react/no-array-index-key*/}
          {/*    <Row gutter={16} key={index}>*/}
          {/*      <Col span={8}>*/}
          {/*        <span className="text-bold">{expensesDetail.expenses}: </span>*/}
          {/*      </Col>*/}
          {/*      <Col span={8}>*/}
          {/*        <span>*/}
          {/*          Real: {expensesDetail.realExpenses} - $*/}
          {/*          {expensesDetail.realExpenses * 100} M.N.*/}
          {/*        </span>*/}
          {/*      </Col>*/}
          {/*      <Col span={8}>*/}
          {/*        <span>*/}
          {/*          Presupuestado: {expensesDetail.forecastExpenses} - $*/}
          {/*          {expensesDetail.forecastExpenses * 100} M.N.*/}
          {/*        </span>*/}
          {/*      </Col>*/}
          {/*    </Row>*/}
          {/*  );*/}
          {/*})}*/}
        </>
      ),
    },
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.TABLE_SUMMARY_TABLE
          .STATUS_LABEL,
      dataIndex: 'status',
      key: 'status',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render: (value: any, record: TravelSheet, index: number) => (
        <>
          <Tag color={handleStatusColor(record.status)} key={record.key}>
            {record.status}
          </Tag>
        </>
      ),
    },
  ];

  const summaryData: TravelSheetExpensesSummary[] = [
    {
      user: 'Pablo Cruz',
      status: 'Pendiente',
      details: [
        {
          expenses: 'Desayuno',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Comida',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Cena',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Hospedaje',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Aeropuerto-Casa',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Casa-Aeropuerto',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Hotel-Aeropuerto',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte Local (taxi)',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte Corporativo',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte propio',
          realExpenses: 0,
          forecastExpenses: 0,
        },
      ],
    },
    {
      user: 'Germán Álvarez',
      status: 'Pendiente',
      details: [
        {
          expenses: 'Desayuno',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Comida',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Cena',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Hospedaje',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Aeropuerto-Casa',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Casa-Aeropuerto',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Hotel-Aeropuerto',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte Local (taxi)',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte Corporativo',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte propio',
          realExpenses: 0,
          forecastExpenses: 0,
        },
      ],
    },
    {
      user: 'Luis Téllez',
      status: 'Pendiente',
      details: [
        {
          expenses: 'Desayuno',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Comida',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Cena',
          realExpenses: 1,
          forecastExpenses: 1,
        },
        {
          expenses: 'Hospedaje',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Aeropuerto-Casa',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Casa-Aeropuerto',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Taxi Hotel-Aeropuerto',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte Local (taxi)',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte Corporativo',
          realExpenses: 0,
          forecastExpenses: 0,
        },
        {
          expenses: 'Transporte propio',
          realExpenses: 0,
          forecastExpenses: 0,
        },
      ],
    },
  ];
  // SUMMARY
  // ***************************************************************

  // ***************************************************************
  // DETAILS
  const detailColumns: TableColumnsType<TravelSheetExpenses> = [
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.MODAL_AND_TABLE_FORM
          .USER_LABEL,
      dataIndex: 'user',
      key: 'user',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.MODAL_AND_TABLE_FORM
          .EXPENSE_LABEL,
      dataIndex: 'expenses',
      key: 'expenses',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.MODAL_AND_TABLE_FORM
          .DATED_AT_LABEL,
      dataIndex: 'datedAt',
      key: 'datedAt',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.MODAL_AND_TABLE_FORM
          .STATUS_LABEL,
      dataIndex: 'status',
      key: 'status',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render: (value: any, record: TravelSheet, index: number) => (
        <>
          <Tag color={handleStatusColor(record.status)} key={record.key}>
            {record.status}
          </Tag>
        </>
      ),
    },
  ];
  const subDetailColumns: TableColumnsType<TravelSheetExpenses> = [
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.MODAL_AND_TABLE_FORM
          .EXPENSE_LABEL,
      dataIndex: 'expenses',
      key: 'expenses',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.MODAL_AND_TABLE_FORM
          .DATED_AT_LABEL,
      dataIndex: 'datedAt',
      key: 'datedAt',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET_EXPENSES.MODAL_AND_TABLE_FORM
          .STATUS_LABEL,
      dataIndex: 'status',
      key: 'status',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render: (value: any, record: TravelSheet, index: number) => (
        <>
          <Tag color={handleStatusColor(record.status)} key={record.key}>
            {record.status}
          </Tag>
        </>
      ),
    },
  ];

  const detailData: TravelSheetExpenses[] = [
    {
      user: 'Pablo Cruz',
      expenses: 'Desayuno',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Pablo Cruz',
      expenses: 'Comida',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Pablo Cruz',
      expenses: 'Cena',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Germán Álvarez',
      expenses: 'Desayuno',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Germán Álvarez',
      expenses: 'Comida',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Germán Álvarez',
      expenses: 'Cena',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Luis Téllez',
      expenses: 'Desayuno',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Luis Téllez',
      expenses: 'Comida',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Luis Téllez',
      expenses: 'Cena',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Luis Téllez',
      expenses: 'Taxi Aeropuerto-Casa',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      user: 'Luis Téllez',
      expenses: 'Hospedaje',
      datedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
  ];
  // DETAILS
  // ***************************************************************

  const tabs: ICardTabContent[] = [
    {
      key: '1',
      label: 'Tabla de Detalle',
      children: (
        <Table columns={detailColumns} dataSource={detailData} size="small" />
      ),
    },
    {
      key: '2',
      label: 'Tabla de Resumen',
      children: (
        <Table columns={summaryColumns} dataSource={summaryData} size="small" />
      ),
    },
  ];

  return { tabs };
};
