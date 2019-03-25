require('../src/data.js');

describe('funciones', () => {
  it('es function filtrar', () => {
    expect(typeof window.filterAuthor).toBe('function');
  });

  it('es function ordenar', () => {
    expect(typeof window.selectOrder).toBe('function');
  });

  it('es function promedio', () => {
    expect(typeof window.average).toBe('function');
  });
});

describe('funciones de filtrado', () => {
  let filterTest = [
    {
      author: 'Ella Fitzgerald',
      song: 'Dream a little dream'
    },
    {
      author: 'Charles Mingus',
      song: 'Moaning'
    },
    {
      author: 'Ella Fitzgerald',
      song: 'Blue skies'
    },
    {
      author: 'Melissa Aldana',
      song: 'Ask me now'
    },
    {
      author: 'Charlie parker',
      song: 'Donna Lee'
    }
  ];

  it('debería retornar canciones "Dream a little dream y Blue skies" para author "Ella Ella Fitzgerald"', () => {
    expect(window.filterAuthor(filterTest, 'Ella Fitzgerald')).toEqual([
      {
        author: 'Ella Fitzgerald',
        song: 'Dream a little dream'
      },
      {
        author: 'Ella Fitzgerald',
        song: 'Blue skies'
      }
    ]);
  });
});

describe('ordena de menor a menor', () => {
  let orderTest = [
    {
      title: 'Titanic',
      level: 23
    },
    {
      title: 'Wall-E',
      level: 4
    },
    {
      title: 'Her',
      level: 5
    },
    {
      title: 'Forest Gump',
      level: 12
    }
  ];
  it('debería retornar "Forest Gump, Her, Titanic, Wall-E" para "Titanic, Wall-E, Her, Forest Gump"', () => {
    expect(window.selectOrder(orderTest, 'title1')).toEqual([
      {
        title: 'Forest Gump',
        level: 12
      },
      {
        title: 'Her',
        level: 5
      },
      {
        title: 'Titanic',
        level: 23
      },
      {
        title: 'Wall-E',
        level: 4
      }
    ]);
  });
});

describe('función promedio', () => {
  let averageTest = [
    {
      title: 'Champion 10',
      level: 23
    },
    {
      title: 'Champion 20',
      level: 4
    },
    {
      title: 'Champion 30',
      level: 5
    },
    {
      title: 'Champion 40',
      level: 12
    },
    {
      title: 'Champion 50',
      level: 6
    },
    {
      title: 'Champion 60',
      level: 7
    },
    {
      title: 'Champion 70',
      level: 45
    },
    {
      title: 'Champion 80',
      level: 78
    },
    {
      title: 'Champion 90',
      level: 2
    },
    {
      title: 'Champion 100',
      level: 9
    }
  ];

  it('debe retornar 19.1 para 23,4,5,12,6,7,45,78,2,9', () => {
    expect(window.average(averageTest)).toBe(19.1);
  });
});