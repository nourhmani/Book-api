import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({ model: event, message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const fetchEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ model: events, message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.id });
    res.status(200).json({ model: event, message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}