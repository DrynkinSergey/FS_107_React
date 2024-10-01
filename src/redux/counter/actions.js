import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const changeStep = createAction('changeStep');

console.log(changeStep());
console.log(changeStep(222));
console.log(changeStep('Hello world'));
