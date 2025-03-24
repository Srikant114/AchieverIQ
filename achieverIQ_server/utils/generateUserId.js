let counter = 0;

const generateUserId = () => {
  counter += 1;
  return `UR${String(counter).padStart(3, '0')}`;
};

module.exports = generateUserId;
