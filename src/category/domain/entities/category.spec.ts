import Category from "./category";

describe('Category Tests', () => {
  test('constructor of category', () => {
    const created_at = new Date();
    const props = {
      name: 'Movie',
      description: 'description',
      is_active: true,
      created_at: created_at
    };
    const category = new Category(props);
    expect(category.props.name).toBe('Movie');
    expect(category.props.description).toBe('description');
    expect(category.props.is_active).toBeTruthy();
    expect(category.props.created_at).toBe(created_at);
    expect(category.props.created_at).toBeInstanceOf(Date);
    expect(category.props.created_at.getTime()).toBe(created_at.getTime());
    expect(category.props).toBeInstanceOf(Object);
    expect(category.props).toStrictEqual(props);
  });

  test('constructor of category active as false', () => {
    const props = {
      name: 'Movie',
      description: 'description',
      is_active: false,
      created_at: new Date()
    };
    const category = new Category(props);
    expect(category.props.is_active).toBeFalsy();
    expect(category.props).toMatchObject({ is_active: false });
  });
});
