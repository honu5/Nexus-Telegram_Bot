const RateService = require('./services/ratesServices.js');

(async () => {
  const result = await RateService.convert(100, "USD", "EUR");
  console.log("100 USD in EUR =", result);
})();
