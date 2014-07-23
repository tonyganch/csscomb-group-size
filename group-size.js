module.exports = {
    name: 'group-size',

    syntax: ['css', 'scss', 'less'],

    setValue: function(value) {
        if (typeof value !== 'number') throw new Error('The option accepts only numbers');
        return Math.floor(value);
    },

    process: function(nodeType, node) {
        if (nodeType !== 'block') return;

        var groupSize = this.getValue('group-size'),
            declCount = 0,
            currentNode,
            nextNode,
            spaces;

        for(var i = node.length; i--;) {
            currentNode = node[i];
            if (currentNode[0] === 'declaration') declCount += 1;
            nextNode = node[i + 1];
            if (!nextNode || nextNode[0] !== 's') continue;
            spaces = nextNode[1];
            if (!/\n *\n/.test(spaces)) continue;
            if (declCount < groupSize) nextNode[1] = spaces.replace(/(\n *)+\n/, '\n');
            declCount = 0;
        }
    }
};

