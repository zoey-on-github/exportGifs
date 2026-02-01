using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;

namespace exportGifs;

class Program {
    static void Main(string[] args) {
        IWebDriver driver = new FirefoxDriver();
        driver.Navigate().GoToUrl("https://discord.com/app");
        Console.WriteLine("please sign into discord, press enter when you've done so");
        while (Console.ReadKey(intercept: true).Key != ConsoleKey.Enter) {

        }
        /*
        new Actions(driver)
            .KeyDown(Keys.Alt)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.ArrowDown)
            .SendKeys(Keys.ArrowDown)
            .KeyUp(Keys.Alt)
            .KeyDown(Keys.Control)
            .KeyDown("g")
            .KeyUp(Keys.Control)
            .Perform();
*/
        //driver.Navigate().GoToUrl("https://discord.com/channels/@me");
        //system.threading.thread.sleep(2000);
        IJavaScriptExecutor javaScriptExecutor = (IJavaScriptExecutor)driver;
        var script = File.ReadAllText("test.js");
        if (driver.Url == "https://discord.com/channels/@me") {
            //javaScriptExecutor.ExecuteScript(script);
            Thread.Sleep(4000);
            //javaScriptExecutor.ExecuteScript("alert('test')");
            javaScriptExecutor.ExecuteScript(script);
        }
    }
}
