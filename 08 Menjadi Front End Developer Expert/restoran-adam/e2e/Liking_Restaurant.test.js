Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.wait(10);
  I.seeElement("#restaurants");
  I.see("Tidak ada restaurant yang ditampilkan", ".restaurant-not-found");
});

// Scenario("liking one restaurant", ({ I }) => {
//   I.see("Tidak ada film untuk ditampilkan", ".restaurant-not-found");

//   I.amOnPage("/");

//   pause();
// });
