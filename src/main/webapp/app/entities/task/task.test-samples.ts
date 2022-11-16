import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 37978,
  name: 'CSS Account Up-sized',
  dueDate: dayjs('2022-11-16'),
};

export const sampleWithPartialData: ITask = {
  id: 84034,
  name: 'Kwacha Granite TCP',
  dueDate: dayjs('2022-11-16'),
};

export const sampleWithFullData: ITask = {
  id: 43548,
  name: 'Planner programming virtual',
  dueDate: dayjs('2022-11-15'),
  completed: false,
};

export const sampleWithNewData: NewTask = {
  name: 'feed calculating cross-platform',
  dueDate: dayjs('2022-11-16'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
