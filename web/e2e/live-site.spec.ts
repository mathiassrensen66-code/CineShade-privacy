import { expect, test } from '@playwright/test'

test('cineshade.app loads single-file preview', async ({ page }) => {
  await page.goto('https://cineshade.app/', { waitUntil: 'domcontentloaded' })

  await expect(page.getByText('Dim the picture', { exact: false })).toBeVisible({ timeout: 30000 })
  await expect(page.getByText('Loading preview')).toHaveCount(0)

  const loading = page.locator('.screen__loading')
  await expect(loading).toHaveCount(0)

  const preview = page.locator('.screen__photo').first()
  await expect(preview).toBeVisible()
  const naturalWidth = await preview.evaluate((img: HTMLImageElement) => img.naturalWidth)
  expect(naturalWidth).toBeGreaterThan(0)
})
