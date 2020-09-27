window.onload=()=>{
  document.querySelector("div.form > form").onsubmit = (e) => {
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    console.log(data)
    fetch('/api/v1/user/register', {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.querySelector("div.status").innerText = "OK"
      });
    return false
  }
}
