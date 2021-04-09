const puppeteer= require ('puppeteer')


describe ('My first pptr', ()=>{
    it('launch browser', async function(){
        const browser =await puppeteer.launch({headless: false})
        
        
        const page =await browser.newPage()
        await page.goto('http://192.168.0.99:3000')
        await page.type('input[name=Id]', '1234567890123456')
        await page.waitFor(1000)
        await page.type('input[name=Name]','Harish')
        await page.waitFor (1000)
        await page.type('input[name=Location]','Master')
        await page.waitFor (1000)
        await page.type('input[name=Postalcode]','10/23')
        await page.waitFor (1000)
        await page.type('input[name=Expdate]','622')
        await page.waitFor (1000)
        await page.type('input[name=Salary]','M4S2H4')
        await page.waitFor (1000)
        await page.click('button',{clickCount:1})
        await page.waitFor (1000)
        await page .close()
        
    })

}

)