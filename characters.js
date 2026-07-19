/*
  AI-Mind Care｜Four-Corner Character Database v1.6

  LEVEL RULE
  ----------
  level:"basic"    -> appears in Basic (5 Questions)
  level:"advanced" -> appears in Advanced (10 Questions)

  AUTO-ADVANCED
  -------------
  If a new entry has no level field, the program automatically treats it
  as Advanced. Therefore, the shortest way to add a new advanced word is:

  { char:"字", code:"3040", pinyin:"zì", zh:"文字、字", en:"character / word" },

  To add a new Basic word, include:
  level:"basic"

  Keep characters.js in the same folder as index.html.
*/

const characters = [
  { char:"一", code:"1000", pinyin:"yī", zh:"一", en:"one", level:"basic" },
  { char:"二", code:"1010", pinyin:"èr", zh:"二", en:"two", level:"basic" },
  { char:"三", code:"1010", pinyin:"sān", zh:"三", en:"three", level:"basic" },
  { char:"王", code:"1010", pinyin:"wáng", zh:"王、君王", en:"king", level:"basic" },
  { char:"天", code:"1043", pinyin:"tiān", zh:"天空、天", en:"sky / heaven", level:"basic" },
  { char:"石", code:"1060", pinyin:"shí", zh:"石頭", en:"stone", level:"advanced" },
  { char:"水", code:"1223", pinyin:"shuǐ", zh:"水", en:"water", level:"basic" },
  { char:"主", code:"0010", pinyin:"zhǔ", zh:"主要、主人", en:"main / master", level:"basic" },
  { char:"立", code:"0010", pinyin:"lì", zh:"站立", en:"stand", level:"basic" },
  { char:"文", code:"0040", pinyin:"wén", zh:"文字、文化", en:"writing / culture", level:"basic" },
  { char:"心", code:"3300", pinyin:"xīn", zh:"心、心靈", en:"heart / mind", level:"basic" },
  { char:"家", code:"3023", pinyin:"jiā", zh:"家、家庭", en:"home / family", level:"basic" },
  { char:"安", code:"3040", pinyin:"ān", zh:"平安、安全", en:"peace / safe", level:"basic" },
  { char:"十", code:"4000", pinyin:"shí", zh:"十", en:"ten", level:"basic" },
  { char:"大", code:"4003", pinyin:"dà", zh:"大", en:"big", level:"basic" },
  { char:"太", code:"4003", pinyin:"tài", zh:"太、非常", en:"too / very", level:"advanced" },
  { char:"土", code:"4010", pinyin:"tǔ", zh:"土地", en:"earth / soil", level:"basic" },
  { char:"女", code:"4040", pinyin:"nǚ", zh:"女性、女", en:"woman / female", level:"basic" },
  { char:"本", code:"4040", pinyin:"běn", zh:"根本、本來", en:"root / origin", level:"advanced" },
  { char:"木", code:"4090", pinyin:"mù", zh:"木、樹木", en:"wood / tree", level:"basic" },
  { char:"中", code:"5000", pinyin:"zhōng", zh:"中間、中國的中", en:"middle / center", level:"basic" },
  { char:"申", code:"5000", pinyin:"shēn", zh:"申明、表達", en:"state / extend", level:"advanced" },
  { char:"車", code:"5000", pinyin:"chē", zh:"車輛", en:"vehicle", level:"advanced" },
  { char:"夫", code:"5003", pinyin:"fū", zh:"丈夫、男子", en:"man / husband", level:"advanced" },
  { char:"央", code:"5003", pinyin:"yāng", zh:"中央", en:"center", level:"advanced" },
  { char:"口", code:"6000", pinyin:"kǒu", zh:"口、嘴巴", en:"mouth", level:"basic" },
  { char:"日", code:"6010", pinyin:"rì", zh:"太陽、日子", en:"sun / day", level:"basic" },
  { char:"目", code:"6010", pinyin:"mù", zh:"眼睛、目", en:"eye", level:"basic" },
  { char:"國", code:"6015", pinyin:"guó", zh:"國家", en:"country", level:"advanced" },
  { char:"四", code:"6021", pinyin:"sì", zh:"四", en:"four", level:"basic" },
  { char:"田", code:"6040", pinyin:"tián", zh:"田地", en:"field", level:"advanced" },
  { char:"人", code:"8000", pinyin:"rén", zh:"人", en:"person", level:"basic" },
  { char:"入", code:"8000", pinyin:"rù", zh:"進入", en:"enter", level:"basic" },
  { char:"八", code:"8000", pinyin:"bā", zh:"八", en:"eight", level:"basic" },
  { char:"金", code:"8010", pinyin:"jīn", zh:"金、金屬", en:"gold / metal", level:"advanced" },
  { char:"全", code:"8010", pinyin:"quán", zh:"全部、完整", en:"whole / complete", level:"advanced" },
  { char:"今", code:"8020", pinyin:"jīn", zh:"今天、現在", en:"today / now", level:"advanced" },
  { char:"小", code:"9000", pinyin:"xiǎo", zh:"小", en:"small", level:"basic" },
  { char:"少", code:"9020", pinyin:"shǎo", zh:"少、年少", en:"few / young", level:"advanced" },
  { char:"光", code:"9021", pinyin:"guāng", zh:"光、光明", en:"light", level:"advanced" },
  { char:"半", code:"9050", pinyin:"bàn", zh:"一半", en:"half", level:"advanced" },
  { char:"火", code:"9080", pinyin:"huǒ", zh:"火", en:"fire", level:"basic" },
  { char:"米", code:"9090", pinyin:"mǐ", zh:"米、稻米", en:"rice", level:"advanced" },
  { char:"愛", code:"2024", pinyin:"ài", zh:"愛、喜愛", en:"love / like", level:"advanced" },
  { char:"華", code:"4450", pinyin:"huá", zh:"中華、華美", en:"Chinese / splendid", level:"advanced" },
  { char:"字", code:"3040", pinyin:"zì", zh:"文字、字", en:"character / word", level:"advanced" },
  { char:"生", code:"2510", pinyin:"shēng", zh:"生命、出生", en:"life / birth", level:"advanced" },
  { char:"語", code:"0166", pinyin:"yǔ", zh:"語言、話語", en:"language / words", level:"advanced" },
  { char:"友", code:"4004", pinyin:"yǒu", zh:"朋友、友善", en:"friend / friendly", level:"advanced" },
  { char:"朋", code:"7722", pinyin:"péng", zh:"朋友、同伴", en:"friend / companion", level:"advanced" },
  { char:"福", code:"3126", pinyin:"fú", zh:"幸福、福氣", en:"blessing / good fortune", level:"advanced" },
  { char:"智", code:"8660", pinyin:"zhì", zh:"智慧、知識", en:"wisdom / intelligence", level:"advanced" },
  { char:"慧", code:"5533", pinyin:"huì", zh:"聰慧、智慧", en:"wisdom / intelligence", level:"advanced" }
];
