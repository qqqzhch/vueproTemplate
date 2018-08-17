const rules={
  email: [
    {
      required: true,
      message: "Please fill in the Email",
      trigger: "blur"
    },
    {
      type: "string",
      max: 40,
      message: "The email length cannot be more than 40 bits",
      trigger: "blur"
    },
    {
      type: "email",
      message: "Please enter the correct email"
    }
  ],
  password: [
    {
      required: true,
      message: "Please fill in the password.",
      trigger: "blur"
    },
    {
      type: "string",
      min: 6,
      max: 16,
      message: "length cannot be less than 6 bits or more than 16 bits",
      trigger: "blur"
    },
    {
      validator: this.validatePass,
      trigger: "blur"
    }
  ],
  confirmPassword: [
    {
      validator: this.validateConfirmPass,
      trigger: "blur"
    }
  ],
  verification: [
    {
      required: true,
      message: "Please fill in the verification.",
      trigger: "blur"
    }
  ]
}

export default rules;