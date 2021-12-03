import { firefox } from "playwright";

export async function watch(url) {
  const profileDirPath = `${process.env.APPDATA}/watchyt/profiles/firefox`;
  const ctx = await firefox.launchPersistentContext(profileDirPath, {
    headless: false,
  });

  const page = ctx.pages()[0];
  await page.goto(url);
  await page.waitForNavigation({ timeout: 0 });
  await ctx.close();
}

export async function setup() {
  const profileDirPath = `${process.env.APPDATA}/watchyt/profiles/firefox`;
  const ctx = await firefox.launchPersistentContext(profileDirPath, {
    headless: false,
  });
  const page = ctx.pages()[0];

  const googleLoginUrl =
    "https://accounts.google.com/ServiceLogin?hl=pl&passive=true&continue=https://www.google.pl/&ec=GAZAmgQ";

  await page.goto(googleLoginUrl, { timeout: 0 });
  page.on("close", async (page) => {
    await ctx.close();
  });
}
