const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

module.exports = {
  get: (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  },
  post: (req, res) => {
    messages.push({
      text: req.body.text,
      user: req.body.user,
      added: new Date(),
    });
    res.redirect('/');
  },
  getMessage: (req, res) => {
    const messageID = parseInt(req.params.id);
    if (messageID >= 0 && messageID < messages.length) {
      res.render('message', { message: messages[messageID] });
    } else {
      res.status(404).send('Message not found');
    }
  },
};
