assert.dom('.foo').hasText('bar');
assert.dom('.foo').hasText('bar');

assert.dom('.foo').hasText('bar', 'custom message');
assert.dom('.foo').hasText('bar', 'custom message');

assert.dom('.foo', '.parent-scope').hasText('bar');
assert.dom('.foo', '.parent-scope').hasText('bar');

assert.dom('.foo').hasText('bar baz');
assert.dom('.foo').hasText('bar baz');

let bar = 'bar';
assert.dom('.foo').hasText(bar);
assert.dom('.foo').hasText(bar);

assert.equal(find('.foo'), 'bar');

assert.equal(true);