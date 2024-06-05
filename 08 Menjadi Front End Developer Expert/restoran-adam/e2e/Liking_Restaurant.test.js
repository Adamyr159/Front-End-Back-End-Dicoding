Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.wait(10);
  I.seeElement("#restaurants");
  I.see("Tidak ada restaurant yang ditampilkan", ".restaurant-item__not__found");
});

Scenario("liking one restaurant", ({ I }) => {
  I.see("Tidak ada restaurant yang ditampilkan", ".restaurant-item__not__found");

  I.amOnPage("/");

  pause();
});
