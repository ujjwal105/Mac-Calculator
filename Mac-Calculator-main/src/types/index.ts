export type Digits = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
export type OperactionKeys = '/' | '*' | '-' | '+' | '=' | 'Enter' | 'x²' | '(' | ')' | 'x³' | 'xʸ' | 'eˣ' | '10ˣ' | '¹/x' | '²√x' | '³√x' | 'ʸ√x' | 'ln' | 'log₁₀' | 'x!' | 'sin' | 'cos' | 'tan' | 'e' | 'EE' | 'Rad' | 'sinh' | 'cosh' | 'tanh' | 'π' | 'Rand';
export type OperationNames = 'divide' | 'multiply' | 'subtract' | 'add' | 'equals' | 'enter' | 'square' | 'openParenthesis' | 'closeParenthesis' | 'cube' | 'power' | 'exponential' | 'powerOfTen' | 'reciprocal' | 'squareRoot' | 'cubeRoot' | 'nthRoot' | 'naturalLog' | 'logBaseTen' | 'factorial' | 'sine' | 'cosine' | 'tangent' | 'constantE' | 'scientificNotation' | 'toggleRadians' | 'hyperbolicSine' | 'hyperbolicCosine' | 'hyperbolicTangent' | 'constantPi' | 'randomNumber';
export type OperationSymbols = '÷' | 'x' | '-' | '+' | '=' | 'x²' | '(' | ')' | 'x³' | 'xʸ' | 'eˣ' | '10ˣ' | '¹/x' | '²√x' | '³√x' | 'ʸ√x' | 'ln' | 'log₁₀' | 'x!' | 'sin' | 'cos' | 'tan' | 'e' | 'EE' | 'Rad' | 'sinh' | 'cosh' | 'tanh' | 'π' | 'Rand';

export interface CalculatorValues {
  name: OperationNames;
  symbol: OperationSymbols;
  show: boolean;
  func: (prevValue: number, nextValue?: number) => number;
}

export interface ICalculaterState {
  value: number | null;
  displayValue: string;
  operator: string | number | null;
  waitingForOperand: boolean;
}

export type CalculatorOperations = {
  [key in OperactionKeys]: CalculatorValues;
};

export enum EInputTypes {
  inputDigit = 'inputDigit',
  inputDot = 'inputDot',
  inputPercent = 'inputPercent',
  toggleSign = 'toggleSign',
  clearLastChar = 'clearLastChar',
  clearDisplay = 'clearDisplay',
  performOperation = 'performOperation',
  clearAll = 'clearAll',
  openParenthesis = 'openParenthesis',
  closeParenthesis = 'closeParenthesis',
  cube = 'cube',
  power = 'power',
  exponential = 'exponential',
  powerOfTen = 'powerOfTen',
  reciprocal = 'reciprocal',
  squareRoot = 'squareRoot',
  cubeRoot = 'cubeRoot',
  nthRoot = 'nthRoot',
  naturalLog = 'naturalLog',
  logBaseTen = 'logBaseTen',
  factorial = 'factorial',
  sine = 'sine',
  cosine = 'cosine',
  tangent = 'tangent',
  constantE = 'constantE',
  scientificNotation = 'scientificNotation',
  toggleRadians = 'toggleRadians',
  hyperbolicSine = 'hyperbolicSine',
  hyperbolicCosine = 'hyperbolicCosine',
  hyperbolicTangent = 'hyperbolicTangent',
  constantPi = 'constantPi',
  randomNumber = 'randomNumber',
}

