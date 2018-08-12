const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle nedd to between 2 and 40 characters";
  }

  if (!Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (!Validator.isEmpty(data.status)) {
    errors.status = "Status handle is required";
  }

  if (!Validator.isEmpty(data.skills)) {
    errors.skills = "Skills handle is required";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      erros.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      erros.website = "Not a valid Twitter";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      erros.website = "Not a valid Twitter";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      erros.website = "Not a valid Twitter";
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      erros.website = "Not a valid Twitter";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      erros.website = "Not a valid Twitter";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
