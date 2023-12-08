import { useEffect, useState } from "react";

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

  //상태 업데이트 (초깃값이 바뀔때 마다 form을 업데이트 해줌)
  useEffect(() => {
    setForm(initialState);
  }, [initialState]);

  return [form, onChange, refresh];
}
