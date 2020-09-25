const BASE_URL = `http://localhost:3000/api/v1`;
export const Question = {
  index() {
    return fetch(`${BASE_URL}/questions`, {
      credentials: 'include',
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  },
  create(params) {
    console.log(params);
    return fetch(`${BASE_URL}/questions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  get(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },

  destroy(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then(() => fetch(`${BASE_URL}/questions`));
  },
  update(id, params) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};

export const Answer = {
  create(question_id, params) {
    console.log(params);
    return fetch(`${BASE_URL}/questions/${question_id}/answers`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  update(question_id, id, params) {
    return fetch(`${BASE_URL}/questions/${question_id}/answers/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  get(question_id) {
    return fetch(`${BASE_URL}/questions/${question_id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },
  destroy(question_id, id) {
    return fetch(`${BASE_URL}/questions/${question_id}/answers/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then(() => fetch(`${BASE_URL}/questions/${question_id}/answers`));
  },
};

export const Comment = {
  create(question_id, answer_id, params) {
    console.log(params);
    return fetch(
      `${BASE_URL}/questions/${question_id}/answers/${answer_id}/comments`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      }
    ).then((res) => res.json());
  },
  get(question_id, answer_id) {
    return fetch(`${BASE_URL}/questions/${question_id}/answers/${answer_id}`, {
      credentials: 'include',
    }).then((res) => res.json());
  },
  update(question_id, answer_id, id, params) {
    return fetch(
      `${BASE_URL}/questions/${question_id}/answers/${answer_id}/comments/${id}`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      }
    ).then((res) => res.json());
  },
  destroy(question_id, answer_id, id) {
    return fetch(
      `${BASE_URL}/questions/${question_id}/answers/${answer_id}/comments/${id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )
      .then((res) => res.json())
      .then(() => fetch(`${BASE_URL}/questions/${question_id}/answers`));
  },
};

export default {
  Question,
  Answer,
  Comment,
};
