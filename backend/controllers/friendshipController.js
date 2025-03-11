const Friendship = require('../models/Friendship');

const calculatePercentage = (name1, name2) => {
  const combined = name1.toLowerCase() + name2.toLowerCase();
  let total = 0;

  for (let char of combined) {
    total += char.charCodeAt(0);
  }

  return (total % 101); // Percentage between 0-100
};

const calculateFriendship = async (req, res) => {
  const { name1, name2 } = req.body;

  if (!name1 || !name2) {
    return res.status(400).json({ message: 'Both names are required' });
  }

  const percentage = calculatePercentage(name1, name2);

  try {
    const friendship = new Friendship({ name1, name2, percentage });
    await friendship.save();

    res.json(friendship);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    await Friendship.findByIdAndDelete(id);
    res.status(200).json({ message: 'Entry Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to Delete Entry' });
  }
};


const getAllEntries = async (req, res) => {
  try {
    const entries = await Friendship.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { calculateFriendship, getAllEntries,deleteEntry };
