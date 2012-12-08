var Game = function() {
	var self = this;
	var rows = 0, cols = 0;
	self.map = [];

	function cell(r, c) {
		var row = self.map[r] || [];
		return row[c] || 0;
	}

	function neighborCount(r, c) {
		var rowUp = (r + self.rows - 1) % self.rows;
		var colLeft = (c + self.cols - 1) % self.cols;
		var rowDown = (r + 1) % self.rows;
		var colRight = (c + 1) % self.cols;

		return cell(rowUp, colLeft) + cell(rowUp,c) + cell(rowUp,colRight) +
			cell(r,colLeft) + cell(r,colRight) +
			cell(rowDown,colLeft) + cell(rowDown,c) + cell(rowDown,colRight);
	}

	function shouldDie(r, c) {
		var count = neighborCount(r, c);
		return count < 2 || count > 3;
	}

	function shouldSpawn(r, c) {
		return neighborCount(r, c) === 3;
	}

	function setCells(list, to) {
		for(var i=0; i<list.length; i++) {
			var cell = list[i];
			self.map[cell[0]][cell[1]] = to;
		}
	}

	return {
		init: function(initialMap) {
			self.map = initialMap;
			self.rows = self.map.length;
			self.cols = self.map[0].length;
		},
		advance: function() {
			var spawnList = [];
			var deathList = [];
			for(var r=0; r<self.rows; r++) {
				for(var c=0; c<self.cols; c++) {
					if (shouldDie(r, c)) {
						deathList.push([r,c]);
					} else if (shouldSpawn(r, c)) {
						spawnList.push([r,c]);
					}
				}
			}
			setCells(deathList, 0);
			setCells(spawnList, 1);
		},
		map: function() {
			return self.map;
		}
	};
};

