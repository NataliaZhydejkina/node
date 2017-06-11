const assert = require('assert');
try {
	assert.ok(true);
	assert.ok(1);
	assert.ok(false);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.ok(0);
}
catch (err) {
	console.error(err);
}
try {
	assert.ok(false, 'it\'s false');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.ok(undefined);
}
catch (err) {
	console.error(err);
}
try {
	assert(false, "assert() producting false value");
}
catch (err) {
	console.error(err.message);
}
try {
	//this don't producting message
	assert.deepEqual(Error('a'), Error('b'), "assert.deepEqual() producting Error");
}
catch (err) {
	console.error(err.message);
}
const obj1 = {
	a: {
		b: 1
	}
};
const obj2 = {
	a: {
		b: 2
	}
};
const obj3 = {
	a: {
		b: 1
	}
};
const obj4 = Object.create(obj1);
try {
	assert.deepEqual(obj1, obj1, "assert.deepEqual() producting Error");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepEqual(obj1, obj2, "assert.deepEqual() producting Error");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepEqual(obj1, obj4, "assert.deepEqual() producting Error");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepEqual(obj1, obj3, "assert.deepEqual() producting Error");
}
catch (err) {
	console.error(err.message);
}
let map1 = new Map();
map1.set(1, "str1");
let map2 = new Map();
map2.set(1, "str1");
let map3 = new Map();
map3.set(2, "str2");
try {
	assert.deepEqual(map1.get(1), map2.get(1), "assert.deepEqual() producting Error Map");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepEqual(map1.get(1), map3.get(2), "assert.deepEqual() producting Error Map");
}
catch (err) {
	console.error(err.message);
}
let set1 = new Set([1, 2, 3]);
let set2 = new Set([1, 2, 3, 4]);
try {
	assert.deepEqual(set1.has(22), set2.has(1), "assert.deepEqual() producting Error Set");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepEqual({
		a: 1
	}, {
		a: '1'
	}, "assert.deepEqual() producting Error a:1 == a:'1'");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepStrictEqual({
		a: 1
	}, {
		a: '1'
	}, "assert.deepStrictEqual() producting Error a:1 === a:'1'");
}
catch (err) {
	console.error(err.message);
}
const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);
try {
	assert.deepEqual(object, fakeDate, "assert.deepEqual() producting Error object == fakeDate");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepStrictEqual(object, fakeDate, "assert.deepStrictEqual() producting Error object === fakeDate");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepEqual(date, fakeDate, "assert.deepEqual() producting Error date == fakeDate");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.deepStrictEqual(date, fakeDate, "assert.deepStrictEqual() producting Error date === fakeDate");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.throws(() => {
		throw new Error('Wrong value');
	}, Error);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.throws(() => {
		throw new Error('Wrong value');
	});
}
catch (err) {
	console.error(err.message);
}
try {
	assert.throws(() => {
		throw new Error('Wrong value');
	}, function (err) {
		if ((err instanceof Error) || /value/.test(err)) {
			return true;
		}
	}, 'unexpected error');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.throws(myFunction, /missing foo/, 'did not throw with expected message');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.doesNotThrow(() => {
		throw new TypeError('Wrong value')
	}, SyntaxError);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.doesNotThrow(() => {
		throw new TypeError('Wrong value')
	}, TypeError);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.doesNotThrow(() => {
		throw new TypeError('Wrong value')
	}, TypeError, "Whoops");
}
catch (err) {
	console.error(err.message);
}
try {
	assert.equal(1, '1');
	assert.equal(1, 1);
	assert.equal(1, 2);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.equal({
		a: {
			b: 1
		}
	}, {
		a: {
			b: 1
		}
	})
}
catch (err) {
	console.error(err.message);
}
try {
	assert.fail(1, 2, undefined, '>');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.fail(1, 2, 'whoops', '>');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.fail('boom');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.fail('a', 'b');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.fail('a', 'b', undefined, '!=');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.ifError(0);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.ifError(1);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.ifError('error');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.ifError(new Error());
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notDeepEqual(obj1, obj1);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notDeepEqual(obj1, obj2);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notDeepEqual(obj1, obj3);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notDeepEqual(obj1, obj4);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notDeepStrictEqual({
		a: 1
	}, {
		a: '1'
	});
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notEqual(1, 2);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notEqual(1, 1);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notEqual(1, '1');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notStrictEqual(1, 2);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notStrictEqual(1, 1);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.notStrictEqual(1, '1');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.strictEqual(1, 1);
}
catch (err) {
	console.error(err.message);
}
try {
	assert.strictEqual(1, '1');
}
catch (err) {
	console.error(err.message);
}
try {
	assert.strictEqual(1, 2);
}
catch (err) {
	console.error(err.message);
}
const a = 0;
const b = -a;
try {
	assert.notStrictEqual(a, b);
}
catch (err) {
	console.error(err.message);
}
try {
	assert(!Object.is(a, b));
}
catch (err) {
	console.error(err.message);
}
assert(!Object.is(a, b));
const str1 = 'foo';
const str2 = 'foo';
try {
	assert.strictEqual(str1 / 1, str2 / 1);
}
catch (err) {
	console.error(err.message);
}
try {
	assert(Object.is(str1 / 1, str2 / 1));
}
catch (err) {
	console.error(err.message);
}