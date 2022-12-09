import portfinder from 'portfinder'
import puppeteer from 'puppeteer';
import {app} from "../meadowlark.js";

let server = null
let port = null

beforeEach(async () => {
    port = await portfinder.getPortPromise()
    server = app.listen(port)
    console.log('Server start')
})

afterEach(() => {
    server.close()
})

test('home page links to about page', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`http://localhost:${port}`)
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id="about"]'),
    ])

    expect(page.url()).toBe(`http://localhost:${port}/about`)
    await browser.close()
    console.log('Server close')
})