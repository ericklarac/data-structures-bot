'use strict';

const Restify = require('restify');
const server = Restify.createServer({
	name: 'DataStructuresBot',
});
const request = require('request');
const { example, stack_switch } = require('./responses/stacks.js');
const { queue_switch } = require('./responses/queue.js');
const { linkedlist_switch } = require('./responses/linkedlist.js');
const PORT = process.env.PORT || 3000;

server.use(Restify.plugins.bodyParser());
server.use(Restify.plugins.jsonp());

// POST route handler
server.post('/', (req, res) => {
	let { queryResult } = req.body;
	const { datastructure, selector } = queryResult.parameters;

	if (datastructure) {
		// console.log(queryResult);
		// console.log(datastructure);
		// console.log('\n');

		switch (datastructure) {
			case 'stack':
				return res.send(stack_switch(datastructure, selector));
			case 'graph':
				return res.send(example(datastructure));
			case 'queue':
				return res.send(queue_switch(datastructure, selector));
			case 'heap':
				return res.send(example(datastructure));
			case 'binary tree':
				return res.send(example(datastructure));
			case 'trie':
				return res.send(example(datastructure));
			case 'linked list':
				return res.send(linkedlist_switch(datastructure, selector));
			default:
				return res.send({
					fulfillmentText: 'What was that?',
				});
		}
	}

	return res.send({
		fulfillmentText: 'What was that?',
	});
});

server.listen(PORT, () =>
	console.log(`Data Structures bot running on ${PORT}`)
);
