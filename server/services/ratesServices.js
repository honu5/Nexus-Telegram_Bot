const axios = require('axios');

class RateService {
  static async convert(amount, from, to) {
    try {
      const res = await axios.get("https://api.frankfurter.app/latest", {
        params: { amount, from, to }
      });

      if (!res.data || !res.data.rates[to]) {
        throw new Error("Invalid API response");
      }

      return res.data.rates[to];
    } catch (error) {
      console.error("RateService error:", error.message);
      throw new Error("Failed to fetch conversion rate");
    }
  }
}

module.exports = RateService;
