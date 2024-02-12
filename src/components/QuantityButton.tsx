import { QuantityButtonProps } from "../interfaces/IQuantityButtonProps";

export function QuantityButton({ incrementItem,decrementItem }: QuantityButtonProps) {
  return (
    <form className="max-w-xs mx-auto">
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={decrementItem}
          className="bg-neutral rounded-s-lg p-3 h-11 focus:ring-base-content focus:ring-1 focus:outline-none">
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"/>
          </svg>
        </button>
        <button
          type="button"
          onClick={incrementItem}
          data-input-counter-increment="quantity-input"
          className="bg-neutral rounded-e-lg p-3 h-11 focus:ring-base-content focus:ring-1 focus:outline-none">
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"/>
          </svg>
        </button>
      </div>
    </form>
  );
}
