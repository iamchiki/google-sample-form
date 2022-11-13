import { useEffect, useState } from "react";

const useFormDetail = () => {
  const [form, setForm] = useState();

  useEffect(() => {
    const fetchFormDtl = async () => {
      const response = await fetch(
        "https://mocki.io/v1/1325ec22-b1c6-47cb-8950-c68aa9ff0c40"
      );
      const data = await response.json();
      setForm(data);
    };
    fetchFormDtl();
  }, []);

  return { form };
};

export default useFormDetail;
