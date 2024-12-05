const generateUniqueId = () => {
  return `id_${Math.random().toString(36).slice(2, 11)}`;
};

export default generateUniqueId;
