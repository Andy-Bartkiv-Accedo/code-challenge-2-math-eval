const TESTCASES = [
  // Medal: SILVER
  {str: '1 - 1', res: 0},
  // {str: '100', res: 100},
  {str: '-100', res: -100},
  {str: '1 * -10', res: -10},
  // Medal: GOLD
  {str: '1 - 15', res: -14},
  {str: '1 -15', res: -14},
  {str: '-3.14 - 15', res: -18.14},
  {str: '-1 + -15', res: -16},
  {str: '1 --1', res: 2},
  {str: '2 /2+3 * 4.75- -6', res: 21.25},
  {str: '2 / (2 + 3) * 4.33 - -6', res: 7.732},
  // Medal: DIAMOND
  {str: '-5 /2 / 1 + (4 + 5 - (5 * 4) -10) *2.5+ (3 * 1 +3)', res: -49},
];