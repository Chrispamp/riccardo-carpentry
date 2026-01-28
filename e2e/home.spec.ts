import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Riccardo Carpentry/);

    // Check text - adjusting selector to be more robust if needed, but text check is good
    const heading = page.getByRole('heading', { level: 1, name: 'Riccardo Carpentry' }).first();
    // If not an h1, fallback to text
    if (await heading.count() === 0) {
        await expect(page.getByText('Riccardo Carpentry').first()).toBeVisible();
    } else {
        await expect(heading).toBeVisible();
    }

    // Check navigation
    await expect(page.locator('a[href="/products"]').first()).toBeVisible();
    await expect(page.locator('a[href="/gallery"]').first()).toBeVisible();
    await expect(page.locator('a[href="/about"]').first()).toBeVisible();

    // Navigation test to Products
    await page.locator('a[href="/products"]').first().click();
    await expect(page).toHaveURL(/.*products/);
});
