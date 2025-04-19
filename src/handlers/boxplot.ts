import { Request, Response } from 'express';
import { numbers } from '../db/randomNumbers';

function median(arr: number[]): number {
  const m = Math.floor(arr.length / 2);
  return arr.length % 2 === 0
    ? (arr[m - 1] + arr[m]) / 2
    : arr[m];
}

function computeBoxplot(data: number[]) {
  const sorted = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);


  const lower = sorted.slice(0, mid);
  const upper = sorted.slice(
    sorted.length % 2 === 0 ? mid : mid + 1
  );

  const q1 = median(lower);
  const q3 = median(upper);
  const iqr = q3 - q1;
  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;

  const outliers = sorted.filter(n => n < lowerFence || n > upperFence);

  return { q1, q3, iqr, lowerFence, upperFence, outliers };
}

export const getBoxplot = (_req: Request, res: Response) => {
  const stats = computeBoxplot(numbers);
  res.json({ data: numbers, ...stats });
};

export const getOutliers = (_req: Request, res: Response) => {
  const { outliers } = computeBoxplot(numbers);
  res.json({ outliers });
};
