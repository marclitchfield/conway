describe('Conway\'s Game of Life', function() {
	var game = new Game();

	describe('cell with no neighbors', function() {
		beforeEach(function() {
			game.init([
				[0,0,0],
				[0,1,0],
				[0,0,0]
			]);
		});

		it('should die', function() {
			game.advance();
			expect(game.map()[1][1]).toEqual(0);
		});
	});

	describe('cell with 1 neighbor', function() {
		beforeEach(function() {
			game.init([
				[1,0,0],
				[0,1,0],
				[0,0,0]
			]);
		});

		it('should die', function() {
			game.advance();
			expect(game.map()[1][1]).toEqual(0);
		});
	});

	describe('cell with 2 neighbors', function() {
		beforeEach(function() {
			game.init([
				[1,0,0],
				[0,1,0],
				[0,0,1]
			]);
		});

		it('should live', function() {
			game.advance();
			expect(game.map()[1][1]).toEqual(1);
		});
	});

	describe('cell with 3 neighbors', function() {
		beforeEach(function() {
			game.init([
				[0,0,1,0,0],
				[0,1,1,1,0],
				[0,0,0,0,0]
			]);
		});

		it('should live', function() {
			game.advance();
			expect(game.map()[1][2]).toEqual(1);
		});
	});

	describe('cell with more than 3 neighbors', function() {
		beforeEach(function() {
			game.init([
				[0,0,0,1,0],
				[0,1,1,1,0],
				[0,1,0,0,0]
			]);
		});

		it('should die', function() {
			game.advance();
			expect(game.map()[1][2]).toEqual(0);
		});
	});

	describe('dead cell with 3 neighbors', function() {
		beforeEach(function() {
			game.init([
				[0,0,0,0,0],
				[0,1,0,1,0],
				[0,0,1,0,0]
			]);
		});

		it('should become alive', function() {
			game.advance();
			expect(game.map()[1][2]).toEqual(1);
		});
	});

});