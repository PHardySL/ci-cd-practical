import { render, screen } from '@testing-library/react';
const QuickMaths = require("./quickmaths");

test('test multiplication', () => {
    let quickmaths = new QuickMaths()
    expect(quickmaths.Multiply(2,3)).toBe(6)
});