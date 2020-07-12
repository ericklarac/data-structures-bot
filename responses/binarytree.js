const binarytree_switch = (datastructure, selector, host) => {
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

const problem_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Here are some common binary tree problems from leetcode:\n\t- [Same tree](https://leetcode.com/problems/same-tree)\n\t- [Sum root to leaf numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers),\n\t- [Invert binary tree](https://leetcode.com/problems/invert-binary-tree)',
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
						'In _Python_ a *binary tree* can be implemented using *tree nodes* as in the following example:\n\n```python\nclass TreeNode:\n\t\t\t\tdef __init__(self, value):\n\t\t\t\t\t\t\t\tself.value = value\n\t\t\t\t\t\t\t\tself.left = None\n\t\t\t\t\t\t\t\tself.right = None```\n\n Then, each node points to the next node.',
				},
			},
		},
	],
	outputContexts: [],
};

const code_response = (host) => {
	return {
		fulfillmentMessages: [
			{
				platform: 'TELEGRAM',
				payload: {
					telegram: {
						text: host + '/tree.png',
					},
				},
			},
		],
		outputContexts: [],
	};
};

const opearation_response = {
	fulfillmentMessages: [
		{
			platform: 'TELEGRAM',
			payload: {
				telegram: {
					parse_mode: 'Markdown',
					text:
						'Having a *balanced binary tree* with `n` nodes the traversal cost `O(n)`, its operations are: \n\n- Insert, which costs `O(log n)`  \n- Search, which costs `O(log n)`  \n- Delete, which costs `O(log n)`',
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
					text:
						'https://thumbs.gfycat.com/EarnestPartialKob-size_restricted.gif',
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
						'Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.\n\nA Tree node contains following parts:\n\t1.  Data\n\t2.  Pointer to left child\n\t3.  Pointer to right child\n\nTree Vocabulary: The topmost node is called **root** of the tree. The elements that are _directly under an element_ are called its **children**. The _element directly above something_ is called its **parent**. For example, _‘a’_ is a child of _‘f’_, and _‘f’_ is the parent of _‘a’_. Finally, _elements with no children_ are called **leaves**.',
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
						'A *tree* is a frequently-used data structure to simulate a hierarchical tree structure.\n\nEach *node* of the tree will have a root value and a list of references to other nodes which are called child nodes. From graph view, a tree can also be defined as a directed acyclic graph which has N nodes and N-1 edges.\n\nA *Binary Tree* is one of the most typical tree structure. As the name suggests, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.',
				},
			},
		},
	],
	outputContexts: [],
};

export { binarytree_switch };
