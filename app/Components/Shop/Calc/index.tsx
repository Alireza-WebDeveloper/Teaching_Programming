import React from 'react';

interface CalcProps {
  totalPrice: any;
}
const Calc: React.FC<CalcProps> = ({ totalPrice }) => {
  return (
    <div className="flex flex-col w-3/4 m-auto p-3 bg-gray-50 dark:bg-gray-800 rounded space-y-3">
      <section className="flex justify-evenly ">
        <span className="text-xl font-bold">
          The total cost of your purchase
        </span>
        <span className="text-xl font-semibold">${totalPrice}</span>
      </section>
      <button className="text-white capitalize font-semibold text-xl bg-blue-700 dark:bg-blue-400 dark:text-black rounded px-4 py-2">
        checkout
      </button>
    </div>
  );
};

export default Calc;
