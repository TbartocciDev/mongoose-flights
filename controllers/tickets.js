const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create,
  newTicket
}

function newTicket(req,res) {
  const id = req.params.id
  
  res.render('tickets/new', {id})
}

async function create(req,res) {
  const id = req.params.id
  req.body.flight = id

  console.log(req.body)
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/flights/${id}`)
}