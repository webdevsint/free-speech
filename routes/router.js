const express = require("express");
const router = express.Router();

const puppeteer = require("puppeteer");
require("dotenv").config();

router.get("/", (req, res) => {
  res.sendStatus(404);
});

router.get("/translate", (req, res) => {
  res.render("translate");
});

router.post("/translate", async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  const sl = req.body.from;
  const tl = req.body.to;
  const text = req.body.text;

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
  );

  // environment variables have been used to prevent exploitation
  await page.goto(
    `${process.env.BASE_URL}?sl=${sl}&tl=${tl}&text=${text}&op=translate`
  );

  await page.waitForSelector(process.env.SECRET_DI0);
  const translation = await page.$eval(
    process.env.SECRET_SPA1,
    (el) => el.innerText
  );

  res.json({ from: sl, to: tl, text, translation });

  await browser.close();
});

module.exports = router;
