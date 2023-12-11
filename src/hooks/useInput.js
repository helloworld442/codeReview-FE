import { useState } from "react";

export default function useInput(initialState) {
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const refresh = () => {
    setForm(initialState);
  };

  return [form, onChange, refresh];
}
