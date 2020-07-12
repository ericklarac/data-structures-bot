const stack_switch = (datastructure, selector, host) => {
	switch (selector) {
		case 'image':
			return image_response;
		case 'operation':
			return opearation_response;
		case 'implementation':
			return implementation_response;
		case 'problems':
			return problem_response;
		case 'code':
			return code_response(host);
		case 'vulgarity':
			return {
				fulfillmentMessages: [
					{
						platform: 'TELEGRAM',
						payload: {
							telegram: {
								parse_mode: 'Markdown',
								text: 'Watch your language!',
							},
						},
					},
				],
				outputContexts: [],
			};
		default:
			return [description_response_1, description_response_2][
				Math.floor(Math.random() * 2)
			];
	}
};

const code_response = (host) => {
	return {
		fulfillmentMessages: [
			{
				platform: 'TELEGRAM',
				payload: {
					telegram: {
						text: host + '/stack.png',
					},
				},
			},
		],
		outputContexts: [],
	};
};

const problem_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Here are some common stack problems from leetcode:\n\t- [Valid parentheses](https://leetcode.com/problems/valid-parentheses/) \n\t- [Min stack](https://leetcode.com/problems/min-stack/) \n\t- [Binary tree zigzag level order traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal)',
				},
			},
		},
	],
	outputContexts: [],
};

const implementation_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Stacks can be implemented using linked lists ant dynamic arrays: \n\n - *Linked list*: \n\t\t - *Enqueue*: Insert at head \n\t\t - *Dequeue*: Remove at head \n\n - *Dynamic Arrays*: \n\t\t - *Enqueue*: Append\n\t\t - *Dequeue*: Remove last element',
				},
			},
		},
	],
	outputContexts: [],
};

const opearation_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Considering a stack of `n` elements the space is `O(n)`, its operations are: \n\n- Push, which costs `O(1)`  \n- Pop, which costs `O(1)`  \n- Peek, which costs `O(1)`',
				},
			},
		},
	],
	outputContexts: [],
};

const image_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					text: 'https://media.giphy.com/media/9x5ZwtG3Ibn6E/giphy.gif',
				},
			},
		},
	],
	outputContexts: [],
};

const description_response_1 = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'A *stack* is also called a *LIFO* (_last in, first out_). It is an abstract data type that serves as a collection of items, and its two main operations are push and pop. \n\n \t - *Push* adds an item to the collection. \n \t - *Pop* removes the last element that was added. \n\n On the stack pop and push takes place at the top of the stack.',
				},
			},
		},
	],
	outputContexts: [],
};

const description_response_2 = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'*Stack* is also called *LIFO* (_last in, first out_). It is an abstract data type that serves as a collection of items, and its two main operations are: *push*, adds an item to the collection, and *pop*, which removes the last element that was added. \n\n On the stack pop and push takes place at the top of the stack.',
				},
			},
		},
	],
	outputContexts: [],
};

const example = (param) => {
	var s = '' + param;

	return {
		fulfillmentMessages: [
			{
				platform: 'TELEGRAM',
				payload: {
					telegram: {
						parse_mode: 'Markdown',
						text: s,
					},
				},
			},
		],
		outputContexts: [],
	};
};

export { example, stack_switch };
