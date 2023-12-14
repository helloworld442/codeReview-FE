import { useState } from "react";

export default function useInput(initialState) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(initialState);

  const onChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const onAdd = (e, item) => {
    e.preventDefault();

    setForm((prev) => ({
      ...prev,
      category: form.category.concat(item),
    }));
    setError((prev) => ({ ...prev, category: "" }));
  };

  const onRemove = (e, item) => {
    e.preventDefault();

    setForm((prev) => ({
      ...prev,
      category: form.category.filter((c) => c !== item),
    }));
    setError((prev) => ({ ...prev, category: "" }));
  };

  const onError = (error) => {
    setError(error);
  };

  const refresh = () => {
    setForm(initialState);
  };

  return [form, error, onChange, onError, refresh, onAdd, onRemove];
}
