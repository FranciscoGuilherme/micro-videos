import Category from "./category";

describe('Category Tests', () => {
  test('constructor of category', () => {
    const category = new Category({ name: 'Movie' });
    expect(category.props.name).toEqual('Movie');
    expect(category.props).toBeInstanceOf(Object);
  });
});
