import ApiService from "./ApiService";

const ChatService = {
  getAll() {
    return ApiService.get("chat");
  },
};

export default ChatService;
