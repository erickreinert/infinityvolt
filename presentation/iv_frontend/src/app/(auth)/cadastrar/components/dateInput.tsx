import { Input } from '@/components/ui/input';
import { useState, useRef, ChangeEvent, useEffect } from 'react';

interface Props {
  handleChange: (field: string, value: string) => void;
}

const DateInput = ({ handleChange }: Props) => {
  const [date, setDate] = useState<{
    day: string;
    month: string;
    year: string;
  }>({
    day: '',
    month: '',
    year: '',
  });

  // Referências para os inputs
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  // Função para mover o foco para o próximo input
  const handleDateChange = (
    event: ChangeEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement> | null,
  ) => {
    const { name, value } = event.target;

    // Atualiza o estado com o novo valor do campo
    setDate((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Se o campo atingir o limite de caracteres, move para o próximo
    if (value.length === event.target.maxLength) {
      nextRef?.current?.focus();
    }
  };

  useEffect(() => {
    const { day, month, year } = date;
    handleChange('dataNascimento', `${year}-${month}-${day}`);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className="flex space-x-2">
      <Input
        ref={dayRef}
        type="text"
        maxLength={2}
        name="day"
        value={date.day}
        placeholder="DD"
        onChange={(e) => handleDateChange(e, monthRef)}
      />
      <Input
        ref={monthRef}
        type="text"
        maxLength={2}
        name="month"
        value={date.month}
        placeholder="MM"
        onChange={(e) => handleDateChange(e, yearRef)}
      />
      <Input
        ref={yearRef}
        type="text"
        maxLength={4}
        name="year"
        value={date.year}
        placeholder="AAAA"
        onChange={(e) => handleDateChange(e, null)}
      />
    </div>
  );
};

export default DateInput;
