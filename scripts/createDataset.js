const BigQuery = require("@google-cloud/bigquery").BigQuery;

const bqInstance = new BigQuery();

const createDataset = async () => {
  const [datasets] = await bqInstance.getDatasets();
  const datasetName = "forumAlura";

  const filteredDatasets = datasets.filter(
    (dataset) => dataset.id === datasetName
  );

  if (filteredDatasets.length > 0) {
    console.log("Dataset already created");
  }

  await bqInstance.createDataset(datasetName);
  console.log("dataset created");
};

createDataset();
