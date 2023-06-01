import React from 'react';
import { IGenericAttributes } from '../../../shared/domain';

export interface TravelSheet extends IGenericAttributes {
  key: React.Key;
  project: string;
  state: string;
  hospital: string;
  activity: string;
  equipment: string;
  quantity: number | undefined;
  initializedAt: Date | string;
  endedAt: Date | string;
  // TODO: Add this field into the STRAPI side
  status: string;
}
