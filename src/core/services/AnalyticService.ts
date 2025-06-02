import ApiService from "./ApiService";

const AnalyticService = {
  getAll() {
    return ApiService.get("google-analytics");
  },
};

export default AnalyticService;
