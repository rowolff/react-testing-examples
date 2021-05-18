import { Selector } from "testcafe";

const TIMEOUT = { timeout: 5000 };

fixture`Use the app`.page("http://localhost:3000");

test("Given: button clicked, Should: say 'good clicker'", async (t) => {
  const incrementButton = Selector("button").withAttribute(
    "name",
    "incrementor"
  );

  await t
    .expect(incrementButton.with({ visibilityCheck: true }).exists)
    .ok(TIMEOUT)
    .hover(incrementButton)
    .expect(incrementButton.hasAttribute("disabled"))
    .notOk(TIMEOUT)
    .click(incrementButton)
    .click(incrementButton)
    .click(incrementButton);

  const result = Selector("div").withText("Congratulations, good clicker");

  await t.expect(result.exists).ok();
});

test("Given: puzzle solved, Should: say 'correct'", async (t) => {
  const input = Selector("input").withAttribute("name", "answer");
  const submitButton = Selector("button").withAttribute("name", "submit");

  await t
    .expect(input.with({ visibilityCheck: true }).exists)
    .ok(TIMEOUT)
    .setTestSpeed(0.7)
    .hover(input)
    .expect(input.hasAttribute("disabled"))
    .notOk(TIMEOUT)
    .click(input)
    .typeText(input, "42", { replace: true })
    .pressKey("tab");

  await t
    .expect(submitButton.with({ visibilityCheck: true }).exists)
    .ok(TIMEOUT)
    .hover(submitButton)
    .expect(submitButton.hasAttribute("disabled"))
    .notOk(TIMEOUT)
    .click(submitButton);

  const result = Selector("div").withText("Congratulations, correct");

  await t.expect(result.exists).ok();
});
