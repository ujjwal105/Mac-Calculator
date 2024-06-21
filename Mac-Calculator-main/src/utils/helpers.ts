import { Digits, CalculatorOperations } from '../types';

export const digitKeys: Digits[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

export const calculatorOperations: CalculatorOperations = {
  '/': {
  name: 'divide',
  symbol: '÷',
  show: true,
  func: (prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return prevValue;
    } else {
      return prevValue / nextValue;
    }
  },
},
'*': {
  name: 'multiply',
  symbol: 'x',
  show: true,
  func: (prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return prevValue;
    } else {
      return prevValue * nextValue;
    }
  },
},
'-': {
  name: 'subtract',
  symbol: '-',
  show: true,
  func: (prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return prevValue;
    } else {
      return prevValue - nextValue;
    }
  },
},
'+': {
  name: 'add',
  symbol: '+',
  show: true,
  func: (prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return prevValue;
    } else {
      return prevValue + nextValue;
    }
  },
},
  '=': {
  name: 'equals',
  symbol: '=',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    }
    return nextValue;
  },
},
'Enter': {
  name: 'enter',
  symbol: '=',
  show: false,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    }
    return nextValue;
  },
},
/*
'x²': {
  name: 'square',
  symbol: 'x²',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    }
    return nextValue;
  },
},

  '(': {
    name: 'openParenthesis',
    symbol: '(',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  ')': {
    name: 'closeParenthesis',
    symbol: ')',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  'x³': {
    name: 'cube',
    symbol: 'x³',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  'xʸ': {
    name: 'power',
    symbol: 'xʸ',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  'eˣ': {
    name: 'exponential',
    symbol: 'eˣ',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  '10ˣ': {
    name: 'powerOfTen',
    symbol: '10ˣ',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  '¹/x': {
    name: 'reciprocal',
    symbol: '¹/x',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  '²√x': {
    name: 'squareRoot',
    symbol: '²√x',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  '³√x': {
    name: 'cubeRoot',
    symbol: '³√x',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  'ʸ√x': {
    name: 'nthRoot',
    symbol: 'ʸ√x',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  'ln': {
    name: 'naturalLog',
    symbol: 'ln',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  'log₁₀': {
    name: 'logBaseTen',
    symbol: 'log₁₀',
    show: true,
    func: (_prevValue: number, nextValue?: number) => {
      if (nextValue === undefined) {
        return _prevValue;
      }
      return nextValue;
    },  },
  'x!': {
  name: 'factorial',
  symbol: 'x!',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    }
    let result = 1;
    for (let i = 2; i <= nextValue; i++) {
      result *= i;
    }
    return result;
  },
},
'sin': {
  name: 'sine',
  symbol: 'sin',
  show: true,
  func: (prevValue: number, nextValue?: number) => {
    const radians = prevValue ? (Math.PI / 180) * nextValue! : nextValue!;
    return Math.sin(radians);
  },
},
'cos': {
  name: 'cosine',
  symbol: 'cos',
  show: true,
  func: (prevValue: number, nextValue?: number) => {
    const radians = prevValue ? (Math.PI / 180) * nextValue! : nextValue!;
    return Math.cos(radians);
  },
},
'tan': {
  name: 'tangent',
  symbol: 'tan',
  show: true,
  func: (prevValue: number, nextValue?: number) => {
    const radians = prevValue ? (Math.PI / 180) * nextValue! : nextValue!;
    return Math.tan(radians);
  },
  },

  'e': {
    name: 'constantE',
    symbol: 'e',
    show: true,
    func: () => Math.E,
  },
  'EE': {
  name: 'scientificNotation',
  symbol: 'EE',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      // Handle case where only one parameter is provided
      return _prevValue;
    } else {
      // Handle case where two parameters are provided
      return nextValue * 10 ** _prevValue;
    }
  },
},
'Rad': {
  name: 'toggleRadians',
  symbol: 'Rad',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    } else {
      return nextValue;
    }
  },
},
'sinh': {
  name: 'hyperbolicSine',
  symbol: 'sinh',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    } else {
      return Math.sinh(nextValue);
    }
  },
},
'cosh': {
  name: 'hyperbolicCosine',
  symbol: 'cosh',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    } else {
      return Math.cosh(nextValue);
    }
  },
},
'tanh': {
  name: 'hyperbolicTangent',
  symbol: 'tanh',
  show: true,
  func: (_prevValue: number, nextValue?: number) => {
    if (nextValue === undefined) {
      return _prevValue;
    } else {
      return Math.tanh(nextValue);
    }
  },
},
 'π': {
  name: 'constantPi',
  symbol: 'π',
  show: true,
  func: () => Math.PI,
},
'Rand': {
  name: 'randomNumber',
  symbol: 'Rand',
  show: true,
  func: () => Math.random(),
},
*/
};

export const getFormattedValue = (value: string): string => {
  const language = navigator.language || 'en-US';

  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6,
  });

  const match = /\.\d*?(0*)$/.exec(value);

  if (match) {
    formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];
  }

  return formattedValue.length >= 14 ? parseFloat(value).toExponential().toString() : formattedValue;
};
