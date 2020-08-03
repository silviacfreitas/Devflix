/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_DATA}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  create,
};
