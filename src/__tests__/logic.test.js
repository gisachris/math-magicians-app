import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('operations testing', () => {
  it('adds two numbers correctly', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('subtracts two numbers correctly', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  it('multiplies two numbers correctly', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('divides two numbers correctly', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  it("doesn't divide by 0", () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('finds modulo correctly', () => {
    expect(operate(7, 4, '%')).toBe('3');
  });

  it("can't find modulo if second number is 0", () => {
    expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for unknown operations', () => {
    expect(() => operate(6, 3, '!')).toThrowError("Unknown operation '!'");
  });
});
describe('calculator testing', () => {
  let obj = null;

  beforeEach(() => {
    obj = {
      total: '1',
      next: '2',
      operation: '+',
    };
  });

  it('should set total, next, and operation to null if button name is "AC"', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next value if button name is a number', () => {
    expect(calculate(obj, '3')).toEqual({
      total: '1',
      next: '23',
      operation: '+',
    });
  });

  it('should return empty object if button name is 0 and next is already 0', () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
  });

  it('should add decimal with a leading 0 if object has no next and no total', () => {
    obj = {};
    expect(calculate(obj, '.')).toEqual({ next: '0.' });
  });
});
