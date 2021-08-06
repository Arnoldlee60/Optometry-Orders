const router = require('express').Router();
const { patient } = require('../../models');

// The `/api/patient` endpoint

router.get('/', async (req, res) => { //try to put sql shit here
  try {
    const allPatients = await patient.findAll({
    
    });
    res.status(200).json(allPatients);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const thisPatient = await patient.findByPk(req.params.id, {
      
    });

    if (!thisPatient) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }

    res.status(200).json(thisPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  try 
  {
    const newPatient = await patient.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      dateOfBirth: req.body.dateOfBirth
    });

    res.status(200).json(newPatient);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});



router.put('/:id',async (req, res) => {
  try {
    const newPatient = await patient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!newPatient[0]) {
      res.status(404).json({ message: 'No patient with this id!' });
      return;
    }
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const newPatient = await patient.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!newPatient) {
      res.status(404).json({ message: 'No patient with this id!' });
      return;
    }
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;