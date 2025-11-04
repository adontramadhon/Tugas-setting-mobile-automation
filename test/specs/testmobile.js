describe("Google on Android", () => {
  it("should open Google homepage", async () => {
    await browser.url("https://www.google.com");
    await browser.pause(5000);
  });
});
