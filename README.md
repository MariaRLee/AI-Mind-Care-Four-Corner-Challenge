# AI-Mind Care｜四角號碼漢字挑戰 V2.2


## V2.2 IP Protection Edition

V2.2 **only adds the intellectual-property announcement and related copyright documentation**. The existing design, game functions, character database, language switching, mobile layout, history content, and learning flow remain unchanged.

- Added a concise bilingual IP announcement in the existing footer.
- Added copyright and rights metadata in `index.html`.
- Added `COPYRIGHT-AND-USE.md` with the complete bilingual terms.
- Updated the visible version label from V2.1 to V2.2.

## V2.1 additions

- Added a bilingual **歷史 / History** button beside the version number.
- Added a bilingual modal explaining:
  - Wang Yun-wu and the origins of the method
  - the 1925 introduction and 1926 publication
  - the four-corner order
  - the traditional mnemonic
  - examples and important coding rules
  - the learning value of the system today
- Added `bopomofo` to all 700 character records.
- Chinese mode displays 注音 first and pinyin below it.
- English mode displays pinyin as the main pronunciation.
- Character-library search supports 注音.
- Future entries can omit `bopomofo`; the webpage automatically generates it from tone-marked pinyin.
- Corrected the standalone pronunciation of 子 to `zǐ / ㄗˇ`.
- Removed a duplicated “3” item from the 0–9 shape guide.

## Database levels

| Level | Character pool | Quiz |
|---|---:|---:|
| 入門 Entry | 27 characters | 5 questions |
| 基礎 Basic | 200 characters, including Entry | 10 questions |
| 進階 Advanced | 500 characters | 20 questions |

Total: **700 unique characters**

## Files required for GitHub Pages

Keep these files in the repository root:

- `index.html`
- `characters.js`
- `README.md`
- `DATA_SOURCES.md`
- `HISTORY.md`
- `COPYRIGHT-AND-USE.md`

## Adding a new character

### Simplest Advanced entry

```javascript
{ char:"新", code:"0290", pinyin:"xīn", en:"new; fresh" },
```

The webpage will:

- treat an unrecognized or missing level as Advanced
- generate `ㄒㄧㄣˉ` automatically from `xīn`

### Entry with an explicit Bopomofo value

```javascript
{
  char:"新",
  code:"0290",
  pinyin:"xīn",
  bopomofo:"ㄒㄧㄣˉ",
  zh:"新的",
  en:"new; fresh",
  level:"basic"
},
```

Use tone-marked pinyin for reliable automatic conversion.

## Pronunciation note

Some characters have several readings. V2.1 shows the selected principal reading for the learning item. Pinyin, Bopomofo, Chinese explanation, and English gloss should describe the same intended reading.

## Privacy

No visitor counter, cookies, analytics, or external tracking tools are used.
