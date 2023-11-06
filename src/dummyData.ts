export const getTestNode = (id: string) => ({
  type: "node",
  attributes: {
    name: `Test Node ${id}`,
    slug: `node-${id}`,
    description: `Node Description ${id}`,
    updated_name: `Update Node ${id}`,
    sort_order: 1,
    locales: {
      Afrikaans: {
        name: "Af Node name",
        description: "Af Node description",
      },
      Albanian: {
        name: "Sq Node name",
        description: "Sq Node description",
      },
    },
  },
});

export const getParentNode = (id: string) => ({
  type: "node",
  attributes: {
    name: `Test Node ${id}`,
    slug: `node-${id}`,
    description: `Node Description ${id}`,
    updated_name: `Update Node ${id}`,
    sort_order: 1,
    locales: {
      Afrikaans: {
        name: "Af Node name",
        description: "Af Node description",
      },
      Albanian: {
        name: "Sq Node name",
        description: "Sq Node description",
      },
    },
  },
});

export default {};
