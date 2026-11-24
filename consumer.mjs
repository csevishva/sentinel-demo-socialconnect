import axios from "axios";

export async function listRecords() {
  return fetch("/v1/posts");
}

export async function createRecord(name, status) {
  return axios.post("/v1/posts", { name, status });
}

export async function updateRecord(id, name) {
  return axios.patch(`/v1/posts/${id}`, { name });
}

export async function exportRecords() {
  return fetch("/v1/posts/export");
}
