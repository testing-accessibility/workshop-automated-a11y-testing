/**
 * @jest-environment puppeteer
 **/

import 'expect-puppeteer'
import path from 'path'
import fs from 'fs'

describe('Accessibility Tree', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:1234/passes')
    })

    it('should display heading text on page', async () => {
        await expect(page).toMatch('Pick a Plan and Start Your Adventure Today!')
    })

    it('should create a snapshot file for the accessibility tree', async() => {
        const snapshot = await page.accessibility.snapshot({
            interestingOnly: true
        })

        const assetFilePath = path.join(process.cwd(), 'exercise4-puppeteer', 'a11y-tree.json')

        // console.log(snapshot)
        fs.writeFile(
            assetFilePath,
            JSON.stringify(snapshot, null, 5), 
            () => {}
        )

        fs.stat(assetFilePath, (err, stat) => {
            expect(stat.isFile()).toBe(true)
        })
    })

    it(`has the correct axTree`, async () => {
        const axTree = await page.accessibility.snapshot()
        expect(axTree).toMatchSnapshot()
    })
})