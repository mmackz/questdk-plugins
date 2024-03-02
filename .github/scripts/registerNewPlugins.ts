const _axios = require("axios");
const _fs = require("fs/promises");
const _yaml = require("js-yaml");
const _utils = require("./utils");

async function sendPluginDetailsToAPI(detailsPath: string): Promise<void> {
  const fileContents = await _fs.readFile(detailsPath, "utf8");
  const details = _yaml.load(fileContents);
  const { project, task } = details;

  // send details to staging API
  const { data: stagingData } = await _axios.post(
    `${process.env.STAGING_API_URL}/plugins/add-project`,
    {
      ...project,
      approvedForTerminal: true,
    },
  );
  await _axios.post(`${process.env.STAGING_API_URL}/plugins/add-task`, {
    ...task,
    projectId: stagingData.projectId,
    approvedForTerminal: true,
  });

  // send details to production API
  const { data } = await _axios.post(
    `${process.env.PRODUCTION_API_URL}/plugins/add-project`,
    project,
  );
  await _axios.post(`${process.env.PRODUCTION_API_URL}/plugins/add-task`, {
    ...task,
    projectId: data.projectId,
  });

  console.log(`Successfully registered plugin details for ${project.name}`);
}

async function _main() {
  const newPackagesPaths = await _utils.getNewPackages();
  if (newPackagesPaths.length) {
    const validDetailsPaths = await _utils.validateNewPackagePaths(
      newPackagesPaths,
    );
    for (const detailsPath of validDetailsPaths) {
      await sendPluginDetailsToAPI(detailsPath);
    }
  } else {
    console.log("No new packages found.");
  }
}

_main().catch((error) => {
  throw new Error(`Error registering plugin details: ${error}`);
});
