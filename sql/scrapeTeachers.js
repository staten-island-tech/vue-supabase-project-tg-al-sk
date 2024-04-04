import { Builder, By } from 'selenium-webdriver'

async function WebScrapingLocalTest() {
      const driver = await new Builder().forBrowser('chrome').build();
      await driver.get('https://www.siths.org/apps/staff/');
      const data = await driver.findElements(
        By.className('staff')
      );
      const processedData = []
      data.forEach(async (el) => {
        const elements = await el.findElements(By.className("user-info"))
        elements.forEach(async (el) => {
          try {
            const textDiv = el.findElement(By.className("name-position"))
            const textEl = textDiv.findElement(By.className("user-data"))

            console.log(await textEl.getText())
          } catch(e) {}

        })
      })

      return processedData;
   }

const e = await WebScrapingLocalTest()
console.log(e)