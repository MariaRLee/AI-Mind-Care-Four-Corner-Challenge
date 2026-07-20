# AI-Mind Care｜四角號碼漢字挑戰 V2.0

## V2.0 learning levels

The database contains **700 unique Chinese characters**.

| Level | Character pool | Quiz |
|---|---:|---:|
| 入門 Entry | 27 characters | 5 questions |
| 基礎 Basic | 200 characters, including all 27 Entry characters | 10 questions |
| 進階 Advanced | 500 characters | 20 questions |

To keep the total at exactly 700, the source tags in `characters.js` are:

- `entry`: 27
- `basic`: 173 additional characters
- `advanced`: 500

The Basic learning pool is cumulative:

`27 Entry + 173 Basic additions = 200 Basic characters`

The 26 characters previously classified as Advanced in V1.6 are included in the V2.0 Basic collection.

## Main V2.0 improvements

- Three levels: Entry, Basic, and Advanced
- 700-character database
- Search by:
  - Chinese character
  - pinyin
  - English meaning
  - Four-Corner code
- Library filters: All, Entry, Basic 200, Advanced
- Only 24 character cards are displayed per page
- Previous/Next pagination
- Dynamic database counts
- PC: full tutorial remains visible; no unnecessary Quick Guide button
- Mobile: game appears first; tutorial is collapsed by default
- Mobile Quick Guide opens the tutorial when needed
- Check button becomes Next after answering
- No separate low-position Next button
- No visitor counter, cookies, analytics, or external tracking

## Files required for GitHub Pages

Keep these files together in the repository root:

- `index.html`
- `characters.js`
- `README.md`
- `DATA_SOURCES.md`

Do not upload only `index.html`, because it loads the character database from `characters.js`.

## Adding characters in the future

Only edit `characters.js`. You do not need to edit `index.html`.

### Add an Entry character

```javascript
{ char:"新", code:"0290", pinyin:"xīn", zh:"新的", en:"new; fresh", level:"entry" },
```

An Entry character is also automatically included in the cumulative Basic pool.

### Add a Basic character

```javascript
{ char:"新", code:"0290", pinyin:"xīn", zh:"新的", en:"new; fresh", level:"basic" },
```

### Add an Advanced character

You may specify the level:

```javascript
{ char:"新", code:"0290", pinyin:"xīn", zh:"新的", en:"new; fresh", level:"advanced" },
```

Or omit the level. Any entry without a recognized level is automatically treated as Advanced:

```javascript
{ char:"新", code:"0290", pinyin:"xīn", en:"new; fresh" },
```

The webpage automatically updates:

- database totals
- level totals
- quiz pools
- search results
- library pages

## Field guide

| Field | Purpose | Required |
|---|---|---|
| `char` | Traditional Chinese character | Yes |
| `code` | Four-digit Four-Corner code | Yes |
| `pinyin` | Mandarin pronunciation | Yes |
| `zh` | Short Chinese explanation | Optional |
| `en` | Short English gloss | Yes |
| `level` | `entry`, `basic`, or `advanced` | Optional; defaults to Advanced |

## Important data note

The pinyin and English glosses are short learning references for individual characters. Some Chinese characters have multiple pronunciations and meanings depending on the word or context. This program is not intended to replace a full dictionary.

## GitHub Pages update

1. Replace the old files with the V2.0 files.
2. Keep `index.html` and `characters.js` in the same folder.
3. Commit the changes.
4. Wait briefly for GitHub Pages to redeploy.
