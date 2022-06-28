export const userSignup = async (form) => {
  try {
    const resp = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.inputs.name.value,
        email: form.inputs.email.value,
        password: form.inputs.password.value,
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw Error(
      error || "Something went wrong, and there isn't a good message."
    );
  }
};

export const userLogin = async (form) => {
  try {
    const resp = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.inputs.email.value,
        password: form.inputs.password.value,
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw Error(
      error || "Something went wrong, and there isn't a good message."
    );
  }
};
