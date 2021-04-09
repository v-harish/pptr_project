const puppeteer= require ('puppeteer')


describe ('My first pptr', ()=>{
    it('launch browser', async function(){
        const browser =await puppeteer.launch({headless: false})
        
        
        const page =await browser.newPage()
        await page.goto('http://192.168.0.99:3000')
        await page.type('input[name=Id]', '1234567890123456')
        await page.waitFor(2000)
        await page.type('input[name=Name]','Harish')
        await page.waitFor (2000)
        await page .close()
        
    })

}

)