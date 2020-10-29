const admins = [
  {
    username: "shiho",
    password: "1234",
  },
  {
    username: "Robin",
    password: "1234",
  },
  {
    username: "Sara",
    password: "1234",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("is_logged_in")) {
    window.location.replace("../pages/admin.html");
  }

  let button = document.getElementById("button");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    checkUser();
  });

  function checkUser() {
    let input_username = document.getElementById("username").value;
    let input_password = document.getElementById("password").value;

    for (let i = 0; i < admins.length; i++) {
      if (
        input_username == admins[i].username &&
        input_password == admins[i].password
      ) {
        localStorage.setItem("is_logged_in", "true");
        window.location.href = "admin.html" + input_username;
        return;
      }
    }
    button.classList.add("login-button");
  }
});
