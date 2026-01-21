import { expect, test } from '@jupyterlab/galata';

test('should emit an activation console message', async ({ page }) => {
  const logs: string[] = [];

  page.on('console', message => {
    logs.push(message.text());
  });

  await page.goto();

  expect(
    logs.filter(
      s => s === 'JupyterLite extension terminal-extension-command is activated'
    )
  ).toHaveLength(1);
});
