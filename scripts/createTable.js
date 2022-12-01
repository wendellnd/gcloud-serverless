const BigQuery = require("@google/bigquery");
const bqInstance = new BigQuery();

const createTable = async () => {
  const dataset = bqInstance.dataset("forumAlura");
  const [tables] = await dataset.getTables();

  const tableName = "activities";
  const foundTables = tables.filter((table) => table.id === tableName);

  if (foundTables.length > 0) {
    console.log("Table Already Exists");
    return;
  }

  const tableStruct = [
    {
      name: "created_at",
      type: "timestamp",
      mode: "required",
    },
    {
      name: "type",
      type: "string",
      mode: "required",
    },
    {
      name: "course_name",
      type: "string",
      mode: "required",
    },
    {
      name: "class_name",
      type: "string",
      mode: "required",
    },
    {
      name: "text",
      type: "string",
      mode: "required",
    },
    {
      name: "main_activity_id",
      type: "integer",
      mode: "nullable",
    },
  ];

  await dataset.createTable(tableName, { schema: tableStruct });
  console.log("Table created successfully");
};

createTable();
