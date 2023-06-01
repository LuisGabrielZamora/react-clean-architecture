/* eslint-disable jsx-a11y/anchor-is-valid */

import { ArrowRightOutlined } from '@ant-design/icons';
import { Table, TableColumnsType, Tag } from 'antd';

import { handleStatusColor } from '../utils';
import { routes } from '../../../../../routes';
import { CustomButton } from '../../../../../views/components';
import { IExpandedExpensesRecord, TravelSheet } from '../../domain';
import { useNavigationManager } from '../../../../shared/application';
import { translationsManager } from '../../../../shared/infrastructure';

export const useTravelSheetTable = () => {
  const { navigateToRoute } = useNavigationManager();

  const columns: TableColumnsType<TravelSheet> = [
    {
      title:
        translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.PROJECT_LABEL,
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.STATE_LABEL,
      dataIndex: 'state',
      key: 'state',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.HOSPITAL_LABEL,
      dataIndex: 'hospital',
      key: 'hospital',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.ACTIVITY_LABEL,
      dataIndex: 'activity',
      key: 'activity',
    },
    {
      title:
        translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.EQUIPMENT_LABEL,
      dataIndex: 'equipment',
      key: 'equipment',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render: (value: any, record: TravelSheet, index: number) => (
        <>
          <div>
            <span className="text-bold">No. de Equipos:</span> {record.quantity}
          </div>
          <div>
            <span className="text-bold">Equipo:</span> {record.equipment}
          </div>
        </>
      ),
    },
    {
      title: translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.PERIOD_LABEL,
      dataIndex: 'period',
      key: 'initializedAt',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render: (value: any, record: TravelSheet, index: number) => (
        <>
          <div>
            <span className="text-bold">Fecha inicial:</span>{' '}
            {record.initializedAt.toString()}
          </div>
          <div>
            <span className="text-bold">Fecha final:</span>{' '}
            {record.endedAt.toString()}
          </div>
        </>
      ),
    },
    {
      title: translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.STATUS,
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
    {
      title: translationsManager.TRAVEL_SHEET.MODAL_AND_TABLE_FORM.ACTIONS,
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <>
          <CustomButton
            icon={<ArrowRightOutlined />}
            title={
              translationsManager.SHARED_COMPONENTS.TABLES.BUTTON_ACTIONS_LABEL
            }
            onClick={() => {
              navigateToRoute(routes.TRAVEL_SHEET_EXPENSES);
            }}
          />
        </>
      ),
    },
  ];

  const data: TravelSheet[] = [
    {
      key: 1,
      project: 'Proyecto 1',
      state: 'Del. Juárez - CDMX',
      hospital: 'IMSS',
      activity: 'Instalación',
      equipment: 'Equipo 1',
      quantity: 10,
      initializedAt: new Date().toLocaleString(),
      endedAt: new Date().toLocaleString(),
      status: 'Pendiente',
    },
    {
      key: 2,
      project: 'Proyecto 2',
      state: 'Del. Cuauhtémoc - CDMX',
      hospital: 'IMSS',
      activity: 'Capacitación',
      equipment: 'Equipo 3',
      quantity: 15,
      initializedAt: new Date().toLocaleString(),
      endedAt: new Date().toLocaleString(),
      status: 'Concluida',
    },
    {
      key: 3,
      project: 'Proyecto 3',
      state: 'Del. Coyoacán - CDMX',
      hospital: 'Hospital Juárez de México',
      activity: 'Instalación',
      equipment: 'Equipo 2',
      quantity: 8,
      initializedAt: new Date().toLocaleString(),
      endedAt: new Date().toLocaleString(),
      status: 'Concluida',
    },
    {
      key: 4,
      project: 'Proyecto 1',
      state: 'Del. Cuauhtémoc - CDMX',
      hospital: 'Hospital ISSSTE',
      activity: 'Mantenimiento',
      equipment: 'Equipo 2',
      quantity: 12,
      initializedAt: new Date().toLocaleString(),
      endedAt: new Date().toLocaleString(),
      status: 'Parcialmente',
    },
  ];

  const expandedRowRender = () => {
    const columns: TableColumnsType<IExpandedExpensesRecord> = [
      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.USER,
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.BREAKFASTS,
        dataIndex: 'breakfasts',
        key: 'breakfasts',
      },
      {
        title:
          translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.BREAKFAST_COST,
        dataIndex: 'breakfastCost',
        key: 'breakfastCost',
      },
      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.FOODS,
        dataIndex: 'foods',
        key: 'foods',
      },
      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.FOOD_COST,
        dataIndex: 'foodCost',
        key: 'foodCost',
      },

      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.DINNERS,
        dataIndex: 'dinners',
        key: 'dinners',
      },
      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.DINNER_COST,
        dataIndex: 'dinnerCost',
        key: 'dinnerCost',
      },
      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.TOTAL_COST,
        dataIndex: 'totalCost',
        key: 'totalCost',
        render: (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          value: any,
          record: IExpandedExpensesRecord,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          index: number
        ) => (
          <>
            <span className="text-bold">
              $ {record.foodCost + record.breakfastCost + record.dinnerCost}
            </span>
          </>
        ),
      },
      {
        title: translationsManager.TRAVEL_SHEET.EXPANDED_ROW_RENDED.STATUS,
        key: 'status',
        render: (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          value: any,
          record: IExpandedExpensesRecord,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          index: number
        ) => (
          <>
            <Tag color={handleStatusColor(record.status)} key={record.key}>
              {record.status}
            </Tag>
          </>
        ),
      },
    ];
    const data: IExpandedExpensesRecord[] = [
      {
        key: 1,
        user: 'Pablo Cruz',
        breakfasts: 1,
        breakfastCost: 100,
        foods: 1,
        foodCost: 200,
        dinners: 1,
        dinnerCost: 100,
        status: 'Pendiente',
        validatedAt: new Date().toLocaleString(),
      },
      {
        key: 2,
        user: 'Germán Álvarez',
        breakfasts: 1,
        breakfastCost: 100,
        foods: 1,
        foodCost: 200,
        dinners: 1,
        dinnerCost: 100,
        status: 'Concluida',
        validatedAt: new Date().toLocaleString(),
      },
      {
        key: 3,
        user: 'Luis Téllez',
        breakfasts: 1,
        breakfastCost: 100,
        foods: 1,
        foodCost: 200,
        dinners: 1,
        dinnerCost: 100,
        status: 'Pendiente',
        validatedAt: new Date().toLocaleString(),
      },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  return { columns, data, handleStatusColor, expandedRowRender };
};
