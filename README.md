# Furingのフロント

- ビルド
```
yarn build
```

- 上からビルド
```
git submodule foreach yarn build
```

- テスト用のサーバー
```
yarn global add serve
serve -s build
```
