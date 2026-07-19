# AI-Mind Care｜四角號碼漢字挑戰 v1.6

## Main improvements

- PC no longer shows the extra Quick Guide button.
- Mobile still provides Quick Guide.
- The Check button changes into Next after an answer, so users do not need to scroll.
- The correct answer code appears only once.
- Two quiz levels:
  - Basic: 5 questions
  - Advanced: 10 questions
- The character library is grouped into Basic and Advanced.
- Ten new Advanced characters were added:
  愛、華、字、生、語、友、朋、福、智、慧

## Add a new Advanced character automatically

Open `characters.js` and add a line without a `level` field:

```javascript
{ char:"新", code:"0000", pinyin:"xīn", zh:"新的", en:"new" },
```

Any entry without `level:"basic"` is automatically placed in Advanced.

Replace `0000` with the verified Four-Corner code.

## Add a new Basic character

```javascript
{ char:"新", code:"0000", pinyin:"xīn", zh:"新的", en:"new", level:"basic" },
```

## Files required for GitHub Pages

Keep these files together in the repository root:

- `index.html`
- `characters.js`
- `README.md`

## Privacy

No visitor counter, cookies, analytics, or external tracking tools are used.
