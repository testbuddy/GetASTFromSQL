import Stream from '../src/Stream';

test('Constructor_FileRead_ShouldWork', () => {
  const stream = new Stream('./tests/testSelect.sql');
  expect(stream.input).toBe('SELECT * FROM tests;\n');
});
