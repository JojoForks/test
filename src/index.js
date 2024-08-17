window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "8067511ba5bb4d29b858e21fba85e4b5",
        response_type: "token",
        redirect_uri: "https://test-i5uk5sfgk-justethans-projects.vercel.app/token.html",
      },
      "https://test-i5uk5sfgk-justethans-projects.vercel.app",
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
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};
