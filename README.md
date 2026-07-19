# AI-Mind Care｜四角號碼漢字挑戰 v1.5

## Project files

- `index.html` — main webpage and game
- `characters.js` — character database
- `README.md` — maintenance guide

## Add a new character

Open `characters.js`. Add a new line before the closing `];`

```javascript
{ char:"字", code:"3040", pinyin:"zì", zh:"文字、字", en:"character / word" },
```

## Field meanings

- `char`: the Chinese character
- `code`: its four-digit Four-Corner code
- `pinyin`: pronunciation with tone marks
- `zh`: Chinese meaning
- `en`: English meaning

## Important

- Keep all text inside quotation marks.
- Separate entries with commas.
- Keep `characters.js` in the same folder as `index.html`.
- Upload both `index.html` and `characters.js` to GitHub Pages.
- A new entry automatically appears in both the quiz and the character library.

## Privacy

No visitor counter, cookies, analytics, or external tracking tools are used.
