window.onload=()=>{
  document.querySelector("div.form > form").onsubmit = (e) => {
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    fetch('/api/v1/user/login', {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log("Successfly logined, redirecting ... ")
        console.log(response)
        document.querySelector("div.status").innerText = "OK..."
        window.location.pathname = "/"
      });
    return false
  }
}
