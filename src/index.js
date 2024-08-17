const fetchYandexData = (token) => fetch(`https://login.yandex.ru/info?format=json&oauth_token=${token}`).then((res) => res.json());
const authorize = ({display_name: displayName}) => {
  document.getElementsById("loginned").innerHTML = `<div>Вы вошли как: ${displayName}</div>`;
}
window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "8067511ba5bb4d29b858e21fba85e4b5",
        response_type: "token",
        redirect_uri: "https://test-seven-gamma-42.vercel.app/token.html",
      },
      "https://test-seven-gamma-42.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
  };
};
