const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor() {
		this.root_node = null;
	 }

  root() {
	return this.root_node;
  }

  add(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
	function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
    }

    return findNode(this.root_node, data);
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
	if (!this.root_node) {
	  return;
	}

	let rootMin = this.root_node;
	while (rootMin.left) {
	  rootMin = rootMin.left;
	}

	return rootMin.data;
 }

 max() {
	if (!this.root_node) {
	  return;
	}

	let rootMax = this.root_node;
	while (rootMax.right) {
	  rootMax = rootMax.right;
	}

	return rootMax.data;
 }
}

module.exports = {
  BinarySearchTree
};