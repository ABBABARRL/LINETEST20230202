const express = require('express')// expressを準備
const app = express()
const port = 3000

// express に ejs のテンプレートエンジンを設定
app.set("view engine", "ejs");

// express に ejs のテンプレートエンジンを設定した場合
// /views フォルダが index.ejs のデフォルトになります

app.get("/", function (req, res) {
  res.render("view/index"); // これで /views/index.ejs をレンダリング
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})