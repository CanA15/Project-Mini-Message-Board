module.exports = {
  get: (req, res) => {
    res.render('form', { title: 'Add a message' });
  },
};
