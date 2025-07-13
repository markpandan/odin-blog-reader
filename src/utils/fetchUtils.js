const HOST_NAME = "http://localhost:5000";

export const fetchGet = async (route, signal) => {
  return await fetch(`${HOST_NAME}/${route}`, {
    method: "GET",
    mode: "cors",
    signal,
  });
};

export const fetchPost = async (route, body) => {
  return await fetch(`${HOST_NAME}/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    mode: "cors",
  });
};

export const fetchPut = async (route, signal) => {
  return await fetch(`${HOST_NAME}/${route}`, {
    method: "PUT",
    mode: "cors",
    signal,
  });
};

export const fetchDelete = async (route, signal) => {
  return await fetch(`${HOST_NAME}/${route}`, {
    method: "DELETE",
    mode: "cors",
    signal,
  });
};
