# ENforcer
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/gokmeebphmjdlgknompgaghdlemiohll.svg)](https://chromewebstore.google.com/detail/enforcer/gokmeebphmjdlgknompgaghdlemiohll)  
**ENforcer is not a translator.** It's a focused tool to make websites behave as if your browser were set to English.  
**ENforcer は翻訳ツールではありません。**「英語設定のブラウザからアクセスした」かのようにサイトに振る舞わせるシンプルな拡張機能です。

It temporarily overrides `navigator.language` and `Accept-Language` on a per-tab basis.  
Ideal for developers working in non-English environments who need to test how multilingual sites behave for English-speaking users.  
ブラウザの言語設定（`navigator.language` と `Accept-Language`）をタブ単位で一時的に英語に切り替えられます。  
非英語圏の開発者が、英語ユーザー向けの挙動やリダイレクト、UI切り替えを検証するのに最適です。

---

## 🧩 How It Works | 使い方

Click to toggle English mode.  
The setting persists across reloads and navigation.  
A visible "EN" badge shows it's active.  
クリック一つで英語モードに。リロードやページ遷移後も状態は保持され、バッジに「EN」が表示されます。

---

## 🔧 Features | 主な機能

- Override `navigator.language` to `"en-US"`  
  `navigator.language` を `"en-US"` に上書き  
- Modify `Accept-Language` to `"en-US,en;q=0.9"`  
  `Accept-Language` を `"en-US,en;q=0.9"` に変更  
- Tab-specific activation  
  タブごとに英語モードを切り替え  
- Persists across reloads  
  リロード・ページ遷移後も持続  
- No data collection or tracking  
  データ収集・追跡なし  

---

## ⚠️ Permissions

This extension requires `<all_urls>` to simulate English browser settings across any website.  
It does not collect any user data and is intended purely for internationalization testing purposes by developers.  
この拡張は、あらゆるサイト上で英語ブラウザ環境を再現するため、`<all_urls>` のパーミッションが必要です。  
ユーザーデータの収集は一切行っておらず、**国際化対応の検証を目的とした開発者向けツール**です。

---

## 🛠️ Installation | インストール方法

Available now on the [Chrome Web Store](https://chromewebstore.google.com/detail/enforcer/gokmeebphmjdlgknompgaghdlemiohll)  
現在は [Chrome ウェブストア](https://chromewebstore.google.com/detail/enforcer/gokmeebphmjdlgknompgaghdlemiohll) で公開中です。

またはローカルから読み込むには：

1. このリポジトリをクローンまたはZIPでダウンロード  
2. Chromeで `chrome://extensions` を開く  
3. 「デベロッパーモード」をオンにして「パッケージ化されていない拡張機能を読み込む」からフォルダを選択

---

## 📃 License

[MIT License](LICENSE)
