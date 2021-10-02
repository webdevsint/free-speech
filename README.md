# Free-speech
Free-speech is an open-source translation API powered by Google Translate.

## Usage [POST]:
```
// using axios here for the example
// https://axios-http.com/docs/

axios({
  method: 'post',
  url: 'http://free-speech.herokuapp.com/translate',
  headers: {}, 
  data: {
    from: 'en', // translate from (language code)
    to: 'it', // translate to (language code)
    text: 'Hello World!' // text to translate
  }
});
```
## Response:
```
{
  "from":"en",
  "to":"it",
  "text":"Hello World!",
  "translation":"Ciao mondo!"
}
```

## Language Codes:
1.  Detect Language = auto  
2.  Afrikaans = af  
3.  Albanian = sq  
4.  Amharic = am
5.  Arabic = ar  
6.  Armenian = hy  
7.  Azerbaijani = az  
8.  Basque = eu  
9.  Belarusian = be  
10.  Bengali = bn  
11.  Bosnian = bs  
12.  Bulgarian = bg  
13.  Catalan = ca  
14.  Cebuano = ceb  
15.  Chichewa = ny  
16.  Chinese = zh-CN  
17.  Corsican = co  
18.  Croatian = hr  
19.  Czech = cs  
20.  Danish = da  
21.  Dutch = nl  
22.  English = en   
23.  Esperanto = eo  
24.  Estonian = et  
25.  Filipino = tl  
26.  Finnish = fi  
27.  French = fr  
28.  Frisian = fy  
29.  Galician = gl  
30.  Georgian = kl  
31.  German = de  
32.  Greek = el  
33.  Gujarati = gu  
34.  Haitian Creole = ht  
35.  Hausa = ha  
36.  Hawaiian = haw  
37.  Hebrew = iw  
38.  Hindi = hi  
39.  Hmong = hmn  
40.  Hungarian = hu  
41.  Icelandic = is  
42.  Igbo = ig  
43.  Indonesian = id  
44.  Irish = ga  
45.  Italian = it  
46.  Japanese = ja  
47.  Javanese = jw  
48.  Kannada = kn  
49.  Kazakh = kk  
50.  Khmer = km  
51.  Kinyarwanda = rw  
52.  Korean = ko  
53.  Kurdish (Kurmanji) = ku  
54.  Kyrgyz = ky  
55.  Lao = lo  
56.  Latin = la  
57.  Latvian = lv  
58.  Lithuanian = lt  
59.  Luxembourgish = lb  
60.  Macedonian = mk  
61.  Malagasy = mg  
62.  Malay = ms  
63.  Malayalam = ml  
64.  Maltese = mt  
65.  Maori = mi  
66.  Marathi = mr  
67.  Mongolian = mn  
68.  Myanmar (Burmese) = my  
69.  Nepali = ne  
70.  Norwegian = no  
71.  Odia (Oriya) = or  
72.  Pashto = ps  
73.  Persian = fa  
74.  Polish = pl  
75.  Portuguese = pt  
76.  Punjabi = pa  
77.  Romanian = ro  
78.  Russian = ru  
79.  Samoan = sm  
80.  Scots Gaelic = gd  
81.  Serbian = sr  
82.  Sesotho = st   
83.  Shona = sn  
84.  Sindhi = sd  
85.  Sinhala = si  
86.  Slovak = sk  
87.  Slovenian = sl  
88.  Somali = so  
89.  Spanish = es  
90.  Sundanese = su  
91.  Swahili = sw  
92.  Swedish = sv  
93.  Tajik = tg  
94.  Tamil = ta  
95.  Tatar = tt  
96.  Telugu = te  
97.  Thai = th  
98.  Turkish = tr  
99.  Turkmen = tk  
100.  Ukrainian = uk  
101.  Urdu = ur  
102.  Uyghur = ug  
103.  Uzbek = uz  
104.  Vietnamese = vi  
105.  Welsh = cy  
106.  Xhosa = xh  
107.  Yiddish = yi  
108.  Yoruba = yo  
109.  Zulu = zu  
> **Version 1.0 APLHA**
> Powered by [Google Translate](https://translate.google.com).
