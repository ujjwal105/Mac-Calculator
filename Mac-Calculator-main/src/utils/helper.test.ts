import { getFormattedValue, calculatorOperations } from './helpers';

describe('Format value', () => {
  it('should work', () => {
    const value = '5.7';
    expect(getFormattedValue(value)).toBe(value);
  });
});

describe('Calculator Operations', () => {
  it('should divide', () => {
    expect(calculatorOperations['/'].func(6, 2)).toBe(3);
  });

  it('should multiply', () => {
    expect(calculatorOperations['*'].func(6, 2)).toBe(12);
  });

  it('should subtract', () => {
    expect(calculatorOperations['-'].func(6, 2)).toBe(4);
  });

  it('should add', () => {
    expect(calculatorOperations['+'].func(6, 2)).toBe(8);
  });

  it('should return result', () => {
    expect(calculatorOperations['='].func(6, 2)).toBe(2);
  });

  it('should calculate square', () => {
    expect(calculatorOperations['x²'].func(5)).toBe(25);
  });

  it('should calculate cube', () => {
    expect(calculatorOperations['x³'].func(3)).toBe(27);
  });

  it('should calculate power', () => {
    expect(calculatorOperations['xʸ'].func(2, 3)).toBe(8);
  });

  it('should calculate exponential', () => {
    expect(calculatorOperations['eˣ'].func(1)).toBe(Math.E);
  });

  it('should calculate power of ten', () => {
    expect(calculatorOperations['10ˣ'].func(2)).toBe(100);
  });

  it('should calculate reciprocal', () => {
    expect(calculatorOperations['¹/x'].func(4)).toBe(0.25);
  });

  it('should calculate square root', () => {
    expect(calculatorOperations['²√x'].func(16)).toBe(4);
  });

  it('should calculate cube root', () => {
    expect(calculatorOperations['³√x'].func(27)).toBe(3);
  });

  it('should calculate nth root', () => {
    expect(calculatorOperations['ʸ√x'].func(2, 4)).toBe(2);
  });

  it('should calculate natural logarithm', () => {
    expect(calculatorOperations['ln'].func(2.718)).toBeCloseTo(1, 5);
  });

  it('should calculate base 10 logarithm', () => {
    expect(calculatorOperations['log₁₀'].func(100)).toBe(2);
  });

  it('should calculate factorial', () => {
    expect(calculatorOperations['x!'].func(5)).toBe(120);
  });

  it('should calculate sine', () => {
    expect(calculatorOperations['sin'].func(90)).toBeCloseTo(1, 5);
  });

  it('should calculate cosine', () => {
    expect(calculatorOperations['cos'].func(0)).toBe(1);
  });

  it('should calculate tangent', () => {
    expect(calculatorOperations['tan'].func(45)).toBeCloseTo(1, 5);
  });

  it('should return constant e', () => {
    expect(calculatorOperations['e'].func(0)).toBe(Math.E);
  });

  it('should calculate scientific notation', () => {
    expect(calculatorOperations['EE'].func(2, 5)).toBe(50000);
  });

  it('should toggle radians', () => {
    expect(calculatorOperations['Rad'].func(0)).toBe(0);
  });

  it('should calculate hyperbolic sine', () => {
    expect(calculatorOperations['sinh'].func(0)).toBe(0);
  });

  it('should calculate hyperbolic cosine', () => {
    expect(calculatorOperations['cosh'].func(0)).toBe(1);
  });

  it('should calculate hyperbolic tangent', () => {
    expect(calculatorOperations['tanh'].func(0)).toBe(0);
  });

  it('should return constant pi', () => {
    expect(calculatorOperations['π'].func(0)).toBe(Math.PI);
  });

  it('should generate random number', () => {
    const rand = calculatorOperations['Rand'].func(0);
    expect(rand).toBeGreaterThanOrEqual(0);
    expect(rand).toBeLessThanOrEqual(1);
  });

});