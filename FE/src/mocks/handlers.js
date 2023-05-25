import { rest } from 'msw';

import labelData from './labelData.json';
import milestoneData from './milestoneData.json';
import issueData from './mockIssueData.json';
import userData from './userData.json';

export const handlers = [
  rest.get('/issueList', (req, res, ctx) => {
    const status = req.url.searchParams.get('status');
    return res(ctx.status(200), ctx.json(issueData));
  }),

  rest.get('/label', (req, res, ctx) => {
    const status = req.url.searchParams.get('status');
    return res(ctx.status(200), ctx.json(labelData));
  }),

  rest.get('/milestone', (req, res, ctx) => {
    const status = req.url.searchParams.get('status');
    return res(ctx.status(200), ctx.json(milestoneData));
  }),

  rest.get('/user', (req, res, ctx) => {
    const status = req.url.searchParams.get('status');
    return res(ctx.status(200), ctx.json(userData));
  })
];
