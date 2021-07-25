
const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

export const fetchAddTodo = async (action) => {
  await sleep(1000);
  return Promise.resolve({ code: 200, data: action });
}

export const fetchFinishTodo = async (action) => {
  await sleep(1000);
  return Promise.resolve({ code: 200, data: action });
}
