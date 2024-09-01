import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" }
  ]);
  

  const onSubmit = (e) => {
   e.preventDefault()
  

if (username.length > 20 || password.length > 20){
alert('Kullancı adı ve parolanız 20 karakterı geçmemeli')
}

const existingAccount = accounts.find(
  (account) => account.username === username && account.password === password
)

if(existingAccount){
alert(`login başarli,selam ${username}!`)
resetForm()
return
}

if(username.length >= 6 && password.length >= 6){
  setAccounts([...accounts,{username,password}])
  alert(`yeni hesap oluşturuldu,merhaba ${username}!`)
  resetForm()
}else{
  alert('Kullanıcı adı ve parolanız en az 6 karakter olmalı')
}

  }

 const resetForm =() =>{
  setUsername('')
  setPassword('')
 }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10
      }}
      onSubmit={onSubmit}
    >
      <h3 className="text-xl font-bold">Login</h3>
      <input
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 5 }}
        placeholder="Kullanıcı Adı"
        maxLength={20}
       className="m-2 border-2 border-black rounded"
      />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="parola"
        maxLength={20}
        className="m-2 border-2 border-black rounded"
      />
      <button type="submit"
      className="text-center text-lg border p-2 bg-slate-200 rounded-lg"
      >
      
        Submit
      </button>
    </form>
  );
};

export default App;
