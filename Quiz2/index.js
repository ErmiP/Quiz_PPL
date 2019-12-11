const{Builder, By, Key } = require("selenium-webdriver");
var assert = require('assert');
async function login(){
    try{
        let driver = await new Builder().forBrowser("chrome").build();
        // await driver.get("http://google.com");
        // await driver.findElement(By.name("q")).sendKeys("selenium",Key.RETURN);
        await driver.get("https://demo.1crmcloud.com/login.php");
        await driver.findElement(By.name("user_name")).sendKeys("admin");
        await driver.findElement(By.name("user_password")).sendKeys("admin");
        await driver.findElement(By.id("login_button")).click();

        let getValue = await driver.findElement(By.xpath('//li')).getText();
        console.log(getValue);
        assert.equal(getValue, "Welcome Admin", "Text Fail");
    }
    catch(e){
        console.log("Test Failed")
    }
}
login();