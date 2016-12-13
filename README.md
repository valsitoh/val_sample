## val_sample

[http://qiita.com/advent-calendar/2016/val](http://qiita.com/advent-calendar/2016/val)のサンプルコードです。

## 実行方法

### Electronのインストール

Ubuntu環境では以下の手順で[Electron](http://electron.atom.io)をインストールできます。

```
$ sudo apt-get install nodejs npm
```

npmコマンドはNode.jsのコマンド名が`node`決め打ちのため、シンボリックリンクを設定します。

```
$ cd /usr/bin
$ sudo ln -s nodejs node
```

```
$ sudo npm install electron-prebuilt -g
```

### api_testerの実行

以下のコマンドでapt_testerを実行ののち、「(アクセスキー設定)」のタブからキーを設定してください。

```
$ electron ./api_tester
```

