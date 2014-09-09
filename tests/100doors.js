var assert = require('chai').assert,

    Doors = require('../libs/100doors');

suite('test 100 doors', function() {
    setup(function() {
        this.doors = new Doors();
    });

    test('isOpen', function() {
        this.doors.toggleDoor(2);
        assert.strictEqual(this.doors.isDoorOpen(2), true);
    });

    test('test toggle each', function() {

        this.doors.resetDoorList();
        this.doors.toggleEach(1);
        assert.strictEqual(this.doors.isDoorOpen(2), true);
        assert.strictEqual(this.doors.isDoorOpen(5), true);
        assert.strictEqual(this.doors.isDoorOpen(10), true);
        assert.strictEqual(this.doors.isDoorOpen(50), true);

        this.doors.resetDoorList();
        this.doors.toggleEach(2);
        assert.strictEqual(this.doors.isDoorOpen(2), true);
        assert.strictEqual(this.doors.isDoorOpen(5), false);
        assert.strictEqual(this.doors.isDoorOpen(10), true);
        assert.strictEqual(this.doors.isDoorOpen(50), true);
        assert.strictEqual(this.doors.isDoorOpen(51), false);

        this.doors.resetDoorList();
        this.doors.toggleEach(5);
        assert.strictEqual(this.doors.isDoorOpen(1), false);
        assert.strictEqual(this.doors.isDoorOpen(2), false);
        assert.strictEqual(this.doors.isDoorOpen(3), false);
        assert.strictEqual(this.doors.isDoorOpen(4), false);
        assert.strictEqual(this.doors.isDoorOpen(5), true);
        assert.strictEqual(this.doors.isDoorOpen(9), false);
        assert.strictEqual(this.doors.isDoorOpen(10), true);
        assert.strictEqual(this.doors.isDoorOpen(50), true);
        assert.strictEqual(this.doors.isDoorOpen(99), false);
    });

    test('test toggle x', function() {
        //assert.strictEqual(this.doors.toggleXDoor(), true);
        this.doors.toggleXDoor();
    });
});
