// Validate rut
function validateRut(req, res, next) {
  if (typeof req.body.rut === 'undefined' || req.body.rut === null || req.body.rut === '') {
    res.status(400).json({ error: 'Rut cannot be empty' });
  } else {
    next();
  }
}

// Validate cellphone
function validateCellphone(req, res, next) {
  if (typeof req.body.cellphone === 'undefined' || req.body.cellphone === null || req.body.cellphone === '') {
    res.status(400).json({ error: 'Cellphone cannot be empty' });
  } else {
    next();
  }
}

// Validate email
function validateEmail(req, res, next) {
  if (typeof req.body.email === 'undefined' || req.body.email === null || req.body.email === '') {
    res.status(400).json({ error: 'Email cannot be empty' });
  } else {
    next();
  }
}

// Validate income
function validateIncome(req, res, next) {
  if (typeof req.body.income === 'undefined' || req.body.income === null) {
    res.status(400).json({ error: 'Income cannot be empty' });
  } else if (req.body.income <= 0) {
    res.status(400).json({ error: 'Income cannot be less or equal than 0' });
  } else {
    next();
  }
}

module.exports = {
  validateRut: validateRut,
  validateCellphone: validateCellphone,
  validateEmail: validateEmail,
  validateIncome: validateIncome
}
