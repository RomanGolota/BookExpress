import puppeteer from 'puppeteer';

test('home page links to about page', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`http://localhost:3000/`)
    await page.waitForSelector('.about')
    await page.click('.about')

    expect(page.url()).toBe(`http://localhost:3000/about`)
    await browser.close()
    console.log('Server close')
})

test('about page links to home page', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`http://localhost:3000/about`)
    await page.waitForSelector('.home')
    await page.click('.home')

    expect(page.url()).toBe(`http://localhost:3000/`)
    await browser.close()
    console.log('Server close')
})