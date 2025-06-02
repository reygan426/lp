import ApiService from "./ApiService";

const PixelService = {
  getAll() {
    return ApiService.get("meta-pixel");
  },
};

export default PixelService;
