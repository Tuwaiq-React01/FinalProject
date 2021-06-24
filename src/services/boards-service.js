import axios from "axios";

const API_URL = "/boards";

const getBoards = () => {
  return axios.get(API_URL);
};

const getBoardById = (boardId) => {
  return axios.get(`${API_URL}/${boardId}`);
};

const addBoard = (body) => {
  return axios.post(API_URL, body);
};

const updateBoard = (boardId, body) => {
  return axios.put(`${API_URL}/${boardId}`, body);
};

const deleteBoard = (boardId) => {
  return axios.delete(`${API_URL}/${boardId}`);
};

const BoardsService = {
  getBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};

export default BoardsService;
