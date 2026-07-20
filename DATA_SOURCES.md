# V2.1 Data Sources and Curation Notes

## Character scope

The 700-character set was curated from the Taiwan Ministry of Education's 4,808 commonly used standard Chinese characters.

Official source:

- Taiwan Ministry of Education, 常用字下載  
  https://language.moe.gov.tw/material/info?m=9fe3ff5a-5a8c-4817-9e60-6337dd55a509

## Four-Corner codes, readings, and glosses

The database uses Unicode Unihan properties as reference data:

- `kFourCornerCode` — Four-Corner code
- `kMandarin` — Mandarin reading
- `kDefinition` — brief English gloss

Unicode documentation:

- Unicode Standard Annex #38: Unicode Han Database (Unihan)  
  https://www.unicode.org/reports/tr38/

- Official current Unihan data package  
  https://www.unicode.org/Public/zipped/latest/Unihan.zip

## Bopomofo

V2.1 adds a `bopomofo` field to all 700 records. Bopomofo is transcribed from the selected tone-marked Mandarin pinyin reading using standard initial/final and tone correspondences.

For future entries, the webpage can generate Bopomofo automatically when:

- `pinyin` contains a valid Mandarin syllable
- tone marks or tone numbers are included

Some characters have multiple valid readings. The program shows the selected learning reading rather than attempting to represent every possible pronunciation.

## Four-Corner history

The bilingual history dialog is based on the project history document supplied for V2.1. It summarizes Wang Yun-wu's development of the system, the 1925 and 1926 milestones, the coding order, traditional mnemonic, examples, and key rules. The project notes cite Taiwan's Ministry of Education Dictionary of Chinese Character Variants.

## Limitations

- A character may have more than one pronunciation or meaning.
- English text is a brief character gloss, not a complete word definition.
- Different characters may share the same Four-Corner code.
- Some dictionaries use an optional fifth digit.
- Future additions should be checked for code accuracy, Traditional Chinese form, pronunciation, duplication, and learner suitability.
