var facesN = [ 
[59,4,177,60],
[27,167,166,0,1,2,3,28],
[4,59,58,9,5,6,7,8],
[5,15,183,6],
[9,10,11,12,13,14,15,5],
[11,97,16,12],
[12,16,17,18,24,19,20,13],
[17,116,115,18],
[13,20,184,14],
[18,115,21,25,31,22,23,24],
[21,114,26,25],
[22,31,30,187],
[19,24,23,185],
[25,26,138,27,28,29,30,31],
[62,169,82,63],
[32,33,34,35,66,36,39,37],
[34,168,61,35],
[37,39,38,173],
[38,39,36,40,72,41,42,43],
[42,44,174,43],
[44,42,41,73,45,49,46,47],
[45,76,50,49],
[48,46,49,50,51,52,55,53],
[46,48,175,47],
[51,81,56,52],
[53,55,54,176],
[54,55,52,56,57,58,59,60],
[98,83,170,99],
[35,61,62,63,64,67,65,66],
[40,36,66,65],
[64,84,68,67],
[71,73,41,72],
[40,65,67,68,69,70,71,72],
[69,87,74,70],
[73,71,70,74,75,77,76,45],
[75,90,78,77],
[50,76,77,78,79,80,81,51],
[79,93,94,80],
[9,58,57,10],
[56,81,80,94,97,11,10,57],
[63,82,83,98,102,85,84,64],
[68,84,85,103,86,88,87,69],
[86,106,107,88],
[74,87,88,107,111,89,90,75],
[78,90,89,91,92,95,93,79],
[92,112,96,95],
[94,93,95,96,116,17,16,97],
[117,100,171,118],
[101,103,85,102],
[98,99,100,117,121,104,101,102],
[103,101,104,122,126,105,106,86],
[107,106,105,108,130,109,110,111],
[91,89,111,110],
[91,110,109,131,133,113,112,92],
[96,112,113,134,114,21,115,116],
[139,119,172,140],
[122,104,121,123],
[117,118,119,139,144,120,123,121],
[122,123,120,124,150,127,125,126],
[108,105,126,125],
[129,131,109,130],
[108,125,127,128,156,132,129,130],
[134,113,133,135],
[131,129,132,157,161,136,135,133],
[137,167,27,138],
[134,135,136,162,137,138,26,114],
[146,143,178,147],
[139,140,141,142,143,146,145,144],
[124,120,144,145],
[148,179,152,149],
[153,180,158,154],
[124,145,146,147,148,149,151,150],
[127,150,151,128],
[163,159,181,164],
[155,157,132,156],
[128,151,149,152,153,154,155,156],
[160,162,136,161],
[157,155,154,158,159,163,160,161],
[0,166,165,182],
[28,3,186,29],
[162,160,163,164,165,166,167,137],
];
var triToN = [ //three.js TRIANGLE face ids to logical NGON face ids
0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,4,4,4,4,4,4,5,5,6,6,6,
6,6,6,7,7,8,8,9,9,9,9,9,9,10,10,11,11,12,12,13,13,13,13,13,13,14,
14,15,15,15,15,15,15,16,16,17,17,18,18,18,18,18,18,19,19,20,20,20,20,20,20,21,
21,22,22,22,22,22,22,23,23,24,24,25,25,26,26,26,26,26,26,27,27,28,28,28,28,28,
28,29,29,30,30,31,31,32,32,32,32,32,32,33,33,34,34,34,34,34,34,35,35,36,36,36,
36,36,36,37,37,38,38,39,39,39,39,39,39,40,40,40,40,40,40,41,41,41,41,41,41,42,
42,43,43,43,43,43,43,44,44,44,44,44,44,45,45,46,46,46,46,46,46,47,47,48,48,49,
49,49,49,49,49,50,50,50,50,50,50,51,51,51,51,51,51,52,52,53,53,53,53,53,53,54,
54,54,54,54,54,55,55,56,56,57,57,57,57,57,57,58,58,58,58,58,58,59,59,60,60,61,
61,61,61,61,61,62,62,63,63,63,63,63,63,64,64,65,65,65,65,65,65,66,66,67,67,67,
67,67,67,68,68,69,69,70,70,71,71,71,71,71,71,72,72,73,73,74,74,75,75,75,75,75,
75,76,76,77,77,77,77,77,77,78,78,79,79,80,80,80,80,80,80,
];
var nToTri = [ //logical NGON face id to set of three.js TRIANGLE face ids
[0,1],
[2,3,4,5,6,7],
[8,9,10,11,12,13],
[14,15],
[16,17,18,19,20,21],
[22,23],
[24,25,26,27,28,29],
[30,31],
[32,33],
[34,35,36,37,38,39],
[40,41],
[42,43],
[44,45],
[46,47,48,49,50,51],
[52,53],
[54,55,56,57,58,59],
[60,61],
[62,63],
[64,65,66,67,68,69],
[70,71],
[72,73,74,75,76,77],
[78,79],
[80,81,82,83,84,85],
[86,87],
[88,89],
[90,91],
[92,93,94,95,96,97],
[98,99],
[100,101,102,103,104,105],
[106,107],
[108,109],
[110,111],
[112,113,114,115,116,117],
[118,119],
[120,121,122,123,124,125],
[126,127],
[128,129,130,131,132,133],
[134,135],
[136,137],
[138,139,140,141,142,143],
[144,145,146,147,148,149],
[150,151,152,153,154,155],
[156,157],
[158,159,160,161,162,163],
[164,165,166,167,168,169],
[170,171],
[172,173,174,175,176,177],
[178,179],
[180,181],
[182,183,184,185,186,187],
[188,189,190,191,192,193],
[194,195,196,197,198,199],
[200,201],
[202,203,204,205,206,207],
[208,209,210,211,212,213],
[214,215],
[216,217],
[218,219,220,221,222,223],
[224,225,226,227,228,229],
[230,231],
[232,233],
[234,235,236,237,238,239],
[240,241],
[242,243,244,245,246,247],
[248,249],
[250,251,252,253,254,255],
[256,257],
[258,259,260,261,262,263],
[264,265],
[266,267],
[268,269],
[270,271,272,273,274,275],
[276,277],
[278,279],
[280,281],
[282,283,284,285,286,287],
[288,289],
[290,291,292,293,294,295],
[296,297],
[298,299],
[300,301,302,303,304,305],
];
var norms = [ 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
new THREE.Vector3(0,1,0), 
];
var edgesInterleaved = [ 
4,59,
4,177,
60,177,
59,60,
27,167,
166,167,
0,166,
0,1,
1,2,
2,3,
3,28,
27,28,
58,59,
9,58,
5,9,
5,6,
6,7,
7,8,
4,8,
5,15,
15,183,
6,183,
9,10,
10,11,
11,12,
12,13,
13,14,
14,15,
11,97,
16,97,
12,16,
16,17,
17,18,
18,24,
19,24,
19,20,
13,20,
17,116,
115,116,
18,115,
20,184,
14,184,
21,115,
21,25,
25,31,
22,31,
22,23,
23,24,
21,114,
26,114,
25,26,
30,31,
30,187,
22,187,
23,185,
19,185,
26,138,
27,138,
28,29,
29,30,
62,169,
82,169,
63,82,
62,63,
32,33,
33,34,
34,35,
35,66,
36,66,
36,39,
37,39,
32,37,
34,168,
61,168,
35,61,
38,39,
38,173,
37,173,
36,40,
40,72,
41,72,
41,42,
42,43,
38,43,
42,44,
44,174,
43,174,
41,73,
45,73,
45,49,
46,49,
46,47,
44,47,
45,76,
50,76,
49,50,
46,48,
50,51,
51,52,
52,55,
53,55,
48,53,
48,175,
47,175,
51,81,
56,81,
52,56,
54,55,
54,176,
53,176,
56,57,
57,58,
54,60,
83,98,
83,170,
99,170,
98,99,
61,62,
63,64,
64,67,
65,67,
65,66,
40,65,
64,84,
68,84,
67,68,
71,73,
71,72,
68,69,
69,70,
70,71,
69,87,
74,87,
70,74,
74,75,
75,77,
76,77,
75,90,
78,90,
77,78,
78,79,
79,80,
80,81,
79,93,
93,94,
80,94,
10,57,
94,97,
82,83,
98,102,
85,102,
84,85,
85,103,
86,103,
86,88,
87,88,
86,106,
106,107,
88,107,
107,111,
89,111,
89,90,
89,91,
91,92,
92,95,
93,95,
92,112,
96,112,
95,96,
96,116,
100,117,
100,171,
118,171,
117,118,
101,103,
101,102,
99,100,
117,121,
104,121,
101,104,
104,122,
122,126,
105,126,
105,106,
105,108,
108,130,
109,130,
109,110,
110,111,
91,110,
109,131,
131,133,
113,133,
112,113,
113,134,
114,134,
119,139,
119,172,
140,172,
139,140,
121,123,
122,123,
118,119,
139,144,
120,144,
120,123,
120,124,
124,150,
127,150,
125,127,
125,126,
108,125,
129,131,
129,130,
127,128,
128,156,
132,156,
129,132,
133,135,
134,135,
132,157,
157,161,
136,161,
135,136,
137,167,
137,138,
136,162,
137,162,
143,146,
143,178,
147,178,
146,147,
140,141,
141,142,
142,143,
145,146,
144,145,
124,145,
148,179,
152,179,
149,152,
148,149,
153,180,
158,180,
154,158,
153,154,
147,148,
149,151,
150,151,
128,151,
159,163,
159,181,
164,181,
163,164,
155,157,
155,156,
152,153,
154,155,
160,162,
160,161,
158,159,
160,163,
165,166,
165,182,
0,182,
3,186,
29,186,
164,165,
];
var vertsByEdge = [
[4,59],
[4,177],
[60,177],
[59,60],
[27,167],
[166,167],
[0,166],
[0,1],
[1,2],
[2,3],
[3,28],
[27,28],
[58,59],
[9,58],
[5,9],
[5,6],
[6,7],
[7,8],
[4,8],
[5,15],
[15,183],
[6,183],
[9,10],
[10,11],
[11,12],
[12,13],
[13,14],
[14,15],
[11,97],
[16,97],
[12,16],
[16,17],
[17,18],
[18,24],
[19,24],
[19,20],
[13,20],
[17,116],
[115,116],
[18,115],
[20,184],
[14,184],
[21,115],
[21,25],
[25,31],
[22,31],
[22,23],
[23,24],
[21,114],
[26,114],
[25,26],
[30,31],
[30,187],
[22,187],
[23,185],
[19,185],
[26,138],
[27,138],
[28,29],
[29,30],
[62,169],
[82,169],
[63,82],
[62,63],
[32,33],
[33,34],
[34,35],
[35,66],
[36,66],
[36,39],
[37,39],
[32,37],
[34,168],
[61,168],
[35,61],
[38,39],
[38,173],
[37,173],
[36,40],
[40,72],
[41,72],
[41,42],
[42,43],
[38,43],
[42,44],
[44,174],
[43,174],
[41,73],
[45,73],
[45,49],
[46,49],
[46,47],
[44,47],
[45,76],
[50,76],
[49,50],
[46,48],
[50,51],
[51,52],
[52,55],
[53,55],
[48,53],
[48,175],
[47,175],
[51,81],
[56,81],
[52,56],
[54,55],
[54,176],
[53,176],
[56,57],
[57,58],
[54,60],
[83,98],
[83,170],
[99,170],
[98,99],
[61,62],
[63,64],
[64,67],
[65,67],
[65,66],
[40,65],
[64,84],
[68,84],
[67,68],
[71,73],
[71,72],
[68,69],
[69,70],
[70,71],
[69,87],
[74,87],
[70,74],
[74,75],
[75,77],
[76,77],
[75,90],
[78,90],
[77,78],
[78,79],
[79,80],
[80,81],
[79,93],
[93,94],
[80,94],
[10,57],
[94,97],
[82,83],
[98,102],
[85,102],
[84,85],
[85,103],
[86,103],
[86,88],
[87,88],
[86,106],
[106,107],
[88,107],
[107,111],
[89,111],
[89,90],
[89,91],
[91,92],
[92,95],
[93,95],
[92,112],
[96,112],
[95,96],
[96,116],
[100,117],
[100,171],
[118,171],
[117,118],
[101,103],
[101,102],
[99,100],
[117,121],
[104,121],
[101,104],
[104,122],
[122,126],
[105,126],
[105,106],
[105,108],
[108,130],
[109,130],
[109,110],
[110,111],
[91,110],
[109,131],
[131,133],
[113,133],
[112,113],
[113,134],
[114,134],
[119,139],
[119,172],
[140,172],
[139,140],
[121,123],
[122,123],
[118,119],
[139,144],
[120,144],
[120,123],
[120,124],
[124,150],
[127,150],
[125,127],
[125,126],
[108,125],
[129,131],
[129,130],
[127,128],
[128,156],
[132,156],
[129,132],
[133,135],
[134,135],
[132,157],
[157,161],
[136,161],
[135,136],
[137,167],
[137,138],
[136,162],
[137,162],
[143,146],
[143,178],
[147,178],
[146,147],
[140,141],
[141,142],
[142,143],
[145,146],
[144,145],
[124,145],
[148,179],
[152,179],
[149,152],
[148,149],
[153,180],
[158,180],
[154,158],
[153,154],
[147,148],
[149,151],
[150,151],
[128,151],
[159,163],
[159,181],
[164,181],
[163,164],
[155,157],
[155,156],
[152,153],
[154,155],
[160,162],
[160,161],
[158,159],
[160,163],
[165,166],
[165,182],
[0,182],
[3,186],
[29,186],
[164,165],
];
var edgesByFace = [
[0,1,2,3],
[4,5,6,7,8,9,10,11],
[0,12,13,14,15,16,17,18],
[19,20,21,15],
[22,23,24,25,26,27,19,14],
[28,29,30,24],
[30,31,32,33,34,35,36,25],
[37,38,39,32],
[36,40,41,26],
[39,42,43,44,45,46,47,33],
[48,49,50,43],
[45,51,52,53],
[34,47,54,55],
[50,56,57,11,58,59,51,44],
[60,61,62,63],
[64,65,66,67,68,69,70,71],
[72,73,74,66],
[70,75,76,77],
[75,69,78,79,80,81,82,83],
[84,85,86,82],
[84,81,87,88,89,90,91,92],
[93,94,95,89],
[96,90,95,97,98,99,100,101],
[96,102,103,91],
[104,105,106,98],
[100,107,108,109],
[107,99,106,110,111,12,3,112],
[113,114,115,116],
[74,117,63,118,119,120,121,67],
[78,68,121,122],
[123,124,125,119],
[126,87,80,127],
[122,120,125,128,129,130,127,79],
[131,132,133,129],
[126,130,133,134,135,136,93,88],
[137,138,139,135],
[94,136,139,140,141,142,104,97],
[143,144,145,141],
[13,111,146,22],
[105,142,145,147,28,23,146,110],
[62,148,113,149,150,151,123,118],
[124,151,152,153,154,155,131,128],
[156,157,158,154],
[132,155,158,159,160,161,137,134],
[138,161,162,163,164,165,143,140],
[166,167,168,164],
[144,165,168,169,37,31,29,147],
[170,171,172,173],
[174,152,150,175],
[116,176,170,177,178,179,175,149],
[174,179,180,181,182,183,156,153],
[157,183,184,185,186,187,188,159],
[162,160,188,189],
[189,187,190,191,192,193,166,163],
[167,193,194,195,48,42,38,169],
[196,197,198,199],
[180,178,200,201],
[173,202,196,203,204,205,200,177],
[201,205,206,207,208,209,210,181],
[184,182,210,211],
[212,190,186,213],
[211,209,214,215,216,217,213,185],
[194,192,218,219],
[212,217,220,221,222,223,218,191],
[224,4,57,225],
[219,223,226,227,225,56,49,195],
[228,229,230,231],
[199,232,233,234,228,235,236,203],
[206,204,236,237],
[238,239,240,241],
[242,243,244,245],
[237,235,231,246,241,247,248,207],
[208,248,249,214],
[250,251,252,253],
[254,220,216,255],
[249,247,240,256,245,257,255,215],
[258,226,222,259],
[254,257,244,260,250,261,259,221],
[6,262,263,264],
[10,265,266,58],
[258,261,253,267,262,5,224,227],
];
var quadAdj = [ 
[38,,25],
[],
[],
[38,,8],
[],
[38,8,7,37],
[],
[5,12,10,45],
[5,3,12],
[],
[7,11,64,62],
[10,12,79],
[7,8,11],
[],
[16,30,27],
[],
[,29,14],
[29,,19],
[],
[31,17,23],
[],
[31,23,24,35],
[],
[21,19,25],
[21,25,38,37],
[24,23,0],
[],
[14,48,47],
[],
[16,17,31,30],
[14,29,33,48],
[29,19,21,33],
[],
[30,31,35,42],
[],
[33,21,37,52],
[],
[35,24,5,45],
[0,3,5,24],
[],
[],
[],
[48,33,52,59],
[],
[],
[52,37,7,62],
[],
[27,56,55],
[27,30,42,56],
[],
[],
[],
[42,35,45,60],
[],
[],
[47,68,],
[47,48,59,68],
[],
[],
[56,42,60,72],
[59,52,62,74],
[],
[60,45,10,76],
[],
[78,79,10,76],
[],
[,68,69],
[],
[55,56,72,66],
[66,72,70],
[69,74,73],
[],
[68,59,74,69],
[70,76,78],
[72,60,76,70],
[],
[74,62,64,73],
[],
[64,,73],
[,64,11],
[],
];
var facesByEdge = [ 
];
var centroids = [ 
new THREE.Vector3(-0.97222225,0,-0.666667),
new THREE.Vector3(0.8333335,0,-0.8333335),
new THREE.Vector3(-0.8333335,0,-0.8333335),
new THREE.Vector3(-0.666667,0,-0.97222225),
new THREE.Vector3(-0.5,0,-0.8333335),
new THREE.Vector3(-0.333333,0,-0.666667),
new THREE.Vector3(-0.1666665,0,-0.8333335),
new THREE.Vector3(0,0,-0.666667),
new THREE.Vector3(-0.333333,0,-0.97222225),
new THREE.Vector3(0.1666665,0,-0.8333335),
new THREE.Vector3(0.333333,0,-0.666667),
new THREE.Vector3(0.333333,0,-0.97222225),
new THREE.Vector3(0,0,-0.97222225),
new THREE.Vector3(0.5,0,-0.8333335),
new THREE.Vector3(-0.333333,0,0.97222225),
new THREE.Vector3(-0.8333335,0,0.8333335),
new THREE.Vector3(-0.666667,0,0.97222225),
new THREE.Vector3(-0.97222225,0,0.666667),
new THREE.Vector3(-0.8333335,0,0.5),
new THREE.Vector3(-0.97222225,0,0.333333),
new THREE.Vector3(-0.8333335,0,0.1666665),
new THREE.Vector3(-0.666667,0,0),
new THREE.Vector3(-0.8333335,0,-0.1666665),
new THREE.Vector3(-0.97222225,0,0),
new THREE.Vector3(-0.666667,0,-0.333333),
new THREE.Vector3(-0.97222225,0,-0.333333),
new THREE.Vector3(-0.8333335,0,-0.5),
new THREE.Vector3(0,0,0.97222225),
new THREE.Vector3(-0.5,0,0.8333335),
new THREE.Vector3(-0.666667,0,0.666667),
new THREE.Vector3(-0.333333,0,0.666667),
new THREE.Vector3(-0.666667,0,0.333333),
new THREE.Vector3(-0.5,0,0.5),
new THREE.Vector3(-0.333333,0,0.333333),
new THREE.Vector3(-0.5,0,0.1666665),
new THREE.Vector3(-0.333333,0,0),
new THREE.Vector3(-0.5,0,-0.1666665),
new THREE.Vector3(-0.333333,0,-0.333333),
new THREE.Vector3(-0.666667,0,-0.666667),
new THREE.Vector3(-0.5,0,-0.5),
new THREE.Vector3(-0.1666665,0,0.8333335),
new THREE.Vector3(-0.1666665,0,0.5),
new THREE.Vector3(0,0,0.333333),
new THREE.Vector3(-0.1666665,0,0.1666665),
new THREE.Vector3(-0.1666665,0,-0.1666665),
new THREE.Vector3(0,0,-0.333333),
new THREE.Vector3(-0.1666665,0,-0.5),
new THREE.Vector3(0.33333325,0,0.97222225),
new THREE.Vector3(0,0,0.666667),
new THREE.Vector3(0.1666665,0,0.8333335),
new THREE.Vector3(0.1666665,0,0.5),
new THREE.Vector3(0.1666665,0,0.1666665),
new THREE.Vector3(0,0,0),
new THREE.Vector3(0.1666665,0,-0.1666665),
new THREE.Vector3(0.1666665,0,-0.5),
new THREE.Vector3(0.666667,0,0.97222225),
new THREE.Vector3(0.33333325,0,0.666667),
new THREE.Vector3(0.50000025,0,0.8333335),
new THREE.Vector3(0.50000025,0,0.5),
new THREE.Vector3(0.33333325,0,0.333333),
new THREE.Vector3(0.333333,0,0),
new THREE.Vector3(0.500000125,0,0.1666665),
new THREE.Vector3(0.333333,0,-0.333333),
new THREE.Vector3(0.5,0,-0.1666665),
new THREE.Vector3(0.666667,0,-0.666667),
new THREE.Vector3(0.5,0,-0.5),
new THREE.Vector3(0.97222225,0,0.666667),
new THREE.Vector3(0.8333335,0,0.8333335),
new THREE.Vector3(0.666667,0,0.666667),
new THREE.Vector3(0.97222225,0,0.333333),
new THREE.Vector3(0.97222225,0,0),
new THREE.Vector3(0.8333335,0,0.5),
new THREE.Vector3(0.666667,0,0.333333),
new THREE.Vector3(0.97222225,0,-0.333333),
new THREE.Vector3(0.666667,0,0),
new THREE.Vector3(0.8333335,0,0.1666665),
new THREE.Vector3(0.666667,0,-0.333333),
new THREE.Vector3(0.8333335,0,-0.1666665),
new THREE.Vector3(0.97222225,0,-0.666667),
new THREE.Vector3(0.666667,0,-0.97222225),
new THREE.Vector3(0.8333335,0,-0.5),
];
var surfaces = [ 
new THREE.Vector3(0.7071067811865475,0,0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865472),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865476,0,0.7071067811865474),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865472),
new THREE.Vector3(-1,0,0),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-1,0,0),
new THREE.Vector3(-0.7071067811865475,0,0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(0.7071067811865474,0,0.7071067811865476),
new THREE.Vector3(-0.7071067811865474,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865474,0,0.7071067811865477),
new THREE.Vector3(-0.7071067811865474,0,-0.7071067811865477),
new THREE.Vector3(0.7071067811865474,0,0.7071067811865477),
new THREE.Vector3(-0.7071067811865474,0,0.7071067811865476),
new THREE.Vector3(-0.7071067811865474,0,0.7071067811865476),
new THREE.Vector3(-0.7071067811865472,0,-0.7071067811865477),
new THREE.Vector3(0.7071067811865477,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865476,0,0.7071067811865474),
new THREE.Vector3(0.7071067811865474,0,0.7071067811865476),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,0.7071067811865477),
new THREE.Vector3(-0.7071067811865474,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865475,0,0.7071067811865476),
new THREE.Vector3(-0.7071067811865474,0,-0.7071067811865477),
new THREE.Vector3(-0.7071067811865476,0,0.7071067811865476),
new THREE.Vector3(0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865472,0,-0.7071067811865477),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865476,0,0.7071067811865477),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865476,0,0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865477),
new THREE.Vector3(0.7071067811865476,0,-0.7071067811865474),
new THREE.Vector3(0.7071067811865477,0,0.7071067811865474),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865474),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865475),
new THREE.Vector3(0.7071067811865476,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865477),
new THREE.Vector3(0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(0.7071067811865476,0,-0.7071067811865474),
new THREE.Vector3(-0.7071099631487666,0,-0.7071035992100096),
new THREE.Vector3(-0.7071099631487666,0,-0.7071035992100096),
new THREE.Vector3(0.7071067811865476,0,-0.7071067811865476),
new THREE.Vector3(0.7071067811865477,0,0.7071067811865476),
new THREE.Vector3(-0.7071099631487665,0,-0.7071035992100096),
new THREE.Vector3(0.7071067811865475,0,-0.7071067811865477),
new THREE.Vector3(-0.7071067811865477,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865475,0,0.7071067811865475),
new THREE.Vector3(-0.7071067811865476,0,-0.7071067811865476),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(0,0,1),
new THREE.Vector3(0,0,1),
new THREE.Vector3(-0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865472,0,-0.7071067811865477),
new THREE.Vector3(-0.7071067811865474,0,-0.7071067811865476),
new THREE.Vector3(0.7071067811865474,0,0.7071067811865477),
new THREE.Vector3(-0.7071067811865474,0,-0.7071067811865476),
new THREE.Vector3(0.7071067811865472,0,0.7071067811865477),
new THREE.Vector3(-0.7071067811865474,0,-0.7071067811865477),
new THREE.Vector3(0.7071067811865475,0,-0.7071067811865475),
new THREE.Vector3(-0.7071067811865475,0,0.7071067811865475),
new THREE.Vector3(-0.7071067811865472,0,-0.7071067811865477),
];
var adj = [
[2,26,],
[64,80,78,79,13,],
[0,26,38,4,3,],
[4,2,],
[38,39,5,6,8,3,2,],
[39,46,6,4,],
[5,46,7,9,12,8,4,],
[46,54,9,6,],
[6,4,],
[7,54,10,13,11,12,6,],
[54,65,13,9,],
[9,13,],
[6,9,],
[10,65,64,1,79,11,9,],
[40,28,],
[16,28,29,18,17,],
[28,15,],
[15,18,],
[17,15,29,32,31,20,19,],
[20,18,],
[19,18,31,34,21,22,23,],
[34,36,22,20,],
[23,20,21,36,24,26,25,],
[22,20,],
[36,39,26,22,],
[22,26,],
[25,22,24,39,38,2,0,],
[40,49,],
[16,14,40,30,32,29,15,],
[18,15,28,32,],
[40,41,32,28,],
[34,20,18,32,],
[29,28,30,41,33,34,31,18,],
[41,43,34,32,],
[31,32,33,43,35,36,21,20,],
[43,44,36,34,],
[21,34,35,44,37,39,24,22,],
[44,46,39,36,],
[2,26,39,4,],
[24,36,37,46,5,4,38,26,],
[14,27,49,48,41,30,28,],
[30,40,48,50,42,43,33,32,],
[50,51,43,41,],
[33,41,42,51,52,44,35,34,],
[35,43,52,53,45,46,37,36,],
[53,54,46,44,],
[37,44,45,54,7,6,5,39,],
[49,57,],
[50,41,40,49,],
[27,47,57,56,50,48,40,],
[48,49,56,58,59,51,42,41,],
[42,50,59,61,60,53,52,43,],
[44,43,51,53,],
[52,51,60,63,62,54,45,44,],
[45,53,62,65,10,9,7,46,],
[57,67,],
[50,49,57,58,],
[47,55,67,68,58,56,49,],
[56,57,68,71,72,61,59,50,],
[51,50,58,61,],
[63,53,51,61,],
[59,58,72,75,74,63,60,51,],
[54,53,63,65,],
[60,61,74,77,76,65,62,53,],
[80,1,13,65,],
[62,63,76,80,64,13,10,54,],
[67,71,],
[55,66,71,68,57,],
[58,57,67,71,],
[75,71,],
[77,75,],
[68,67,66,69,75,72,58,],
[58,71,75,61,],
[77,80,],
[77,63,61,75,],
[72,71,69,70,77,74,61,],
[80,65,63,77,],
[74,75,70,73,80,76,63,],
[1,80,],
[1,13,],
[76,77,73,78,1,64,65,],
];
var quadPlaces = {
'78,79':1,
'0,3':2,
'8,38':4,
'3,5':4,
'5,12':6,
'7,8':6,
'7,11':9,
'10,12':9,
'10,79':13,
'11,64':13,
'16,17':15,
'17,31':18,
'19,29':18,
'19,21':20,
'23,31':20,
'23,24':22,
'21,25':22,
'25,38':26,
'0,24':26,
'16,30':28,
'14,29':28,
'29,33':32,
'30,31':32,
'31,35':34,
'21,33':34,
'21,37':36,
'24,35':36,
'5,24':39,
'37,38':39,
'14,48':40,
'27,30':40,
'30,42':41,
'33,48':41,
'33,52':43,
'35,42':43,
'35,45':44,
'37,52':44,
'7,37':46,
'5,45':46,
'27,56':49,
'47,48':49,
'48,59':50,
'42,56':50,
'42,60':51,
'52,59':51,
'52,62':53,
'45,60':53,
'10,45':54,
'7,62':54,
'47,68':57,
'55,56':57,
'56,72':58,
'59,68':58,
'59,74':61,
'60,72':61,
'60,76':63,
'62,74':63,
'62,64':65,
'10,76':65,
'55,66':67,
'68,69':71,
'66,72':71,
'70,72':75,
'69,74':75,
'73,74':77,
'70,76':77,
'76,78':80,
'64,73':80,
};
var quadPlacesByMid = {
'78,1':79,
'79,1':78,
'0,2':3,
'3,2':0,
'38,4':8,
'5,4':3,
'8,4':38,
'3,4':5,
'5,6':12,
'7,6':8,
'12,6':5,
'8,6':7,
'7,9':11,
'10,9':12,
'11,9':7,
'12,9':10,
'10,13':79,
'64,13':11,
'79,13':10,
'11,13':64,
'16,15':17,
'17,15':16,
'17,18':31,
'29,18':19,
'31,18':17,
'19,18':29,
'19,20':21,
'31,20':23,
'21,20':19,
'23,20':31,
'23,22':24,
'21,22':25,
'24,22':23,
'25,22':21,
'25,26':38,
'24,26':0,
'38,26':25,
'0,26':24,
'16,28':30,
'14,28':29,
'30,28':16,
'29,28':14,
'29,32':33,
'30,32':31,
'33,32':29,
'31,32':30,
'31,34':35,
'33,34':21,
'35,34':31,
'21,34':33,
'21,36':37,
'35,36':24,
'37,36':21,
'24,36':35,
'24,39':5,
'37,39':38,
'5,39':24,
'38,39':37,
'14,40':48,
'27,40':30,
'48,40':14,
'30,40':27,
'30,41':42,
'48,41':33,
'42,41':30,
'33,41':48,
'33,43':52,
'42,43':35,
'52,43':33,
'35,43':42,
'35,44':45,
'52,44':37,
'45,44':35,
'37,44':52,
'37,46':7,
'45,46':5,
'7,46':37,
'5,46':45,
'27,49':56,
'47,49':48,
'56,49':27,
'48,49':47,
'48,50':59,
'56,50':42,
'59,50':48,
'42,50':56,
'42,51':60,
'59,51':52,
'60,51':42,
'52,51':59,
'52,53':62,
'60,53':45,
'62,53':52,
'45,53':60,
'45,54':10,
'62,54':7,
'10,54':45,
'7,54':62,
'47,57':68,
'55,57':56,
'68,57':47,
'56,57':55,
'56,58':72,
'68,58':59,
'72,58':56,
'59,58':68,
'59,61':74,
'72,61':60,
'74,61':59,
'60,61':72,
'60,63':76,
'74,63':62,
'76,63':60,
'62,63':74,
'62,65':64,
'76,65':10,
'64,65':62,
'10,65':76,
'55,67':66,
'66,67':55,
'68,71':69,
'66,71':72,
'69,71':68,
'72,71':66,
'72,75':70,
'69,75':74,
'70,75':72,
'74,75':69,
'74,77':73,
'70,77':76,
'73,77':74,
'76,77':70,
'76,80':78,
'73,80':64,
'78,80':76,
'64,80':73,
};
var quadJumps = {
'0,5':38,
'0,23':25,
'3,24':38,
'3,12':8,
'5,10':7,
'5,35':37,
'7,38':5,
'7,64':10,
'7,52':45,
'8,37':5,
'8,11':12,
'10,78':64,
'10,60':62,
'11,62':10,
'12,45':7,
'12,79':11,
'14,33':30,
'14,47':27,
'16,31':29,
'16,27':14,
'17,30':29,
'17,23':19,
'19,33':31,
'19,25':23,
'21,29':31,
'21,38':24,
'21,52':35,
'23,35':21,
'24,31':21,
'24,45':37,
'25,37':24,
'27,42':48,
'27,55':47,
'29,48':30,
'30,35':33,
'30,56':48,
'31,42':33,
'33,37':35,
'33,59':42,
'35,60':52,
'37,62':45,
'42,45':52,
'42,72':59,
'45,76':62,
'47,59':56,
'48,52':42,
'48,68':56,
'52,74':60,
'55,72':68,
'56,60':59,
'56,66':68,
'59,62':60,
'59,69':72,
'60,70':74,
'62,73':76,
'64,74':76,
'66,70':69,
'68,74':72,
'69,73':70,
'70,78':73,
'72,76':74,
'76,79':64,
};
var quadJumpsByMid = {
'0,38':5,
'0,25':23,
'3,38':24,
'3,8':12,
'5,38':0,
'5,7':10,
'5,37':35,
'7,5':38,
'7,10':64,
'7,45':52,
'8,5':37,
'8,12':11,
'10,7':5,
'10,64':78,
'10,62':60,
'11,10':62,
'11,12':8,
'12,7':45,
'12,8':3,
'12,11':79,
'14,30':33,
'14,27':47,
'16,29':31,
'16,14':27,
'17,29':30,
'17,19':23,
'19,31':33,
'19,23':25,
'21,31':29,
'21,24':38,
'21,35':52,
'23,21':35,
'23,19':17,
'23,25':0,
'24,21':31,
'24,38':3,
'24,37':45,
'25,24':37,
'25,23':19,
'27,14':16,
'27,48':42,
'27,47':55,
'29,31':21,
'29,30':48,
'30,29':17,
'30,33':35,
'30,48':56,
'31,29':16,
'31,21':24,
'31,33':42,
'33,30':14,
'33,31':19,
'33,35':37,
'33,42':59,
'35,33':30,
'35,21':23,
'35,37':5,
'35,52':60,
'37,35':33,
'37,24':25,
'37,5':8,
'37,45':62,
'38,5':7,
'38,24':21,
'42,48':27,
'42,33':31,
'42,52':45,
'42,59':72,
'45,52':42,
'45,37':24,
'45,7':12,
'45,62':76,
'47,27':14,
'47,56':59,
'48,30':29,
'48,42':52,
'48,56':68,
'52,42':48,
'52,35':21,
'52,45':7,
'52,60':74,
'55,47':27,
'55,68':72,
'56,48':30,
'56,59':60,
'56,68':66,
'59,56':47,
'59,42':33,
'59,60':62,
'59,72':69,
'60,59':56,
'60,52':35,
'60,62':10,
'60,74':70,
'62,60':59,
'62,45':37,
'62,10':11,
'62,76':73,
'64,10':7,
'64,76':74,
'66,68':56,
'66,69':70,
'68,56':48,
'68,72':74,
'69,72':59,
'69,70':73,
'70,69':66,
'70,74':60,
'70,73':78,
'72,68':55,
'72,59':42,
'72,74':76,
'73,70':69,
'73,76':62,
'74,72':68,
'74,60':52,
'74,76':64,
'76,74':72,
'76,62':45,
'76,64':79,
'78,64':10,
'78,73':70,
'79,64':76,
'79,11':12,
};
var initialPins = [[0,3,8,25,47,55,66,69],[14,16,17,19,11,73,79,78]];
var initialHomes = [[2,67],[1,15]];
var initialWormholes = [];
var initialWormholeDests = {};