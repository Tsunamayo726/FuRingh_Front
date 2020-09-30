window.onload=()=>{
  document.querySelector("div.login-form > form").onsubmit = (e) => {
    /*
    {
      "mailaddr": "<メールアドレス>",
      "password": "パスワード",
      "username": "<ユーザー名>",
      "shopname": "<店名>",
      "type": "[shop,user]" // 事業者or個人
    }
    // ユーザー名・店名はどちらか一方
    */
    const data = {
      mailaddr: e.target.username.value,
      password: e.target.password.value,
      type: e.target.check.value
    }
    if (data.type === "shop") {
      data["shopname"] = e.target.shopname.value
    } else {
      data["username"] = e.target.shopname.value
    }
    fetch('/api/v1/user/register', {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response)
        if (Math.floor(response.status / 100) === 2) {
          document.querySelector("div.status").innerText = "Successfly registered."
          window.location.href = "/"
        } else if (Math.floor(response.status / 100) === 4) {
          document.querySelector("div.status").innerText = "Registeration failed."
        }
      });
    return false
  }
}
