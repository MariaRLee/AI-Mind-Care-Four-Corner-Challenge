# V2.0 Data Sources and Curation Notes

## Character scope

The V2.0 set was curated from the Taiwan Ministry of Education's **4,808 commonly used standard Chinese characters**.

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

The working snapshot used to assemble this build was cross-matched programmatically against Unihan property data. The V1.6 characters and their codes were preserved and verified during migration.

## Familiarity ranking

A Traditional Chinese character-frequency reference was used only as a ranking aid when selecting familiar characters from the MOE common-character range:

- Traditional Chinese Characters Sorted by Frequency  
  https://gist.github.com/nate9/4c0253148f57c833ec18136688f22336

This frequency source is not an official curriculum standard. It was used to prioritize familiar characters, while the MOE list determined the eligible Traditional Chinese character range.

## Level composition

- Entry tag: 27 characters
- Basic tag: 173 characters
- Advanced tag: 500 characters
- Total: 700 unique characters

The Basic pool is cumulative and contains:

- 27 Entry characters
- 173 Basic-tagged additions
- Total Basic pool: 200 characters

## Limitations

- A character may have more than one valid pronunciation or meaning.
- English text is a brief character gloss, not a complete word definition.
- Different characters may share the same Four-Corner code.
- Four-Corner dictionaries may also use an optional fifth digit to distinguish characters sharing the same four-digit code.
- Future additions should be checked for code accuracy, Traditional Chinese form, duplication, and learner suitability.
