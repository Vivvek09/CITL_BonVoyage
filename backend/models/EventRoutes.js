// const express = require('express');
// const router = express.Router();
// const Event = require('../models/Event');

// router.get('/', async (req, res) => {
//   try {
//     const events = await Event.find(); 
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// router.get('/:id', getEvent, (req, res) => {
//   res.json(res.event);
// });

// router.post('/', async (req, res) => {
//   const event = new Event({
//     title: req.body.title,
//     description: req.body.description,
//     date: req.body.date,
//     location: req.body.location,
//     attendees: req.body.attendees,
//     image: req.body.image,
//   });

//   try {
//     const newEvent = await event.save();
//     res.status(201).json(newEvent);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// async function getEvent(req, res, next) {
//   let event;
//   try {
//     event = await Event.findById(req.params.id);
//     if (event == null) {
//       return res.status(404).json({ message: 'Cannot find event' });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.event = event;
//   next();
// }

// module.exports = router;

const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one event
router.get('/:id', getEvent, (req, res) => {
  res.json(res.event);
});

// Create one event
router.post('/', async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    attendees: req.body.attendees,
    image: req.body.image,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    ticketType: req.body.ticketType,
    ticketName: req.body.ticketName,
    ticketPrice: req.body.ticketPrice,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one event
router.patch('/:id', getEvent, async (req, res) => {
  if (req.body.title != null) {
    res.event.title = req.body.title;
  }
  if (req.body.description != null) {
    res.event.description = req.body.description;
  }
  if (req.body.date != null) {
    res.event.date = req.body.date;
  }
  if (req.body.location != null) {
    res.event.location = req.body.location;
  }
  if (req.body.attendees != null) {
    res.event.attendees = req.body.attendees;
  }
  if (req.body.image != null) {
    res.event.image = req.body.image;
  }
  if (req.body.startTime != null) {
    res.event.startTime = req.body.startTime;
  }
  if (req.body.endTime != null) {
    res.event.endTime = req.body.endTime;
  }
  if (req.body.ticketType != null) {
    res.event.ticketType = req.body.ticketType;
  }
  if (req.body.ticketName != null) {
    res.event.ticketName = req.body.ticketName;
  }
  if (req.body.ticketPrice != null) {
    res.event.ticketPrice = req.body.ticketPrice;
  }

  try {
    const updatedEvent = await res.event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one event
router.delete('/:id', getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: 'Deleted Event' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find event' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.event = event;
  next();
}

module.exports = router;