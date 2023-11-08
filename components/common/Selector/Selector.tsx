import React, { useState, useRef, useEffect } from 'react';
import styles from './Selector.module.css';
import ChevronIcon from '@/components/common/Icons/ChevronIcon/ChevronIcon';

type SelectorProps<T> = {
  items: Array<{ label: string; value: T }>;
  selected?: T | null;
  onChange?: (value: T) => void;
};

const Selector = <T,>({ items, selected, onChange }: SelectorProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('right-0');
  const selectorRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (!selectorRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (!selectorRef.current) return;

      const rect = selectorRef.current.getBoundingClientRect();
      const availableSpace = window.innerWidth - rect.right;

      if (availableSpace < 224) {
        setDropdownPosition('right-0');
      } else {
        setDropdownPosition('left-0');
      }
    };

    if (isOpen) {
      updateDropdownPosition();
    }

    window.addEventListener('resize', updateDropdownPosition);

    return () => {
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, [isOpen]);

  const handleClick = (index: number) => {
    setIsOpen(false);
    if (onChange) {
      onChange(items[index].value);
    }
  };

  return (
    <div ref={selectorRef} className='relative me-2 cursor-pointer'>
      <div
        className='flex flex-row justify-between bg-gray-100 p-2 text-gray-700 focus:outline-none dark:bg-gray-700 dark:text-gray-300'
        onClick={toggleDropdown}>
        <div>{items.find(item => item.value === selected)?.label}</div>
        <span>
          <ChevronIcon active={isOpen} />
        </span>
      </div>
      {isOpen && (
        <div
          className={`origin-top-right ${styles.falling} absolute max-h-80 overflow-auto ${dropdownPosition} z-10 mt-2 w-32 transform bg-gray-200 text-white shadow-lg ring-1 ring-black ring-opacity-5 transition duration-500 ease-out dark:bg-gray-600`}>
          <div className='py-1'>
            {items.map((item, index) => (
              <div
                key={String(item.value)}
                className={`flex items-start ${
                  item.value === selected ? 'bg-gray-100 dark:bg-gray-800' : ''
                } w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-100 focus:outline-none dark:text-white dark:hover:bg-gray-800`}
                onClick={() => handleClick(index)}>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Selector;
