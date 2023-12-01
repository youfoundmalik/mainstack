import { useState } from 'react';

const QuickDate = () => {
  const [active, setActive] = useState(1);
  return (
    <div className='days flex gap-3 overflow-x-scroll hide-scroll'>
      {dayOptions.map((option) => (
        <DaysOption
          key={option.id}
          text={option.name}
          className={option.id === active ? 'days-option-active' : ''}
          onClick={() => setActive(option.id)}
        />
      ))}
    </div>
  );
};

export default QuickDate;

interface DaysProps {
  text: string;
  className?: string;
  onClick?: () => void;
}
const DaysOption = ({ text, onClick, className }: DaysProps) => (
  <button onClick={onClick} className={`days-option ${className}`}>
    {text}
  </button>
);

const dayOptions = [
  { id: 1, name: 'All time', value: 'all' },
  { id: 2, name: 'Today', value: 'today' },
  { id: 3, name: 'Last 7 days', value: '7days' },
  { id: 4, name: 'This month', value: 'month' },
  { id: 5, name: 'Last 3 month', value: '3months' },
  { id: 6, name: 'This year', value: 'year' },
  { id: 7, name: 'Last year', value: 'lastYear' },
];
